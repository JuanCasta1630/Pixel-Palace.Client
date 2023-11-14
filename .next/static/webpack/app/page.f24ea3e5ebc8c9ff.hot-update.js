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

/***/ "(app-pages-browser)/./src/app/components/GameContainer/BestGameSection/index.tsx":
/*!********************************************************************!*\
  !*** ./src/app/components/GameContainer/BestGameSection/index.tsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ \"(app-pages-browser)/./node_modules/antd/lib/row/index.js\");\n/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ \"(app-pages-browser)/./node_modules/antd/lib/col/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ \"(app-pages-browser)/./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card */ \"(app-pages-browser)/./node_modules/antd/lib/card/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\nconst BestGamesSection = (param)=>/*#__PURE__*/ {\n    let { juegosPopulares } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"dark:bg-gray-500 flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mb-4\",\n                children: \"The best games (Digital)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        gutter: [\n                            16,\n                            16\n                        ],\n                        className: \"md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4\",\n                        children: juegosPopulares.map((game, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"w-full sm:mx-2 md:mx-2 lg:mx-4 2xl:mx-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-home card2 border border-gray-300 shadow-md rounded-xl dark:bg-gray-900 h-96\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/game-details/\".concat(game.id),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                alt: game.nombre,\n                                                src: game.imagen,\n                                                className: \"w-full h-48 object-cover rounded-t-xl border border-gray-300\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"text-xl font-semibold mb-2\",\n                                                        children: game.nombre\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-100\",\n                                                        children: game.categoria.join(\", \")\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                        lineNumber: 30,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-100\",\n                                                        children: game.fecha_lanzamiento\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                        lineNumber: 31,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-red-500 font-semibold mt-2\",\n                                                        children: [\n                                                            \"$\",\n                                                            game.precio\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                        lineNumber: 32,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                                lineNumber: 28,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        type: \"primary\",\n                        block: true,\n                        size: \"large\",\n                        className: \"my-4 button1 dark:w-48 w-48\",\n                        onClick: ()=>window.location.href = \"/best-games\",\n                        children: \"Read More\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lidan\\\\Documents\\\\PI2\\\\Pixel-Palace.Client\\\\src\\\\app\\\\components\\\\GameContainer\\\\BestGameSection\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_c = BestGamesSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BestGamesSection);\nvar _c;\n$RefreshReg$(_c, \"BestGamesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9HYW1lQ29udGFpbmVyL0Jlc3RHYW1lU2VjdGlvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNENBQTRDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDakI7QUFNN0IsTUFBTUssbUJBQW9EO1FBQUMsRUFDekRDLGVBQWUsRUFDaEI7V0FDQyw4REFBQ0gscURBQUlBO1FBQUNJLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBOEI7Ozs7OzswQkFDNUMsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ1Asb0RBQUdBO3dCQUNGVSxRQUFROzRCQUFDOzRCQUFJO3lCQUFHO3dCQUNoQkgsV0FBVTtrQ0FFVEQsZ0JBQWdCSyxHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msc0JBQy9CLDhEQUFDWixvREFBR0E7Z0NBQUNNLFdBQVU7MENBQ2IsNEVBQUNFO29DQUFJRixXQUFVOzhDQUNiLDRFQUFDSCxrREFBSUE7d0NBQUNVLE1BQU0saUJBQXlCLE9BQVJGLEtBQUtHLEVBQUU7OzBEQUNsQyw4REFBQ0M7Z0RBQ0NDLEtBQUtMLEtBQUtNLE1BQU07Z0RBQ2hCQyxLQUFLUCxLQUFLUSxNQUFNO2dEQUNoQmIsV0FBVTs7Ozs7OzBEQUVaLDhEQUFDRTtnREFBSUYsV0FBVTs7a0VBQ2IsOERBQUNDO3dEQUFHRCxXQUFVO2tFQUE4QkssS0FBS00sTUFBTTs7Ozs7O2tFQUN2RCw4REFBQ0c7d0RBQUVkLFdBQVU7a0VBQWlCSyxLQUFLVSxTQUFTLENBQUNDLElBQUksQ0FBQzs7Ozs7O2tFQUNsRCw4REFBQ0Y7d0RBQUVkLFdBQVU7a0VBQWlCSyxLQUFLWSxpQkFBaUI7Ozs7OztrRUFDcEQsOERBQUNIO3dEQUFFZCxXQUFVOzs0REFBa0M7NERBQzNDSyxLQUFLYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBYnVDWjs7Ozs7Ozs7OztrQ0FzQmxFLDhEQUFDWCx3REFBTUE7d0JBQ0x3QixNQUFLO3dCQUNMQyxLQUFLO3dCQUNMQyxNQUFLO3dCQUNMckIsV0FBVTt3QkFDVnNCLFNBQVMsSUFBT0MsT0FBT0MsUUFBUSxDQUFDakIsSUFBSSxHQUFHO2tDQUN4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUM7S0EzQ0ZUO0FBOENOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0dhbWVDb250YWluZXIvQmVzdEdhbWVTZWN0aW9uL2luZGV4LnRzeD9iMGE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBCZXN0R2FtZXNTZWN0aW9uUHJvcHMge1xyXG4gIGp1ZWdvc1BvcHVsYXJlczogYW55W107IC8vIFJlZW1wbGF6YSAnYW55W10nIGNvbiBlbCB0aXBvIGNvcnJlY3RvIGRlIHR1cyBkYXRvc1xyXG59XHJcblxyXG5jb25zdCBCZXN0R2FtZXNTZWN0aW9uOiBSZWFjdC5GQzxCZXN0R2FtZXNTZWN0aW9uUHJvcHM+ID0gKHtcclxuICBqdWVnb3NQb3B1bGFyZXMsXHJcbn0pID0+IChcclxuICA8Q2FyZCBjbGFzc05hbWU9J2Rhcms6YmctZ3JheS01MDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlRoZSBiZXN0IGdhbWVzIChEaWdpdGFsKTwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxSb3dcclxuICAgICAgICBndXR0ZXI9e1sxNiwgMTZdfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1kOmdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgMnhsOmdyaWQtY29scy00XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtqdWVnb3NQb3B1bGFyZXMubWFwKChnYW1lOiBhbnksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInctZnVsbCBzbTpteC0yIG1kOm14LTIgbGc6bXgtNCAyeGw6bXgtNFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaG9tZSBjYXJkMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1tZCByb3VuZGVkLXhsIGRhcms6YmctZ3JheS05MDAgaC05NlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZ2FtZS1kZXRhaWxzLyR7Z2FtZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgYWx0PXtnYW1lLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtnYW1lLmltYWdlbn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyIHJvdW5kZWQtdC14bCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj57Z2FtZS5ub21icmV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwMFwiPntnYW1lLmNhdGVnb3JpYS5qb2luKFwiLCBcIil9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwXCI+e2dhbWUuZmVjaGFfbGFuemFtaWVudG99PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgZm9udC1zZW1pYm9sZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtnYW1lLnByZWNpb31cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Jvdz5cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgYmxvY2tcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm15LTQgYnV0dG9uMSBkYXJrOnctNDggdy00OFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYmVzdC1nYW1lc1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvQ2FyZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJlc3RHYW1lc1NlY3Rpb247XHJcbiJdLCJuYW1lcyI6WyJSb3ciLCJDb2wiLCJCdXR0b24iLCJDYXJkIiwiTGluayIsIkJlc3RHYW1lc1NlY3Rpb24iLCJqdWVnb3NQb3B1bGFyZXMiLCJjbGFzc05hbWUiLCJoMiIsImRpdiIsImd1dHRlciIsIm1hcCIsImdhbWUiLCJpbmRleCIsImhyZWYiLCJpZCIsImltZyIsImFsdCIsIm5vbWJyZSIsInNyYyIsImltYWdlbiIsInAiLCJjYXRlZ29yaWEiLCJqb2luIiwiZmVjaGFfbGFuemFtaWVudG8iLCJwcmVjaW8iLCJ0eXBlIiwiYmxvY2siLCJzaXplIiwib25DbGljayIsIndpbmRvdyIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/GameContainer/BestGameSection/index.tsx\n"));

/***/ })

});