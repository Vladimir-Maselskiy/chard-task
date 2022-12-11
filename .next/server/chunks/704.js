"use strict";
exports.id = 704;
exports.ids = [704];
exports.modules = {

/***/ 2744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon-check-vector.d8e03632.svg","height":9,"width":12});

/***/ }),

/***/ 3013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ LogoInModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Box/Box.jsx
var Box = __webpack_require__(2356);
;// CONCATENATED MODULE: ./images/chad-logo.svg
/* harmony default export */ const chad_logo = ({"src":"/_next/static/media/chad-logo.0aa5f1b7.svg","height":32,"width":32});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/LogoInModal/LogoInModal.jsx




const LogoInModal = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
        display: "flex",
        alignItems: "center",
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 1.33,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                display: "flex",
                alignItems: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: chad_logo.src,
                    alt: "Chad Logo",
                    width: 28.42,
                    height: 23.43
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Chad"
            })
        ]
    });
};


/***/ }),

/***/ 7424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ ShopifyPreferenceInfo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ShopifyPreferenceInfo/ShopifyPreferenceInfo.styled.js

const StyledShopifyPreferenceInfo = (external_styled_components_default()).div`
  margin-left: 15px;

  & h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  }

  & p {
    margin-top: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #4f637d;
  }
`;

;// CONCATENATED MODULE: ./components/ShopifyPreferenceInfo/ShopifyPreferenceInfo.jsx


const ShopifyPreferenceInfo = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledShopifyPreferenceInfo, {
        children: children
    });
};


/***/ })

};
;