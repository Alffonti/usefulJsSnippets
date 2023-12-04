/*
  Title: scrollToBottom Function

  Description:
  The scrollToBottom function animates the scroll to the bottom of the webpage using linear interpolation for a smooth scrolling animation.

  Parameters:
  - scrollDuration (optional): Duration of the scroll animation in milliseconds (default: 32000).

  Usage:
  Call scrollToBottom() to trigger the default scroll animation or customize the duration by providing a value for scrollDuration.

  Example Usage:
  const customScrollDuration = 25000; // change duration if needed
  scrollToBottom(customScrollDuration);
*/

function scrollToBottom(scrollDuration = 32000) {
  // Get the current scroll position and calculate the target position at the bottom
  const currentPosition = window.scrollY
  const targetPosition = document.body.scrollHeight - window.innerHeight
  const distance = targetPosition - currentPosition
  const duration = scrollDuration // Increase this value to slow down the scroll animation (in milliseconds)
  let start = null

  // Animation step function using requestAnimationFrame
  function step(timestamp) {
    if (!start) start = timestamp
    const progress = timestamp - start

    // Interpolate and set the scroll position
    window.scrollTo(0, linearInterpolation(progress, currentPosition, distance, duration))

    // Continue the animation until the duration is reached
    if (progress < duration) window.requestAnimationFrame(step)
  }

  // Linear interpolation function
  function linearInterpolation(t, b, c, d) {
    return (c * t) / d + b
  }

  // Start the animation by calling requestAnimationFrame with the step function
  window.requestAnimationFrame(step)
}
