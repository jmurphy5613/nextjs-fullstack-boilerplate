"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function(theme) {\n    return {\n        root: {\n            backgroundColor: theme.palette.secondary.main,\n            minHeight: '100vh'\n        }\n    };\n});\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var classes = useStyles();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\components\\\\layout.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                position: \"static\",\n                __source: {\n                    fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\components\\\\layout.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    __source: {\n                        fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\components\\\\layout.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: classes.root,\n                __source: {\n                    fileName: \"E:\\\\Programming\\\\nextjs-fullstack-boilerplate\\\\client\\\\my-app\\\\components\\\\layout.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: children\n            })\n        ]\n    }));\n};\n_s(Layout, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDRTtBQUNEOzs7QUFHOUMsR0FBSyxDQUFDRyxTQUFTLEdBQUdELDZEQUFVLENBQUNFLFFBQVEsQ0FBUkEsS0FBSztJQUFJLE1BQ3BDLENBRHFDLENBQUM7UUFDcENDLElBQUksRUFBRSxDQUFDO1lBQ0hDLGVBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSTtZQUM3Q0MsU0FBUyxFQUFFLENBQU87UUFFdEIsQ0FBQztJQUNMLENBQUM7O0FBRUQsR0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFFdEIsR0FBSyxDQUFDQyxPQUFPLEdBQUdWLFNBQVM7SUFFekIsTUFBTSx1RUFDRFcsQ0FBRzs7Ozs7Ozs7aUZBQ0NkLGdFQUFNO2dCQUFDZSxRQUFRLEVBQUMsQ0FBUTs7Ozs7OzsrRkFDcEJkLGlFQUFPOzs7Ozs7Ozs7aUZBSVhhLENBQUc7Z0JBQUNFLFNBQVMsRUFBRUgsT0FBTyxDQUFDUixJQUFJOzs7Ozs7OzBCQUN2Qk8sUUFBUTs7OztBQUl6QixDQUFDO0dBaEJLRCxNQUFNOztRQUVRUixTQUFTOzs7S0FGdkJRLE1BQU07QUFrQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC5qc3g/YzAzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIkFwcEJhciIsIlRvb2xiYXIiLCJtYWtlU3R5bGVzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJtaW5IZWlnaHQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJkaXYiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.jsx\n");

/***/ })

});