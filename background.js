/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2020 */

const MASTER_LIST = {
  __ignore: [
    "events",
    "types",
    "extensionTypes",
    "experiments",
    "test"
  ],
  alarms: [
    "clear",
    "clearAll",
    "create",
    "get",
    "getAll",
    "onAlarm"
  ],
  browserAction: [
    "getPopup",
    "getTitle",
    "getBadgeText",
    "getBadgeBackgroundColor",
    "getBadgeTextColor",
    "enable",
    "disable",
    "isEnabled",
    "onClicked",
    "openPopup",
    "setBadgeBackgroundColor",
    "setBadgeText",
    "setBadgeTextColor",
    "setIcon",
    "setPopup",
    "setTitle",
  ],

  bookmarks: [
    "create",
    "get",
    "getChildren",
    "getRecent",
    "getSubTree",
    "getTree",
    "move",
    "remove",
    "removeTree",
    "search",
    "update",

    "onCreated",
    "onRemoved",
    "onChanged",
    "onMoved",
  ],

  browsingData: [
    "remove",
    "removeCache",
    "removeCookies",
    "removeDownloads",
    "removeFormData",
    "removeHistory",
    "removeLocalStorage",
    "removePasswords",
    "removePluginData",
    "settings"
  ],

  captivePortal: [
    "canonicalURL",
    "getLastChecked",
    "getState",
    "onConnectivityAvailable",
    "onStateChanged"
  ],

  clipboard: [
    "setImageData"
  ],

  commands: [
    "getAll",
    "reset",
    "update",
    "onCommand",
  ],

  contentScripts: ["register"],

  contextualIdentities: [
    "create",
    "get",
    "query",
    "update",
    "remove",
    "onCreated",
    "onRemoved",
    "onUpdated",
  ],

  find: [
    "find",
    "highlightResults",
    "removeHighlighting"
  ],

  history: [
    "search",
    "getVisits",
    "addUrl",
    "deleteUrl",
    "deleteRange",
    "deleteAll",

    "onVisited",
    "onVisitRemoved",
    "onTitleChanged",
  ],

  identity: [
    "getRedirectURL",
    "launchWebAuthFlow"
  ],

  idle: [
    "queryState",
    "setDetectionInterval",
    "onStateChanged",
  ],

  menus: [
    "create",
    "onClicked",
    "remove",
    "removeAll",

    "onShown",
    "onHidden",
    "update",
    "overrideContext",
    "refresh",
    "getTargetElement"
  ],

  contextMenus: [
    "create",
    "onClicked",
    "remove",
    "removeAll",

    "onShown",
    "onHidden",
    "update",
    "overrideContext",
    "refresh",
    "getTargetElement"
  ],

  cookies: [
    "get",
    "set",
    "remove",
    "getAll",
    "getAllCookieStores",
    "onChanged",
  ],

  /* devtools: {
    inspectedWindow: [
      "tabId",
      "eval",
      "reload"
    ],
    network: [
      "getHAR",
      "onNavigated",
      "onRequestFinished"
    ],
    panels: [
      "elements",
      "themeName",
      "create",
      "onThemeChanged"
    ]
  },
  */

  dns: [
    "resolve"
  ],

  downloads: [
    "download",
    "search",
    "pause",
    "resume",
    "cancel",
    "getFileIcon",
    "open",
    "show",
    "showDefaultFolder",
    "erase",
    "removeFile",
    "acceptDanger",
    "drag",
    "setShelfEnabled",

    "onCreated",
    "onErased",
    "onChanged"
  ],
  extension: [
    "getBackgroundPage",
    "getURL",
    "inIncognitoContext",

    "getViews",
    "isAllowedIncognitoAccess",
    "isAllowedFileSchemeAccess",
    "lastError"
  ],
  i18n: [
    "getMessage",
    "getUILanguage",
    "detectLanguage",
    "getAcceptLanguages"
  ],
  management: [
    "getSelf",
    "onDisabled",
    "onEnabled",
    "onInstalled",
    "onUninstalled",
    "getAll",
    "get",
    "install",
    "uninstallSelf",
    "setEnabled"
  ],
  notifications: [
    "create",
    "onClosed",
    "onClicked",
    "onButtonClicked",
    "onShown",
    "clear",
    "getAll",
  ],
  permissions: [
    "contains",
    "getAll",
    "remove",
    "request",
    "onAdded",
    "onRemoved"
  ],
  privacy: {
    network: [
      "networkPredictionEnabled",
      "peerConnectionEnabled",
      "webRTCIPHandlingPolicy",
      "tlsVersionRestriction",
    ],
    services: [
      "passwordSavingEnabled"
    ],
    websites: [
      "cookieConfig",
      "firstPartyIsolate",
      "hyperlinkAuditingEnabled",
      "protectedContentEnabled",
      "referrersEnabled",
      "resistFingerprinting",
      "thirdPartyCookiesAllowed",
      "trackingProtectionMode"
    ]
  },

  pkcs11: [
    "getModuleSlots",
    "installModule",
    "isModuleInstalled",
    "uninstallModule"
  ],

  proxy: [
    "settings",
    "onError",
    "onRequest"
  ],
  runtime: [
    "connect",
    "onConnect",
    "connectNative",
    "getBackgroundPage",
    "getBrowserInfo",
    "getManifest",
    "getPlatformInfo",
    "getURL",
    "id",
    "lastError",
    "onInstalled",
    "onMessageExternal",
    "openOptionsPage",
    "reload",
    "sendMessage",
    "onMessage",

    "onStartup",
    "onUpdateAvailable",
    "onConnect",
    "onConnectExternal",
    "setUninstallURL",
  ],

  search: [
    "get",
    "search"
  ],

  sessions: [
    "forgetClosedTab",
    "forgetClosedWindow",
    "getRecentlyClosed",
    "restore",
    "setTabValue",
    "getTabValue",
    "removeTabValue",
    "setWindowValue",
    "getWindowValue",
    "removeWindowValue",

    "onChanged",
  ],

  storage: [
    "local",
    "managed",
    "onChanged",
    "sync",
  ],
  tabs: [
    "captureVisibleTab",
    "create",
    "executeScript",
    "get",
    "getCurrent",
    "insertCSS",
    "onCreated",
    "onActivated",
    "onRemoved",
    "onReplaced",
    "onUpdated",
    "query",
    "reload",
    "remove",
    "removeCSS",
    "sendMessage",
    "update",

    "onMoved",
    "onHighlighted",
    "onDetached",
    "onAttached",
    "onZoomChange",
    "connect",
    "duplicate",
    "highlight",
    "move",
    "discard",
    "detectLanguage",
    "toggleReaderMode",
    "captureTab",
    "setZoom",
    "getZoom",
    "setZoomSettings",
    "getZoomSettings",
    "print",
    "printPreview",
    "saveAsPDF",
    "show",
    "hide",
    "moveInSuccession",
  ],
  theme: [
    "reset",
    "update",

    "onUpdated",
    "getCurrent"
  ],
  topSites: [
    "get"
  ],
  webNavigation: [
    "getFrame",
    "onBeforeNavigate",
    "onCommitted",
    "onCompleted",
    "onDOMContentLoaded",
    "onHistoryStateUpdated",
    "onCreatedNavigationTarget",

    "onErrorOccurred",
    "onReferenceFragmentUpdated",
    "onTabReplaced",
    "getAllFrames",
  ],
  webRequest: [
    "handlerBehaviorChanged",
    "onBeforeRedirect",
    "onBeforeRequest",
    "onBeforeSendHeaders",
    "onCompleted",
    "onErrorOccurred",
    "onHeadersReceived",
    "onResponseStarted",
    "onSendHeaders",

    "onHeadersReceived",
    "onAuthRequired",
    "filterResponseData",
    "getSecurityInfo",
  ],
  windows: [
    "create",
    "getAll",
    "get",
    "getCurrent",
    "getLastFocused",
    "onCreated",
    "onFocusChanged",
    "onRemoved",
    "remove",
    "update",
  ]
};

