document.getElementById("changeColor").addEventListener("click", () => {
    // Query for the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Check if tabs[0] exists to avoid errors
      if (tabs.length > 0 && tabs[0].id) {
        // Execute the script to change the background color
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: changeBackgroundColor
        });
      } else {
        console.error("No active tab found.");
      }
    });
  });
  
  // This function will be injected into the page
  function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
  }
  