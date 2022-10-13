/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./less/style.less":
/*!*************************!*\
  !*** ./less/style.less ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/changingQuantity.js":
/*!********************************!*\
  !*** ./js/changingQuantity.js ***!
  \********************************/
/***/ (function() {

const products = document.querySelectorAll('.purchases__item'); // Все карточки товаров

products.forEach((item, i) => {
  let product = products[i].querySelector('.purchases__number-count'); // Карточка товара
  const productMinus = products[i].querySelector('.purchases__button-minus');
  const productPlus = products[i].querySelector('.purchases__button-plus');

  let productValue = Number(product.value); // Значение количества товара

  productPlus.addEventListener('click', function () {
    productValue += 1
    product.value = productValue; // Присвоение нового значения карточки товара
  })

  productMinus.addEventListener('click', function () {
    if (productValue != 0) {
      productValue = productValue - 1
      product.value = productValue; // Присвоение нового значения карточки товара
    }
  })
});


/***/ }),

/***/ "./js/changingTextarea.js":
/*!********************************!*\
  !*** ./js/changingTextarea.js ***!
  \********************************/
/***/ (function() {

//Textarea подгон размера под содержимое
const textareaAddress = document.querySelector('.form__input--textarea');
const textareaComment = document.querySelector('.form__input--comment');

function resize() {
  const el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding: 9px 0px';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 1);
}

textareaAddress.addEventListener('keydown', resize);
textareaComment.addEventListener('keydown', resize);


/***/ }),

/***/ "./js/dropDownList.js":
/*!****************************!*\
  !*** ./js/dropDownList.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errorVisualization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorVisualization.js */ "./js/errorVisualization.js");



const formSelect = document.querySelector('.form__label--type-packaging');
const select = formSelect.querySelector('.form__select');
const text = formSelect.querySelector('.form__placeholder');

//  Выпадающий список
jquery__WEBPACK_IMPORTED_MODULE_0__('.form__select').each(function(){
		const $this = jquery__WEBPACK_IMPORTED_MODULE_0__(this), // присваивание $this = ('.select')
			selectOption = $this.find('option'), // Найти пункт
			selectOptionLength = selectOption.length, // Длинна selectOption (количество)
		//selectedOption = selectOption.filter(':selected'), // Отфильтровать  выбранный пункт
			dur = 500;

		//$this.hide(); // скрытие селекта
		$this.wrap('<div class="select-wrapper"></div>'); //создание div class="select" внутрь которого помещается селект из верстки
		jquery__WEBPACK_IMPORTED_MODULE_0__('<div>',{ //создание div внутри контейнера с классом и текстом
			class: 'select__gap',
			text: 'Тип упаковки'
		}).insertBefore($this); // добавление нового div перед селект

		const selectGap = jquery__WEBPACK_IMPORTED_MODULE_0__('.select__gap');
		jquery__WEBPACK_IMPORTED_MODULE_0__('<ul>',{ // Создние списка после элемента с классом .select__gap
			class: 'select__list'
		}).insertAfter(selectGap);

		const selectList = jquery__WEBPACK_IMPORTED_MODULE_0__('.select__list');
		for(let i = 0; i < selectOptionLength; i++){
			jquery__WEBPACK_IMPORTED_MODULE_0__('<li>',{
				class: 'select__item',
				html: jquery__WEBPACK_IMPORTED_MODULE_0__('<span>',{
					text: selectOption.eq(i).text() // Добавление текста пункта
				})
			})
			.attr('data-value', selectOption.eq(i).val()) // добавление значения value
			.appendTo(selectList);
		}

		const selectItem = selectList.find('li'); // Найти все li

		selectList.slideUp(0); // Скрытие списка
		selectGap.on('click', function(){ // Добавление класса по клику при отсуствии и открытие списка
			if(!jquery__WEBPACK_IMPORTED_MODULE_0__(this).hasClass('on')){
				jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('on'); // Добавить класс
				selectList.slideDown(dur); // Плавное открытие JQ

				selectItem.on('click', function(){
					const chooseItem = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data('value');

          jquery__WEBPACK_IMPORTED_MODULE_0__('select option').removeAttr('selected');
          jquery__WEBPACK_IMPORTED_MODULE_0__('select option[value="' + chooseItem + '"]').attr('selected', 'selected');
          (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_1__.removeError)(text, select);
          selectGap.removeClass('color-red')
					selectGap.text(jquery__WEBPACK_IMPORTED_MODULE_0__(this).find('span').text());
					selectList.slideUp(dur); // Плавное скрытие JQ
					selectGap.removeClass('on'); // Удалить класс
				});
			} else {
				jquery__WEBPACK_IMPORTED_MODULE_0__(this).removeClass('on'); // Удалить класс
				selectList.slideUp(dur); // Плавное скрытие JQ
			}
		});
	});

const selectList = document.querySelector('.select__list');
const selectItems = selectList.querySelectorAll('.select__item');

selectItems[0].remove();


/***/ }),

/***/ "./js/errorVisualization.js":
/*!**********************************!*\
  !*** ./js/errorVisualization.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addError": function() { return /* binding */ addError; },
