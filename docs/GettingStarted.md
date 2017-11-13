# Getting Started

You can run leapjs-gesture in Browser or Node.js. How to use it?

## Browser

1. Install leapjs-gesture.
2. Add two `script`s to reference leap.js and leapjs-gesture.js. The leap.js file must place before leapjs-gesture.js.

   Example:
   ```html
     <script src="../node_modules/leapjs/leap-0.6.4.min.js"></script>
     <script src="../node_modules/leapjs-gesture/src/leapjs-gesture.js"></script>
   ```
3. Begin to use.
   ```js
   Leap
     .loop()
     .use('handEntry')
     .use('handDrag', {
        distance: 120
     })
     .on('handFound', function () {    
        // do something
     })
   ```
   
## Node.js

1. Install leapjs-gesture.
2. Import leapjs and leapjs.gesture. Then use `Leap.Controller.plugin` to register plugins you need.
   ```js
   let Leap = require('leapjs')
   
   import {handEntry,handSwipe,handFlip,handFist} from 'leapjs-gesture'

   Leap.Controller.plugin('handEntry', handEntry.handEntry)
   Leap.Controller.plugin('handSwipe', handSwipe.handSwipe)
   Leap.Controller.plugin('handFlip', handFlip.handFlip)
   Leap.Controller.plugin('handFist', handFist.handFist)
   ```
3. Let your controller use plugin, and then begin use them.
   ```js
   let controller = new Leap.Controller({
       enableGestures: true,
       background: true,
       loopWhileDisconnected: 'true'
     })
  
   controller.use('handEntry')
   controller.use('handSwipe', {
     verticle: 100,
     horizontal: 120
   })

   controller.on('handFound', (hand) => {
     // do something
   })
   ```
