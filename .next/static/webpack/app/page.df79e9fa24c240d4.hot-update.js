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

/***/ "(app-pages-browser)/./src/app/components/Categories/index.tsx":
/*!*************************************************!*\
  !*** ./src/app/components/Categories/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_categories_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categories.json */ \"(app-pages-browser)/./src/app/services/categories.json\");\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/card */ \"(app-pages-browser)/./node_modules/antd/lib/card/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CategoriasPage = ()=>{\n    _s();\n    const length = _services_categories_json__WEBPACK_IMPORTED_MODULE_2__.categorias.length;\n    const [numCategorias, setNumCategorias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const mostrarTodas = numCategorias === length;\n    const handleVerMasClick = ()=>{\n        if (mostrarTodas) {\n            setNumCategorias(5);\n        } else {\n            setNumCategorias(length);\n        }\n    };\n    const categories = _services_categories_json__WEBPACK_IMPORTED_MODULE_2__.categorias.slice(0, numCategorias);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"dark:bg-gray-400 text-white my-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-semibold mb-6\",\n                    children: \"Categories\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap justify-center items-center gap-4\",\n                    children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-home card2 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md max-w-xs w-48\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/categoria/\".concat(category.id),\n                                className: \"text-white font-semibold flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        width: \"2em\",\n                                        height: \"2em\",\n                                        viewBox: category.viewBox,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fill: \"currentColor\",\n                                            d: category.icon\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    category.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined)\n                        }, category.id, false, {\n                            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleVerMasClick,\n                    className: \"mt-6 button3 w-96 text-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: mostrarTodas ? \"See less\" : \"See more\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\Categories\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoriasPage, \"bzVkLC+uI7xFzlGfwLvRlsUI820=\");\n_c = CategoriasPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriasPage);\nvar _c;\n$RefreshReg$(_c, \"CategoriasPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXRlZ29yaWVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNvQjtBQUNoQztBQUU1QixNQUFNSSxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVNILGlFQUFVQSxDQUFDRyxNQUFNO0lBQ2hDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU1PLGVBQWVGLGtCQUFrQkQ7SUFFdkMsTUFBTUksb0JBQW9CO1FBQ3hCLElBQUlELGNBQWM7WUFDaEJELGlCQUFpQjtRQUNuQixPQUFPO1lBQ0xBLGlCQUFpQkY7UUFDbkI7SUFDRjtJQUNBLE1BQU1LLGFBQWFSLGlFQUFVQSxDQUFDUyxLQUFLLENBQUMsR0FBR0w7SUFDdkMscUJBQ0UsOERBQUNILHFEQUFJQTtRQUFDUyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQThCOzs7Ozs7OEJBQzVDLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWkYsV0FBV0ssR0FBRyxDQUFDLENBQUNDLHlCQUNmLDhEQUFDSDs0QkFFQ0QsV0FBVTtzQ0FFViw0RUFBQ0s7Z0NBQ0NDLE1BQU0sY0FBMEIsT0FBWkYsU0FBU0csRUFBRTtnQ0FDL0JQLFdBQVU7O2tEQUVWLDhEQUFDUTt3Q0FDQ0MsT0FBTTt3Q0FDTkMsT0FBTTt3Q0FDTkMsUUFBTzt3Q0FDUEMsU0FBU1IsU0FBU1EsT0FBTztrREFFekIsNEVBQUNDOzRDQUFLQyxNQUFLOzRDQUFlQyxHQUFHWCxTQUFTWSxJQUFJOzs7Ozs7Ozs7OztvQ0FFM0NaLFNBQVNhLElBQUk7Ozs7Ozs7MkJBZlhiLFNBQVNHLEVBQUU7Ozs7Ozs7Ozs7OEJBb0J0Qiw4REFBQ1c7b0JBQU9DLFNBQVN0QjtvQkFBbUJHLFdBQVU7OEJBQzVDLDRFQUFDb0I7a0NBQU14QixlQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0M7R0E5Q01KO0tBQUFBO0FBZ0ROLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYXRlZ29yaWVzL2luZGV4LnRzeD9kMzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjYXRlZ29yaWFzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NhdGVnb3JpZXMuanNvblwiO1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpYXNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGNhdGVnb3JpYXMubGVuZ3RoO1xyXG4gIGNvbnN0IFtudW1DYXRlZ29yaWFzLCBzZXROdW1DYXRlZ29yaWFzXSA9IHVzZVN0YXRlKDUpO1xyXG4gIGNvbnN0IG1vc3RyYXJUb2RhcyA9IG51bUNhdGVnb3JpYXMgPT09IGxlbmd0aDtcclxuXHJcbiAgY29uc3QgaGFuZGxlVmVyTWFzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAobW9zdHJhclRvZGFzKSB7XHJcbiAgICAgIHNldE51bUNhdGVnb3JpYXMoNSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXROdW1DYXRlZ29yaWFzKGxlbmd0aCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gY2F0ZWdvcmlhcy5zbGljZSgwLCBudW1DYXRlZ29yaWFzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiZGFyazpiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlIG15LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTZcIj5DYXRlZ29yaWVzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWhvbWUgY2FyZDIgYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgbWF4LXcteHMgdy00OFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj17YC9jYXRlZ29yaWEvJHtjYXRlZ29yeS5pZH1gfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjJlbVwiXHJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9e2NhdGVnb3J5LnZpZXdCb3h9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPXtjYXRlZ29yeS5pY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVWZXJNYXNDbGlja30gY2xhc3NOYW1lPVwibXQtNiBidXR0b24zIHctOTYgdGV4dC0yeGxcIj5cclxuICAgICAgICAgIDxzcGFuPnttb3N0cmFyVG9kYXMgPyBcIlNlZSBsZXNzXCIgOiBcIlNlZSBtb3JlXCJ9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhc1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY2F0ZWdvcmlhcyIsIkNhcmQiLCJDYXRlZ29yaWFzUGFnZSIsImxlbmd0aCIsIm51bUNhdGVnb3JpYXMiLCJzZXROdW1DYXRlZ29yaWFzIiwibW9zdHJhclRvZGFzIiwiaGFuZGxlVmVyTWFzQ2xpY2siLCJjYXRlZ29yaWVzIiwic2xpY2UiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsIm1hcCIsImNhdGVnb3J5IiwiYSIsImhyZWYiLCJpZCIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwiaWNvbiIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Categories/index.tsx\n"));

/***/ })

});