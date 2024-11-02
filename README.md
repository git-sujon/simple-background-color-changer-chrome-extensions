# Background Color Changer - Chrome Extension

## Overview
This is a simple Google Chrome extension that allows you to change the background color of the current webpage to light blue with just one click. It is built using HTML, JavaScript, and Chrome's Extensions API, with Manifest Version 3.

## Features
- Adds an extension button to the Chrome toolbar.
- Clicking the button opens a popup with a "Change Color" button.
- Clicking the "Change Color" button changes the background color of the current page to light blue.

## Project Files
- **manifest.json**: Contains metadata for the extension such as its name, version, and permissions.
- **popup.html**: Defines the user interface for the popup that appears when the extension icon is clicked.
- **popup.js**: JavaScript logic to handle the button click and change the background color.
- **icons/**: A folder containing icons for the extension, in different sizes (optional).

## Installation
1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top right corner.
4. Click on **Load unpacked** and select the folder containing this project.
5. The extension should now appear in your Chrome toolbar.

## How to Use
1. Click on the extension icon in your Chrome toolbar.
2. A popup will appear with a "Change Color" button.
3. Click the "Change Color" button to change the background color of the current tab to light blue.

## File Structure
```
simple-chrome-extension/
|
├── manifest.json
├── popup.html
├── popup.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Permissions
- **activeTab**: Allows the extension to interact with the currently active tab.
- **scripting**: Needed to execute the script that changes the background color of the webpage.

## Troubleshooting
- Make sure you have **Developer Mode** enabled when loading the extension.
- If the "Change Color" button doesn't work, check the **Console** for errors (`F12` > **Console** tab).
- Ensure that the `manifest.json` file includes `"scripting"` in the permissions.

## Compatibility
- This extension uses **Manifest Version 3**, which is supported by the latest versions of Google Chrome.

## License
This project is licensed under the MIT License.

