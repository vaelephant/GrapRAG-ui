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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"(app-pages-browser)/./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vis-network */ \"(app-pages-browser)/./node_modules/vis-network/peer/umd/vis-network.min.js\");\n/* harmony import */ var vis_network__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vis_network__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vis_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vis-data */ \"(app-pages-browser)/./node_modules/vis-data/peer/umd/vis-data.min.js\");\n/* harmony import */ var vis_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vis_data__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction fetchData(url) {\n    return fetch(url).then((response)=>response.json());\n}\nfunction Home() {\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/neo4j\", fetchData);\n    const visRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && visRef.current) {\n            const { nodes, edges } = data;\n            const graph = {\n                nodes: new vis_data__WEBPACK_IMPORTED_MODULE_4__.DataSet(nodes),\n                edges: new vis_data__WEBPACK_IMPORTED_MODULE_4__.DataSet(edges)\n            };\n            const options = {};\n            new vis_network__WEBPACK_IMPORTED_MODULE_3__.Network(visRef.current, graph, options);\n        }\n    }, [\n        data\n    ]);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load data\"\n    }, void 0, false, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"z-10 w-full max-w-5xl items-center justify-between font-mono  text-5xl lg:flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Neo4j Graph Data\"\n            }, void 0, false, {\n                fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: visRef,\n                style: {\n                    height: \"1500px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yzm/code/GrapRAG-ui/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ptOS/xLvXTXP1ZYGVbullamPYaQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFMEM7QUFDakI7QUFDYTtBQUNIO0FBcUJuQyxTQUFTSyxVQUFVQyxHQUFXO0lBQzVCLE9BQU9DLE1BQU1ELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSTtBQUNsRDtBQUVlLFNBQVNDOztJQUN0QixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdYLCtDQUFNQSxDQUFtQixjQUFjRztJQUMvRCxNQUFNUyxTQUFTYiw2Q0FBTUEsQ0FBd0I7SUFFN0NELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVksUUFBUUUsT0FBT0MsT0FBTyxFQUFFO1lBQzFCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsR0FBR0w7WUFDekIsTUFBTU0sUUFBUTtnQkFDWkYsT0FBTyxJQUFJWiw2Q0FBT0EsQ0FBT1k7Z0JBQ3pCQyxPQUFPLElBQUliLDZDQUFPQSxDQUFPYTtZQUMzQjtZQUNBLE1BQU1FLFVBQVUsQ0FBQztZQUNqQixJQUFJaEIsZ0RBQU9BLENBQUNXLE9BQU9DLE9BQU8sRUFBRUcsT0FBT0M7UUFDckM7SUFDRixHQUFHO1FBQUNQO0tBQUs7SUFFVCxJQUFJQyxPQUFPLHFCQUFPLDhEQUFDTztrQkFBSTs7Ozs7O0lBQ3ZCLElBQUksQ0FBQ1IsTUFBTSxxQkFBTyw4REFBQ1E7a0JBQUk7Ozs7OztJQUV2QixxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFJOzs7Ozs7MEJBQ0wsOERBQUNGO2dCQUFJRyxLQUFLVDtnQkFBUVUsT0FBTztvQkFBRUMsUUFBUTtnQkFBUzs7Ozs7Ozs7Ozs7O0FBR2xEO0dBekJ3QmQ7O1FBQ0VULDJDQUFNQTs7O0tBRFJTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAndmlzLW5ldHdvcmsnO1xuaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJ3Zpcy1kYXRhJztcblxuLy8g5a6a5LmJ6IqC54K55ZKM6L6555qE5o6l5Y+jXG5pbnRlcmZhY2UgTm9kZSB7XG4gIGlkOiBudW1iZXI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRWRnZSB7XG4gIGZyb206IG51bWJlcjtcbiAgdG86IG51bWJlcjtcbiAgbGFiZWw6IHN0cmluZztcbiAgYXJyb3dzOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcmFwaERhdGEge1xuICBub2RlczogTm9kZVtdO1xuICBlZGdlczogRWRnZVtdO1xufVxuXG5mdW5jdGlvbiBmZXRjaERhdGEodXJsOiBzdHJpbmcpOiBQcm9taXNlPEdyYXBoRGF0YT4ge1xuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxHcmFwaERhdGEsIEVycm9yPignL2FwaS9uZW80aicsIGZldGNoRGF0YSk7XG4gIGNvbnN0IHZpc1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGEgJiYgdmlzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHsgbm9kZXMsIGVkZ2VzIH0gPSBkYXRhO1xuICAgICAgY29uc3QgZ3JhcGggPSB7XG4gICAgICAgIG5vZGVzOiBuZXcgRGF0YVNldDxOb2RlPihub2RlcyksXG4gICAgICAgIGVkZ2VzOiBuZXcgRGF0YVNldDxFZGdlPihlZGdlcylcbiAgICAgIH07XG4gICAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgICBuZXcgTmV0d29yayh2aXNSZWYuY3VycmVudCwgZ3JhcGgsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSwgW2RhdGFdKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkIGRhdGE8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vICB0ZXh0LTV4bCBsZzpmbGV4XCI+XG4gICAgICA8aDEgPk5lbzRqIEdyYXBoIERhdGE8L2gxPlxuICAgICAgPGRpdiByZWY9e3Zpc1JlZn0gc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MDBweFwiIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU1dSIiwiTmV0d29yayIsIkRhdGFTZXQiLCJmZXRjaERhdGEiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJIb21lIiwiZGF0YSIsImVycm9yIiwidmlzUmVmIiwiY3VycmVudCIsIm5vZGVzIiwiZWRnZXMiLCJncmFwaCIsIm9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});