/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/quiz"],{

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Flucasrosvall%2Fcode_projects%2Fdog-platform%2Ffrontend%2Fpages%2Fquiz%2Findex.js&page=%2Fquiz!":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Flucasrosvall%2Fcode_projects%2Fdog-platform%2Ffrontend%2Fpages%2Fquiz%2Findex.js&page=%2Fquiz! ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/quiz\",\n      function () {\n        return __webpack_require__(/*! ./pages/quiz/index.js */ \"./pages/quiz/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/quiz\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzP2Fic29sdXRlUGFnZVBhdGg9JTJGVXNlcnMlMkZsdWNhc3Jvc3ZhbGwlMkZjb2RlX3Byb2plY3RzJTJGZG9nLXBsYXRmb3JtJTJGZnJvbnRlbmQlMkZwYWdlcyUyRnF1aXolMkZpbmRleC5qcyZwYWdlPSUyRnF1aXohLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0RBQXVCO0FBQzlDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz81ZGZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvcXVpelwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvcXVpei9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvcXVpelwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Flucasrosvall%2Fcode_projects%2Fdog-platform%2Ffrontend%2Fpages%2Fquiz%2Findex.js&page=%2Fquiz!\n"));

/***/ }),

/***/ "./components/Quiz/QuizCard.js":
/*!*************************************!*\
  !*** ./components/Quiz/QuizCard.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuizCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Link */ \"./components/Link.js\");\n\n\n\nfunction QuizCard(param) {\n    var id = param.id, title = param.title, description = param.description;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"/quiz/\" + id,\n        className: \"linkCard\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"blogCard\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"blogCardTextSection\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btnStyle\",\n                        children: \"Testa Quizet \\u2192\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/components/Quiz/QuizCard.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n};\n_c = QuizCard;\nvar _c;\n$RefreshReg$(_c, \"QuizCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXovUXVpekNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDVTtBQUVyQixTQUFTRSxRQUFRLENBQUMsS0FBc0IsRUFBRTtRQUF2QkMsRUFBRSxHQUFILEtBQXNCLENBQXJCQSxFQUFFLEVBQUNDLEtBQUssR0FBVCxLQUFzQixDQUFsQkEsS0FBSyxFQUFDQyxXQUFXLEdBQXJCLEtBQXNCLENBQVpBLFdBQVc7SUFFcEQscUJBQ0UsOERBQUNKLHdEQUFJO1FBQUNLLElBQUksRUFBRSxRQUFRLEdBQUNILEVBQUU7UUFBRUksU0FBUyxFQUFDLFVBQVU7a0JBQzNDLDRFQUFDQyxLQUFHO1lBQUNELFNBQVMsRUFBQyxVQUFVO3NCQUN2Qiw0RUFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHFCQUFxQjs7a0NBQ2xDLDhEQUFDRSxJQUFFO2tDQUFFTCxLQUFLOzs7Ozs0QkFBTTtrQ0FDaEIsOERBQUNNLEdBQUM7a0NBQUVMLFdBQVc7Ozs7OzRCQUFLO2tDQUNwQiw4REFBQ00sUUFBTTt3QkFBQ0osU0FBUyxFQUFDLFVBQVU7a0NBQUMscUJBQWM7Ozs7OzRCQUFTOzs7Ozs7b0JBQ2hEOzs7OztnQkFDRjs7Ozs7WUFDRCxDQUNQO0NBQ0g7QUFidUJMLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWl6L1F1aXpDYXJkLmpzPzRhODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9MaW5rXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpekNhcmQoe2lkLHRpdGxlLGRlc2NyaXB0aW9ufSkge1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17XCIvcXVpei9cIitpZH0gY2xhc3NOYW1lPVwibGlua0NhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ0NhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nQ2FyZFRleHRTZWN0aW9uXCI+XG4gICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TdHlsZVwiPlRlc3RhIFF1aXpldCDihpI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiUXVpekNhcmQiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJocmVmIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDQiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Quiz/QuizCard.js\n"));

/***/ }),

