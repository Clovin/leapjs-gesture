/**
 * Created by Clovin on 2017/7/25.
 */
(function () {
  let _ = require('lodash')

  let handFist

  function calAngle (a, b) {
    return Math.acos((a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)) * Math.sqrt(Math.pow(b[0], 2) + Math.pow(b[1], 2) + Math.pow(b[2], 2))))
  }

  handFist = function (options) {
    options || (options = {})

    let status = new Map()

    // use for delete the lost hand from Map
    let activeHand = new Map()
    setInterval(function () {
      for (let key of activeHand.keys()) {
        if (activeHand.get(key) < _.now() - 10000) {
          status.delete(key)
          activeHand.delete(key)
        }
      }
    }, 300000)

    return {
      hand: function (hand) {
        //  init
        if (!status.get(hand.id)) {
          status.set(hand.id, false)
        }
        activeHand.set(hand.id, _.now())

        if (hand.indexFinger.direction[2] > 0 && hand.middleFinger.direction[2] > 0 &&
          hand.ringFinger.direction[2] > 0 && hand.pinky.direction[2] > 0) {
          let temp = [calAngle(hand.indexFinger.direction, hand.palmNormal),
                      calAngle(hand.middleFinger.direction, hand.palmNormal),
                      calAngle(hand.ringFinger.direction, hand.palmNormal),
                      calAngle(hand.pinky.direction, hand.palmNormal)]
          if (!(temp[0] > 0.85 && temp[1] > 0.85 && temp[2] > 0.85 && temp[3] > 0.85)) {
            status.set(hand.id, false)
            return
          }

          if (calAngle(hand.palmNormal, [0, -1, 0]) > 0.785) {
            status.set(hand.id, false)
            return
          }

          if (status.get(hand.id)) {
            return
          }

          this.emit('handFist', hand)
          status.set(hand.id, true)
        } else {
          status.set(hand.id, false)
        }
      }
    }
  }

  if ((typeof Leap !== 'undefined') && Leap.Controller) {
    Leap.Controller.plugin('handFist', handFist)
  } else if (typeof module !== 'undefined') {
    module.exports.handFist = handFist
  } else {
    throw 'leap.js not included'
  }
}).call(this)