/* harmony export */   "removeError": function() { return /* binding */ removeError; }
/* harmony export */ });
// Действия при выявлении ошибки в поле
const addError = function (text, textInput, error, x) {
  text.textContent = error;
  text.classList.add('color-red');
  if(x){
    x.classList.add('color-red');
  } else {
    textInput.classList.add('color-red');
  }
  textInput.setCustomValidity(' ');
}
// Отмена действий ошибке
const removeError = function (text, textInput){
  text.textContent = text.dataset.prompt;
  textInput.setCustomValidity('');
  text.classList.remove('color-red');
  textInput.classList.remove('color-red');
}




/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorVisualization.js */ "./js/errorVisualization.js");
/* harmony import */ var _workCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workCard.js */ "./js/workCard.js");



const MAX_COMMENT_LENGTH = 600;
const MIN_NAME_LENGTH = 3;
const form = document.querySelector('.form_form');
const description = document.querySelector('.form__label--comment');
const textDescription = description.querySelector('.form__input--comment');
const name = document.querySelector('.form__label--name');
const nameText = name.querySelector('.form__input--name');
const telephone = document.querySelector('.form__label--telephone');
const telephoneText = telephone.querySelector('.form__input--telephone');
const email = document.querySelector('.form__label--email');
const emailText = email.querySelector('.form__input--email');
const formSelect = document.querySelector('.form__label--type-packaging');
const select = formSelect.querySelector('.form__select');
const REG_TELEPHONE = /^[\d\+][\d\(\)\-]{4,14}\d$/; // от 6 до 16 цифр, первая цифра или плюс, последняя только цифра. В середине допустимы скобки и тире
const REG_EMAIL = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
const selectGap = document.querySelector('.select__gap');
const selectOption = select.querySelectorAll('option');
const address = document.querySelector('.form__label--adress');
const addressText = address.querySelector('.form__input--adress');

let data;
// Для сервиса dadata
let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
let token = "6ec3a598a2172de4be05a4cb99ca6867d8a8cf43";
let query = addressText.value;
let options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    body: JSON.stringify({query: query})
}

// Проверка поля "Адрес"
// Проверка заполнения адреса
addressText.addEventListener('invalid', () => {
  const text = address.querySelector('.form__placeholder');

  if (addressText.validity.valueMissing){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text,addressText, 'Обязательное поле');
  }
//  addressText.reportValidity();
});

addressText.addEventListener('input', () => {
  query = addressText.value;
  const valueLength = addressText.value.length;
  const text = address.querySelector('.form__placeholder');
  addressText.checkValidity();
  if (valueLength == 0) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, addressText, 'Обязательное поле');
  } else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, addressText);
  }
  addressText.reportValidity();
});

// Получение адреса из поля (пока при изменении адреса не работает, а берет только начальный)
addressText.addEventListener('blur', async function(){ // Делаем функцию асинхронной потому что иначе не будет работать await
  query = addressText.value; // получение значения адреса
  const valueLength = addressText.value.length;
  const text = address.querySelector('.form__placeholder');
//  addressText.checkValidity();
  if (valueLength == 0) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, addressText, 'Обязательное поле');
  } else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, addressText);
    options.body = JSON.stringify({query: query}); // Изменение query в options, т.к. иначе используется те что записаны при инициации страницы
    let response = await fetch(url, options); // ожидание выполнения промиса (благодаря await)
    data = await response.json(); // сохранение результата промиса в переменную (c ожиданием благодаря await)
    let geoLon = data.suggestions[0].data.geo_lon; // присвоение координат переменным
    let geoLat = data.suggestions[0].data.geo_lat;
    (0,_workCard_js__WEBPACK_IMPORTED_MODULE_1__.movingNewCoordinates)(geoLat, geoLon); // перемещеие карты и создание новой метки
  }
//   addressText.reportValidity();
});

// Проверка выбора поля "Тип упаковки"
select.addEventListener('invalid', () => {
  const text = formSelect.querySelector('.form__placeholder');

  if (select.validity.valueMissing){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, select, 'Обязательное поле', selectGap);
  }
});

// Проверка поля "Email"
emailText.addEventListener('invalid', () => {
  const text = email.querySelector('.form__placeholder');

  if (emailText.validity.valueMissing){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, emailText, 'Обязательное поле');
  }
});

emailText.addEventListener('input', () => {
  const valueLength = emailText.value.length;
  const value = emailText.value;
  const text = email.querySelector('.form__placeholder');
  if (valueLength == 0) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, emailText);
  } else if (!(REG_EMAIL.test(value))) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, emailText, 'Введите корректный email');
  }
  else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, emailText);
  }
  emailText.reportValidity();
})

// Проверка поля "Телефон"
// Проверка телефона на заполнение и регулярынм выражением
telephoneText.addEventListener('invalid', () => {
  const text = telephone.querySelector('.form__placeholder');
  if (telephoneText.validity.valueMissing){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, telephoneText, 'Обязательное поле');
  }
});

