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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpecificProjectPage\": function() { return /* binding */ SpecificProjectPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetProject */ \"./src/hooks/useGetProject.ts\");\n/* harmony import */ var _hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetUserAgent */ \"./src/hooks/useGetUserAgent.ts\");\n/* harmony import */ var _common_List_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/List/ListItem */ \"./src/components/common/List/ListItem.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectGrid */ \"./src/components/common/ProjectGrid/ProjectGrid.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectGridItem */ \"./src/components/common/ProjectGrid/ProjectGridItem.tsx\");\n/* harmony import */ var _common_ProjectGrid_ProjectTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ProjectGrid/ProjectTags */ \"./src/components/common/ProjectGrid/ProjectTags.tsx\");\n/* harmony import */ var _common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/RelatedProjects/RelatedProjects */ \"./src/components/common/RelatedProjects/RelatedProjects.tsx\");\n/* harmony import */ var _common_Title_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Title/PageTitle */ \"./src/components/common/Title/PageTitle.tsx\");\n/* harmony import */ var _common_Title_SubTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Title/SubTitle */ \"./src/components/common/Title/SubTitle.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar SpecificProjectPageComponent = function() {\n    var ref, ref1, ref2;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref3 = (0,_hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__.useGetProject)(String(router.query.project).normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\")), data = ref3.data, status = ref3.status, fetch = ref3.fetch;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.isReady) {\n            void fetch({\n                queryKey: String(router.query.project).normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\")\n            });\n        }\n    }, [\n        router\n    ]);\n    var deviceState = (0,_hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__.useGetUserAgent)();\n    var parsedData = data === null || data === void 0 ? void 0 : data.attributes.data;\n    var _rowEnd, _rowEnd1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full h-auto flex flex-col min-h-screen\",\n        children: parsedData !== undefined && status === \"success\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-full md:px-8 px-2 pb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-14\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectTags__WEBPACK_IMPORTED_MODULE_8__.ProjectTags, {\n                                darkMode: true,\n                                tagArray: parsedData.details.tags\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_PageTitle__WEBPACK_IMPORTED_MODULE_10__.PageTitle, {\n                            className: \"text-white pt-4\",\n                            text: parsedData.details.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title_SubTitle__WEBPACK_IMPORTED_MODULE_11__.SubTitle, {\n                            className: \"text-white pt-4 pb-8\",\n                            text: parsedData.details.company\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this),\n                        deviceState === \"mobile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__.ProjectGrid, {\n                            columns: 5,\n                            rows: parsedData.ProjectGridItem.length * 3,\n                            children: parsedData.ProjectGridItem.map(function(project, i) {\n                                var _data = project.data, tags = _data.tags, title = _data.title;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                                    colSpan: 5,\n                                    imgSrc: project.image.data.attributes.url,\n                                    rowEnd: i + 4 + i * 2,\n                                    rowStart: i + 1 + i * 2,\n                                    tagArray: tags,\n                                    title: title\n                                }, project.id, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGrid__WEBPACK_IMPORTED_MODULE_6__.ProjectGrid, {\n                            columns: 7,\n                            rows: (_rowEnd = (ref = parsedData.ProjectGridItem.at(-1)) === null || ref === void 0 ? void 0 : ref.data.rowEnd) !== null && _rowEnd !== void 0 ? _rowEnd : 1,\n                            children: parsedData.ProjectGridItem.map(function(project) {\n                                var _data = project.data, tags = _data.tags, title = _data.title, colEnd = _data.colEnd, colStart = _data.colStart, rowEnd = _data.rowEnd, rowStart = _data.rowStart;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                                    colEnd: colEnd,\n                                    colStart: colStart,\n                                    imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                                    rowEnd: rowEnd,\n                                    rowStart: rowStart,\n                                    tagArray: tags,\n                                    title: title\n                                }, project.id, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 21\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 73,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-6\",\n                            children: (ref1 = parsedData.ListItem) === null || ref1 === void 0 ? void 0 : ref1.map(function(service) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_List_ListItem__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                    dark: false,\n                                    data: service.data.data,\n                                    title: service.data.title\n                                }, service.data.title, false, {\n                                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, _this),\n                deviceState === \"mobile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__.RelatedProjects, {\n                    gridColumns: 5,\n                    gridRows: parsedData.RelatedProjects.length * 4,\n                    title: \"Kapcsol\\xf3d\\xf3 projektek\",\n                    children: parsedData.RelatedProjects.map(function(project, i) {\n                        var _data = project.data, tags = _data.tags, title = _data.title;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                            colSpan: 5,\n                            imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                            rowEnd: i + 4 + i * 2,\n                            rowStart: i + 1 + i * 2,\n                            tagArray: tags,\n                            title: title\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 122,\n                            columnNumber: 19\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 113,\n                    columnNumber: 13\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_RelatedProjects_RelatedProjects__WEBPACK_IMPORTED_MODULE_9__.RelatedProjects, {\n                    gridColumns: 7,\n                    gridRows: (_rowEnd1 = (ref2 = parsedData.RelatedProjects.at(-1)) === null || ref2 === void 0 ? void 0 : ref2.data.rowEnd) !== null && _rowEnd1 !== void 0 ? _rowEnd1 : 1,\n                    title: \"Kapcsol\\xf3d\\xf3 projektek\",\n                    children: parsedData.RelatedProjects.map(function(project) {\n                        var _data = project.data, tags = _data.tags, title = _data.title, colEnd = _data.colEnd, colStart = _data.colStart, rowEnd = _data.rowEnd, rowStart = _data.rowStart;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ProjectGrid_ProjectGridItem__WEBPACK_IMPORTED_MODULE_7__.ProjectGridItem, {\n                            colEnd: colEnd,\n                            colStart: colStart,\n                            imgSrc: String(\"http://localhost:1337\") + project.image.data.attributes.url,\n                            rowEnd: rowEnd,\n                            rowStart: rowStart,\n                            tagArray: tags,\n                            title: title\n                        }, project.id, false, {\n                            fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                            lineNumber: 148,\n                            columnNumber: 19\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n                    lineNumber: 138,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Work\\\\whitedog-weboldal\\\\src\\\\components\\\\pages\\\\specificProjectPage\\\\[project].tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpecificProjectPageComponent, \"d26++HG0JEavQKrlijdCv/WS9Os=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _hooks_useGetProject__WEBPACK_IMPORTED_MODULE_3__.useGetProject,\n        _hooks_useGetUserAgent__WEBPACK_IMPORTED_MODULE_4__.useGetUserAgent\n    ];\n});\n_c = SpecificProjectPageComponent;\nvar SpecificProjectPage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(SpecificProjectPageComponent);\n_c1 = SpecificProjectPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"SpecificProjectPageComponent\");\n$RefreshReg$(_c1, \"SpecificProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zcGVjaWZpY1Byb2plY3RQYWdlL1twcm9qZWN0XS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBd0M7QUFDSTtBQUVpQjtBQUNJO0FBQ1g7QUFDYTtBQUNRO0FBQ1I7QUFDWTtBQUN0QjtBQUNGO0FBRXZELElBQU1ZLDRCQUE0QixHQUFPLFdBQW1CO1FBNkR0Q0MsR0FBaUMsRUF5QnhDQSxJQUFtQixFQXdDVkEsSUFBaUM7O0lBN0h2RCxJQUFNQyxNQUFNLEdBQUdkLHNEQUFTLEVBQUU7SUFDMUIsSUFBZ0NHLElBSS9CLEdBSitCQSxtRUFBYSxDQUMzQ1ksTUFBTSxDQUFDRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQ3pCQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQ2hCQyxPQUFPLHFCQUFxQixFQUFFLENBQUMsQ0FDbkMsRUFKT0MsSUFBSSxHQUFvQmpCLElBSS9CLENBSk9pQixJQUFJLEVBQUVDLE1BQU0sR0FBWWxCLElBSS9CLENBSmFrQixNQUFNLEVBQUVDLEtBQUssR0FBS25CLElBSS9CLENBSnFCbUIsS0FBSztJQU0zQnBCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlZLE1BQU0sQ0FBQ1MsT0FBTyxFQUFFO1lBQ2xCLEtBQUtELEtBQUssQ0FBQztnQkFDVEUsUUFBUSxFQUFFVCxNQUFNLENBQUNELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FDbkNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDaEJDLE9BQU8scUJBQXFCLEVBQUUsQ0FBQzthQUNuQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQyxFQUFFO1FBQUNMLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFYixJQUFNVyxXQUFXLEdBQUdyQix1RUFBZSxFQUFFO0lBQ3JDLElBQU1TLFVBQVUsR0FBR08sSUFBSSxhQUFKQSxJQUFJLFdBQVksR0FBaEJBLEtBQUFBLENBQWdCLEdB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LEdBQVpBLE9BQU8sQ0FBQ0csSUFBSSxFQUROYyxJQUFJLEdBQ1ZqQixLQUFZLENBRE5pQixJQUFJLEVBQUVFLEtBQUssR0FDakJuQixLQUFZLENBREFtQixLQUFLLEVBQUVlLE1BQU0sR0FDekJsQyxLQUFZLENBRE9rQyxNQUFNLEVBQUVDLFFBQVEsR0FDbkNuQyxLQUFZLENBRGVtQyxRQUFRLEVBQUVMLE1BQU0sR0FDM0M5QixLQUFZLENBRHlCOEIsTUFBTSxFQUFFQyxRQUFRLEdBQ3JEL0IsS0FBWSxDQURpQytCLFFBQVE7d0JBR3ZELHFCQUNFLDhEQUFDekMsZ0ZBQWU7NEJBRWQ0QyxNQUFNLEVBQUVBLE1BQU07NEJBQ2RDLFFBQVEsRUFBRUEsUUFBUTs0QkFDbEJSLE1BQU0sRUFDSjdCLE1BQU0sQ0FBQ3NDLHVCQUErQixDQUFDLEdBQ3ZDcEMsT0FBTyxDQUFDNEIsS0FBSyxDQUFDekIsSUFBSSxDQUFDTSxVQUFVLENBQUNvQixHQUFHOzRCQUVuQ0MsTUFBTSxFQUFFQSxNQUFNOzRCQUNkQyxRQUFRLEVBQUVBLFFBQVE7NEJBQ2xCaEIsUUFBUSxFQUFFRSxJQUFJOzRCQUNkRSxLQUFLLEVBQUVBLEtBQUs7MkJBVlBuQixPQUFPLENBQUNnQyxFQUFFOzs7O2lDQVdmLENBQ0Y7b0JBQ0osQ0FBQyxDQUFDOzs7Ozt5QkFDYzs7d0JBRW5CLEdBQ0QsSUFBSTs7Ozs7YUFDQSxDQUNWO0FBQ0osQ0FBQztHQTNKS3JDLDRCQUE0Qjs7UUFDakJaLGtEQUFTO1FBQ1FHLCtEQUFhO1FBZ0J6QkMsbUVBQWU7OztBQWxCL0JRLEtBQUFBLDRCQUE0QjtBQTZKM0IsSUFBTWdELG1CQUFtQixpQkFBRzNELDJDQUFJLENBQUNXLDRCQUE0QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc3BlY2lmaWNQcm9qZWN0UGFnZS9bcHJvamVjdF0udHN4PzU3MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IG1lbW8sIEZDLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdldFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlR2V0UHJvamVjdFwiO1xyXG5pbXBvcnQgeyB1c2VHZXRVc2VyQWdlbnQgfSBmcm9tIFwiLi4vLi4vLi4vaG9va3MvdXNlR2V0VXNlckFnZW50XCI7XHJcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9MaXN0L0xpc3RJdGVtXCI7XHJcbmltcG9ydCB7IFByb2plY3RHcmlkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9Qcm9qZWN0R3JpZC9Qcm9qZWN0R3JpZFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0R3JpZEl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tbW9uL1Byb2plY3RHcmlkL1Byb2plY3RHcmlkSXRlbVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0VGFncyB9IGZyb20gXCIuLi8uLi9jb21tb24vUHJvamVjdEdyaWQvUHJvamVjdFRhZ3NcIjtcclxuaW1wb3J0IHsgUmVsYXRlZFByb2plY3RzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9SZWxhdGVkUHJvamVjdHMvUmVsYXRlZFByb2plY3RzXCI7XHJcbmltcG9ydCB7IFBhZ2VUaXRsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vVGl0bGUvUGFnZVRpdGxlXCI7XHJcbmltcG9ydCB7IFN1YlRpdGxlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9UaXRsZS9TdWJUaXRsZVwiO1xyXG5cclxuY29uc3QgU3BlY2lmaWNQcm9qZWN0UGFnZUNvbXBvbmVudDogRkMgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZGF0YSwgc3RhdHVzLCBmZXRjaCB9ID0gdXNlR2V0UHJvamVjdChcclxuICAgIFN0cmluZyhyb3V0ZXIucXVlcnkucHJvamVjdClcclxuICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxyXG4gICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgXCJcIiksXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyb3V0ZXIuaXNSZWFkeSkge1xyXG4gICAgICB2b2lkIGZldGNoKHtcclxuICAgICAgICBxdWVyeUtleTogU3RyaW5nKHJvdXRlci5xdWVyeS5wcm9qZWN0KVxyXG4gICAgICAgICAgLm5vcm1hbGl6ZShcIk5GRFwiKVxyXG4gICAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbcm91dGVyXSk7XHJcblxyXG4gIGNvbnN0IGRldmljZVN0YXRlID0gdXNlR2V0VXNlckFnZW50KCk7XHJcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGRhdGE/LmF0dHJpYnV0ZXMuZGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17XCJ3LWZ1bGwgaC1hdXRvIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuXCJ9PlxyXG4gICAgICB7cGFyc2VkRGF0YSAhPT0gdW5kZWZpbmVkICYmIHN0YXR1cyA9PT0gXCJzdWNjZXNzXCIgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggZmxleC1jb2wgdy1mdWxsIG1kOnB4LTggcHgtMiBwYi04XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE0XCI+XHJcbiAgICAgICAgICAgICAgPFByb2plY3RUYWdzIGRhcmtNb2RlIHRhZ0FycmF5PXtwYXJzZWREYXRhLmRldGFpbHMudGFnc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxQYWdlVGl0bGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB0LTRcIlxyXG4gICAgICAgICAgICAgIHRleHQ9e3BhcnNlZERhdGEuZGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFN1YlRpdGxlXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwdC00IHBiLThcIlxyXG4gICAgICAgICAgICAgIHRleHQ9e3BhcnNlZERhdGEuZGV0YWlscy5jb21wYW55fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZGV2aWNlU3RhdGUgPT09IFwibW9iaWxlXCIgPyAoXHJcbiAgICAgICAgICAgICAgPFByb2plY3RHcmlkXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zPXs1fVxyXG4gICAgICAgICAgICAgICAgcm93cz17cGFyc2VkRGF0YS5Qcm9qZWN0R3JpZEl0ZW0ubGVuZ3RoICogM31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cGFyc2VkRGF0YS5Qcm9qZWN0R3JpZEl0ZW0ubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFncywgdGl0bGUgfSA9IHByb2plY3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RHcmlkSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltZ1NyYz17cHJvamVjdC5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93RW5kPXtpICsgNCArIGkgKiAyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93U3RhcnQ9e2kgKyAxICsgaSAqIDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWdBcnJheT17dGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9Qcm9qZWN0R3JpZD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8UHJvamVjdEdyaWRcclxuICAgICAgICAgICAgICAgIGNvbHVtbnM9ezd9XHJcbiAgICAgICAgICAgICAgICByb3dzPXtwYXJzZWREYXRhLlByb2plY3RHcmlkSXRlbS5hdCgtMSk/LmRhdGEucm93RW5kID8/IDF9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3BhcnNlZERhdGEuUHJvamVjdEdyaWRJdGVtLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeyB0YWdzLCB0aXRsZSwgY29sRW5kLCBjb2xTdGFydCwgcm93RW5kLCByb3dTdGFydCB9ID1cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0R3JpZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbEVuZD17Y29sRW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sU3RhcnQ9e2NvbFN0YXJ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nU3JjPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5pbWFnZS5kYXRhLmF0dHJpYnV0ZXMudXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dFbmQ9e3Jvd0VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJvd1N0YXJ0PXtyb3dTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRhZ0FycmF5PXt0YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L1Byb2plY3RHcmlkPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTZcIj5cclxuICAgICAgICAgICAgICB7cGFyc2VkRGF0YS5MaXN0SXRlbT8ubWFwKHNlcnZpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtzZXJ2aWNlLmRhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGFyaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17c2VydmljZS5kYXRhLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NlcnZpY2UuZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7ZGV2aWNlU3RhdGUgPT09IFwibW9iaWxlXCIgPyAoXHJcbiAgICAgICAgICAgIDxSZWxhdGVkUHJvamVjdHNcclxuICAgICAgICAgICAgICBncmlkQ29sdW1ucz17NX1cclxuICAgICAgICAgICAgICBncmlkUm93cz17cGFyc2VkRGF0YS5SZWxhdGVkUHJvamVjdHMubGVuZ3RoICogNH1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkthcGNzb2zDs2TDsyBwcm9qZWt0ZWtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhcnNlZERhdGEuUmVsYXRlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YWdzLCB0aXRsZSB9ID0gcHJvamVjdC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQcm9qZWN0R3JpZEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sU3Bhbj17NX1cclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpICtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dFbmQ9e2kgKyA0ICsgaSAqIDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93U3RhcnQ9e2kgKyAxICsgaSAqIDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnQXJyYXk9e3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9SZWxhdGVkUHJvamVjdHM+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UmVsYXRlZFByb2plY3RzXHJcbiAgICAgICAgICAgICAgZ3JpZENvbHVtbnM9ezd9XHJcbiAgICAgICAgICAgICAgZ3JpZFJvd3M9e3BhcnNlZERhdGEuUmVsYXRlZFByb2plY3RzLmF0KC0xKT8uZGF0YS5yb3dFbmQgPz8gMX1cclxuICAgICAgICAgICAgICB0aXRsZT1cIkthcGNzb2zDs2TDsyBwcm9qZWt0ZWtcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3BhcnNlZERhdGEuUmVsYXRlZFByb2plY3RzLm1hcChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGFncywgdGl0bGUsIGNvbEVuZCwgY29sU3RhcnQsIHJvd0VuZCwgcm93U3RhcnQgfSA9XHJcbiAgICAgICAgICAgICAgICAgIHByb2plY3QuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8UHJvamVjdEdyaWRJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbEVuZD17Y29sRW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbFN0YXJ0PXtjb2xTdGFydH1cclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwpICtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QuaW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByb3dFbmQ9e3Jvd0VuZH1cclxuICAgICAgICAgICAgICAgICAgICByb3dTdGFydD17cm93U3RhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnQXJyYXk9e3RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9SZWxhdGVkUHJvamVjdHM+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwZWNpZmljUHJvamVjdFBhZ2UgPSBtZW1vKFNwZWNpZmljUHJvamVjdFBhZ2VDb21wb25lbnQpO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwibWVtbyIsInVzZUVmZmVjdCIsInVzZUdldFByb2plY3QiLCJ1c2VHZXRVc2VyQWdlbnQiLCJMaXN0SXRlbSIsIlByb2plY3RHcmlkIiwiUHJvamVjdEdyaWRJdGVtIiwiUHJvamVjdFRhZ3MiLCJSZWxhdGVkUHJvamVjdHMiLCJQYWdlVGl0bGUiLCJTdWJUaXRsZSIsIlNwZWNpZmljUHJvamVjdFBhZ2VDb21wb25lbnQiLCJwYXJzZWREYXRhIiwicm91dGVyIiwiU3RyaW5nIiwicXVlcnkiLCJwcm9qZWN0Iiwibm9ybWFsaXplIiwicmVwbGFjZSIsImRhdGEiLCJzdGF0dXMiLCJmZXRjaCIsImlzUmVhZHkiLCJxdWVyeUtleSIsImRldmljZVN0YXRlIiwiYXR0cmlidXRlcyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJ1bmRlZmluZWQiLCJkaXYiLCJkYXJrTW9kZSIsInRhZ0FycmF5IiwiZGV0YWlscyIsInRhZ3MiLCJ0ZXh0IiwidGl0bGUiLCJjb21wYW55IiwiY29sdW1ucyIsInJvd3MiLCJsZW5ndGgiLCJtYXAiLCJpIiwiY29sU3BhbiIsImltZ1NyYyIsImltYWdlIiwidXJsIiwicm93RW5kIiwicm93U3RhcnQiLCJpZCIsImF0IiwiY29sRW5kIiwiY29sU3RhcnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInNlcnZpY2UiLCJkYXJrIiwiZ3JpZENvbHVtbnMiLCJncmlkUm93cyIsIlNwZWNpZmljUHJvamVjdFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/pages/specificProjectPage/[project].tsx\n"));

/***/ })

});