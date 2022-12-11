"use strict";
exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 3897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ HintMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2356);


const HintMessage = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Box_Box__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, {
        display: "flex",
        m: "16px auto 0",
        children: children
    });
};


/***/ }),

/***/ 2538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ NextLink)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NextLink/NextLink.styled.js


const StyledNextLink = external_styled_components_default()((link_default()))`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #32abf2;
  margin-left: 5px;
`;

;// CONCATENATED MODULE: ./components/NextLink/NextLink.jsx


const NextLink = ({ path , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledNextLink, {
        href: path,
        children: children
    });
};


/***/ })

};
;