telephoneText.addEventListener('input', () => {
  const valueLength = telephoneText.value.length;
  const value = telephoneText.value;
  const text = telephone.querySelector('.form__placeholder');
  if (valueLength == 0) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, telephoneText);
  } else if (!(REG_TELEPHONE.test(value))) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, telephoneText, 'Телефон от 6 до 16 цифр');
  }
  else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, telephoneText);
  }
  telephoneText.reportValidity();
});

// Проверка поля "Комментарий"
// Проверки на количество символов комментария
textDescription.addEventListener('input', () => {
  const valueLength = textDescription.value.length;
  const text = description.querySelector('.form__placeholder');
  if (valueLength > MAX_COMMENT_LENGTH){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, textDescription, 'Не больше 600 символов');
  } else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, textDescription);
  }
  textDescription.reportValidity();
});

// Проверка поля "Имя"
nameText.addEventListener('invalid', () => {
  const text = name.querySelector('.form__placeholder');
  if (nameText.validity.valueMissing){
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, nameText, 'Обязательное поле');
  }
});

nameText.addEventListener('input', () => {
  const valueLength = nameText.value.length;
  const text = name.querySelector('.form__placeholder');
  nameText.checkValidity();
  if (valueLength > 0 && valueLength < MIN_NAME_LENGTH) {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.addError)(text, nameText, 'Не менее 3 символов');
  }
  else {
    (0,_errorVisualization_js__WEBPACK_IMPORTED_MODULE_0__.removeError)(text, nameText);
  }
  nameText.reportValidity();
});

// Собрание данных из формы в FormData и показ в консоль
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  console.log(Object.fromEntries(formData));
    // Обработка поля тип упаковки при отправке
      selectGap.textContent = "Тип упаковки"
      selectOption.forEach((option, i) => {
        if(i > 0) {
          option.removeAttribute("selected");
        }
      });
      selectOption[0].setAttribute("selected", "selected");
      form.reset();
      addressText.value = "";
});


/***/ }),

/***/ "./js/openSearchMobile.js":
/*!********************************!*\
  !*** ./js/openSearchMobile.js ***!
  \********************************/
/***/ (function() {

const searchInput = document.querySelector('.main-nav__search-input');
const buttonSearch = document.querySelector('.button-search');

// Открытие и закрытие поля поиска в мобильной версии
buttonSearch.addEventListener('click',function(event) {
   event.preventDefault();
   let searchInputLength = searchInput.value.length;
   if (searchInputLength == 0){
     searchInput.classList.toggle('main-nav__search-input--hidden');
   } else {
     console.log('Найти: ' + searchInput.value);
   }
 });


/***/ }),

/***/ "./js/toggleButton.js":
/*!****************************!*\
  !*** ./js/toggleButton.js ***!
  \****************************/
/***/ (function() {

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav_toggle-button');
const svgClose = document.querySelector('#svgClose');
const svgOpen = document.querySelector('#svgOpen');

navToggle.addEventListener('click',function(event) {
   event.preventDefault();
   svgOpen.classList.toggle('vissualy-hidden');
   svgClose.classList.toggle('vissualy-hidden');
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


/***/ }),

/***/ "./js/workCard.js":
/*!************************!*\
  !*** ./js/workCard.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "movingNewCoordinates": function() { return /* binding */ movingNewCoordinates; }
/* harmony export */ });
let geo_lat = 60.031841;
let geo_lon = 30.429083;
let map = null;
let marker = null;

map = L.map('map').setView([geo_lat, geo_lon], 15); // поиск контейнера для карты, задание начальных координатов и масштаба
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); // добавление карту в контейнер для карты

marker = L.marker([geo_lat, geo_lon], //создание начальной метки с её координатами
{alt: 'Delivery address'}).addTo(map); // добавление начальной метки альтернативного текста и размещение метки на поле для карты


let movingNewCoordinates = function (new_geo_lat, new_geo_lon){
  map.flyTo([new_geo_lat, new_geo_lon]);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  }).addTo(map);

  if (marker) {
    map.removeLayer(marker) // удаление старого маркера
  }
  marker = new L.Marker([new_geo_lat, new_geo_lon], {alt: 'Delivery address'}).addTo(map); // добавление нового маркера на карту
}


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./css/style.css");
/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./less/style.less */ "./less/style.less");
/* harmony import */ var _js_changingTextarea_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/changingTextarea.js */ "./js/changingTextarea.js");
/* harmony import */ var _js_changingTextarea_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_changingTextarea_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_toggleButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/toggleButton.js */ "./js/toggleButton.js");
/* harmony import */ var _js_toggleButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_toggleButton_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_openSearchMobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/openSearchMobile.js */ "./js/openSearchMobile.js");
/* harmony import */ var _js_openSearchMobile_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_openSearchMobile_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_dropDownList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/dropDownList.js */ "./js/dropDownList.js");
/* harmony import */ var _js_changingQuantity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/changingQuantity.js */ "./js/changingQuantity.js");
/* harmony import */ var _js_changingQuantity_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_changingQuantity_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_form_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/form.js */ "./js/form.js");
/* harmony import */ var _js_workCard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/workCard.js */ "./js/workCard.js");









//import React from 'react';
//import {render} from 'react-dom';


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"js": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_require__("./main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=js.js.map