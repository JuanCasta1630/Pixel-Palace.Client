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

/***/ "(app-pages-browser)/./src/app/components/Avatars/index.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/Avatars/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RandomAvatar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/avatar */ \"(app-pages-browser)/./node_modules/antd/lib/avatar/index.js\");\n\n\nfunction generateRandomAvatarURL() {\n    const randomString = Math.random().toString(36).substring(7);\n    const baseURL = \"https://robohash.org/\".concat(randomString);\n    return baseURL;\n}\nfunction RandomAvatar() {\n    const randomAvatarURL = generateRandomAvatarURL();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        className: \"bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]\",\n        src: randomAvatarURL\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = RandomAvatar;\nvar _c;\n$RefreshReg$(_c, \"RandomAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdmF0YXJzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThCO0FBRTlCLFNBQVNDO0lBQ1AsTUFBTUMsZUFBZUMsS0FBS0MsTUFBTSxHQUFHQyxRQUFRLENBQUMsSUFBSUMsU0FBUyxDQUFDO0lBRTFELE1BQU1DLFVBQVUsd0JBQXFDLE9BQWJMO0lBRXhDLE9BQU9LO0FBQ1Q7QUFFZSxTQUFTQztJQUN0QixNQUFNQyxrQkFBa0JSO0lBRXhCLHFCQUNFLDhEQUFDRCx1REFBTUE7UUFBQ1UsV0FBVTtRQUErQ0MsS0FBS0Y7Ozs7OztBQUcxRTtLQVB3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0F2YXRhcnMvaW5kZXgudHN4P2Y1ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCgpIHtcclxuICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcblxyXG4gIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly9yb2JvaGFzaC5vcmcvJHtyYW5kb21TdHJpbmd9YDtcclxuXHJcbiAgcmV0dXJuIGJhc2VVUkw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmRvbUF2YXRhcigpIHtcclxuICBjb25zdCByYW5kb21BdmF0YXJVUkwgPSBnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF2YXRhciBjbGFzc05hbWU9J2JnLWdyYXktMjAwIGRhcms6YmctZ3JheS0yMDAgdy1bNWVtXSBoLVszZW1dJyBzcmM9e3JhbmRvbUF2YXRhclVSTH0gLz5cclxuXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXZhdGFyIiwiZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJiYXNlVVJMIiwiUmFuZG9tQXZhdGFyIiwicmFuZG9tQXZhdGFyVVJMIiwiY2xhc3NOYW1lIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Avatars/index.tsx\n"));

/***/ })

});