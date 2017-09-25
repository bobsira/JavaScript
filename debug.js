// Display a message in a special debugging output section of the document.
// If the document does not contain such a section, create one.
function debug(msg) {
  // Find the debugging section of the document, looking at HTML id attributes
  var log = document.getElementById("debuglog");

  // If no element with the id "debuglog" exists, create one.
  if (!log) {
    log = document.createElement("div");  // Create a new <div> element
    log.id = "debuglog";                  // Set the HTML id attribute on it
    log.innerHTML = "<h1>Debug Log</h1>"; // Define inittial content
    document.body.appendChild(log);       // Add it at end of the document
  }

  // Now wrap the message in its own <pre> and append it to the log
  var pre = document.createElement("pre"); // Create a <pre> tag
  var text = document.createTextNode(msg); // Wrap msg in a text node
  pre.appendChild(text);                   // Add text to the <pre>
  log.appendChild(pre);                    // Add <pre> to the log
}

// // jQuery
// function debug(msg) {
//   var log = $("#debuglog";);     //Find the element to display msg in.
//   if (log.length==0) {           //If it doesn't exist yet, create it...
//     log = $("<div id='debuglog'></h1>Debug Log</h1></div>");
//     log.appendTo(document.body); //and insert it at the end of the body.
//   }
//   log.append($("<pre/>").text(msg)); // Wrap msg in <pre> and append to log.
// }
