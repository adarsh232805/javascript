// temproldeadzone is a deadzone that is only active for a certain amount of time after the last input. This is useful for things like camera movement, where you want to allow the player to move the camera freely, but you don't want the camera to keep moving after the player stops moving the mouse.
//in simple terms, the temproldeadzone is like a timer that starts when the player stops moving the mouse. If the player moves the mouse again before the timer runs out, the camera will start moving again. If the timer runs out, the camera will stop moving until the player moves the mouse again.
// for example, consider the following code:
let lastInputTime = 0;
const deadzoneDuration = 1000; // 1 second  

