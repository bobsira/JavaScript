function hide(e,reflow) {                  // Hide the element e by scripting its style
  if (reflow) {                            // If 2nd argument is true
    e.style.display = "none";              // hide element and its space
  }
  else {                                   // Otherwise
    e.style.visibility = "hidden";         // make e invisible, but leave its space
  }
}
