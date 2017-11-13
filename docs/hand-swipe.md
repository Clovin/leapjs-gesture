# hand-swipe gesture

## Gesture Description

The plugin will emit one event: `handSwipe`.

When the palm of hand sticks straight to negative axis of X-axis or Y-axis horizontally. And then move in palm's direction a certain distance, the plugin will emit this event.

## Options

- vertical

  {Double} - The vertical direction's distance emit a `handSwipe` event. Default is 70.
  
- horizontal

  {Double} - The horizontal direction's distance emit a `handSwipe` event. Default is 70.
  
## Callback Parameter

- hand

  {Hand} - The hand emit event.
  
  Extra Property:
  
  - swipeDirection
  
    {String} - The gesture's direction.
    
    Optional value: 'right', 'left', 'top', 'bottom'
    