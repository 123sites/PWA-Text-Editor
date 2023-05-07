const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Adds an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  window.deferredPrompt = event;
  // Removes the hidden class from the button.
  butInstall.classList.toggle("hidden", false);
});

// Implements a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show prompt
  promptEvent.prompt();
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// Adds a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {

    // const jate = form.elements['jate'].value;
    // // Post form data to IndexedDB
    // postDb(jate);
    // form.reset();
    // fetchList();
  // Clear prompt
  window.deferredPrompt = null;
});

//   document.getElementById("click", appInstalled (){ alert("Hello World!");
// });

  // https://developer.mozilla.org/en-US/docs/Web/API/Window/appinstalled_event
//   onappinstalled = (event) => {};
//   console.log{"Thank you for installing our App!"}
// }):


  // // Line 29-35, as-in lesson 26.
  //   // handle the form data
  //   event.preventDefault();
//     document.getElementById("")

//     const jate = form.elements['jate'].value;
//     // Post form data to IndexedDB
//     postDb(jate);
//     form.reset();
//     fetchList();
//   // Clear prompt
//   window.deferredPrompt = null;
// });
