"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project/[project]",{

/***/ "./src/api/getProject.ts":
/*!*******************************!*\
  !*** ./src/api/getProject.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProject\": function() { return /* binding */ getProject; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var _utils_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ajax */ \"./src/utils/ajax.ts\");\n\n\n\nvar getProject = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(project) {\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        _utils_ajax__WEBPACK_IMPORTED_MODULE_0__.ajax.get(\"\".concat(project, \"-project2?populate[RelatedProjects][populate]=*&populate[ProjectGridItem][populate]=*\"))\n                    ];\n                case 1:\n                    return [\n                        2,\n                        _state.sent().data\n                    ];\n            }\n        });\n    });\n    return function getProject(project) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2dldFByb2plY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdxQztBQUU5QixJQUFNQyxVQUFVO2VBQUcsNkZBQ3hCQyxPQUFlLEVBQzZCOzs7O29CQUUxQzs7d0JBQU1GLGlEQUFRLENBQ1osRUFBQyxDQUFVLE1BQXFGLENBQTdGRSxPQUFPLEVBQUMsdUZBQXFGLENBQUMsQ0FDbEc7c0JBQUE7O29CQUhIOzt3QkFDRSxhQUVDLENBQ0RFLElBQUk7c0JBQUM7OztJQUNULENBQUM7b0JBUllILFVBQVUsQ0FDckJDLE9BQWU7OztHQU9oQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvZ2V0UHJvamVjdC50cz9mMmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHsgR2V0UHJvamVjdFR5cGVzIH0gZnJvbSBcIi4uL3R5cGVzL2dldFByb2plY3RUeXBlc1wiO1xyXG5pbXBvcnQgeyBhamF4IH0gZnJvbSBcIi4uL3V0aWxzL2FqYXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0ID0gYXN5bmMgKFxyXG4gIHByb2plY3Q6IHN0cmluZyxcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEdldFByb2plY3RUeXBlcz4+ID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgYXdhaXQgYWpheC5nZXQoXHJcbiAgICAgIGAke3Byb2plY3R9LXByb2plY3QyP3BvcHVsYXRlW1JlbGF0ZWRQcm9qZWN0c11bcG9wdWxhdGVdPSomcG9wdWxhdGVbUHJvamVjdEdyaWRJdGVtXVtwb3B1bGF0ZV09KmAsXHJcbiAgICApXHJcbiAgKS5kYXRhO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYWpheCIsImdldFByb2plY3QiLCJwcm9qZWN0IiwiZ2V0IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/getProject.ts\n"));

/***/ })

});