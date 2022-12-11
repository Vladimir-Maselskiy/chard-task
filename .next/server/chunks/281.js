"use strict";
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 2356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Box)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5834);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(styled_system__WEBPACK_IMPORTED_MODULE_1__.color, styled_system__WEBPACK_IMPORTED_MODULE_1__.flexbox, styled_system__WEBPACK_IMPORTED_MODULE_1__.layout, styled_system__WEBPACK_IMPORTED_MODULE_1__.space, styled_system__WEBPACK_IMPORTED_MODULE_1__.typography, styled_system__WEBPACK_IMPORTED_MODULE_1__.border, styled_system__WEBPACK_IMPORTED_MODULE_1__.position, styled_system__WEBPACK_IMPORTED_MODULE_1__.background, styled_system__WEBPACK_IMPORTED_MODULE_1__.grid);


/***/ }),

/***/ 8746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Button/Button.styled.js

const StyledButton = (external_styled_components_default()).button`
  margin-top: 32px;
  padding: 11px 0;
  background: #32abf2;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #ffffff;
  width: 100%;
  cursor: pointer;
`;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./context/state.js
var state = __webpack_require__(391);
;// CONCATENATED MODULE: ./components/Button/Button.jsx




const Button = ({ children , route , isSubmitting  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
        onClick: ()=>{
            router.push(`${route}`);
        },
        disabled: isSubmitting,
        children: children
    });
};


/***/ }),

/***/ 323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ MainContainer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data/progressIndicatorItems.js
const progressIndicatorItems = [
    "Welcome",
    "Connect your Shopify store",
    "Connect your customer support email",
    "Done"
];

// EXTERNAL MODULE: ./components/Box/Box.jsx
var Box = __webpack_require__(2356);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ProgressCheckImage/ProgressCheckImage.styled.js

const StyledProgressImage = (external_styled_components_default()).div`
  width: 32px;
  height: 32px;

  border: ${(p)=>p.progressChecked ? "2px solid #5d7fa3" : "2px solid #32ABF2"};
  border-radius: 50%;
`;
const ProgressCheckImage_styled_StyledProgressCheckConnectLine = (external_styled_components_default()).div`
  width: 0;
  height: 48px;
  border: ${(p)=>p.progressChecked ? "1px solid #5d7fa3" : "1px solid #32ABF2"};
  position: absolute;
  left: 15px;
  bottom: -48px;
`;

;// CONCATENATED MODULE: ./components/ProgressCheckImage/ProgressCheckImage.jsx


const ProgressCheckImage = ({ progressChecked , bgImg  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledProgressImage, {
        progressChecked: progressChecked,
        bgImg: bgImg
    });
};
const ProgressCheckConnectLine = ({ progressChecked  })=>{
    return /*#__PURE__*/ _jsx(StyledProgressCheckConnectLine, {
        check: progressChecked
    });
};

;// CONCATENATED MODULE: ./components/ProgressDots/ProgressDots.jsx


const ProgressDots = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
        display: "flex",
        gridGap: 12,
        mt: 16,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                width: 8,
                height: 8,
                bg: "#96CAF7",
                borderRadius: "50%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                width: 8,
                height: 8,
                bg: "#134267",
                borderRadius: "50%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                width: 8,
                height: 8,
                bg: "#134267",
                borderRadius: "50%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                width: 8,
                height: 8,
                bg: "#134267",
                borderRadius: "50%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                width: 8,
                height: 8,
                bg: "#134267",
                borderRadius: "50%"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/NavButton/NavButton.styled.js
// import Link from 'next/link';

const StyledBackButton = (external_styled_components_default()).button`
  width: 84px;
  padding: 6px 12px 6px 36px;
  background: #134267;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #93a8c1;
  cursor: pointer;
`;
const StyledNextButton = (external_styled_components_default()).button`
  width: 84px;
  padding: 6px 36px 6px 12px;
  background: #134267;
  border-radius: 4px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #93a8c1;
  cursor: pointer;
`;

;// CONCATENATED MODULE: ./images/icon_chevron-right.svg
/* harmony default export */ const icon_chevron_right = ({"src":"/_next/static/media/icon_chevron-right.3943f8df.svg","height":17,"width":16});
;// CONCATENATED MODULE: ./images/icon_chevron-left.svg
/* harmony default export */ const icon_chevron_left = ({"src":"/_next/static/media/icon_chevron-left.b8169eb8.svg","height":17,"width":16});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/NavButton/NavButton.jsx






