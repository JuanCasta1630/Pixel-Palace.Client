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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Avatars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatars */ \"(app-pages-browser)/./src/app/components/Avatars/index.tsx\");\n/* harmony import */ var _CreateGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CreateGame */ \"(app-pages-browser)/./src/app/components/CreateGame/index.tsx\");\n/* harmony import */ var _app_services_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/services/firebase */ \"(app-pages-browser)/./src/app/services/firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AvatarWithDropdown = ()=>{\n    _s();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { user, cerrarSesion } = (0,_app_services_firebase__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const handleMenuChange = (event)=>{\n        setSelectedOption(event.target.value);\n    // Puedes realizar acciones adicionales según la opción seleccionada\n    };\n    const handleSignOut = async ()=>{\n        await cerrarSesion();\n        window.location.href = \"/\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"avatar-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatars__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    onChange: handleMenuChange,\n                    value: selectedOption,\n                    className: \"text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CreateGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 35\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"opcion1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: cerrarSesion,\n                                className: \"text-white\",\n                                children: \"Sign out\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\MenuAvatar\\\\index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AvatarWithDropdown, \"yXRKK9CxADJ6+7yrbctfCWaN7JQ=\", false, function() {\n    return [\n        _app_services_firebase__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = AvatarWithDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AvatarWithDropdown);\nvar _c;\n$RefreshReg$(_c, \"AvatarWithDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NZW51QXZhdGFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNDO0FBQ1c7QUFFbEQsTUFBTUsscUJBQXFCOztJQUN6QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sRUFBRU8sSUFBSSxFQUFFQyxZQUFZLEVBQUUsR0FBR0wsK0RBQU9BO0lBRXRDLE1BQU1NLG1CQUFtQixDQUFDQztRQUN4Qkosa0JBQWtCSSxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDcEMsb0VBQW9FO0lBQ3RFO0lBRUEsTUFBTUMsZ0JBQWdCO1FBQ3BCLE1BQU1MO1FBQ05NLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDakIsZ0RBQVlBOzs7Ozs4QkFDYiw4REFBQ2tCO29CQUNDQyxVQUFVWDtvQkFDVkcsT0FBT1A7b0JBQ1BhLFdBQVU7O3NDQUVWLDhEQUFDRzs0QkFBT1QsT0FBTTtzQ0FBVSw0RUFBQ1YsbURBQVVBOzs7Ozs7Ozs7O3NDQUNuQyw4REFBQ21COzRCQUFPVCxPQUFNO3NDQUNkLDRFQUFDVTtnQ0FBT0MsU0FBU2Y7Z0NBQWNVLFdBQVU7MENBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRTtHQWpDTWQ7O1FBRTJCRCwyREFBT0E7OztLQUZsQ0M7QUFtQ04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTWVudUF2YXRhci9pbmRleC50c3g/OGZlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJhbmRvbUF2YXRhciBmcm9tIFwiLi4vQXZhdGFyc1wiO1xyXG5pbXBvcnQgQ3JlYXRlR2FtZSBmcm9tIFwiLi4vQ3JlYXRlR2FtZVwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2VzL2ZpcmViYXNlXCI7XHJcblxyXG5jb25zdCBBdmF0YXJXaXRoRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCB7IHVzZXIsIGNlcnJhclNlc2lvbiB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZE9wdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gUHVlZGVzIHJlYWxpemFyIGFjY2lvbmVzIGFkaWNpb25hbGVzIHNlZ8O6biBsYSBvcGNpw7NuIHNlbGVjY2lvbmFkYVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBjZXJyYXJTZXNpb24oKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxSYW5kb21BdmF0YXIgLz5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWVudUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcGNpb24xXCI+PENyZWF0ZUdhbWUvPjwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm9wY2lvbjFcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2VycmFyU2VzaW9ufSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXJXaXRoRHJvcGRvd247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmFuZG9tQXZhdGFyIiwiQ3JlYXRlR2FtZSIsInVzZUF1dGgiLCJBdmF0YXJXaXRoRHJvcGRvd24iLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwidXNlciIsImNlcnJhclNlc2lvbiIsImhhbmRsZU1lbnVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2lnbk91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MenuAvatar/index.tsx\n"));

/***/ })

});