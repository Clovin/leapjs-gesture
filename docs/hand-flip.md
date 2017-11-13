# hand-flip gesture

## Gesture Description

The plugin will emit two event: `flipTop`, `flipDown`.

- If your hand which the palm of it sticks straight to negative axis of Y-axis flip 180 degrees, the plugin will emit `flipTop` event.
- If your hand which the palm of it sticks straight to positive axis of Y-axis flip 180 degrees, the plugin will emit `flipTop` event.

## Callback Parameter

- hand 

  {Hand} - The hand emit event.
  