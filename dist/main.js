/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage */ \"./src/modules/homepage.js\");\n\n(0,_modules_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks)\n/* harmony export */ });\nfunction saveTasks(tasks) {\n    localStorage.setItem(\"TASKS\", JSON.stringify(tasks));\n}\nfunction loadTasks() {\n    const taskJSON = localStorage.getItem(\"TASKS\");\n    if (taskJSON == null)\n        return [];\n    return JSON.parse(taskJSON);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\nconst initPage = () => {\n    const list = document.querySelector(\"#list\");\n    const form = document.getElementById(\"new-task-form\");\n    const input = document.querySelector(\"#new-task-title\");\n    const tasks = (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.loadTasks)();\n    tasks.forEach(addListItem);\n    form === null || form === void 0 ? void 0 : form.addEventListener(\"submit\", e => {\n        e.preventDefault();\n        if ((input === null || input === void 0 ? void 0 : input.value) == \"\" || (input === null || input === void 0 ? void 0 : input.value) == null)\n            return;\n        const newTask = {\n            title: input.value,\n            desc: \"\",\n            dueDate: new Date(),\n            createdAt: new Date(),\n            isComplete: false,\n            priority: \"\"\n        };\n        tasks.push(newTask);\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);\n        addListItem(newTask);\n        input.value = \"\";\n    });\n    function addListItem(task) {\n        const item = document.createElement(\"li\");\n        const label = document.createElement(\"label\");\n        const checkbox = document.createElement(\"input\");\n        checkbox.addEventListener(\"change\", () => {\n            task.isComplete = checkbox.checked;\n            (0,_Storage__WEBPACK_IMPORTED_MODULE_0__.saveTasks)(tasks);\n        });\n        checkbox.type = \"checkbox\";\n        checkbox.checked = task.isComplete;\n        label.append(checkbox, task.title);\n        item.append(label);\n        list === null || list === void 0 ? void 0 : list.append(item);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;