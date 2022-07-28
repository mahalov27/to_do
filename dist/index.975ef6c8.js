// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1RB6v":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dataSettingJs = require("./js/dataSetting/dataSetting.js");
var _paginationJs = require("./js/pagination/pagination/pagination.js");
var _headerJs = require("./js/header/header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
var _indexCss = require("./css/index.css");
var _indexCssDefault = parcelHelpers.interopDefault(_indexCss);
(0, _dataSettingJs.createTemplateForLocalStorage)();
(0, _paginationJs.initPagination)();
(0, _headerJsDefault.default)();

},{"./js/dataSetting/dataSetting.js":"6ipGD","./js/pagination/pagination/pagination.js":"7SfTX","./js/header/header.js":"8pjPG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./css/index.css":"lyxGu"}],"6ipGD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toDos", ()=>toDos);
parcelHelpers.export(exports, "createTemplateForLocalStorage", ()=>createTemplateForLocalStorage);
parcelHelpers.export(exports, "getStatusProgress", ()=>getStatusProgress);
parcelHelpers.export(exports, "saveActiveInset", ()=>saveActiveInset);
parcelHelpers.export(exports, "checkInset", ()=>checkInset);
let toDos = {};
const createTemplateForLocalStorage = ()=>{
    const toDosTemplate = {
        toDo: [],
        inProgress: [],
        did: [],
        search: []
    };
    if (localStorage.getItem("toDos") === null) localStorage.setItem("toDos", JSON.stringify(toDosTemplate));
    toDos = JSON.parse(localStorage.getItem("toDos"));
};
const getStatusProgress = ()=>{
    toDos.inProgress = toDos.toDo.filter((toDo)=>toDo.status === "inProgress");
    localStorage.setItem("toDos", JSON.stringify(toDos));
};
const saveActiveInset = (value)=>{
    localStorage.setItem("inset", JSON.stringify(value));
};
const checkInset = ()=>{
    let checkedInset = [];
    const savesInset = JSON.parse(localStorage.getItem("inset"));
    if (savesInset === "toDo") checkedInset = toDos.toDo;
    if (savesInset === "inProgress") checkedInset = toDos.inProgress;
    if (savesInset === "did") checkedInset = toDos.did;
    if (savesInset === "search") checkedInset = toDos.search;
    return checkedInset;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7SfTX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setPagination", ()=>setPagination);
parcelHelpers.export(exports, "initPagination", ()=>initPagination);
parcelHelpers.export(exports, "filterIndexProductCard", ()=>filterIndexProductCard);
parcelHelpers.export(exports, "deletePagination", ()=>deletePagination);
var _dataSettingJs = require("../../dataSetting/dataSetting.js");
var _createToDoListJs = require("../../createToDoList/createToDoList.js");
var _settingsPaginationJs = require("../settingPagination/settingsPagination.js");
var _settingsPaginationJsDefault = parcelHelpers.interopDefault(_settingsPaginationJs);
var _templatePaginationJs = require("../../templates/templatePagination.js");
const paginationList = document.querySelector(".pagination-items");
const paginationDiv = document.querySelector(".pagination");
const setPagination = ()=>{
    const numberPage = Math.ceil((0, _settingsPaginationJsDefault.default).getQuantity() / (0, _settingsPaginationJsDefault.default).itemsPerPage);
    let paginationBlocks = "";
    for(let i = 1; i <= numberPage; i += 1)paginationBlocks += (0, _templatePaginationJs.createPageNumber)(i, i === (0, _settingsPaginationJsDefault.default).currentPage, (0, _settingsPaginationJsDefault.default));
    paginationList.innerHTML = paginationBlocks;
    if (numberPage > 0) paginationDiv.classList.add("paginationActive");
    else paginationDiv.classList.remove("paginationActive");
};
const initPagination = ()=>{
    paginationList.addEventListener("click", setPage);
    document.querySelectorAll(".js-arrow-btn").forEach((item)=>item.addEventListener("click", actionArrowBtns));
    setPagination();
};
const filterIndexProductCard = ()=>{
    const filter = (0, _dataSettingJs.checkInset)().filter((_item, idx)=>{
        return idx >= (0, _settingsPaginationJsDefault.default).currentPage * (0, _settingsPaginationJsDefault.default).itemsPerPage - (0, _settingsPaginationJsDefault.default).itemsPerPage && idx < (0, _settingsPaginationJsDefault.default).currentPage * (0, _settingsPaginationJsDefault.default).itemsPerPage;
    });
    return filter;
};
const deletePagination = ()=>{
    const pagination = document.querySelector(".pagination-items");
    const newPaginationLength = Math.ceil((0, _settingsPaginationJsDefault.default).getQuantity() / (0, _settingsPaginationJsDefault.default).itemsPerPage);
    if ((0, _settingsPaginationJsDefault.default).currentPage !== 1 && pagination.children.length !== newPaginationLength && pagination.children.length === (0, _settingsPaginationJsDefault.default).currentPage) (0, _settingsPaginationJsDefault.default).currentPage -= 1;
};
const setPage = (event)=>{
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    (0, _settingsPaginationJsDefault.default).currentPage = Number(event.target.textContent);
    const activePage = document.querySelector(".activePage");
    activePage && activePage.classList.remove("activePage");
    event.target.classList.add("activePage");
    (0, _createToDoListJs.createToDoList)();
};
const actionArrowBtns = (event)=>{
    if (event.target.dataset.arrow === "next" && (0, _settingsPaginationJsDefault.default).currentPage < paginationList.childNodes.length) (0, _settingsPaginationJsDefault.default).currentPage += 1;
    if (event.target.dataset.arrow === "prev" && (0, _settingsPaginationJsDefault.default).currentPage > 1) (0, _settingsPaginationJsDefault.default).currentPage -= 1;
    setPagination();
    (0, _createToDoListJs.createToDoList)(true);
};

},{"../../dataSetting/dataSetting.js":"6ipGD","../../createToDoList/createToDoList.js":"k9Zbf","../settingPagination/settingsPagination.js":"uQY1s","../../templates/templatePagination.js":"bvnbE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9Zbf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createToDoList", ()=>createToDoList);
var _paginationJs = require("../pagination/pagination/pagination.js");
var _toDoControlJs = require("../toDoControl/toDoControl.js");
var _toDoControlJsDefault = parcelHelpers.interopDefault(_toDoControlJs);
var _templatesToDoItemJs = require("../templates/templatesToDoItem.js");
const createToDoList = (withPagination)=>{
    const listItems = document.querySelector(".toDo-list");
    const filtered = (0, _paginationJs.filterIndexProductCard)();
    const markup = filtered.reduce((acc, item)=>{
        if (JSON.parse(localStorage.getItem("inset")) === "did") return acc += (0, _templatesToDoItemJs.templateToDoItemDid)(item);
        if (JSON.parse(localStorage.getItem("inset")) !== "did") return acc += (0, _templatesToDoItemJs.templateToDoItem)(item);
    }, "");
    listItems.innerHTML = markup;
    if (withPagination) (0, _paginationJs.setPagination)();
    (0, _toDoControlJsDefault.default)();
};

},{"../pagination/pagination/pagination.js":"7SfTX","../toDoControl/toDoControl.js":"lTscz","../templates/templatesToDoItem.js":"bVplg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lTscz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createToDoListJs = require("../createToDoList/createToDoList.js");
var _dataSettingJs = require("../dataSetting/dataSetting.js");
var _paginationJs = require("../pagination/pagination/pagination.js");
const getActions = (event)=>{
    const { action  } = event.target.dataset;
    action === "delete-btn" && deleteToDo(event.target);
    action === "in-progress-btn" && toInProgress(event.target);
    action === "complete-btn" && toDid(event.target);
};
const getId = (eventTarget)=>{
    const cardItem = eventTarget.closest(".js-list-item");
    const { id  } = cardItem.dataset;
    return id;
};
const deleteToDo = (eventTarget)=>{
    const id = getId(eventTarget);
    if (JSON.parse(localStorage.getItem("inset")) !== "did") (0, _dataSettingJs.toDos).toDo = [
        ...(0, _dataSettingJs.toDos).toDo.filter((toDo)=>toDo.id !== id)
    ];
    else (0, _dataSettingJs.toDos).did = [
        ...(0, _dataSettingJs.toDos).did.filter((toDo)=>toDo.id !== id)
    ];
    localStorage.setItem("toDos", JSON.stringify((0, _dataSettingJs.toDos)));
    (0, _paginationJs.deletePagination)();
    (0, _dataSettingJs.getStatusProgress)();
    (0, _createToDoListJs.createToDoList)(true);
};
const toInProgress = (eventTarget)=>{
    const id = getId(eventTarget);
    (0, _dataSettingJs.toDos).toDo.forEach((toDo)=>{
        if (toDo.id === id) {
            toDo.status = "inProgress";
            eventTarget.closest(".list-item").classList.add("in-progress");
            (0, _dataSettingJs.getStatusProgress)();
        }
    });
};
const toDid = (eventTarget)=>{
    const id = getId(eventTarget);
    (0, _dataSettingJs.toDos).toDo.forEach((toDo1)=>{
        if (toDo1.id === id) {
            toDo1.status = "did";
            (0, _dataSettingJs.toDos).did.push(toDo1);
            (0, _dataSettingJs.toDos).toDo = [
                ...(0, _dataSettingJs.toDos).toDo.filter((toDo)=>toDo.id !== id)
            ];
            (0, _dataSettingJs.getStatusProgress)();
            (0, _createToDoListJs.createToDoList)(true);
        }
    });
};
const toDosControl = ()=>{
    const actionBtns = document.querySelectorAll(".js-action-btns");
    actionBtns.forEach((item)=>item.addEventListener("click", getActions));
};
exports.default = toDosControl;

},{"../createToDoList/createToDoList.js":"k9Zbf","../dataSetting/dataSetting.js":"6ipGD","../pagination/pagination/pagination.js":"7SfTX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVplg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateToDoItem", ()=>templateToDoItem);
parcelHelpers.export(exports, "templateToDoItemDid", ()=>templateToDoItemDid);
const templateToDoItem = ({ id , date , title , description , status  })=>{
    const classForStatus = "in-progress";
    return `
      <li class="list-item js-list-item ${status === "inProgress" ? classForStatus : null}" data-id="${id}">
         <div class="list-item-title">
            <h2>${title}</h2>
            <p>${date}</p>
         </div>
         <div class="list-item-description">
            <p>${description}</p>
         </div>
         <div class="js-action-btns">
            <button class="delete-btn" data-action="delete-btn">&#x2718</button>
            <button class="in-progress-btn" data-action="in-progress-btn">&#10140</button>
            <button class="complete-btn" data-action="complete-btn">&#x2714</button>
         </div>
      </li>
   `;
};
const templateToDoItemDid = ({ id , title , description  })=>{
    return `
         <li class="list-item-did js-list-item" data-id="${id}">
            <div class="list-item-did-text">
               <div>
                  <h2>${title}</h2>
               </div>
               <div class="list-item-did-discription">
                  <p>${description}</p>
               </div>
            </div>
            <div class="js-action-btns">
               <button class="did-delete-btn" data-action="delete-btn">&#x2718</button>
            </div>
         </li>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"uQY1s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataSettingJs = require("../../dataSetting/dataSetting.js");
const products = {
    itemsPerPage: 6,
    currentPage: 1,
    getQuantity: function() {
        return (0, _dataSettingJs.checkInset)().length;
    }
};
exports.default = products;

},{"../../dataSetting/dataSetting.js":"6ipGD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvnbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPageNumber", ()=>createPageNumber);
const createPageNumber = (num, i, products)=>{
    const activePageNumber = "activePage";
    return `<li data-page="${num}" class="${num === products.currentPage ? activePageNumber : null}">${num}</li>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pjPG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _settingsPaginationJs = require("../pagination/settingPagination/settingsPagination.js");
var _settingsPaginationJsDefault = parcelHelpers.interopDefault(_settingsPaginationJs);
var _createToDoListJs = require("../createToDoList/createToDoList.js");
var _dataSettingJs = require("../dataSetting/dataSetting.js");
var _toolBarJs = require("../toolBar/toolBar.js");
const navigation = document.querySelector(".nav");
const activeNavButton = (event)=>{
    event.preventDefault();
    const activeButton = navigation.querySelector(".active");
    if (event.target === event.currentTarget) return;
    activeButton && activeButton.classList.remove("active");
    event.target.classList.add("active");
    actionMode(event.target);
};
const checkMode = ()=>{
    (0, _dataSettingJs.saveActiveInset)(navigation.children[0].dataset.action);
    (0, _toolBarJs.startToolBar)();
    (0, _createToDoListJs.createToDoList)(true);
};
const actionMode = (eventTarget)=>{
    (0, _dataSettingJs.saveActiveInset)(eventTarget.dataset.action);
    (0, _settingsPaginationJsDefault.default).currentPage = 1;
    (0, _createToDoListJs.createToDoList)(true);
    (0, _toolBarJs.switchToolBar)(eventTarget);
};
const header = ()=>{
    checkMode();
    navigation.addEventListener("click", activeNavButton);
};
exports.default = header;

},{"../pagination/settingPagination/settingsPagination.js":"uQY1s","../createToDoList/createToDoList.js":"k9Zbf","../dataSetting/dataSetting.js":"6ipGD","../toolBar/toolBar.js":"erluX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"erluX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startToolBar", ()=>startToolBar);
parcelHelpers.export(exports, "switchToolBar", ()=>switchToolBar);
var _templatesToolBarJs = require("../templates/templatesToolBar.js");
var _formJs = require("../form/form.js");
var _dataSettingJs = require("../dataSetting/dataSetting.js");
var _createToDoListJs = require("../createToDoList/createToDoList.js");
const toolBarBlock = document.querySelector(".tool_bar");
const startToolBar = ()=>{
    toolBarBlock.innerHTML = (0, _templatesToolBarJs.templateToolBarElementToDo)();
    toolBarElements();
};
const switchToolBar = (eventTarget)=>{
    const { action  } = eventTarget.dataset;
    if (action === "toDo") toolBarBlock.innerHTML = (0, _templatesToolBarJs.templateToolBarElementToDo)();
    if (action === "inProgress") toolBarBlock.innerHTML = (0, _templatesToolBarJs.templateToolBarElementInprogress)();
    if (action === "did") toolBarBlock.innerHTML = (0, _templatesToolBarJs.templateToolBarElementDid)();
    (0, _formJs.closeFormTodo)();
    toolBarElements();
};
const clearAllinDid = ()=>{
    (0, _dataSettingJs.toDos).did = [
        ...(0, _dataSettingJs.toDos).did.filter((toDo)=>toDo.status !== "did")
    ];
    (0, _createToDoListJs.createToDoList)(true);
};
const search = (event)=>{
    localStorage.setItem("inset", JSON.stringify("search"));
    const { value  } = event.target;
    if (event.target.name === "searchToDo") (0, _dataSettingJs.toDos).search = [
        ...(0, _dataSettingJs.toDos).toDo.filter((toDo)=>toDo.title.toLowerCase().includes(value)), 
    ];
    if (event.target.name === "searchIProgress") (0, _dataSettingJs.toDos).search = [
        ...(0, _dataSettingJs.toDos).inProgress.filter((toDo)=>toDo.title.toLowerCase().includes(value)), 
    ];
    (0, _createToDoListJs.createToDoList)();
    (0, _dataSettingJs.toDos).search = [];
};
const toolBarElements = ()=>{
    const buttonAdd = document.querySelector(".js-button-add");
    const clearAllBtn = document.querySelector(".js-button-clear-all");
    const searchInput = document.querySelector(".js-input-search");
    buttonAdd && buttonAdd.addEventListener("click", (0, _formJs.openFormTodo));
    clearAllBtn && clearAllBtn.addEventListener("click", clearAllinDid);
    searchInput && searchInput.addEventListener("input", search);
};

},{"../templates/templatesToolBar.js":"b3W5Y","../form/form.js":"iwnOo","../dataSetting/dataSetting.js":"6ipGD","../createToDoList/createToDoList.js":"k9Zbf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3W5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "templateToolBarElementToDo", ()=>templateToolBarElementToDo);
parcelHelpers.export(exports, "templateToolBarElementInprogress", ()=>templateToolBarElementInprogress);
parcelHelpers.export(exports, "templateToolBarElementDid", ()=>templateToolBarElementDid);
const templateToolBarElementToDo = ()=>{
    return `<div class="tool_bar_item tool_bar_item-todo">
            <button class="button_add js-button-add">add to do</button>
            <div class="block_search">
               <input type="text" class="input_search js-input-search" name="searchToDo" data-search="input-search-toDo" placeholder="search...">
               <img src="./images/icon-search.png" alt="">
            </div>
         </div>`;
};
const templateToolBarElementInprogress = ()=>{
    return `<div class="tool_bar_item tool_bar_item-inprogress">
            <div class="block_search">
               <input type="text" class="input_search js-input-search" name="searchIProgress" data-search="input-search-inProgress" placeholder="search...">
               <img src="./images/icon-search.png" alt="">
            </div>
         </div>`;
};
const templateToolBarElementDid = ()=>{
    return `<div class="tool_bar_item tool_bar_item-inprogress">
            <button class="button_add js-button-clear-all">clear all</button>
         </div>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwnOo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openFormTodo", ()=>openFormTodo);
parcelHelpers.export(exports, "closeFormTodo", ()=>closeFormTodo);
parcelHelpers.export(exports, "actionFormToDo", ()=>actionFormToDo);
var _createToDoItemsJs = require("../createToDoItems/createToDoItems.js");
var _createToDoItemsJsDefault = parcelHelpers.interopDefault(_createToDoItemsJs);
const formToDo = document.querySelector(".js-form-toDo");
const openFormTodo = ()=>{
    const close = document.querySelector(".close");
    close && formToDo.classList.remove("close");
    formToDo.classList.remove("hidden");
};
const closeFormTodo = ()=>{
    formToDo.classList.add("hidden");
};
const actionFormToDo = (event)=>{
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") return;
    if (event.target.dataset.action === "cancel") {
        formToDo.classList.add("close");
        setTimeout(closeFormTodo, 300);
        return;
    }
    if (event.target.dataset.action === "add") {
        (0, _createToDoItemsJsDefault.default)();
        formToDo.classList.add("close");
        setTimeout(closeFormTodo, 300);
    }
};
formToDo.addEventListener("click", actionFormToDo);

},{"../createToDoItems/createToDoItems.js":"2WjBt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WjBt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataSettingJs = require("../dataSetting/dataSetting.js");
var _createToDoListJs = require("../createToDoList/createToDoList.js");
var _templatesToDoItemJs = require("../templates/templatesToDoItem.js");
var _getIdJs = require("../getId/getId.js");
const createToDoItems = ()=>{
    const form = document.forms.itemCreateForm;
    const titleOfTodo = form.elements.title;
    const descriptionOfTodo = form.elements.description;
    const listItems = document.querySelector(".toDo-list");
    const date = new Date();
    const toDoItem = {
        id: (0, _getIdJs.getId)((0, _dataSettingJs.toDos)),
        date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
        status: "noStatus",
        title: titleOfTodo.value,
        description: descriptionOfTodo.value
    };
    form.reset();
    (0, _dataSettingJs.toDos).toDo.unshift(toDoItem);
    const getData = JSON.parse(localStorage.getItem("toDos"));
    getData.toDo.unshift(toDoItem);
    localStorage.setItem("toDos", JSON.stringify(getData));
    listItems.insertAdjacentHTML("afterbegin", (0, _templatesToDoItemJs.templateToDoItem)(toDoItem));
    (0, _createToDoListJs.createToDoList)(true);
};
exports.default = createToDoItems;

},{"../dataSetting/dataSetting.js":"6ipGD","../createToDoList/createToDoList.js":"k9Zbf","../templates/templatesToDoItem.js":"bVplg","../getId/getId.js":"fljK0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fljK0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getId", ()=>getId);
const getId = (data)=>{
    const basicValue = {
        arrayId: [],
        min: 1000000000000,
        max: 9999999999999,
        id: 1
    };
    data.toDo.forEach((idItem)=>{
        basicValue.arrayId.push(idItem.id);
    });
    let testId = "";
    let filter = "";
    do {
        const forId = basicValue.min - 0.5 + Math.random() * (basicValue.max - basicValue.min + 1);
        testId = Math.floor(forId).toString();
        filter = basicValue.arrayId.includes(testId);
    }while (filter);
    basicValue.id = testId;
    return basicValue.id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyxGu":[function() {},{}]},["1RB6v","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
