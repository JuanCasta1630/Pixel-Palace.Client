"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/gift-cards/page",{

/***/ "(app-pages-browser)/./src/app/components/MenuAvatar/index.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/MenuAvatar/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RandomAvatar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/avatar */ \"(app-pages-browser)/./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ \"(app-pages-browser)/./node_modules/antd/lib/menu/index.js\");\n/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown */ \"(app-pages-browser)/./node_modules/antd/lib/dropdown/index.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/lib/icons/DownOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/DownOutlined.js\");\n/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreateGame */ \"(app-pages-browser)/./src/app/components/CreateGame/index.tsx\");\n/* harmony import */ var _app_services_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/services/firebase */ \"(app-pages-browser)/./src/app/services/firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction generateRandomAvatarURL() {\n    const randomString = Math.random().toString(36).substring(7);\n    const baseURL = \"https://robohash.org/\".concat(randomString);\n    return baseURL;\n}\nfunction RandomAvatar() {\n    _s();\n    const randomAvatarURL = generateRandomAvatarURL();\n    const { cerrarSesion } = (0,_app_services_firebase__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const menu = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, \"1\", false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Item, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: cerrarSesion,\n                    className: \"text-white\",\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, \"2\", false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n    const handleSignOut = async ()=>{\n        await cerrarSesion();\n        window.location.href = \"/\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        overlay: menu,\n        trigger: [\n            \"click\"\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]\",\n            src: randomAvatarURL,\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons_lib_icons_DownOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(RandomAvatar, \"M3/yUCYOzQovaOae+mS7AEwv0+w=\", false, function() {\n    return [\n        _app_services_firebase__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = RandomAvatar;\nvar _c;\n$RefreshReg$(_c, \"RandomAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NZW51QXZhdGFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQUE7QUFBQTtBQUNHO0FBQ1Y7QUFDVztBQUVsRCxTQUFTTTtJQUNQLE1BQU1DLGVBQWVDLEtBQUtDLE1BQU0sR0FBR0MsUUFBUSxDQUFDLElBQUlDLFNBQVMsQ0FBQztJQUMxRCxNQUFNQyxVQUFVLHdCQUFxQyxPQUFiTDtJQUN4QyxPQUFPSztBQUNUO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU1DLGtCQUFrQlI7SUFDeEIsTUFBTSxFQUFFUyxZQUFZLEVBQUUsR0FBR1YsK0RBQU9BO0lBQ2hDLE1BQU1XLHFCQUNKLDhEQUFDZixxREFBSUE7OzBCQUNILDhEQUFDQSxxREFBSUEsQ0FBQ2dCLElBQUk7MEJBQ1IsNEVBQUNiLG1EQUFVQTs7Ozs7ZUFERTs7Ozs7MEJBR2YsOERBQUNILHFEQUFJQSxDQUFDZ0IsSUFBSTswQkFDUiw0RUFBQ0M7b0JBQU9DLFNBQVNKO29CQUFjSyxXQUFVOzhCQUFhOzs7Ozs7ZUFEekM7Ozs7Ozs7Ozs7O0lBT25CLE1BQU1DLGdCQUFnQjtRQUNwQixNQUFNTjtRQUNOTyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBRztJQUN6QjtJQUNBLHFCQUNFLDhEQUFDdEIseURBQVFBO1FBQUN1QixTQUFTVDtRQUFNVSxTQUFTO1lBQUM7U0FBUTtrQkFDekMsNEVBQUMxQix1REFBTUE7WUFDTG9CLFdBQVU7WUFDVk8sS0FBS2I7WUFDTGMsb0JBQU0sOERBQUN6QixnRkFBWUE7Ozs7Ozs7Ozs7O0FBSTNCO0dBNUJ3QlU7O1FBRUdSLDJEQUFPQTs7O0tBRlZRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9NZW51QXZhdGFyL2luZGV4LnRzeD84ZmUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgTWVudSwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBEb3duT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IENyZWF0ZUdhbWUgZnJvbSBcIi4uL0NyZWF0ZUdhbWVcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2FwcC9zZXJ2aWNlcy9maXJlYmFzZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwoKSB7XHJcbiAgY29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xyXG4gIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJHtyYW5kb21TdHJpbmd9YDtcclxuICByZXR1cm4gYmFzZVVSTDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZG9tQXZhdGFyKCkge1xyXG4gIGNvbnN0IHJhbmRvbUF2YXRhclVSTCA9IGdlbmVyYXRlUmFuZG9tQXZhdGFyVVJMKCk7XHJcbiAgY29uc3QgeyBjZXJyYXJTZXNpb24gfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBtZW51ID0gKFxyXG4gICAgPE1lbnU+XHJcbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPlxyXG4gICAgICAgIDxDcmVhdGVHYW1lIC8+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NlcnJhclNlc2lvbn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgY2VycmFyU2VzaW9uKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbXCJjbGlja1wiXX0+XHJcbiAgICAgIDxBdmF0YXJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktMjAwIHctWzVlbV0gaC1bM2VtXVwiXHJcbiAgICAgICAgc3JjPXtyYW5kb21BdmF0YXJVUkx9XHJcbiAgICAgICAgaWNvbj17PERvd25PdXRsaW5lZCAvPn1cclxuICAgICAgLz5cclxuICAgIDwvRHJvcGRvd24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiTWVudSIsIkRyb3Bkb3duIiwiRG93bk91dGxpbmVkIiwiQ3JlYXRlR2FtZSIsInVzZUF1dGgiLCJnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCIsInJhbmRvbVN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsImJhc2VVUkwiLCJSYW5kb21BdmF0YXIiLCJyYW5kb21BdmF0YXJVUkwiLCJjZXJyYXJTZXNpb24iLCJtZW51IiwiSXRlbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwib3ZlcmxheSIsInRyaWdnZXIiLCJzcmMiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MenuAvatar/index.tsx\n"));

/***/ })

});