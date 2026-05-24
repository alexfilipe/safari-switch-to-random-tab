# Random Tab Switcher

A small Safari Web Extension for macOS that switches the current Safari window to a random inactive tab when you click the toolbar button.

It is intentionally minimal: one click, one random tab, no tracking.

## Features

- Switches to a random inactive tab in the current Safari window
- Ignores the tab you are already viewing
- Does nothing when there are no other tabs available
- Includes a simple macOS host app for enabling the Safari extension

## Why

Random Tab Switcher is a lightweight organization tool for moments when you have too many tabs open and no obvious priority. Instead of scanning the whole tab bar, click once and let Safari surface something from the pile.

## How It Works

The main behavior lives in:

```text
safari-switch-to-random-tab Extension/Resources/background.js
```

On click, the extension gets the tabs in the current window, filters out the active tab, picks one of the rest at random, and activates it.

## Usage

1. Enable **Random Tab Switcher** in Safari Extensions preferences.
2. Open more than one tab in a Safari window.
3. Click the extension's toolbar button.

Safari switches to one of the other tabs in that same window.

## Privacy

Random Tab Switcher does not collect, store, transmit, or sell data.

It does not read page contents, inject scripts into pages, use analytics, or send tab information anywhere. Tab selection happens locally in Safari when you click the button.

## Project Structure

```text
.
├── safari-switch-to-random-tab.xcodeproj
├── safari-switch-to-random-tab
│   ├── AppDelegate.swift
│   ├── ViewController.swift
│   └── Resources
└── safari-switch-to-random-tab Extension
    ├── SafariWebExtensionHandler.swift
    └── Resources
        ├── manifest.json
        ├── background.js
        └── images
```

## Troubleshooting

If the extension does not appear in Safari, build and run the macOS app from Xcode, then open Safari Extensions preferences from the app.

If clicking does nothing, make sure the current Safari window has at least one inactive tab.

## Contributing

Small fixes and improvements are welcome. Please keep the extension simple, local-first, and privacy-preserving.

## License

No license has been added yet. Until a license is included, all rights are reserved by the repository owner.
