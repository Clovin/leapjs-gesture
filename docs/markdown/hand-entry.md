# hand-entry gesture

## Gesture Description

The plugin will emit three event: `handLost`, `handFound`, `handMove`.

You can specify a interactionBox to limit the region will emit event.

- If your hand enter the interactionBox, the plugin will emit `handFound` event.
- If your hand leave the interactionBox, the plugin will emit `handLost` event.
- If your hand move in the interactionBox, the plugin will emit `handMove` event.

## Options

- size

  {Array\[3]} - The interactionBox's size. Default is \[1000, 1000, 1000].
  
- center

  {Array\[3]} - The interactionBox's center. Default is \[0, 0, 0].
  
## handFound Event

If your hand enter the interactionBox, the plugin will emit `handFound` event.

### Callback Parameter

- hand 

  {Hand} - The hand emit event.
  
## handLost Event

If your hand leave the interactionBox, the plugin will emit `handLost` event.

### Callback Parameter

- hand 

  {Hand} - The hand emit event.
  
## handMove Event

If your hand move in the interactionBox, the plugin will emit `handMove` event.

### Callback Parameter

- hand

  {Hand} - The hand emit event.
  
  Extra Property:
  
  - direction
  
    {String?} - The palm of the hand direction.
    
    Optional value: 'right', 'left', 'top', 'bottom', null
    
  - pos
  
    {Array\[3]} - The hand's position calculate according to interactionBox by using `InteractionBox.normalizePoint()`. The values are 0..1.