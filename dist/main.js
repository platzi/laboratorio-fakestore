/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const $app = document.getElementById('app');\r\nconst $observe = document.getElementById('observe');\r\nlet newItem = document.createElement('section');\r\nnewItem.classList.add('Items');\r\n\r\n\r\nlet offset = GetLocalStorage() || '5';\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  localStorage.removeItem('pagination')\r\n  offset = '5';\r\n  API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;\r\n  console.log(\"api\", API);\r\n  setLocalStorage();\r\n  loadData(API)\r\n\r\n})\r\nconsole.log('offset', offset);\r\nlet limit = '10';\r\nlet API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;\r\n\r\nfunction setLocalStorage() {\r\n  localStorage.setItem('pagination', JSON.stringify(offset));\r\n}\r\nfunction GetLocalStorage() {\r\n  return JSON.parse(localStorage.getItem('pagination'));\r\n}\r\n\r\n\r\nconst getData = api => {\r\n  fetch(api)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n\r\n      setLocalStorage()\r\n      //console.log(\"response\", response);\r\n      const dataAPI = data.forEach(product => {\r\n        // template\r\n        //console.log(\"products\", product);\r\n        const article = document.createElement('article');\r\n        article.classList.add(\"Card\");\r\n\r\n        const image = document.createElement('img');\r\n        image.src = product.images[0]\r\n\r\n        const h2 = document.createElement('h2');\r\n        h2.innerText = product.title;\r\n\r\n        const small = document.createElement('small');\r\n        small.innerText = `$ ${product.price}`;\r\n\r\n        article.appendChild(image);\r\n        article.appendChild(h2);\r\n        h2.appendChild(small);\r\n        newItem.appendChild(article)\r\n        $app.appendChild(newItem);\r\n\r\n      });\r\n    })\r\n    .catch(error => console.log(error));\r\n}\r\nconst nextPage = () => {\r\n  if (offset != 205) {\r\n    offset = Number(offset) + Number(limit);\r\n    offset = String(offset)\r\n    API = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`\r\n    setLocalStorage();\r\n    loadData(API)\r\n  } else {\r\n    const p = document.createElement('p');\r\n    p.innerText = 'Todos los productos Obtenidos'\r\n    p.classList.add('finalP')\r\n    $app.appendChild(p);\r\n    intersectionObserver.unobserve($observe)\r\n    alert('Todos los productos Obtenidos')\r\n  }\r\n}\r\n\r\nconst loadData = async (urlAPI) => {\r\n  await getData(urlAPI);\r\n}\r\n\r\nconst intersectionObserver = new IntersectionObserver(entries => {\r\n  // logic...\r\n  entries.forEach((entry) => {\r\n\r\n    if (entry.isIntersecting) {\r\n      nextPage()\r\n      console.log('soy el observer');\r\n    }\r\n  });\r\n}, {\r\n  rootMargin: '0px 0px 100% 0px',\r\n});\r\n\r\n\r\nsetTimeout(() => {\r\n  intersectionObserver.observe($observe)\r\n\r\n}, 2000)\r\n\r\n\n\n//# sourceURL=webpack://laboratorio-fakestore/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;