/***/ "./pages/quiz/index.js":
/*!*****************************!*\
  !*** ./pages/quiz/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Quiz; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_lucasrosvall_code_projects_dog_platform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lucasrosvall_code_projects_dog_platform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lucasrosvall_code_projects_dog_platform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Quiz_QuizCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Quiz/QuizCard */ \"./components/Quiz/QuizCard.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Quiz() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), quizes = ref[0], setQuizes = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        getQuizes();\n    }, []);\n    var getQuizes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_lucasrosvall_code_projects_dog_platform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_lucasrosvall_code_projects_dog_platform_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:3000/quizes\");\n                    case 2:\n                        res = _ctx.sent;\n                        console.log(res);\n                        if (res.data.img) setImage(res.data.img);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getQuizes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"bg-gray-100 h-full min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-normal leading-normal mt-0 mb-2 \",\n                        children: \"Quiz\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/pages/quiz/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: quizes.map(function(quiz) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Quiz_QuizCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: quiz._id,\n                                title: quiz.title,\n                                description: quiz.description\n                            }, void 0, false, {\n                                fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/pages/quiz/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 28\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/pages/quiz/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/pages/quiz/index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lucasrosvall/code_projects/dog-platform/frontend/pages/quiz/index.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n};\n_s(Quiz, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Quiz;\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWl6L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUF3QztBQUNmO0FBQ3dCOztBQUVsQyxTQUFTSSxJQUFJLEdBQUc7OztJQUMzQixJQUEyQkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFoQ0ksTUFBTSxHQUFjSixHQUFZLEdBQTFCLEVBQUNLLFNBQVMsR0FBSUwsR0FBWSxHQUFoQjtJQUV2QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pPLFNBQVMsRUFBRTtLQUNkLEVBQUMsRUFBRSxDQUFDO0lBRUwsSUFBTUEsU0FBUzttQkFBRyxpUUFBWTtnQkFDdEJDLEdBQUc7Ozs7OytCQUFTTixnREFBUyxDQUFDLDhCQUE4QixDQUFDOzt3QkFBckRNLEdBQUcsWUFBa0Q7d0JBQ3pERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO3dCQUNoQixJQUFHQSxHQUFHLENBQUNJLElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxRQUFRLENBQUNOLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxHQUFHLENBQUM7Ozs7OztTQUMxQzt3QkFKS04sU0FBUzs7O09BSWQ7SUFHRCxxQkFBUTtrQkFDUiw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsaUNBQWlDO3NCQUM1Qyw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHVCQUF1Qjs7a0NBQ2xDLDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsZ0RBQWdEO2tDQUFDLE1BQUk7Ozs7OzRCQUFLO2tDQUN4RSw4REFBQ0QsS0FBRztrQ0FDQ1YsTUFBTSxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLOzRCQUNsQixxQkFBTyw4REFBQ2hCLGlFQUFRO2dDQUFDaUIsRUFBRSxFQUFFRCxJQUFJLENBQUNFLEdBQUc7Z0NBQUVDLEtBQUssRUFBRUgsSUFBSSxDQUFDRyxLQUFLO2dDQUFFQyxXQUFXLEVBQUVKLElBQUksQ0FBQ0ksV0FBVzs7Ozs7cUNBQUc7eUJBQ3JGLENBQUM7Ozs7OzRCQUNBOzs7Ozs7b0JBQ0o7Ozs7O2dCQUNKO3FCQUVILENBQUM7Q0FDUDtHQTNCdUJuQixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVpei9pbmRleC5qcz9hY2M3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgUXVpekNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9RdWl6L1F1aXpDYXJkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVpeigpIHtcbiAgICBjb25zdCBbcXVpemVzLHNldFF1aXplc10gPSB1c2VTdGF0ZShbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFF1aXplcygpXG4gICAgfSxbXSlcblxuICAgIGNvbnN0IGdldFF1aXplcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9xdWl6ZXNcIilcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICBpZihyZXMuZGF0YS5pbWcpIHNldEltYWdlKHJlcy5kYXRhLmltZylcbiAgICB9XG5cblxuICAgIHJldHVybiAoPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGgtZnVsbCBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTVcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LW5vcm1hbCBsZWFkaW5nLW5vcm1hbCBtdC0wIG1iLTIgXCI+UXVpejwvaDE+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtxdWl6ZXMubWFwKChxdWl6KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UXVpekNhcmQgaWQ9e3F1aXouX2lkfSB0aXRsZT17cXVpei50aXRsZX0gZGVzY3JpcHRpb249e3F1aXouZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8Lz4pXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJRdWl6Q2FyZCIsIlF1aXoiLCJxdWl6ZXMiLCJzZXRRdWl6ZXMiLCJnZXRRdWl6ZXMiLCJyZXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImltZyIsInNldEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJxdWl6IiwiaWQiLCJfaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quiz/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Flucasrosvall%2Fcode_projects%2Fdog-platform%2Ffrontend%2Fpages%2Fquiz%2Findex.js&page=%2Fquiz!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);