function attemptApi(baseObject, names) {
  let supported = {};

  if (typeof baseObject == "undefined") {
    return false;
  }

  let remaining = new Set(Object.keys(baseObject));

  for (let api of names) {
    supported[api] = typeof baseObject[api] != "undefined";
    remaining.delete(api);
  }

  remaining = [...remaining].filter(api => {
    return typeof baseObject[api] != "undefined" && api[0].toUpperCase() !== api[0];
  });

  return { supported, remaining };
}

function attempt(baseObject, obj) {
  let supported = {};
  let remaining = new Set(Object.keys(baseObject));

  if (typeof baseObject == "undefined") {
    return false;
  }

  for (let [key, values] of Object.entries(obj)) {
    if (key == "__ignore") {
      for (let api of values) {
        remaining.delete(api);
      }
    } else if (Array.isArray(values)) {
      supported[key] = attemptApi(baseObject[key], values);
    } else {
      supported[key] = attempt(baseObject[key], values);
    }
    remaining.delete(key);
  }

  remaining = [...remaining].filter(api => {
    // Skip APIs that are not actually defined (e.g. menusInternal), or have an uppercase first
    // letter (likely a type)
    return typeof baseObject[api] != "undefined" && api[0].toUpperCase() !== api[0];
  });

  return { supported, remaining };
}

let browserObj = typeof browser == "undefined" ? chrome : browser;


let supportMatrix = attempt(browserObj, MASTER_LIST);
console.log(supportMatrix);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  sendResponse(supportMatrix);
});

chrome.tabs.create({ url: "/content/index.html" });

chrome.browserAction.onClicked.addListener(() => {
  browser.tabs.create({ url: "/content/index.html" });
});
