"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/MenuAvatar/index.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/MenuAvatar/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RandomAvatar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar */ \"(app-pages-browser)/./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ \"(app-pages-browser)/./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown */ \"(app-pages-browser)/./node_modules/antd/lib/dropdown/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/DownOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/DownOutlined.js\");\n/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreateGame */ \"(app-pages-browser)/./src/app/components/CreateGame/index.tsx\");\n/* harmony import */ var _app_services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/firebase */ \"(app-pages-browser)/./src/app/services/firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction generateRandomAvatarURL() {\n    const randomString = Math.random().toString(36).substring(7);\n    const baseURL = \"https://robohash.org/\".concat(randomString);\n    return baseURL;\n}\nfunction RandomAvatar() {\n    _s();\n    const randomAvatarURL = generateRandomAvatarURL();\n    const { cerrarSesion } = (0,_app_services_firebase__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const menu = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 26\n                }, this)\n            }, \"1\", false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {}, \"2\", false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n    const handleSignOut = async ()=>{\n        await cerrarSesion();\n        window.location.href = \"/\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        overlay: menu,\n        trigger: [\n            \"click\"\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]\",\n            src: randomAvatarURL,\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(RandomAvatar, \"M3/yUCYOzQovaOae+mS7AEwv0+w=\", false, function() {\n    return [\n        _app_services_firebase__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = RandomAvatar;\nvar _c;\n$RefreshReg$(_c, \"RandomAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NZW51QXZhdGFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQUE7QUFBQTtBQUNHO0FBQ1Y7QUFDVztBQUVsRCxTQUFTTTtJQUNQLE1BQU1DLGVBQWVDLEtBQUtDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLElBQUlDLFNBQVMsQ0FBQztJQUMxRCxNQUFNQyxVQUFVLHdCQUFxQyxPQUFiTDtJQUN4QyxPQUFPSztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU1DLGtCQUFrQlI7SUFDeEIsTUFBTSxFQUFFUyxZQUFZLEVBQUUsR0FBR1YsK0RBQU9BO0lBQ2hDLE1BQU1XLHFCQUNKLDhEQUFDZixxREFBSUE7OzBCQUNILDhEQUFDQSxxREFBSUEsQ0FBQ2dCLElBQUk7MEJBQVMsNEVBQUNiLG1EQUFVQTs7Ozs7ZUFBZjs7Ozs7MEJBQ2YsOERBQUNILHFEQUFJQSxDQUFDZ0IsSUFBSSxNQUFLOzs7Ozs7Ozs7OztJQUduQixNQUFNQyxnQkFBZ0I7UUFDcEIsTUFBTUg7UUFDTkksT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFDQSxxQkFDRSw4REFBQ25CLHlEQUFRQTtRQUFDb0IsU0FBU047UUFBTU8sU0FBUztZQUFDO1NBQVE7a0JBQ3pDLDRFQUFDdkIsdURBQU1BO1lBQ0x3QixXQUFVO1lBQ1ZDLEtBQUtYO1lBQ0xZLG9CQUFNLDhEQUFDdkIsZ0ZBQVlBOzs7Ozs7Ozs7OztBQUkzQjtHQXRCd0JVOztRQUVHUiwyREFBT0E7OztLQUZWUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWVudUF2YXRhci9pbmRleC50c3g/OGZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIE1lbnUsIERyb3Bkb3duIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERvd25PdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IENyZWF0ZUdhbWUgZnJvbSAnLi4vQ3JlYXRlR2FtZSc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2FwcC9zZXJ2aWNlcy9maXJlYmFzZSc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCgpIHtcclxuICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL3JvYm9oYXNoLm9yZy8ke3JhbmRvbVN0cmluZ31gO1xyXG4gIHJldHVybiBiYXNlVVJMO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5kb21BdmF0YXIoKSB7XHJcbiAgY29uc3QgcmFuZG9tQXZhdGFyVVJMID0gZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwoKTtcclxuICBjb25zdCB7IGNlcnJhclNlc2lvbiB9ID0gdXNlQXV0aCgpO1xyXG4gIGNvbnN0IG1lbnUgPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+PENyZWF0ZUdhbWUvPjwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj48L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjZXJyYXJTZXNpb24oKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgIDxBdmF0YXJcclxuICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktMjAwIGRhcms6YmctZ3JheS0yMDAgdy1bNWVtXSBoLVszZW1dJ1xyXG4gICAgICAgIHNyYz17cmFuZG9tQXZhdGFyVVJMfVxyXG4gICAgICAgIGljb249ezxEb3duT3V0bGluZWQgLz59XHJcbiAgICAgIC8+XHJcbiAgICA8L0Ryb3Bkb3duPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF2YXRhciIsIk1lbnUiLCJEcm9wZG93biIsIkRvd25PdXRsaW5lZCIsIkNyZWF0ZUdhbWUiLCJ1c2VBdXRoIiwiZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJiYXNlVVJMIiwiUmFuZG9tQXZhdGFyIiwicmFuZG9tQXZhdGFyVVJMIiwiY2VycmFyU2VzaW9uIiwibWVudSIsIkl0ZW0iLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3ZlcmxheSIsInRyaWdnZXIiLCJjbGFzc05hbWUiLCJzcmMiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MenuAvatar/index.tsx\n"));

/***/ })

});