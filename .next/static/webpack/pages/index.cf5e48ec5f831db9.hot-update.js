"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Team/Team.jsx":
/*!**********************************!*\
  !*** ./components/Team/Team.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TeamMember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamMember */ \"./components/Team/TeamMember.jsx\");\n\n\n\nfunction Team() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-[1200px] flex flex-col justify-start items-center m-auto h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[60px] md:text-[86px] font-Playfair font-semibold leading-[78px] text-white py-10 mb-20\",\n                    children: \"Team\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/cannabis/components/Team/Team.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-10 items-center\",\n                    children: teamData.map((member, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamMember__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            image: member.image,\n                            name: member.name,\n                            description: member.des\n                        }, index, false, {\n                            fileName: \"/Users/mac/Desktop/cannabis/components/Team/Team.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/cannabis/components/Team/Team.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/cannabis/components/Team/Team.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/cannabis/components/Team/Team.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Team;\nconst teamData = [\n    {\n        image: \"/Assets/team/team1.png\",\n        name: \"Team member name\",\n        des: \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\"\n    },\n    {\n        image: \"/Assets/team/team2.jpg\",\n        name: \"Team member name\",\n        des: \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\"\n    },\n    {\n        image: \"/Assets/team/team1.png\",\n        name: \"Team member name\",\n        des: \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlYW0vVGVhbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFDWTtBQUV0QyxTQUFTRSxPQUFPO0lBQ2QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBK0Y7Ozs7Ozs4QkFJN0csOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaRSxTQUFTQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsUUFBVTt3QkFDL0IscUJBQ0UsOERBQUNSLG1EQUFVQTs0QkFFVFMsT0FBT0YsT0FBT0UsS0FBSzs0QkFDbkJDLE1BQU1ILE9BQU9HLElBQUk7NEJBQ2pCQyxhQUFhSixPQUFPSyxHQUFHOzJCQUhsQko7Ozs7O29CQU1YOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtWO0tBdkJTUDtBQXlCVCxNQUFNSSxXQUFXO0lBQ2Y7UUFDRUksT0FBTztRQUNQQyxNQUFNO1FBQ05FLEtBQUs7SUFDUDtJQUNBO1FBQ0VILE9BQU87UUFDUEMsTUFBTTtRQUNORSxLQUFLO0lBQ1A7SUFDQTtRQUNFSCxPQUFPO1FBQ1BDLE1BQU07UUFDTkUsS0FBSztJQUNQO0NBQ0Q7QUFFRCwrREFBZVgsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RlYW0vVGVhbS5qc3g/ODlkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVhbU1lbWJlciBmcm9tIFwiLi9UZWFtTWVtYmVyXCI7XG5cbmZ1bmN0aW9uIFRlYW0oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1bMTIwMHB4XSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG0tYXV0byBoLWZ1bGxcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzYwcHhdIG1kOnRleHQtWzg2cHhdIGZvbnQtUGxheWZhaXIgZm9udC1zZW1pYm9sZCBsZWFkaW5nLVs3OHB4XSB0ZXh0LXdoaXRlIHB5LTEwIG1iLTIwXCI+XG4gICAgICAgICAgVGVhbVxuICAgICAgICA8L2gxPlxuICAgICAgICB7LyogPT09PT09PT4gRWFjaCB0ZWFtIG1lbWJlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCAgbGc6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTMganVzdGlmeS1jZW50ZXIgZ2FwLTEwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIHt0ZWFtRGF0YS5tYXAoKG1lbWJlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZWFtTWVtYmVyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpbWFnZT17bWVtYmVyLmltYWdlfVxuICAgICAgICAgICAgICAgIG5hbWU9e21lbWJlci5uYW1lfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttZW1iZXIuZGVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgdGVhbURhdGEgPSBbXG4gIHtcbiAgICBpbWFnZTogXCIvQXNzZXRzL3RlYW0vdGVhbTEucG5nXCIsXG4gICAgbmFtZTogXCJUZWFtIG1lbWJlciBuYW1lXCIsXG4gICAgZGVzOiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC5cIixcbiAgfSxcbiAge1xuICAgIGltYWdlOiBcIi9Bc3NldHMvdGVhbS90ZWFtMi5qcGdcIixcbiAgICBuYW1lOiBcIlRlYW0gbWVtYmVyIG5hbWVcIixcbiAgICBkZXM6IFwiSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LlwiLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IFwiL0Fzc2V0cy90ZWFtL3RlYW0xLnBuZ1wiLFxuICAgIG5hbWU6IFwiVGVhbSBtZW1iZXIgbmFtZVwiLFxuICAgIGRlczogXCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGVhbU1lbWJlciIsIlRlYW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRlYW1EYXRhIiwibWFwIiwibWVtYmVyIiwiaW5kZXgiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Team/Team.jsx\n"));

/***/ })

});