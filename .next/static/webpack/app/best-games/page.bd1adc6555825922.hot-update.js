"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/best-games/page",{

/***/ "(app-pages-browser)/./src/app/components/Avatars/index.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/Avatars/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ \"(app-pages-browser)/./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateGame */ \"(app-pages-browser)/./src/app/components/CreateGame/index.tsx\");\n/* harmony import */ var _app_services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/services/firebase */ \"(app-pages-browser)/./src/app/services/firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction generateRandomAvatarURL() {\n    const randomString = Math.random().toString(36).substring(7);\n    const baseURL = \"https://robohash.org/\".concat(randomString);\n    return baseURL;\n}\nconst AvatarWithDropdown = ()=>{\n    _s();\n    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { user, cerrarSesion } = (0,_app_services_firebase__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleMenuToggle = ()=>{\n        setMenuOpen(!isMenuOpen);\n    };\n    const handleMenuChange = (event)=>{\n        setSelectedOption(event.target.value);\n    };\n    const handleSignOut = async ()=>{\n        cerrarSesion();\n        window.location.href = \"/\";\n    };\n    const randomAvatarURL = generateRandomAvatarURL();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-pointer\",\n                onClick: handleMenuToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]\",\n                    src: randomAvatarURL\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-10 right-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleMenuChange,\n                    value: selectedOption,\n                    className: \"p-2 text-white bg-gray-800 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSignOut,\n                                className: \"text-white\",\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AvatarWithDropdown, \"u4TEOH5JTOrXNVY4Bq3trZg2FEk=\", false, function() {\n    return [\n        _app_services_firebase__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = AvatarWithDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarWithDropdown);\nvar _c;\n$RefreshReg$(_c, \"AvatarWithDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdmF0YXJzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNTO0FBQ1c7QUFFbEQsU0FBU0s7SUFDUCxNQUFNQyxlQUFlQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUM7SUFDMUQsTUFBTUMsVUFBVSx3QkFBcUMsT0FBYkw7SUFDeEMsT0FBT0s7QUFDVDtBQUVBLE1BQU1DLHFCQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxZQUFZQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxFQUFFZ0IsSUFBSSxFQUFFQyxZQUFZLEVBQUUsR0FBR2QsK0RBQU9BO0lBRXRDLE1BQU1lLG1CQUFtQjtRQUN2QkwsWUFBWSxDQUFDRDtJQUNmO0lBRUEsTUFBTU8sbUJBQW1CLENBQUNDO1FBQ3hCTCxrQkFBa0JLLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUN0QztJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQk47UUFDQU8sT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7SUFDekI7SUFFQSxNQUFNQyxrQkFBa0J2QjtJQUV4QixxQkFDRSw4REFBQ3dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBaUJDLFNBQVNaOzBCQUN2Qyw0RUFBQ2pCLHVEQUFNQTtvQkFBQzRCLFdBQVU7b0JBQStDRSxLQUFLSjs7Ozs7Ozs7Ozs7WUFFdkVmLDRCQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUNDQyxVQUFVZDtvQkFDVkcsT0FBT1I7b0JBQ1BlLFdBQVU7O3NDQUVWLDhEQUFDSzs0QkFBT1osT0FBTTtzQ0FBVSw0RUFBQ3BCLG1EQUFVQTs7Ozs7Ozs7OztzQ0FDbkMsOERBQUNnQzs0QkFBT1osT0FBTTtzQ0FDWiw0RUFBQ2E7Z0NBQU9MLFNBQVNQO2dDQUFlTSxXQUFVOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3JFO0dBM0NNbEI7O1FBRzJCUiwyREFBT0E7OztLQUhsQ1E7QUE2Q04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQXZhdGFycy9pbmRleC50c3g/ZjVmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBDcmVhdGVHYW1lIGZyb20gXCIuLi9DcmVhdGVHYW1lXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9hcHAvc2VydmljZXMvZmlyZWJhc2VcIjtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tQXZhdGFyVVJMKCkge1xyXG4gIGNvbnN0IHJhbmRvbVN0cmluZyA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcclxuICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vcm9ib2hhc2gub3JnLyR7cmFuZG9tU3RyaW5nfWA7XHJcbiAgcmV0dXJuIGJhc2VVUkw7XHJcbn1cclxuXHJcbmNvbnN0IEF2YXRhcldpdGhEcm9wZG93biA9ICgpID0+IHtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgeyB1c2VyLCBjZXJyYXJTZXNpb24gfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldE1lbnVPcGVuKCFpc01lbnVPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjZXJyYXJTZXNpb24oKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhbmRvbUF2YXRhclVSTCA9IGdlbmVyYXRlUmFuZG9tQXZhdGFyVVJMKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlTWVudVRvZ2dsZX0+XHJcbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9J2JnLWdyYXktMjAwIGRhcms6YmctZ3JheS0yMDAgdy1bNWVtXSBoLVszZW1dJyBzcmM9e3JhbmRvbUF2YXRhclVSTH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc01lbnVPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xMCByaWdodC0wXCI+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZW51Q2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3BjaW9uMVwiPjxDcmVhdGVHYW1lLz48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wY2lvbjJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyV2l0aERyb3Bkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF2YXRhciIsIkNyZWF0ZUdhbWUiLCJ1c2VBdXRoIiwiZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJiYXNlVVJMIiwiQXZhdGFyV2l0aERyb3Bkb3duIiwiaXNNZW51T3BlbiIsInNldE1lbnVPcGVuIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsInVzZXIiLCJjZXJyYXJTZXNpb24iLCJoYW5kbGVNZW51VG9nZ2xlIiwiaGFuZGxlTWVudUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmFuZG9tQXZhdGFyVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Avatars/index.tsx\n"));

/***/ })

});