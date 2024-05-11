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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis-network */ \"(app-pages-browser)/./node_modules/vis-network/peer/umd/vis-network.min.js\");\n/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis_network__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vis_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vis-data */ \"(app-pages-browser)/./node_modules/vis-data/peer/umd/vis-data.min.js\");\n/* harmony import */ var vis_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vis_data__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction fetchData(url) {\n    return fetch(url).then((response)=>response.json());\n}\nfunction Home() {\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/neo4j\", fetchData);\n    const visRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && visRef.current) {\n            const { nodes, edges } = data;\n            const graph = {\n                nodes: new vis_data__WEBPACK_IMPORTED_MODULE_4__.DataSet(nodes),\n                edges: new vis_data__WEBPACK_IMPORTED_MODULE_4__.DataSet(edges)\n            };\n            const options = {};\n            new vis_network__WEBPACK_IMPORTED_MODULE_3__.Network(visRef.current, graph, options);\n        }\n    }, [\n        data\n    ]);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load data\"\n    }, void 0, false, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-10 w-full max-w-5xl flex flex-col items-center font-mono text-3xl mt-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center mt-6\",\n                children: \"LLM Business Intelligence 基于人工智能的商业智能\"\n            }, void 0, false, {\n                fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: visRef,\n                style: {\n                    width: \"100%\",\n                    height: \"600px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 1\n    }, this);\n}\n_s(Home, \"ptOS/xLvXTXP1ZYGVbullamPYaQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDakI7QUFDYTtBQUNIO0FBcUJuQyxTQUFTSyxVQUFVQyxHQUFXO0lBQzVCLE9BQU9DLE1BQU1ELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSTtBQUNsRDtBQUVlLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdYLCtDQUFNQSxDQUFtQixjQUFjRztJQUMvRCxNQUFNUyxTQUFTYiw2Q0FBTUEsQ0FBd0I7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVksUUFBUUUsT0FBT0MsT0FBTyxFQUFFO1lBQzFCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0w7WUFDekIsTUFBTU0sUUFBUTtnQkFDWkYsT0FBTyxJQUFJWiw2Q0FBT0EsQ0FBT1k7Z0JBQ3pCQyxPQUFPLElBQUliLDZDQUFPQSxDQUFPYTtZQUMzQjtZQUNBLE1BQU1FLFVBQVUsQ0FBQztZQUNqQixJQUFJaEIsZ0RBQU9BLENBQUNXLE9BQU9DLE9BQU8sRUFBRUcsT0FBT0M7UUFDckM7SUFDRixHQUFHO1FBQUNQO0tBQUs7SUFFVCxJQUFJQyxPQUFPLHFCQUFPLDhEQUFDTztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ1IsTUFBTSxxQkFBTyw4REFBQ1E7a0JBQUk7Ozs7OztJQUV2QixxQkFDRiw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFtQjs7Ozs7OzBCQUMvQiw4REFBQ0Q7Z0JBQUlHLEtBQUtUO2dCQUFRVSxPQUFPO29CQUFFQyxPQUFPO29CQUFRQyxRQUFRO2dCQUFROzs7Ozs7Ozs7Ozs7QUFHNUQ7R0F6QndCZjs7UUFDRVQsMkNBQU1BOzs7S0FEUlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICd2aXMtbmV0d29yayc7XG5pbXBvcnQgeyBEYXRhU2V0IH0gZnJvbSAndmlzLWRhdGEnO1xuXG4vLyDlrprkuYnoioLngrnlkozovrnnmoTmjqXlj6NcbmludGVyZmFjZSBOb2RlIHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBFZGdlIHtcbiAgZnJvbTogbnVtYmVyO1xuICB0bzogbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBhcnJvd3M6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdyYXBoRGF0YSB7XG4gIG5vZGVzOiBOb2RlW107XG4gIGVkZ2VzOiBFZGdlW107XG59XG5cbmZ1bmN0aW9uIGZldGNoRGF0YSh1cmw6IHN0cmluZyk6IFByb21pc2U8R3JhcGhEYXRhPiB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPEdyYXBoRGF0YSwgRXJyb3I+KCcvYXBpL25lbzRqJywgZmV0Y2hEYXRhKTtcbiAgY29uc3QgdmlzUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGF0YSAmJiB2aXNSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgeyBub2RlcywgZWRnZXMgfSA9IGRhdGE7XG4gICAgICBjb25zdCBncmFwaCA9IHtcbiAgICAgICAgbm9kZXM6IG5ldyBEYXRhU2V0PE5vZGU+KG5vZGVzKSxcbiAgICAgICAgZWRnZXM6IG5ldyBEYXRhU2V0PEVkZ2U+KGVkZ2VzKVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICAgIG5ldyBOZXR3b3JrKHZpc1JlZi5jdXJyZW50LCBncmFwaCwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCBbZGF0YV0pO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgZGF0YTwvZGl2PjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBmb250LW1vbm8gdGV4dC0zeGwgbXQtMlwiPlxuPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTZcIj5MTE0gQnVzaW5lc3MgSW50ZWxsaWdlbmNlIOWfuuS6juS6uuW3peaZuuiDveeahOWVhuS4muaZuuiDvTwvaDE+XG4gIDxkaXYgcmVmPXt2aXNSZWZ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjYwMHB4XCIgfX0gLz5cbiAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU1dSIiwiTmV0d29yayIsIkRhdGFTZXQiLCJmZXRjaERhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwidmlzUmVmIiwiY3VycmVudCIsIm5vZGVzIiwiZWRnZXMiLCJncmFwaCIsIm9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJlZiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});