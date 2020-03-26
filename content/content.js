/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2020 */

function displayApi(baseObjectName, key, supported) {
  let frag = document.createDocumentFragment();
  let tr = frag.appendChild(document.createElement("tr"));
  let tdk = tr.appendChild(document.createElement("td"));
  tdk.className = "api";

  let tda = tdk.appendChild(document.createElement("a"));
  tda.textContent = baseObjectName + "." + key;
  let apihref = tda.textContent.split(".");
  apihref.shift();
  tda.href = "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/" + apihref.join("/");
  tdk.appendChild(tda);


  let tdv = tr.appendChild(document.createElement("td"));
  tdv.textContent = supported;
  tdv.className = "value";
  tr.className = "supported " + supported;

  return frag;
}

function displayHeader(content) {
  let trheader = document.createElement("tr");
  let tdheader = trheader.appendChild(document.createElement("td"));
  tdheader.setAttribute("colspan", "2");
  tdheader.textContent = content;
  trheader.className = "header";
  return trheader;
}

function display(baseObjectName, obj, hlevel) {
  let frag = document.createDocumentFragment();
  frag.appendChild(displayHeader(baseObjectName));
  let hasValuesSupported = Object.values(obj.supported).some(subobj => subobj.supported);
  let hasValuesSupportedTL = false;

  for (let [key, values] of Object.entries(obj.supported)) {
    if (values.supported) {
      frag.appendChild(display(baseObjectName + "." + key, values, hlevel + 1));
      hasValuesSupportedTL = true;
    } else if (typeof values == "boolean") {
      if (hasValuesSupported) {
        frag.appendChild(displayHeader(baseObjectName + "." + key));
      }
      frag.appendChild(displayApi(baseObjectName, key, values ? "yes" : "no"));
    }
  }

  for (let key of obj.remaining) {
    if (hasValuesSupportedTL) {
      frag.appendChild(displayHeader(baseObjectName + "." + key));
    }
    frag.appendChild(displayApi(baseObjectName, key, "new"));
  }

  return frag;
}


chrome.runtime.sendMessage("compat", (data) => {
  let rows = display("browser", data, 1);
  document.getElementById("compat").appendChild(rows);
  document.getElementById("useragent").textContent = navigator.userAgent;
});
