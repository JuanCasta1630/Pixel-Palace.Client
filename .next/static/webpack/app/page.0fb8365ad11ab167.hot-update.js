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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/avatar */ \"(app-pages-browser)/./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateGame */ \"(app-pages-browser)/./src/app/components/CreateGame/index.tsx\");\n/* harmony import */ var _app_services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/services/firebase */ \"(app-pages-browser)/./src/app/services/firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction generateRandomAvatarURL() {\n    const randomString = Math.random().toString(36).substring(7);\n    const baseURL = \"https://robohash.org/\".concat(randomString);\n    return baseURL;\n}\nconst AvatarWithDropdown = ()=>{\n    _s();\n    const [isMenuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { user, cerrarSesion } = (0,_app_services_firebase__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const handleMenuToggle = ()=>{\n        setMenuOpen(!isMenuOpen);\n    };\n    const handleMenuChange = (event)=>{\n        setSelectedOption(event.target.value);\n    // Puedes realizar acciones adicionales según la opción seleccionada\n    };\n    const handleSignOut = async ()=>{\n        cerrarSesion();\n        window.location.href = \"/\";\n    };\n    const randomAvatarURL = generateRandomAvatarURL();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative inline-block\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cursor-pointer\",\n                onClick: handleMenuToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"bg-gray-200 dark:bg-gray-200 w-[5em] h-[3em]\",\n                    src: randomAvatarURL\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute mt-2 p-2 bg-gray-800 rounded\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleMenuChange,\n                    value: selectedOption,\n                    className: \"p-2 text-white bg-gray-800 rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 37\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSignOut,\n                                className: \"text-white\",\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Avatars\\\\index.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AvatarWithDropdown, \"u4TEOH5JTOrXNVY4Bq3trZg2FEk=\", false, function() {\n    return [\n        _app_services_firebase__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = AvatarWithDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarWithDropdown);\nvar _c;\n$RefreshReg$(_c, \"AvatarWithDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdmF0YXJzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDVjtBQUNTO0FBQ1c7QUFFbEQsU0FBU0s7SUFDUCxNQUFNQyxlQUFlQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUM7SUFDMUQsTUFBTUMsVUFBVSx3QkFBcUMsT0FBYkw7SUFDeEMsT0FBT0s7QUFDVDtBQUVBLE1BQU1DLHFCQUFxQjs7SUFDekIsTUFBTSxDQUFDQyxZQUFZQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxFQUFFZ0IsSUFBSSxFQUFFQyxZQUFZLEVBQUUsR0FBR2QsK0RBQU9BO0lBRXRDLE1BQU1lLG1CQUFtQjtRQUN2QkwsWUFBWSxDQUFDRDtJQUNmO0lBRUEsTUFBTU8sbUJBQW1CLENBQUNDO1FBQ3hCTCxrQkFBa0JLLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNwQyxvRUFBb0U7SUFDdEU7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJOO1FBQ0FPLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEsTUFBTUMsa0JBQWtCdkI7SUFFeEIscUJBQ0UsOERBQUN3QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWlCQyxTQUFTWjswQkFDdkMsNEVBQUNqQix1REFBTUE7b0JBQUM0QixXQUFVO29CQUErQ0UsS0FBS0o7Ozs7Ozs7Ozs7O1lBRXZFZiw0QkFDQyw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRztvQkFDQ0MsVUFBVWQ7b0JBQ1ZHLE9BQU9SO29CQUNQZSxXQUFVOztzQ0FFViw4REFBQ0s7NEJBQU9aLE9BQU07c0NBQVUsNEVBQUNwQixtREFBVUE7Ozs7Ozs7Ozs7c0NBQ25DLDhEQUFDZ0M7NEJBQU9aLE9BQU07c0NBQ1osNEVBQUNhO2dDQUFPTCxTQUFTUDtnQ0FBZU0sV0FBVTswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNyRTtHQTVDTWxCOztRQUcyQlIsMkRBQU9BOzs7S0FIbENRO0FBOENOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0F2YXRhcnMvaW5kZXgudHN4P2Y1ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ3JlYXRlR2FtZSBmcm9tIFwiLi4vQ3JlYXRlR2FtZVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2VzL2ZpcmViYXNlXCI7XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCgpIHtcclxuICBjb25zdCByYW5kb21TdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7XHJcbiAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL3JvYm9oYXNoLm9yZy8ke3JhbmRvbVN0cmluZ31gO1xyXG4gIHJldHVybiBiYXNlVVJMO1xyXG59XHJcblxyXG5jb25zdCBBdmF0YXJXaXRoRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHsgdXNlciwgY2VycmFyU2VzaW9uIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNZW51T3BlbighaXNNZW51T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRPcHRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIFB1ZWRlcyByZWFsaXphciBhY2Npb25lcyBhZGljaW9uYWxlcyBzZWfDum4gbGEgb3BjacOzbiBzZWxlY2Npb25hZGFcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY2VycmFyU2VzaW9uKCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuICB9O1xyXG5cclxuICBjb25zdCByYW5kb21BdmF0YXJVUkwgPSBnZW5lcmF0ZVJhbmRvbUF2YXRhclVSTCgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2hhbmRsZU1lbnVUb2dnbGV9PlxyXG4gICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktMjAwIHctWzVlbV0gaC1bM2VtXScgc3JjPXtyYW5kb21BdmF0YXJVUkx9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNNZW51T3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBtdC0yIHAtMiBiZy1ncmF5LTgwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNZW51Q2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXdoaXRlIGJnLWdyYXktODAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib3BjaW9uMVwiPjxDcmVhdGVHYW1lLz48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wY2lvbjJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyV2l0aERyb3Bkb3duO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF2YXRhciIsIkNyZWF0ZUdhbWUiLCJ1c2VBdXRoIiwiZ2VuZXJhdGVSYW5kb21BdmF0YXJVUkwiLCJyYW5kb21TdHJpbmciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJiYXNlVVJMIiwiQXZhdGFyV2l0aERyb3Bkb3duIiwiaXNNZW51T3BlbiIsInNldE1lbnVPcGVuIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsInVzZXIiLCJjZXJyYXJTZXNpb24iLCJoYW5kbGVNZW51VG9nZ2xlIiwiaGFuZGxlTWVudUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTaWduT3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmFuZG9tQXZhdGFyVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Avatars/index.tsx\n"));

/***/ })

});