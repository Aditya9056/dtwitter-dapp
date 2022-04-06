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

/***/ "./hooks/useDtwitter.ts":
/*!******************************!*\
  !*** ./hooks/useDtwitter.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Dtwitter_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dtwitter.json */ \"./hooks/Dtwitter.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar contractApi = _Dtwitter_json__WEBPACK_IMPORTED_MODULE_1__.abi;\nvar contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\nvar Ethereum =  true && window.ethereum;\nvar getDtwitterContract = function() {\n    var provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(Ethereum);\n    var signer = provider.getSigner();\n    return new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(ContractAddress, ContractABI, signer);\n};\nvar userDtwitter = function() {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), currentAccount = ref[0], setCurrentAccount = ref[1];\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account;\n            return _Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        if (Ethereum) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        alert(\"Please install metamask\");\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        _ctx.next = 6;\n                        return Ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 6:\n                        accounts = _ctx.sent;\n                        if (accounts.length === 0) {\n                            console.log(\"No authorized accounts\");\n                        }\n                        account = accounts[0];\n                        console.log(\"Connected to this account ->\", account);\n                        setCurrentAccount(account);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!Ethereum) {\n            console.log(\"No ethereum wallets found \");\n            return;\n        }\n        connectWallet();\n    }, []);\n    var getUser = function() {\n        var _ref = _asyncToGenerator(_Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, user;\n            return _Users_adityajain_Documents_all_data_projects_dtwitter_dapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        contract = getDtwitterContract();\n                        _ctx.next = 3;\n                        return contract.getUser(currentAccount);\n                    case 3:\n                        user = _ctx.sent;\n                        return _ctx.abrupt(\"return\", user);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return {\n        connectWallet: connectWallet,\n        currentAccount: currentAccount\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (userDtwitter);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VEdHdpdHRlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNUO0FBQ1k7QUFFekMsSUFBTUksV0FBVyxHQUFHSiwrQ0FBWTtBQUNoQyxJQUFNTSxlQUFlLEdBQUcsNENBQTRDO0FBQ3BFLElBQU1DLFFBQVEsR0FBRyxLQUE4QixJQUFJLE1BQU8sQ0FBU0UsUUFBUTtBQUczRSxJQUFNQyxtQkFBbUIsR0FBRyxXQUFNO0lBQzlCLElBQU1DLFFBQVEsR0FBRyxJQUFJVixpRUFBNkIsQ0FBQ00sUUFBUSxDQUFDO0lBQzVELElBQU1PLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxTQUFTLEVBQUU7SUFDbkMsT0FBTyxJQUFJZCxtREFBZSxDQUN0QmdCLGVBQWUsRUFDZkMsV0FBVyxFQUNYSixNQUFNLENBQ1QsQ0FBQztDQUNMO0FBSUQsSUFBTUssWUFBWSxHQUFHLFdBQU07SUFFdkIsSUFBNENqQixHQUFvQixHQUFwQkEsK0NBQVEsQ0FBUyxFQUFFLENBQUMsRUF2QnBFLGNBdUJ5QixHQUF1QkEsR0FBb0IsR0FBM0MsRUF2QnpCLGlCQXVCNEMsR0FBSUEsR0FBb0IsR0FBeEI7SUFFeEMsSUFBTW9CLGFBQWE7bUJBQUcsNE1BQVk7Z0JBTXBCQyxRQUFRLEVBS1JDLE9BQU87Ozs7OzRCQVRSakIsUUFBUTs7Ozt3QkFDVGtCLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQzs7OzsrQkFHYmxCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQzs0QkFBQ0MsTUFBTSxFQUFFLHFCQUFxQjt5QkFBQyxDQUFDOzt3QkFBbEVKLFFBQVEsWUFBMEQ7d0JBQ3hFLElBQUlBLFFBQVEsQ0FBQ0ssTUFBTSxLQUFLLENBQUMsRUFBQzs0QkFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO3lCQUN4Qzt3QkFFS04sT0FBTyxHQUFHRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRU4sT0FBTyxDQUFDO3dCQUNwREgsaUJBQWlCLENBQUNHLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7d0JBRzNCSyxPQUFPLENBQUNDLEdBQUcsU0FBSzs7Ozs7Ozs7Ozs7U0FFdkI7d0JBbEJLUixhQUFhOzs7T0FrQmxCO0lBRURuQixnREFBUyxDQUFDLFdBQU07UUFDWixJQUFHLENBQUNJLFFBQVEsRUFBQztZQUNUc0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7WUFDekMsT0FBTztTQUNWO1FBQ0RSLGFBQWEsRUFBRSxDQUFDO0tBQ25CLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFNUyxPQUFPO21CQUFHLDRNQUFZO2dCQUNsQkMsUUFBUSxFQUNSQyxJQUFJOzs7O3dCQURKRCxRQUFRLEdBQUd0QixtQkFBbUIsRUFBRSxDQUFDOzsrQkFDcEJzQixRQUFRLENBQUNELE9BQU8sQ0FBQ1gsY0FBYyxDQUFDOzt3QkFBN0NhLElBQUksWUFBeUM7cURBQzVDQSxJQUFJOzs7Ozs7U0FDZDt3QkFKS0YsT0FBTzs7O09BSVo7SUFFRCxPQUFPO1FBQUNULGFBQWEsRUFBYkEsYUFBYTtRQUFFRixjQUFjLEVBQWRBLGNBQWM7S0FBQztDQUN6QztBQUVELCtEQUFlRCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUR0d2l0dGVyLnRzP2M3NzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER0d2l0dGVyIGZyb20gJy4vRHR3aXR0ZXIuanNvbidcbmltcG9ydCB7ZXRoZXJzfSBmcm9tICdldGhlcnMnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBjb250cmFjdEFwaSA9IER0d2l0dGVyLmFiaVxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gJzB4NUZiREIyMzE1Njc4YWZlY2IzNjdmMDMyZDkzRjY0MmY2NDE4MGFhMydcbmNvbnN0IEV0aGVyZXVtID0gdHlwZW9mIHdpbmRvdyAhPT0gICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5ldGhlcmV1bVxuXG5cbmNvbnN0IGdldER0d2l0dGVyQ29udHJhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoRXRoZXJldW0pXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICByZXR1cm4gbmV3IGV0aGVycy5Db250cmFjdChcbiAgICAgICAgQ29udHJhY3RBZGRyZXNzLFxuICAgICAgICBDb250cmFjdEFCSSxcbiAgICAgICAgc2lnbmVyXG4gICAgKTtcbn1cblxuXG5cbmNvbnN0IHVzZXJEdHdpdHRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtjdXJyZW50QWNjb3VudCwgc2V0Q3VycmVudEFjY291bnRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFFdGhlcmV1bSl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBFdGhlcmV1bS5yZXF1ZXN0KHttZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJ30pO1xuICAgICAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBhdXRob3JpemVkIGFjY291bnRzXCIpXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byB0aGlzIGFjY291bnQgLT5cIiwgYWNjb3VudClcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFjY291bnQpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoIUV0aGVyZXVtKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZXRoZXJldW0gd2FsbGV0cyBmb3VuZCBcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25uZWN0V2FsbGV0KCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBnZXREdHdpdHRlckNvbnRyYWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjb250cmFjdC5nZXRVc2VyKGN1cnJlbnRBY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjb25uZWN0V2FsbGV0LCBjdXJyZW50QWNjb3VudH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlckR0d2l0dGVyIl0sIm5hbWVzIjpbIkR0d2l0dGVyIiwiZXRoZXJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb250cmFjdEFwaSIsImFiaSIsImNvbnRyYWN0QWRkcmVzcyIsIkV0aGVyZXVtIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXREdHdpdHRlckNvbnRyYWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsIkNvbnRyYWN0QWRkcmVzcyIsIkNvbnRyYWN0QUJJIiwidXNlckR0d2l0dGVyIiwiY3VycmVudEFjY291bnQiLCJzZXRDdXJyZW50QWNjb3VudCIsImNvbm5lY3RXYWxsZXQiLCJhY2NvdW50cyIsImFjY291bnQiLCJhbGVydCIsInJlcXVlc3QiLCJtZXRob2QiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlciIsImNvbnRyYWN0IiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useDtwitter.ts\n");

/***/ })

});