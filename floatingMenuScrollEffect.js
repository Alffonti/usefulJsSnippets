/*
  Title: Custom Sticky Menu for Larger Screens

  Description:
  This JavaScript code snippet provides a custom solution for creating a sticky menu on larger screens when the default position sticky is not an option. It calculates the initial and maximum offsets based on the menu and menu sections' dimensions and adjusts the menu's position accordingly during scrolling.

  Dependencies:
  - Assumes the existence of HTML elements with classes 'floating-menu' and 'floating-menu-section'.
  - Assumes the presence of an element with the ID 'et-main-area' and class 'et_builder_inner_content'.

  Usage:
  Include this script to enable the custom sticky menu effect on screens with a minimum width of 981px.

  Example HTML Structure:
  <div class="floating-menu">...</div>
  <div class="floating-menu-section">...</div>
  <!-- Additional menu sections -->
*/

// Check if the viewport width is greater than or equal to 981px
if (window.matchMedia('(min-width: 981px)').matches) {
  document.addEventListener('DOMContentLoaded', function () {
    // Delay execution to ensure proper DOM initialization
    setTimeout(() => {
      // Select relevant DOM elements
      const menuFlotante = document.querySelector('.floating-menu')
      const menuSections = document.querySelectorAll('.floating-menu-section')

      // Calculate the initial offset from the top of the first menu section
      const initialOffset = parseFloat(getComputedStyle(menuFlotante).top)

      // Calculate the maximum offset from the top of the last menu section
      const maxOffset = menuSections[menuSections.length - 1].offsetTop + menuSections[menuSections.length - 1].offsetHeight - menuFlotante.offsetHeight

      // Add a scroll event listener
      window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollPosition = window.scrollY

        // Check if the menu should switch to fixed position
        if (scrollPosition >= initialOffset && scrollPosition <= maxOffset) {
          // Set the top position to 0 when the position is fixed
          menuFlotante.style.position = 'fixed'
          menuFlotante.style.top = '0'
        } else {
          // Set the top position when the position is absolute
          // and scrollPosition is less than initialOffset
          // or when the position is absolute and scrollPosition is greater than maxOffset
          menuFlotante.style.position = 'absolute'
          menuFlotante.style.top = `${scrollPosition < initialOffset ? initialOffset : maxOffset}px`
        }
      })
    }, 0)
  })
}
