"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ HintDescription)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/HintDescription/HintDescription.styled.js

const StyledHintDescription = (external_styled_components_default()).span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #4f637d;
`;

;// CONCATENATED MODULE: ./components/HintDescription/HintDescription.jsx


const HintDescription = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledHintDescription, {
        children: children
    });
};


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

/***/ 7220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ selectStyles)
/* harmony export */ });
const selectStyles = {
    control: (baseStyles, state)=>({
            ...baseStyles,
            border: "none",
            outline: "none",
            backgroundColor: "#F8F9FC",
            padding: "10px 5px 10px 17px",
            borderRadius: "4px"
        }),
    option: (baseStyles, state)=>({
            ...baseStyles,
            borderBottom: "none",
            fontSize: "16px",
            fontWeight: "500",
            color: "#134267",
            ":hover": {
                color: "#32ABF2"
            },
            transition: "color 250ms linear"
        }),
    indicatorSeparator: (baseStyles, state)=>({
            ...baseStyles,
            display: "none"
        }),
    placeholder: (baseStyles, state)=>({
            ...baseStyles,
            color: "#C3CAD5",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.5"
        })
};


/***/ })

};
;