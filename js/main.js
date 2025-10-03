/**
 * This file should only contain functions that don't interact with the DOM.
 * That means no document.querySelector, no document.getElementById, etc.
 * This file should only contain functions that do things like calculations,
 * data manipulation, etc. This is so that we can test these functions
 * without having to worry about the DOM or the browser environment.
 */

/**
 * Prints the radio button you clicked on to the screen.
 * AI Use: Assisted by AI
 */

document.getElementById("showChoice").addEventListener("click", () => {
  const selected = document.querySelector('input[name="choice"]:checked');

  if (selected) {
    alert("You selected: " + selected.value);
  } else {
    alert("No option selected!");
  }
});
