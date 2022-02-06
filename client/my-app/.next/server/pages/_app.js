"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./helpers/theme.js":
/*!**************************!*\
  !*** ./helpers/theme.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\n//helper theme object\nconst theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: '#0a1929'\n        },\n        secondary: {\n            main: '#081c3c'\n        }\n    },\n    typography: {\n        fontFamily: {\n            primary: '\"Inter\", sans-serif'\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxFQUFxQjtBQUNyQixLQUFLLENBQUNDLEtBQUssR0FBR0QsOERBQVcsQ0FBQyxDQUFDO0lBQ3ZCRSxPQUFPLEVBQUUsQ0FBQztRQUNOQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxJQUFJLEVBQUUsQ0FBUztRQUNqQixDQUFDO1FBQ0RDLFNBQVMsRUFBRSxDQUFDO1lBQ1ZELElBQUksRUFBRSxDQUFTO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RFLFVBQVUsRUFBRSxDQUFDO1FBQ1hDLFVBQVUsRUFBRSxDQUFDO1lBQ1hKLE9BQU8sRUFBRSxDQUFxQjtRQUNoQyxDQUFDO0lBQ0gsQ0FBQztBQUNQLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vaGVscGVycy90aGVtZS5qcz8xY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7IFxyXG5cclxuLy9oZWxwZXIgdGhlbWUgb2JqZWN0XHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICAgIHByaW1hcnk6IHtcclxuICAgICAgICAgIG1haW46ICcjMGExOTI5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgICAgICBtYWluOiAnIzA4MWMzYycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdHlwb2dyYXBoeToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IHtcclxuICAgICAgICAgIHByaW1hcnk6ICdcIkludGVyXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgIH1cclxuICAgICAgfSAgICBcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/theme.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helpers_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/theme */ \"./helpers/theme.js\");\n\n\n\n\n\n\n\nfunction MyApp(props) {\n    const { Component , pageProps  } = props;\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Remove the server-side injected CSS\n        const jssStyles = document.querySelector('#jss-server-side');\n        if (jssStyles) {\n            jssStyles.parentElement.removeChild(jssStyles);\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        __source: {\n            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"My page\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\",\n                        __source: {\n                            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: _helpers_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                __source: {\n                    fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        __source: {\n                            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n};\nMyApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNTO0FBQ047QUFDNEI7QUFDRDtBQUNuQjtBQUVyQixRQUFRLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFHRixLQUFLO0lBRXRDUCxzREFBZSxLQUFPLENBQUM7UUFDckIsRUFBc0M7UUFDdEMsS0FBSyxDQUFDVyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQWtCO1FBQzNELEVBQUUsRUFBRUYsU0FBUyxFQUFFLENBQUM7WUFDZEEsU0FBUyxDQUFDRyxhQUFhLENBQUNDLFdBQVcsQ0FBQ0osU0FBUztRQUMvQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hYLHVEQUFjOzs7Ozs7OztrRkFDWkUsa0RBQUk7Ozs7Ozs7O3lGQUNGZSxDQUFLOzs7Ozs7O2tDQUFDLENBQU87O3lGQUNiQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXNEOzs7Ozs7Ozs7O2tGQUVyRmpCLG1FQUFhO2dCQUFDRSxLQUFLLEVBQUVBLHNEQUFLOzs7Ozs7Ozt5RkFFeEJELHNFQUFXOzs7Ozs7Ozt5RkFDWEksU0FBUzsyQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFREgsS0FBSyxDQUFDZSxTQUFTLEdBQUcsQ0FBQztJQUNqQmIsU0FBUyxFQUFFUCwwRUFBZ0M7SUFDM0NRLFNBQVMsRUFBRVIscUVBQTJCO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9oZWxwZXJzL3RoZW1lJzsgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwidGhlbWUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiRnJhZ21lbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();