const NavButton = ({ path , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
        display: "flex",
        justifyContent: "space-between",
        width: 364,
        mt: 48,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: "8.5px",
                        left: "10px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icon_chevron_left.src,
                            alt: "Icon Chevron Right",
                            width: 16,
                            height: 16
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledBackButton, {
                        children: "Back"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
                position: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: "8.5px",
                        right: "10px",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icon_chevron_right.src,
                            alt: "Icon Chevron Left",
                            width: 16,
                            height: 16
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledNextButton, {
                        children: "Next"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ProgressIndicator/ProgressIndicator.styled.js

const StyledList = (external_styled_components_default()).ul`
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 300px; */
  height: 100%;
`;
const StyledItem = (external_styled_components_default()).li`
  display: flex;
  position: relative;
  align-items: center;
  &:not(:first-child) {
    margin-top: 48px;
  }
`;
const ItemTitle = (external_styled_components_default()).p`
  margin-left: 16px;
  color: ${(p)=>p.inex < p.step ? "#FFFFFF" : "#5D7FA3"};
`;
const Styled5X = (external_styled_components_default()).p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
`;
const Styled5XDescription = (external_styled_components_default()).p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

;// CONCATENATED MODULE: ./images/progress-round-check.svg
/* harmony default export */ const progress_round_check = ({"src":"/_next/static/media/progress-round-check.af2731e6.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./components/StyledBigCheck/StyledBigCheck.styled.js

const StyledChek = (external_styled_components_default()).div`
  position: absolute;
  width: 42px;
  height: 42px;
  border: 1.5px solid #32abf2;
  border-radius: 50%;
  top: -5px;
  left: -5px;
  z-index: 10;
  background-color: #0e3452;
`;

;// CONCATENATED MODULE: ./components/StyledBigCheck/StyledBigCheck.jsx


const StyledBigCheck = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledChek, {});
};

// EXTERNAL MODULE: ./context/state.js
var state = __webpack_require__(391);
;// CONCATENATED MODULE: ./components/ProgressIndicator/ProgressIndicator.jsx












const ProgressIndicator = ()=>{
    const { step , progressCheck , bigCheckIndex  } = (0,state/* useAppContext */.b)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
        display: "flex",
        width: 568,
        bg: "#0e3452",
        pt: 70,
        pb: 56,
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(StyledList, {
                children: progressIndicatorItems.map((progressIndicatorItems, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledItem, {
                        children: [
                            bigCheckIndex === index && /*#__PURE__*/ jsx_runtime_.jsx(StyledBigCheck, {}),
                            progressCheck > index && /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                                display: "flex",
                                alignItems: "center",
                                position: "absolute",
                                left: 0,
                                top: 0,
                                zIndex: 20,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: progress_round_check.src,
                                    alt: "Check Mark Logo",
                                    width: 32,
                                    height: 32
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ProgressCheckImage, {
                                progressChecked: index >= step,
                                bgImg: step > index + 1
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ItemTitle, {
                                children: progressIndicatorItems
                            }),
                            index < progressIndicatorItems.length - 1 && /*#__PURE__*/ jsx_runtime_.jsx(ProgressCheckImage_styled_StyledProgressCheckConnectLine, {
                                progressChecked: index + 1 >= step
                            })
                        ]
                    }, progressIndicatorItems);
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavButton, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box/* Box */.x, {
                display: "flex",
                alignItems: "center",
                color: "#96caf7",
                width: 364,
                mt: 102,
                bg: "#134267",
                p: 16,
                gridGap: 16,
                borderRadius: 8,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Styled5X, {
                        children: "5X"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Styled5XDescription, {
                        children: "Acquiring a new customer is 5x more costly than making an unhappy customer happy"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProgressDots, {})
        ]
    });
};

;// CONCATENATED MODULE: ./images/tileable-doodle.png
/* harmony default export */ const tileable_doodle = ({"src":"/_next/static/media/tileable-doodle.472f5a41.png","height":900,"width":872,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX39/n39/j0mi0PAAAAFklEQVR42mO4y1DPUMzwjgFEGzO8BwAq0wU8M7BETwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/MainContainer/MainContainer.styled.js


const StyledMainContainer = (external_styled_components_default()).div`
  display: flex;
  align-items: stretch;
  width: 1440px;
`;

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/MainContainer/MainContainer.jsx






const MainContainer = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledMainContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Chad Store"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ProgressIndicator, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Box/* Box */.x, {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100%",
                flexGrow: 2,
                backgroundImage: `url("${tileable_doodle.src}")`,
                children: children
            })
        ]
    });
};


/***/ }),

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ ModalDescription)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ModalDescription/ModalDescription.styled.js

const StyledModalDescription = (external_styled_components_default()).p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -1%;
  margin-top: 16px;
  margin-bottom: 32px;
`;

;// CONCATENATED MODULE: ./components/ModalDescription/ModalDescription.jsx


const ModalDescription = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledModalDescription, {
        children: children
    });
};


/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ ModalTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ModalTitle/ModalTitle.styled.js

const StyledModalTitle = (external_styled_components_default()).h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-top: 24px;
`;

;// CONCATENATED MODULE: ./components/ModalTitle/ModalTitle.jsx


const ModalTitle = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledModalTitle, {
        children: children
    });
};


/***/ }),

/***/ 391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AppWrapper),
/* harmony export */   "b": () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function AppWrapper({ children  }) {
    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [progressCheck, setProgressCheck] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [bigCheckIndex, setBigCheckIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    let sharedState = {
        step,
        setStep,
        progressCheck,
        setProgressCheck,
        bigCheckIndex,
        setBigCheckIndex
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: sharedState,
        children: children
    });
}
function useAppContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);
}


/***/ })

};
;