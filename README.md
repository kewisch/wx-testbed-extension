wx-testbed
==========

This is a simple extension that will show you which APIs are supported in the browser you are running it in.

Usage with [web-ext](https://github.com/mozilla/web-ext):

```shell

web-ext run # Run in Firefox
web-ext run -t chromium # Run in Chrome

web-ext run -t firefox-android --firefox-apk=org.mozilla.firefox # Run in Fennec
web-ext run -t firefox-android --firefox-apk=org.mozilla.fenix.nightly # Run in Fenix Nightly

web-ext run -f /path/to/thunderbird # Run in Thunderbird
```
