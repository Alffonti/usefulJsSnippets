/*
  Title: Generate Navigation List from Headings

  Description:
  This script automatically generates a navigation list from h2 elements within the specified container (.floating-menu-section). It formats the text content, creates anchor links, and appends them to an unordered list (.floating-menu ul).

  Dependencies:
  - Assumes the existence of h2 elements inside .floating-menu-section.
  - Assumes the presence of an unordered list (.floating-menu ul).

  Usage:
  Include this script to dynamically create a navigation list based on h2 elements.

  Example HTML Structure:
  <div class="seccion-con-menu-flotante">
    <h2>Section 1</h2>
    <h2>Section 2</h2>
    ...
  </div>
  <div class="navegacion-audifonos">
    <ul></ul>
  </div>
*/

document.addEventListener('DOMContentLoaded', function () {
  // Get all h2 elements inside .et_pb_text divs inside the specified container
  const h2Elements = Array.from(document.querySelectorAll('.floating-menu-section h2')).filter(h2 => !h2.closest('[class*="card"]')) /* some modules may contain H2 which we dont want to target */

  // Get the ul element inside .floating-menu
  const ulElement = document.querySelector('.floating-menu ul')

  // Array to store created list items
  const listItems = []

  // Loop through each h2 element
  h2Elements.forEach(function (h2Element) {
    // Get the text content of the h2 element
    const h2Text = h2Element.textContent

    // Format the text content as described (replace spaces, lowercase, remove special characters)
    const formattedText = h2Text
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .toLowerCase() // Convert to lowercase
      .replace(/[áéíóú]/g, function (match) {
        // Replace accented characters
        const accents = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' }
        return accents[match] || match
      })
      .replace(/[^\w-]/g, '') // Remove special characters

    // Add an id attribute to the h2 element with the formatted text content
    h2Element.id = formattedText

    // Create a new list item and link
    const listItem = document.createElement('li')
    const link = document.createElement('a')

    // Set the href attribute and text content of the link
    link.href = '#' + formattedText
    link.textContent = h2Text

    // Append the link to the list item
    listItem.appendChild(link)

    // Add the list item to the array
    listItems.push(listItem)
  })

  // Append all list items to the ul element
  ulElement.append(...listItems)
})
