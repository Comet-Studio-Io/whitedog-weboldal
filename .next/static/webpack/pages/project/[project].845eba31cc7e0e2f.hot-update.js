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

/***/ "./src/components/pages/specificProjectPage/[project].tsx":
/*!****************************************************************!*\
  !*** ./src/components/pages/specificProjectPage/[project].tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpecificProjectPage\": function() { return /* binding */ SpecificProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetProject */ \"./src/hooks/useGetProject.ts\");\n/* harmony import */ var _hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetUserAgent */ \"./src/hooks/useGetUserAgent.ts\");\n/* harmony import */ var _common_List_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/List/ListItem */ \"./src/components/common/List/ListItem.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectGrid */ \"./src/components/common/ProjectGrid/ProjectGrid.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectGridItem */ \"./src/components/common/ProjectGrid/ProjectGridItem.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectTags */ \"./src/components/common/ProjectGrid/ProjectTags.tsx\");\n/* harmony import */ var _common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/RelatedProjects/RelatedProjects */ \"./src/components/common/RelatedProjects/RelatedProjects.tsx\");\n/* harmony import */ var _common_Title_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Title/PageTitle */ \"./src/components/common/Title/PageTitle.tsx\");\n/* harmony import */ var _common_Title_SubTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Title/SubTitle */ \"./src/components/common/Title/SubTitle.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar SpecificProjectPageComponent = function() {\n    var ref, ref1, ref2;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref3 = (0,_hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__.useGetProject)(String(router.query.project).normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\")), data = ref3.data, status = ref3.status, fetch = ref3.fetch;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.isReady) {\n            void fetch({\n                queryKey: String(router.query.project).normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\")\n            });\n        }\n    }, [\n        router\n    ]);\n    var deviceState = (0,_hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__.useGetUserAgent)();\n    var parsedData = data === null || data === void 0 ? void 0 : data.attributes.data;\n    var _rowEnd, _rowEnd1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full h-auto flex flex-col min-h-screen\",\n        children: data !== undefined && status === \"success\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full md:px-8 px-2 pb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-14\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectTags__WEBPACK_IMPORTED_MODULE_8__.ProjectTags, {\n                                darkMode: true,\n                                tagArray: parsedData === null || parsedData === void 0 ? void 0 : parsedData.details.tags\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_PageTitle__WEBPACK_IMPORTED_MODULE_10__.PageTitle, {\n                            className: \"text-white pt-4\",\n                            text: parsedData === null || parsedData === void 0 ? void 0 : parsedData.details.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_SubTitle__WEBPACK_IMPORTED_MODULE_11__.SubTitle, {\n                            className: \"text-white pt-4 pb-8\",\n                            text: parsedData === null || parsedData === void 0 ? void 0 : parsedData.details.company\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this),\n                        deviceState === \"mobile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__.ProjectGrid, {\n                            columns: 5,\n                            rows: data.attributes.data.ProjectGridItem.length * 3,\n                            children: data.attributes.data.ProjectGridItem.map(function(project, i) {\n                                var _data = project.data, tags = _data.tags, title = _data.title;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                                    colSpan: 5,\n                                    imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                                    rowEnd: i + 4 + i * 2,\n                                    rowStart: i + 1 + i * 2,\n                                    tagArray: tags,\n                                    title: title\n                                }, project.id, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__.ProjectGrid, {\n                            columns: 7,\n                            rows: (_rowEnd = (ref = data.attributes.data.ProjectGridItem.at(-1)) === null || ref === void 0 ? void 0 : ref.data.rowEnd) !== null && _rowEnd !== void 0 ? _rowEnd : 1,\n                            children: data.attributes.data.ProjectGridItem.map(function(project) {\n                                var _data = project.data, tags = _data.tags, title = _data.title, colEnd = _data.colEnd, colStart = _data.colStart, rowEnd = _data.rowEnd, rowStart = _data.rowStart;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                                    colEnd: colEnd,\n                                    colStart: colStart,\n                                    imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                                    rowEnd: rowEnd,\n                                    rowStart: rowStart,\n                                    tagArray: tags,\n                                    title: title\n                                }, project.id, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-6\",\n                            children: (ref1 = data.attributes.data.ListItem) === null || ref1 === void 0 ? void 0 : ref1.map(function(service) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_List_ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                    dark: false,\n                                    data: service.data.data,\n                                    title: service.data.title\n                                }, service.data.title, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this),\n                deviceState === \"mobile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__.RelatedProjects, {\n                    gridColumns: 5,\n                    gridRows: data.attributes.data.RelatedProjects.length * 4,\n                    title: \"Kapcsol\\xf3d\\xf3 projektek\",\n                    children: data.attributes.data.RelatedProjects.map(function(project, i) {\n                        var _data = project.data, tags = _data.tags, title = _data.title;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                            colSpan: 5,\n                            imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                            rowEnd: i + 4 + i * 2,\n                            rowStart: i + 1 + i * 2,\n                            tagArray: tags,\n                            title: title\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 127,\n                            columnNumber: 19\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 118,\n                    columnNumber: 13\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__.RelatedProjects, {\n                    gridColumns: 7,\n                    gridRows: (_rowEnd1 = (ref2 = data.attributes.data.RelatedProjects.at(-1)) === null || ref2 === void 0 ? void 0 : ref2.data.rowEnd) !== null && _rowEnd1 !== void 0 ? _rowEnd1 : 1,\n                    title: \"Kapcsol\\xf3d\\xf3 projektek\",\n                    children: data.attributes.data.RelatedProjects.map(function(project) {\n                        var _data = project.data, tags = _data.tags, title = _data.title, colEnd = _data.colEnd, colStart = _data.colStart, rowEnd = _data.rowEnd, rowStart = _data.rowStart;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                            colEnd: colEnd,\n                            colStart: colStart,\n                            imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                            rowEnd: rowEnd,\n                            rowStart: rowStart,\n                            tagArray: tags,\n                            title: title\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 155,\n                            columnNumber: 19\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 143,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpecificProjectPageComponent, \"d26++HG0JEavQKrlijdCv/WS9Os=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__.useGetProject,\n        _hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__.useGetUserAgent\n    ];\n});\n_c = SpecificProjectPageComponent;\nvar SpecificProjectPage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(SpecificProjectPageComponent);\n_c1 = SpecificProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"SpecificProjectPageComponent\");\n$RefreshReg$(_c1, \"SpecificProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zcGVjaWZpY1Byb2plY3RQYWdlL1twcm9qZWN0XS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBd0M7QUFDSTtBQUVpQjtBQUNJO0FBQ1g7QUFDYTtBQUNRO0FBQ1I7QUFDWTtBQUN0QjtBQUNGO0FBRXZELElBQU1ZLDRCQUE0QixHQUFPLFdBQW1CO1FBaUUxQ0MsR0FBMkMsRUEwQjlDQSxJQUE2QixFQXlDNUJBLElBQTJDOztJQW5JekQsSUFBTUMsTUFBTSxHQUFHZCxzREFBUyxFQUFFO0lBQzFCLElBQWdDRyxJQUkvQixHQUorQkEsbUVBQWEsQ0FDM0NZLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUN6QkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUNoQkMsT0FBTyxxQkFBcUIsRUFBRSxDQUFDLENBQ25DLEVBSk9OLElBQUksR0FBb0JWLElBSS9CLENBSk9VLElBQUksRUFBRU8sTUFBTSxHQUFZakIsSUFJL0IsQ0FKYWlCLE1BQU0sRUFBRUMsS0FBSyxHQUFLbEIsSUFJL0IsQ0FKcUJrQixLQUFLO0lBTTNCbkIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVksTUFBTSxDQUFDUSxPQUFPLEVBQUU7WUFDbEIsS0FBS0QsS0FBSyxDQUFDO2dCQUNURSxRQUFRLEVBQUVSLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUNuQ0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUNoQkMsT0FBTyxxQkFBcUIsRUFBRSxDQUFDO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDLEVBQUU7UUFBQ0wsTUFBTTtLQUFDLENBQUMsQ0FBQztJQUViLElBQU1VLFdBQVcsR0FBR3BCLHVFQUFlLEVBQUU7SUFDckMsSUFBTXFCLFVBQVUsR0FBR1osSUFBSSxhQUFKQSxJQUFJLFdBQVksR0FBaEJBLEtBQUFBLENBQWdCLEdB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bUMsRUFBRTs7OztpQ0FXZixDQUNGO29CQUNKLENBQUMsQ0FBQzs7Ozs7eUJBQ2M7O3dCQUVuQixHQUNELElBQUk7Ozs7O2FBQ0EsQ0FDVjtBQUNKLENBQUM7R0FsS0t4Qyw0QkFBNEI7O1FBQ2pCWixrREFBUztRQUNRRywrREFBYTtRQWdCekJDLG1FQUFlOzs7QUFsQi9CUSxLQUFBQSw0QkFBNEI7QUFvSzNCLElBQU1nRCxtQkFBbUIsaUJBQUczRCwyQ0FBSSxDQUFDVyw0QkFBNEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3NwZWNpZmljUHJvamVjdFBhZ2UvW3Byb2plY3RdLnRzeD81NzFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBtZW1vLCBGQywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VHZXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUdldFByb2plY3RcIjtcclxuaW1wb3J0IHsgdXNlR2V0VXNlckFnZW50IH0gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZUdldFVzZXJBZ2VudFwiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCIuLi8uLi9jb21tb24vTGlzdC9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0R3JpZCB9IGZyb20gXCIuLi8uLi9jb21tb24vUHJvamVjdEdyaWQvUHJvamVjdEdyaWRcIjtcclxuaW1wb3J0IHsgUHJvamVjdEdyaWRJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Qcm9qZWN0R3JpZC9Qcm9qZWN0R3JpZEl0ZW1cIjtcclxuaW1wb3J0IHsgUHJvamVjdFRhZ3MgfSBmcm9tIFwiLi4vLi4vY29tbW9uL1Byb2plY3RHcmlkL1Byb2plY3RUYWdzXCI7XHJcbmltcG9ydCB7IFJlbGF0ZWRQcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9jb21tb24vUmVsYXRlZFByb2plY3RzL1JlbGF0ZWRQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBQYWdlVGl0bGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL1RpdGxlL1BhZ2VUaXRsZVwiO1xyXG5pbXBvcnQgeyBTdWJUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vVGl0bGUvU3ViVGl0bGVcIjtcclxuXHJcbmNvbnN0IFNwZWNpZmljUHJvamVjdFBhZ2VDb21wb25lbnQ6IEZDID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGEsIHN0YXR1cywgZmV0Y2ggfSA9IHVzZUdldFByb2plY3QoXHJcbiAgICBTdHJpbmcocm91dGVyLnF1ZXJ5LnByb2plY3QpXHJcbiAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcclxuICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLFxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcclxuICAgICAgdm9pZCBmZXRjaCh7XHJcbiAgICAgICAgcXVlcnlLZXk6IFN0cmluZyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgICAgIC5ub3JtYWxpemUoXCJORkRcIilcclxuICAgICAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICBjb25zdCBkZXZpY2VTdGF0ZSA9IHVzZUdldFVzZXJBZ2VudCgpO1xyXG4gIGNvbnN0IHBhcnNlZERhdGEgPSBkYXRhPy5hdHRyaWJ1dGVzLmRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1widy1mdWxsIGgtYXV0byBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlblwifT5cclxuICAgICAge2RhdGEgIT09IHVuZGVmaW5lZCAmJiBzdGF0dXMgPT09IFwic3VjY2Vzc1wiID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtZDpweC04IHB4LTIgcGItOFwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xNFwiPlxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0VGFncyBkYXJrTW9kZSB0YWdBcnJheT17cGFyc2VkRGF0YT8uZGV0YWlscy50YWdzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHQtNFwiXHJcbiAgICAgICAgICAgICAgdGV4dD17cGFyc2VkRGF0YT8uZGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFN1YlRpdGxlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwdC00IHBiLThcIlxyXG4gICAgICAgICAgICAgIHRleHQ9e3BhcnNlZERhdGE/LmRldGFpbHMuY29tcGFueX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2RldmljZVN0YXRlID09PSBcIm1vYmlsZVwiID8gKFxyXG4gICAgICAgICAgICAgIDxQcm9qZWN0R3JpZFxyXG4gICAgICAgICAgICAgICAgY29sdW1ucz17NX1cclxuICAgICAgICAgICAgICAgIHJvd3M9e2RhdGEuYXR0cmlidXRlcy5kYXRhLlByb2plY3RHcmlkSXRlbS5sZW5ndGggKiAzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMuZGF0YS5Qcm9qZWN0R3JpZEl0ZW0ubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFncywgdGl0bGUgfSA9IHByb2plY3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RHcmlkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltZ1NyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93RW5kPXtpICsgNCArIGkgKiAyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93U3RhcnQ9e2kgKyAxICsgaSAqIDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdBcnJheT17dGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0R3JpZD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8UHJvamVjdEdyaWRcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9ezd9XHJcbiAgICAgICAgICAgICAgICByb3dzPXtcclxuICAgICAgICAgICAgICAgICAgZGF0YS5hdHRyaWJ1dGVzLmRhdGEuUHJvamVjdEdyaWRJdGVtLmF0KC0xKT8uZGF0YS5yb3dFbmQgPz8gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMuZGF0YS5Qcm9qZWN0R3JpZEl0ZW0ubWFwKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHRhZ3MsIHRpdGxlLCBjb2xFbmQsIGNvbFN0YXJ0LCByb3dFbmQsIHJvd1N0YXJ0IH0gPVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RHcmlkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sRW5kPXtjb2xFbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xTdGFydD17Y29sU3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWdTcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmltYWdlLmRhdGEuYXR0cmlidXRlcy51cmxcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJvd0VuZD17cm93RW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93U3RhcnQ9e3Jvd1N0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFnQXJyYXk9e3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvUHJvamVjdEdyaWQ+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMuZGF0YS5MaXN0SXRlbT8ubWFwKHNlcnZpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLmRhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGFyaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17c2VydmljZS5kYXRhLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NlcnZpY2UuZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGV2aWNlU3RhdGUgPT09IFwibW9iaWxlXCIgPyAoXHJcbiAgICAgICAgICAgIDxSZWxhdGVkUHJvamVjdHNcclxuICAgICAgICAgICAgICBncmlkQ29sdW1ucz17NX1cclxuICAgICAgICAgICAgICBncmlkUm93cz17ZGF0YS5hdHRyaWJ1dGVzLmRhdGEuUmVsYXRlZFByb2plY3RzLmxlbmd0aCAqIDR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJLYXBjc29sw7Nkw7MgcHJvamVrdGVrXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMuZGF0YS5SZWxhdGVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRhZ3MsIHRpdGxlIH0gPSBwcm9qZWN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFByb2plY3RHcmlkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd0VuZD17aSArIDQgKyBpICogMn1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdGFydD17aSArIDEgKyBpICogMn1cclxuICAgICAgICAgICAgICAgICAgICB0YWdBcnJheT17dGFnc31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L1JlbGF0ZWRQcm9qZWN0cz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxSZWxhdGVkUHJvamVjdHNcclxuICAgICAgICAgICAgICBncmlkQ29sdW1ucz17N31cclxuICAgICAgICAgICAgICBncmlkUm93cz17XHJcbiAgICAgICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMuZGF0YS5SZWxhdGVkUHJvamVjdHMuYXQoLTEpPy5kYXRhLnJvd0VuZCA/PyAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiS2FwY3NvbMOzZMOzIHByb2pla3Rla1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGF0YS5hdHRyaWJ1dGVzLmRhdGEuUmVsYXRlZFByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFncywgdGl0bGUsIGNvbEVuZCwgY29sU3RhcnQsIHJvd0VuZCwgcm93U3RhcnQgfSA9XHJcbiAgICAgICAgICAgICAgICAgIHByb2plY3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEVuZD17Y29sRW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbFN0YXJ0PXtjb2xTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpICtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dFbmQ9e3Jvd0VuZH1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdGFydD17cm93U3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnQXJyYXk9e3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9SZWxhdGVkUHJvamVjdHM+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwZWNpZmljUHJvamVjdFBhZ2UgPSBtZW1vKFNwZWNpZmljUHJvamVjdFBhZ2VDb21wb25lbnQpO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwibWVtbyIsInVzZUVmZmVjdCIsInVzZUdldFByb2plY3QiLCJ1c2VHZXRVc2VyQWdlbnQiLCJMaXN0SXRlbSIsIlByb2plY3RHcmlkIiwiUHJvamVjdEdyaWRJdGVtIiwiUHJvamVjdFRhZ3MiLCJSZWxhdGVkUHJvamVjdHMiLCJQYWdlVGl0bGUiLCJTdWJUaXRsZSIsIlNwZWNpZmljUHJvamVjdFBhZ2VDb21wb25lbnQiLCJkYXRhIiwicm91dGVyIiwiU3RyaW5nIiwicXVlcnkiLCJwcm9qZWN0Iiwibm9ybWFsaXplIiwicmVwbGFjZSIsInN0YXR1cyIsImZldGNoIiwiaXNSZWFkeSIsInF1ZXJ5S2V5IiwiZGV2aWNlU3RhdGUiLCJwYXJzZWREYXRhIiwiYXR0cmlidXRlcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkaXYiLCJkYXJrTW9kZSIsInRhZ0FycmF5IiwiZGV0YWlscyIsInRhZ3MiLCJ0ZXh0IiwidGl0bGUiLCJjb21wYW55IiwiY29sdW1ucyIsInJvd3MiLCJsZW5ndGgiLCJtYXAiLCJpIiwiY29sU3BhbiIsImltZ1NyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiaW1hZ2UiLCJ1cmwiLCJyb3dFbmQiLCJyb3dTdGFydCIsImlkIiwiYXQiLCJjb2xFbmQiLCJjb2xTdGFydCIsInNlcnZpY2UiLCJkYXJrIiwiZ3JpZENvbHVtbnMiLCJncmlkUm93cyIsIlNwZWNpZmljUHJvamVjdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/specificProjectPage/[project].tsx\n"));

/***/ })

});