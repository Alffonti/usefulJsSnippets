/*
  Title: Scroll-Activated Navigation (TOC) Highlighter

  Description:
  This script enhances user navigation experience on screens with a minimum width of 981px by highlighting the corresponding navigation link when scrolling through document sections. It utilizes Intersection Observer to track the visibility of heading elements with IDs and dynamically updates the active navigation link based on scroll direction.

  Usage:
  Include this script to enable the scroll-activated navigation highlighter on larger screens.

  Dependencies:
  - Assumes the existence of heading elements (h2) with IDs and navigation links within list items (li) containing anchor links (a) with href attributes starting with '#'.
  - Developed and tested within the Divi framework.

  Example HTML Structure:
  <ul>
    <li><a href="#section-1">Section 1</a></li>
    <li><a href="#section-2">Section 2</a></li>
    <!-- Additional navigation links -->
  </ul>
  <div id="section-1"><h2>Section 1</h2>...</div>
  <div id="section-2"><h2>Section 2</h2>...</div>
  <!-- Additional document sections -->

*/

// Check if the viewport width is greater than or equal to 981px
if (window.matchMedia('(min-width: 981px)').matches) {
  document.addEventListener('DOMContentLoaded', () => {
    // Select heading elements with IDs and navigation links
    const headings = Array.from(document.querySelectorAll('h2[id]'))
    const navLinks = Array.from(document.querySelectorAll("li:has(a[href^='#'])"))

    let lastScrollPosition = window.scrollY

    // Handler function for Intersection Observer
    const scrollHandler = entries => {
      entries.forEach(entry => {
        const heading = entry.target
        const headingId = heading.id
        const navLink = navLinks.find(link => link.querySelector(`a[href="#${headingId}"]`))

        const currentScrollPosition = window.scrollY

        if (entry.intersectionRatio > 0) {
          // Highlight the corresponding navigation link when heading is in view
          navLinks.forEach(link => link.classList.remove('active'))
          navLink.classList.add('active')
        } else {
          if (currentScrollPosition < lastScrollPosition) {
            // Highlight the previous navigation link when scrolling up
            navLinks.forEach(link => link.classList.remove('active'))

            // Find the index of the heading link in the array
            const navLinkIndex = navLinks.indexOf(navLink)

            // If the heading link is not the first one, highlight the previous one
            if (navLinkIndex > 0) {
              const prevNavLink = navLinks[navLinkIndex - 1]
              prevNavLink.classList.add('active')
            }
          }

          lastScrollPosition = currentScrollPosition
        }
      })
    }

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(scrollHandler)

    // Observe each heading element
    headings.forEach(heading => observer.observe(heading))
  })
}
