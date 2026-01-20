# Unframed Demo IWA

<a href="https://studio.firebase.google.com/import?url=https%3A%2F%2Fgithub.com%2Fedman%2Funframed-demo">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="https://cdn.firebasestudio.dev/btn/open_dark_32.svg">
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://cdn.firebasestudio.dev/btn/open_light_32.svg">
    <img
      height="32"
      alt="Open in Firebase Studio"
      src="https://cdn.firebasestudio.dev/btn/open_blue_32.svg">
  </picture>
</a>

This is a demo IWA intended to exercise the `unframed` display mode feature.

## Installing the demo

### Pre-requisites

* You need a ChromeOS device.
* Navigate to `chrome://flags`.
* Enable the `#enable-isolated-web-app-dev-mode` feature flag.
* Enable the `#enable-unframed-iwa` feature flag.

### Option 1: Install via update manifest

*   Navigate to `chrome://web-app-internals`
*   Find "Install IWA from Update Manifest"
*   Paste in the the addresss 
    `https://unframed-isolated.web.app/releases/update_manifest.json`
*   Click "fetch" and "install"

### Option 2: Install via dev mode proxy

*   Navigate to `chrome://web-app-internals`
*   Find "Install IWA via Dev Mode Proxy"
*   Paste in the the addresss `https://unframed-isolated.web.app`
*   Click "install"

## Building and deploying the demo

*   `pnpm run build:release` - creates a new versioned signed bundle for the IWA in `./releases` and updates the manifest.
*   `pnpm run deploy` - builds and deploys the IWA to `https://unframed-isolated.web.app`.