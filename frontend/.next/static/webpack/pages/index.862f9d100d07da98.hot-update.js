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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_features_users_usersSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/features/users/usersSlice */ \"./src/features/users/usersSlice.js\");\n/* harmony import */ var _components_Quizzes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Quizzes */ \"./components/Quizzes.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var quizes = param.quizes;\n    _s();\n    var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state.users;\n    });\n    var user = users.user[0];\n    console.log(\"user\", user);\n    console.log(quizes);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        dispatch((0,_src_features_users_usersSlice__WEBPACK_IMPORTED_MODULE_6__.getUser)());\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: users.status == \"loading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this) : Object.keys(user).length == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                margin: \"5rem\"\n            },\n            children: [\n                \"Don't hava an account ?\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/account/signup\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this),\n                \"Have an account ?\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/account/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: \"login\"\n                    }, void 0, false, {\n                        fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                margin: \"5rem\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/account/users/dashboard\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"User Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quizzes__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    quizes: quizes\n                }, void 0, false, {\n                    fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n            lineNumber: 48,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/shifat/Desktop/quiz-app/frontend/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"N0SeCBd1xQV/Y3oSFyV14pCI5TA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ0U7QUFDRjtBQUNrQjtBQUVRO0FBQ3JCO0FBQ3lCO0FBR2hCO0FBQ0E7O0FBVzVCLFNBQVNVLElBQUksQ0FBQyxLQUFVLEVBQUU7UUFBWixNQUFRLEdBQVIsS0FBVSxDQUFSQyxNQUFNOztJQUNuQyxJQUFNQyxLQUFLLEdBQUdQLHdEQUFXLENBQUMsU0FBQ1EsS0FBSztlQUFLQSxLQUFLLENBQUNELEtBQUs7S0FBQSxDQUFDO0lBQ2pELElBQU1FLElBQUksR0FBR0YsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVGLElBQUksQ0FBQyxDQUFDO0lBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDLENBQUM7SUFDcEIsSUFBTU0sUUFBUSxHQUFHYix3REFBVyxFQUFFO0lBQzlCRSxnREFBUyxDQUFDLFdBQU07UUFDZFcsUUFBUSxDQUFDVix1RUFBTyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDLEVBQUU7UUFBQ08sSUFBSTtLQUFDLENBQUMsQ0FBQztJQUNYLHFCQUNFLDhEQUFDSSxLQUFHO2tCQUNETixLQUFLLENBQUNPLE1BQU0sSUFBSSxTQUFTLGlCQUN4Qiw4REFBQ0QsS0FBRztzQkFBQyxhQUFXOzs7OztnQkFBTSxHQUNwQkUsTUFBTSxDQUFDQyxJQUFJLENBQUNQLElBQUksQ0FBQyxDQUFDUSxNQUFNLElBQUksQ0FBQyxpQkFDL0IsOERBQUNKLEtBQUc7WUFBQ0ssS0FBSyxFQUFFO2dCQUFFQyxNQUFNLEVBQUUsTUFBTTthQUFFOztnQkFBRSx5QkFFOUI7OEJBQUEsOERBQUN0QixrREFBSTtvQkFBQ3VCLElBQUksRUFBRSxpQkFBaUI7OEJBQzNCLDRFQUFDQyxHQUFDO2tDQUFDLFFBQU07Ozs7OzRCQUFJOzs7Ozt3QkFDUjtnQkFBQSxtQkFFUDs4QkFBQSw4REFBQ3hCLGtEQUFJO29CQUFDdUIsSUFBSSxFQUFFLGdCQUFnQjs4QkFDMUIsNEVBQUNDLEdBQUM7a0NBQUMsT0FBSzs7Ozs7NEJBQUk7Ozs7O3dCQUNQOzs7Ozs7Z0JBQ0gsaUJBRU4sOERBQUNSLEtBQUc7WUFBQ0ssS0FBSyxFQUFFO2dCQUFFQyxNQUFNLEVBQUUsTUFBTTthQUFFOzs4QkFDNUIsOERBQUNmLHFEQUFNOzhCQUNMLDRFQUFDUCxrREFBSTt3QkFBQ3VCLElBQUksRUFBRSwwQkFBMEI7a0NBQ3BDLDRFQUFDQyxHQUFDO3NDQUFDLGdCQUFjOzs7OztnQ0FBSTs7Ozs7NEJBQ2hCOzs7Ozt3QkFDQTs4QkFDVCw4REFBQ2xCLDJEQUFPO29CQUFDRyxNQUFNLEVBQUVBLE1BQU07Ozs7O3dCQUFJOzs7Ozs7Z0JBQ3ZCOzs7OztZQUVKLENBQ047QUFDSixDQUFDO0dBcEN1QkQsSUFBSTs7UUFDWkwsb0RBQVc7UUFJUkQsb0RBQVc7OztBQUxOTSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3VzZXJzL3VzZXJzU2xpY2UnO1xuY29uc3QgUE9TVFNfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9BUEk7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFF1aXp6ZXMgZnJvbSAnQC9jb21wb25lbnRzL1F1aXp6ZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7UE9TVFNfVVJMfS9xdWl6YCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHF1aXplczogcmVzcG9uc2UuZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcXVpemVzIH0pIHtcbiAgY29uc3QgdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJzKTtcbiAgY29uc3QgdXNlciA9IHVzZXJzLnVzZXJbMF07XG4gIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XG4gIGNvbnNvbGUubG9nKHF1aXplcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRVc2VyKCkpO1xuICB9LCBbdXNlcl0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dXNlcnMuc3RhdHVzID09ICdsb2FkaW5nJyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PlxuICAgICAgKSA6IE9iamVjdC5rZXlzKHVzZXIpLmxlbmd0aCA9PSAwID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzVyZW0nIH19PlxuICAgICAgICAgIERvbid0IGhhdmEgYW4gYWNjb3VudCA/XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9hY2NvdW50L3NpZ251cCd9PlxuICAgICAgICAgICAgPGE+U2lnbnVwPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICBIYXZlIGFuIGFjY291bnQgP1xuICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWNjb3VudC9sb2dpbid9PlxuICAgICAgICAgICAgPGE+bG9naW48L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnNXJlbScgfX0+XG4gICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWNjb3VudC91c2Vycy9kYXNoYm9hcmQnfT5cbiAgICAgICAgICAgICAgPGE+VXNlciBEYXNoYm9hcmQ8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPFF1aXp6ZXMgcXVpemVzPXtxdWl6ZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwic3R5bGVzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUVmZmVjdCIsImdldFVzZXIiLCJRdWl6emVzIiwiQnV0dG9uIiwiSG9tZSIsInF1aXplcyIsInVzZXJzIiwic3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwiZGl2Iiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInN0eWxlIiwibWFyZ2luIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});