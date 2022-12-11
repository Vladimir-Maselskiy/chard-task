"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 5580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Responce)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Button/Button.jsx + 1 modules
var Button = __webpack_require__(8746);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Responce/Responce.styled.js

const StyledModal = (external_styled_components_default()).div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 480px;
  padding: 64px 66px;
  color: #134267;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(108, 117, 139, 0.2);
`;

// EXTERNAL MODULE: ./components/ModalTitle/ModalTitle.jsx + 1 modules
var ModalTitle = __webpack_require__(4685);
// EXTERNAL MODULE: ./components/ModalDescription/ModalDescription.jsx + 1 modules
var ModalDescription = __webpack_require__(1831);
// EXTERNAL MODULE: ./components/Box/Box.jsx
var Box = __webpack_require__(2356);
;// CONCATENATED MODULE: ./images/check-mark.svg
/* harmony default export */ const check_mark = ({"src":"/chard-task/tree/gh-pages/_next/static/media/check-mark.76138ca7.svg","height":160,"width":160});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Responce/Responce.jsx








const Responce = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledModal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                display: "flex",
                alignItems: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: check_mark.src,
                    alt: "Check Mark Logo",
                    width: 160,
                    height: 160
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalTitle/* ModalTitle */.r, {
                children: "Response received"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalDescription/* ModalDescription */.k, {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                type: "button",
                route: "../",
                children: "Done"
            })
        ]
    });
};


/***/ })

};
;