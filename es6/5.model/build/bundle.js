/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod1__ = __webpack_require__(1);
//1.*代表引入所有，as mod表示起个别名为mod
// import * as mod from './mod1';
// console.info(mod)
// // console.info(mod.a)
// // console.info(mod.b);
// // mod.b = 23;
// // console.info(mod.b); //23 不是说const的不能改吗？这边为啥输出了23

// mod.sum();

// var p = new mod.Person('zjh');
// p.showName();

//2.按需引入 {a,sum}
// import {a,sum} from './mod1';
// alert(a);
// sum();

//3.默认导入 import a from './mod1'; import名字随意起

alert(__WEBPACK_IMPORTED_MODULE_0__mod1__["a" /* default */])

//4.模块的代码引入进来，不引入内部成员
// import "./1.jpg";
// import "./1.css";

//5.异步引入
// let promise=import("./mod1");
/*
import("./mod2").then(mod2=>{
  alert('mod2的qq:'+mod2.qq);
}, err=>{
  alert('mod2加载失败');
});
*/


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod2__ = __webpack_require__(2);
// 1.export 连着定义带输出方式
// // export let a = 9;
// // export const b = 22;
// let a = 22;
// let b = 33;
// export function sum(){
//     alert(a+b)
// }

// export class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         alert(this.name)
//     }
// };

//2.定义完再输出
// let a = 3;
// let b = 6;
// let sum = function(){
//     alert(a+b)
// }
// let Person = class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showName(){
//         alert(this.name)
//     }
// }

// export {a,b,sum,Person}

//3.默认导出
/* harmony default export */ __webpack_exports__["a"] = (23);
//另外的:导入别的模块

alert(__WEBPACK_IMPORTED_MODULE_0__mod2__["a" /* default */])

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (999);

/***/ })
/******/ ]);