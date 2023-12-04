/*
  Title: Responsive Mobile Menu Interaction

  Description:
  This script enhances mobile user experience by providing interactive behavior for the floating menu on screens with a maximum width of 981px. It enables toggling the menu's visibility on click and adds a subtle shadow effect when the menu is open. Additionally, clicking on a menu item closeds the menu and removes the shadow.

  Usage:
  Include this script in your HTML to activate the responsive mobile menu interaction.

  Dependencies:
  - Assumes the presence of HTML elements with classes 'barra-de-menu-flotante' (menu container), 'menu-flotante' (menu content), and 'menu-flotante ul li a' (menu items).
  - Requires an SVG element within '.floating-menu-bar' to apply the shadow effect.

  Example HTML Structure:
  <div class="barra-de-menu-flotante">
    <svg>...</svg>
    <div class="menu-flotante">
      <ul>
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <!-- Additional menu items -->
      </ul>
    </div>
  </div>
*/

// Check if the viewport width is less than or equal to 981px
if (window.matchMedia('(max-width: 981px)').matches) {
  document.addEventListener('DOMContentLoaded', function () {
    // Select relevant DOM elements
    const floatingMenuContainer = document.querySelector('.floating-menu-bar')
    const floatingMenu = document.querySelector('.floating-menu')
    const floatingMenuSvg = floatingMenuContainer.querySelector('svg')
    const menuItems = document.querySelectorAll('.floating-menu ul li a')

    // Add click event listener to the floating menu container
    floatingMenuContainer.addEventListener('click', function () {
      // Toggle classes for menu and container
      floatingMenu.classList.toggle('open')
      floatingMenu.classList.toggle('closed')
      floatingMenuContainer.classList.toggle('open')

      // Add shadow when the menu is open
      if (floatingMenuContainer.classList.contains('open')) {
        floatingMenuSvg.style.boxShadow = '0 0 0 100000px rgba(39, 39, 39, 0.7)'
      } else {
        floatingMenuSvg.style.boxShadow = 'none'
      }
    })

    // Add click event listener to each list item
    menuItems.forEach(function (item) {
      item.addEventListener('click', function () {
        // Toggle classes for menu and container
        floatingMenu.classList.toggle('open')
        floatingMenu.classList.toggle('closed')
        floatingMenuContainer.classList.toggle('open')

        // Remove box shadow when a list item is clicked
        floatingMenuSvg.style.boxShadow = 'none'
      })
    })
  })
}
