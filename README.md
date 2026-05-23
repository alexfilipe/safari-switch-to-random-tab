# Random Tab Switcher

A tiny Safari Web Extension for macOS that switches the active Safari window to a random inactive tab when you click the toolbar button.

The extension is intentionally simple: no page injection, no tracking, no background services beyond the click handler. It asks Safari for the tabs in the current window, chooses one inactive tab at random, and activates it.

## Features

- Switch to a random inactive tab in the current Safari window
- Works from a single Safari toolbar button
- Ignores the currently active tab
- Does nothing when there are no other tabs to switch to
- Uses Safari's standard Web Extension `tabs` permission
- Includes a small macOS host app for enabling and managing the Safari extension

## Why

Sometimes the useful tab is not the one you were looking for. Random Tab Switcher is a small browsing nudge: click once, land somewhere else in your current Safari window, and rediscover whatever you already had open.

It is also a compact example of a Safari Web Extension built with Xcode, Swift, and a Manifest V3 background script.

## How It Works

The core extension behavior lives in:

```text
safari-switch-to-random-tab Extension/Resources/background.js
```

On toolbar click, the extension:

1. Queries the tabs in the current Safari window.
2. Filters out the active tab and any tab without an id.
3. Picks one of the remaining tabs with `Math.random()`.
4. Activates the selected tab.

The macOS app wrapper uses `SafariServices` to show the extension's enabled state and open Safari's Extensions preferences.

## Requirements

- macOS
- Safari
- Xcode
- An Apple Developer team configured in Xcode if you want to build/sign locally

This project is an Xcode Safari Web Extension app. It is not distributed through a package manager.

## Getting Started

Clone the repository:

```sh
git clone git@github.com:alexfilipe/safari-switch-to-random-tab.git
cd safari-switch-to-random-tab
```

Open the project in Xcode:

```sh
open safari-switch-to-random-tab.xcodeproj
```

Then:

1. Select the `safari-switch-to-random-tab` scheme.
2. Confirm signing settings for the app and extension targets.
3. Build and run the macOS app.
4. In the app window, choose the button to open Safari Extensions preferences.
5. Enable **Random Tab Switcher** in Safari.
6. Add or reveal the extension button in Safari's toolbar if needed.

Once enabled, click the toolbar button while Safari has at least two tabs open in the current window.

## Usage

1. Open several tabs in one Safari window.
2. Click the **Random Tab Switcher** toolbar button.
3. Safari switches to one of the other tabs in that same window.

If the current window has only one tab, or no inactive tabs, the extension exits without changing anything.

## Permissions

The extension requests:

```json
{
  "permissions": ["tabs"]
}
```

That permission is required so the extension can list tabs in the current window and activate the selected tab.

## Privacy

Random Tab Switcher does not collect, store, transmit, or sell data.

The extension does not:

- Read page contents
- Inject scripts into web pages
- Send tab information to a remote server
- Use analytics
- Persist browsing history or tab metadata

All tab selection happens locally in Safari when you click the extension button.

## Project Structure

```text
.
├── safari-switch-to-random-tab.xcodeproj
├── safari-switch-to-random-tab
│   ├── AppDelegate.swift
│   ├── ViewController.swift
│   └── Resources
│       └── Base.lproj/Main.html
└── safari-switch-to-random-tab Extension
    ├── SafariWebExtensionHandler.swift
    └── Resources
        ├── manifest.json
        ├── background.js
        ├── _locales/en/messages.json
        └── images
```

The most important files are:

- `manifest.json`: Safari Web Extension metadata, icons, action button, and permissions.
- `background.js`: toolbar click behavior and random tab activation.
- `ViewController.swift`: macOS host app logic for extension status and Safari preferences.
- `_locales/en/messages.json`: extension display name and description.

## Development

Most behavior changes will happen in `background.js`.

After changing extension resources:

1. Rebuild the Xcode project.
2. Run the host app.
3. Re-enable or reload the extension in Safari if Safari does not pick up the change immediately.
4. Test with one tab, two tabs, and many tabs in the same Safari window.

Useful manual checks:

- Clicking with one tab open should do nothing.
- Clicking with two tabs open should switch to the other tab.
- Clicking with many tabs open should choose among inactive tabs only.
- The active tab should never be selected as the "random" destination.
- Only tabs in the current Safari window should be considered.

## Troubleshooting

### The extension does not appear in Safari

Build and run the macOS app from Xcode, then open Safari Extensions preferences from the app. You may also need to enable unsigned extensions for local development depending on your Safari/Xcode setup.

### The toolbar button is missing

In Safari, check the toolbar customization menu and make sure the extension button is visible. Also confirm the extension is enabled in Safari Extensions preferences.

### Clicking the button does nothing

Make sure the current Safari window has at least one inactive tab. The extension intentionally does nothing if there is no other tab to switch to.

### Xcode signing fails

Open the project settings in Xcode and update the signing team and bundle identifiers as needed for your local Apple Developer account.

## Roadmap Ideas

Possible future improvements:

- Keyboard shortcut support
- Option to include all Safari windows
- Option to avoid pinned tabs
- Option to avoid recently visited tabs
- Lightweight settings page

## Contributing

Contributions are welcome. For small fixes, open a pull request with a clear description of the behavior change. For larger changes, open an issue first so the direction can be discussed.

Please keep the extension small, local-first, and privacy-preserving.

## License

No license has been added yet. Until a license is included, all rights are reserved by the repository owner.
