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

/***/ "../KW\u0000#2(todo)/src/js/app.js":
/*!************************************!*\
  !*** ../KW #2(todo)/src/js/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"../KW\\u0000#2(todo)/src/js/index.js\");\n\r\n\r\nfunction User(id, name) {\r\n    this.id = Date.now() + id * 10\r\n    this.name = name\r\n}\r\n\r\nfunction Post(id, userId, text) {\r\n    this.id = id\r\n    this.userId = userId\r\n    this.text = text\r\n}\r\n\r\nfunction Comment(id, postId,text){\r\n    this.id = id\r\n    this.postId = postId\r\n    this.text = text\r\n}\r\n\r\nconst getUsers = (num) => {\r\n    const users = [];\r\n    for (let i=1; i<=num; i++) {\r\n        users.push( createUser(i) )\r\n    }\r\n    return users\r\n}\r\n\r\nconst createUser = (idx) => {\r\n    return new User(idx,`USER ${idx}`)\r\n}\r\n\r\nconst getPosts = () => {\r\n    const posts = []\r\n    users.forEach( (user) => {\r\n        let numPosts = Math.floor(Math.random() * 25) + 1\r\n        for (let i = 1; i <= numPosts; i++) {\r\n            posts.push( new Post( Date.now() + Math.floor(Math.random() * 100000), user.id, `Text from ${user.name} #${i}` ) )\r\n        }  \r\n        \r\n    } )\r\n    return posts\r\n}   \r\n\r\n    const getComment = () => {\r\n        const comments = []\r\n        posts.forEach( (post) => {\r\n            let numComment = Math.floor(Math.random()*10) + 1\r\n            \r\n            for (let i = 1; i <= numComment; i++) {\r\n                comments.push(  new Comment( Date.now() + Math.floor(Math.random() * 100000), post.id, `Comment from ${post.id} #${i}` ) )\r\n            }\r\n            \r\n        } )  \r\n        return comments\r\n    }\r\n      \r\n    \r\nconst renderUsers = () => {\r\n    const lBlock = document.querySelector('#l')\r\n    lBlock.innerHTML = ''\r\n    users.forEach( user => {\r\n        const card = document.createElement('div')\r\n        card.id = `user_${user.id}`\r\n        card.innerText = user.name\r\n        card.addEventListener('click', onUserClickHandle)\r\n        lBlock.appendChild(card)\r\n        \r\n\r\n    } )\r\n}\r\n\r\n\r\nconst onUserClickHandle = event => {\r\n    console.log( event.target )\r\n    const commentsBlock = document.querySelector('.comments')\r\n    commentsBlock.innerHTML = '' \r\n    let userId = +event.target.id.split('_')[1]\r\n    const filteredPosts = posts.filter( post => post.userId === userId )\r\n    if (!filteredPosts.length) {\r\n        return false\r\n    }\r\n    renderPosts( filteredPosts )\r\n    \r\n}\r\n\r\n\r\nconst onPostClickHandleComment = event => {\r\n    console.log( event.target )\r\n\r\n    let postsId = +event.target.id.split('_')[1]\r\n     const filteredComment = comments.filter( comment => comment.postId === postsId )\r\n     \r\n     if (!filteredComment.length) {\r\n         return false\r\n     }\r\n     \r\n    \r\n    return renderComments(filteredComment);\r\n}\r\n\r\nconst renderPosts = ( fPosts ) => {\r\n    const rBlock = document.querySelector('#r')\r\n    rBlock.innerHTML = ''\r\n    fPosts.forEach( post => {\r\n        const postCard = document.createElement('div')\r\n        postCard.id = `card_${post.id}`\r\n        postCard.innerText = post.text\r\n        postCard.addEventListener('click', onPostClickHandleComment)\r\n        rBlock.appendChild(postCard)\r\n    } )\r\n}\r\n\r\nconst renderComments = (fComment) => {\r\n    const commentsBlock = document.querySelector('.comments')\r\n    commentsBlock.innerHTML = ''\r\n    fComment.forEach(comment => {\r\n        const commentCard = document.createElement('div')\r\n        commentCard.innerText = comment.text\r\n        commentsBlock.appendChild(commentCard)\r\n    })\r\n\r\n}\r\n\r\nconst users = getUsers(10)\r\nconst posts = getPosts()\r\nconst comments = getComment()\r\n// posts.sort((a,b) => a.id-b.id)\r\n\r\nrenderUsers();\r\n\r\n\r\n\r\ndocument.querySelector('h5 span').textContent = _index__WEBPACK_IMPORTED_MODULE_0__.default.getInfo()\n\n//# sourceURL=webpack://todo/../KW%00#2(todo)/src/js/app.js?");

/***/ }),

/***/ "../KW\u0000#2(todo)/src/js/index.js":
/*!**************************************!*\
  !*** ../KW #2(todo)/src/js/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst user ={\r\n    fName: 'John',\r\n    lName: 'Smith',\r\n    age: 29,\r\n    getInfo : function() {\r\n        return`${this.fName}     ${this.lName}      ${this.age}`\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (user);\n\n//# sourceURL=webpack://todo/../KW%00#2(todo)/src/js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../KW\u0000#2(todo)/src/js/app.js");
/******/ 	
/******/ })()
;