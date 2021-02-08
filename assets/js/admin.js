/*! Copyright © Chris Jayden <help@cartpops.com> (https://cartpops.com) - cartpops - v1.2.8 - 08-02-2021 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/dev/js/admin/admin.js":
/*!***************************************!*\
  !*** ../assets/dev/js/admin/admin.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_HandleSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/HandleSettings */ "../assets/dev/js/admin/modules/HandleSettings.js");
/* harmony import */ var _modules_OptionVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/OptionVisibility */ "../assets/dev/js/admin/modules/OptionVisibility.js");
/* harmony import */ var _modules_AdminSelect2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/AdminSelect2 */ "../assets/dev/js/admin/modules/AdminSelect2.js");
/* harmony import */ var _modules_ColorSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ColorSettings */ "../assets/dev/js/admin/modules/ColorSettings.js");
/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "jquery");
/*
 |--------------------------------------------------------------------------
 | Admin: Main
 |--------------------------------------------------------------------------
 |
 | This will initilize all the admin modules needed.
 |
 |
 */
// Always expose jQuery to the window object for Webpack.

__webpack_provided_window_dot_jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());





(function () {
  var settings = new _modules_HandleSettings__WEBPACK_IMPORTED_MODULE_1__.default();
  var colors = new _modules_ColorSettings__WEBPACK_IMPORTED_MODULE_4__.default();
  var optionVisibility = new _modules_OptionVisibility__WEBPACK_IMPORTED_MODULE_2__.default();
  var select2 = new _modules_AdminSelect2__WEBPACK_IMPORTED_MODULE_3__.default();
})();

/***/ }),

/***/ "../assets/dev/js/admin/modules/AdminSelect2.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/admin/modules/AdminSelect2.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select2 */ "../node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 |--------------------------------------------------------------------------
 | Admin: Color Picker
 |--------------------------------------------------------------------------
 |
 | Renders the WordPress Color picker.
 |
 |
 */
 //select2 = require('select2')();

var AdminSelect2 = /*#__PURE__*/function () {
  function AdminSelect2() {
    _classCallCheck(this, AdminSelect2);

    this.init();
    select2__WEBPACK_IMPORTED_MODULE_0___default()($);
  }

  _createClass(AdminSelect2, [{
    key: "init",
    value: function init() {
      $("#product_recommendation_engine_custom_global").select2({
        width: '100%'
      });
    }
  }]);

  return AdminSelect2;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminSelect2);

/***/ }),

/***/ "../assets/dev/js/admin/modules/ColorSettings.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/admin/modules/ColorSettings.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var spectrum_colorpicker2_dist_spectrum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spectrum-colorpicker2/dist/spectrum */ "../node_modules/spectrum-colorpicker2/dist/spectrum.js");
/* harmony import */ var spectrum_colorpicker2_dist_spectrum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spectrum_colorpicker2_dist_spectrum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ColorSettings = /*#__PURE__*/function () {
  function ColorSettings() {
    _classCallCheck(this, ColorSettings);

    this.colorPicker();
    this.defaultTheme();
    this.darkTheme();
    this.beachyTheme();
  }

  _createClass(ColorSettings, [{
    key: "colorPicker",
    value: function colorPicker() {
      if ($('.cartpops-input-wrapper .cpops-color-picker').length) {
        $('.cartpops-input-wrapper .cpops-color-picker').spectrum({
          type: "component",
          hideAfterPaletteSelect: true,
          showInitial: true,
          allowEmpty: false,
          chooseText: 'Select color',
          preferredFormat: "hex"
        });
      }
    }
  }, {
    key: "defaultTheme",
    value: function defaultTheme() {
      var _this = this;

      var applyBtn = $("#appearance-theme-default-preset");
      var themeName = "Default"; // Default colors

      var colors = {
        cartpops_color_background_primary: '#ffffff',
        cartpops_color_background_secondary: '#f7f7fe',
        cartpops_color_typography_primary: '#000000',
        cartpops_color_typography_secondary: '#3b3b3b',
        cartpops_color_typography_tertiary: '#777777',
        cartpops_color_border: '#eaeaec',
        cartpops_color_accent: '#705aef',
        cartpops_color_overlay: 'rgba(33, 42, , 47, 0.85)',
        cartpops_color_button_primary_background: '#705aef',
        cartpops_color_button_primary_text: '#ffffff',
        cartpops_color_button_secondary_background: '#f1f1f1',
        cartpops_color_button_secondary_text: '#252525',
        cartpops_color_input_background: '#ffffff',
        cartpops_color_input_text: '#82828b',
        //cpops_progress_meter_background: '#dbdbe0',
        //cpops_progress_meter_background_active: '#705aef',
        // cpops_recommendations_plus_btn_background: '#f7f7fe',
        //cpops_recommendations_plus_btn_text: '#705aef',
        cartpops_color_recommendations_drawer_background: '#f7f7fe',
        cartpops_color_recommendations_drawer_text: '#000000',
        //cpops_slider_pagination_bullet_active: '#705aef',
        //cpops_slider_pagination_bullet: '#705aef',
        cartpops_color_recommendations_popup_background: '#f7f7fe',
        cartpops_color_recommendations_popup_text: '#000000',
        cartpops_color_floating_cart_laucher_background: '#000',
        cartpops_color_floating_cart_laucher_icon: '#fff',
        cartpops_color_cpops_free_shipping_meter_background: '#eaeaec',
        cartpops_color_cpops_free_shipping_meter_background_active: '#705aef'
      };

      if (colors) {
        this.createColors(colors, applyBtn);
      } // Reset Some Options


      $(applyBtn).on("click", function (e) {
        e.preventDefault(); // <--- prevent form from submitting

        _this.applyTheme(colors, themeName);
      });
    }
  }, {
    key: "darkTheme",
    value: function darkTheme() {
      var _this2 = this;

      var applyBtn = $("#appearance-theme-dark-preset");
      var themeName = "Dark"; // Default colors

      var colors = {
        cartpops_color_background_primary: '#1e2127',
        cartpops_color_background_secondary: '#181a20',
        cartpops_color_typography_primary: '#ffffff',
        cartpops_color_typography_secondary: '#e8e8e8',
        cartpops_color_typography_tertiary: '#6f7078',
        cartpops_color_border: '#282b32',
        cartpops_color_accent: '#ab73ee',
        cartpops_color_overlay: 'rgba(26, 27, 27, 0.85)',
        cartpops_color_button_primary_background: '#355dff',
        cartpops_color_button_primary_text: 'ffffff',
        cartpops_color_button_secondary_background: '#25272f',
        cartpops_color_button_secondary_text: '#ffffff',
        cartpops_color_input_background: '#191c20',
        cartpops_color_input_text: '#ffffff',
        //cpops_progress_meter_background: 'dbdbe0',
        //cpops_progress_meter_background_active: '705aef',
        // cpops_recommendations_plus_btn_background: 'f7f7fe',
        //cpops_recommendations_plus_btn_text: '705aef',
        cartpops_color_recommendations_drawer_background: '#14151b',
        cartpops_color_recommendations_drawer_text: '#ffffff',
        //cpops_slider_pagination_bullet_active: '705aef',
        //cpops_slider_pagination_bullet: '705aef',
        cartpops_color_recommendations_popup_background: '#14151b',
        cartpops_color_recommendations_popup_text: '#ffffff',
        cartpops_color_floating_cart_laucher_background: '#000',
        cartpops_color_floating_cart_laucher_icon: '#fff',
        cartpops_color_cpops_free_shipping_meter_background: '#eaeaec',
        cartpops_color_cpops_free_shipping_meter_background_active: '#2d7f8a'
      };

      if (colors) {
        this.createColors(colors, applyBtn);
      } // Reset Some Options


      $(applyBtn).on("click", function (e) {
        e.preventDefault(); // <--- prevent form from submitting

        _this2.applyTheme(colors, themeName);
      });
    }
  }, {
    key: "beachyTheme",
    value: function beachyTheme() {
      var _this3 = this;

      var applyBtn = $("#appearance-theme-beachy-preset");
      var themeName = "Beachy"; // Default colors

      var colors = {
        cartpops_color_background_primary: '#ffffff',
        cartpops_color_background_secondary: '#f4eddb',
        cartpops_color_typography_primary: '#113034',
        cartpops_color_typography_secondary: '#113034',
        cartpops_color_typography_tertiary: '#2f5155',
        cartpops_color_border: '#eaeaec',
        cartpops_color_accent: '#163f44',
        cartpops_color_overlay: 'rgba(33, 42, 47, 0.85)',
        cartpops_color_input_background: '#fff',
        cartpops_color_input_text: '#113034',
        cartpops_color_button_primary_background: '#163f44',
        cartpops_color_button_primary_text: 'ffffff',
        cartpops_color_button_secondary_background: '#f1f1f1',
        cartpops_color_button_secondary_text: '#163f44',
        //cpops_progress_meter_background: 'dbdbe0',
        //cpops_progress_meter_background_active: '705aef',
        // cpops_recommendations_plus_btn_background: 'f7f7fe',
        //cpops_recommendations_plus_btn_text: '705aef',
        cartpops_color_recommendations_drawer_background: '#f4eddb',
        cartpops_color_recommendations_drawer_text: '#000000',
        //cpops_slider_pagination_bullet_active: '705aef',
        //cpops_slider_pagination_bullet: '705aef',
        cartpops_color_recommendations_popup_background: '#f4eddb',
        cartpops_color_recommendations_popup_text: '#000000',
        cartpops_color_floating_cart_laucher_background: '#f4eddb',
        cartpops_color_floating_cart_laucher_icon: '#000000',
        cartpops_color_cpops_free_shipping_meter_background: '#dbdbe0',
        cartpops_color_cpops_free_shipping_meter_background_active: '#42bb76'
      };

      if (colors) {
        this.createColors(colors, applyBtn);
      } // Reset Some Options


      $(applyBtn).on("click", function (e) {
        e.preventDefault();

        _this3.applyTheme(colors, themeName);
      });
    }
  }, {
    key: "applyTheme",
    value: function applyTheme(colorOptions, theme) {
      var form = $("form#cartpops-options-form");
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
        title: "Are you sure you want to apply the ".concat(theme, " color scheme?"),
        text: "This will replace your existing colors settings.",
        icon: "warning",
        buttons: ['Cancel', 'Yes, I am sure!'],
        dangerMode: true
      }).then(function (isConfirm) {
        if (isConfirm) {
          sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
            title: 'Done!',
            text: "The ".concat(theme, " color scheme has been successfully applied."),
            icon: 'success'
          }).then(function () {
            Object.entries(colorOptions).forEach(function (entry) {
              var _entry = _slicedToArray(entry, 2),
                  key = _entry[0],
                  value = _entry[1];

              console.log(key, value);
              var colorPickerId = document.getElementById(key);

              if (colorPickerId) {
                $(colorPickerId).spectrum("set", value);
              }
            });
            $(form).trigger('submit');
          });
        }
      });
    }
  }, {
    key: "createColors",
    value: function createColors(colors, button) {
      Object.entries(colors).forEach(function (_ref, index) {
        var _ref2 = _slicedToArray(_ref, 2),
            value = _ref2[1];

        if (value && index <= 8) {
          var span = $('<span />').attr('class', 'cpops-color-presets').attr('color', value).css('background-color', value);
          $(button).find(".color-list").append(span);
        }
      });
    }
  }]);

  return ColorSettings;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSettings);

/***/ }),

/***/ "../assets/dev/js/admin/modules/HandleSettings.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/admin/modules/HandleSettings.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icons */ "../node_modules/feather-icons/dist/feather.js");
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_minified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror-minified */ "../node_modules/codemirror-minified/lib/codemirror.js");
/* harmony import */ var codemirror_minified__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_minified__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert */ "../node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 |--------------------------------------------------------------------------
 | Admin: Color Picker
 |--------------------------------------------------------------------------
 |
 | Renders the WordPress Color picker.
 |
 |
 */




var HandleSettings = /*#__PURE__*/function () {
  function HandleSettings() {
    _classCallCheck(this, HandleSettings);

    this.issues();
    this.tabs();
    this.icons(); //this.showHideOptionsDynamicaly();

    this.radioImages();
    this.tooltips();
    this.codeEditors();
    this.paidUpgrades();
  }

  _createClass(HandleSettings, [{
    key: "issues",
    value: function issues() {
      $('#reset-issues').on('click', function (event) {
        event.preventDefault();
        var data = {
          'action': 'cpops_reset_issues_transient',
          'nonce': cpops_config.nonce
        }; // You can use wp_localize_script in php file to have admin_url( 'admin-ajax.php' ) available in front-end

        jQuery.post(cpops_config.ajax_url, data, function (response) {
          sweetalert__WEBPACK_IMPORTED_MODULE_2___default()({
            icon: response.success === true ? 'success' : 'error',
            title: response.data,
            showConfirmButton: false,
            timer: 2500
          }).then(function () {
            location.reload();
            return false;
          });
        });
      });
    }
  }, {
    key: "tabs",
    value: function tabs() {
      $('.change-tab').on('click', function (event) {
        event.preventDefault();
        var el = event.currentTarget;
        var url = $(el).attr('href');
        var tab = $(el).data('tab');
        window.history.pushState({}, "", url);
        $('.tab').removeClass('active');
        $('#' + tab).addClass('active');
        $('.change-tab').find('li').removeClass('active');
        $(el).find('li').addClass('active');
        tabs_callback(tab);
      });

      var tabs_callback = function tabs_callback(tab) {
        switch (tab) {
          case 'advanced':
            $(document).trigger("cpops_admin_advanced_tab");

          default:
            break;
        }
      };
    }
  }, {
    key: "paidUpgrades",
    value: function paidUpgrades() {
      $('*[data-paid="true"]').on({
        click: function click(e) {
          e.preventDefault;
          $(".cpops-upgrade-modal").addClass('model-open');
        }
      });
      $(".cpops-upgrade-modal__close, .cpops-upgrade-modal__overlay").on('click', function () {
        $(".cpops-upgrade-modal").removeClass('model-open');
      });
    }
  }, {
    key: "icons",
    value: function icons() {
      feather_icons__WEBPACK_IMPORTED_MODULE_0___default().replace({
        "class": 'cpops-icon',
        'stroke-width': 2
      });
    }
  }, {
    key: "showHideOptionsDynamicaly",
    value: function showHideOptionsDynamicaly() {
      var dependendInputs = document.querySelectorAll('[data-relies-on]');
      var checkboxes = document.querySelectorAll('form#cartpops-options-form input[type="checkbox"]');
      var selects = document.querySelectorAll('form#cartpops-options-form select');
      var targetId;
      var reliesOn;
      var reliesOnValue;
      var tableRow;

      var _iterator = _createForOfIteratorHelper(dependendInputs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var dependendInput = _step.value;

          var _tableRow = $(dependendInput).closest('tr'); // tableRow.hide();

        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      checkboxes.forEach(function (input, index) {
        input.addEventListener('change', function (e) {
          targetId = e.target.id;
          var input = document.getElementById(targetId);

          var _iterator2 = _createForOfIteratorHelper(dependendInputs),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var dependendInput = _step2.value;
              reliesOn = dependendInput.dataset.reliesOn;
              reliesOnValue = dependendInput.dataset.reliesOnValue;
              tableRow = $(dependendInput).closest('tr');

              if (reliesOn === targetId) {
                if (input.checked === true) {
                  tableRow.show();
                  input.classList.add('is-active');
                } else {
                  tableRow.hide();
                  input.classList.remove('is-active');
                }
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        });
      });
      selects.forEach(function (input, index) {
        input.addEventListener('change', function (e) {
          targetId = e.target.id;
          var targetValue = e.target.value;
          var input = document.getElementById(targetId);

          var _iterator3 = _createForOfIteratorHelper(dependendInputs),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var dependendInput = _step3.value;
              reliesOn = dependendInput.dataset.reliesOn;
              reliesOnValue = dependendInput.dataset.reliesOnValue;
              tableRow = $(dependendInput).closest('tr');

              if (reliesOnValue === targetValue) {
                tableRow.show();
                input.classList.add('is-active');
              } else {
                tableRow.hide();
                input.classList.remove('is-active');
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
      });
    }
  }, {
    key: "radioImages",
    value: function radioImages() {
      $('.cpops-image-choices-field__choice input[type="radio"]').on('click', function (e) {
        e.preventDefault;
        $('.cpops-image-choices-field__choice').removeClass('cpops-image-choices-field__choice-selected');

        if ($(this).is(":checked")) {
          $(this).parent().addClass('cpops-image-choices-field__choice-selected');
        }
      });
    }
  }, {
    key: "tooltips",
    value: function tooltips() {
      $(".cpops-tooltip").on({
        mouseenter: function mouseenter() {
          $(this).closest("tr").find(".wc_free_prod_samples-text-container").show();
        },
        mouseleave: function mouseleave() {
          $(this).closest("tr").find(".wc_free_prod_samples-text-container").hide();
        }
      });
    }
  }, {
    key: "codeEditors",
    value: function codeEditors() {
      var cssEditor = codemirror_minified__WEBPACK_IMPORTED_MODULE_1___default().fromTextArea(document.getElementById("custom_css"), {
        firstLineNumber: 1,
        lineNumbers: true,
        lineWrapping: true,
        indentWithTabs: true,
        theme: "material",
        mode: 'css'
      });
      var jsEditor = codemirror_minified__WEBPACK_IMPORTED_MODULE_1___default().fromTextArea(document.getElementById("custom_js"), {
        firstLineNumber: 1,
        lineNumbers: true,
        lineWrapping: true,
        indentWithTabs: true,
        theme: "material",
        mode: 'javascript'
      });
    }
  }]);

  return HandleSettings;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandleSettings);

/***/ }),

/***/ "../assets/dev/js/admin/modules/OptionVisibility.js":
/*!**********************************************************!*\
  !*** ../assets/dev/js/admin/modules/OptionVisibility.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OptionVisibility = /*#__PURE__*/function () {
  function OptionVisibility() {
    _classCallCheck(this, OptionVisibility);

    this.supportUsOptions();
    this.cartLauncherOptions();
    this.recommendationsOptions();
    this.shipingMeterOptions();
  }

  _createClass(OptionVisibility, [{
    key: "cartLauncherOptions",
    value: function cartLauncherOptions() {
      var checkboxCartLauncher = $("#floating_floating_cart_launcher_enable");
      var fieldCartLauncherPosition = $("#floating_floating_cart_launcher_position");
      var tableRow = fieldCartLauncherPosition.closest('tr');

      if (checkboxCartLauncher.prop("checked")) {
        tableRow.show();
        checkboxCartLauncher.attr('data-relies-default', 'visible');
      } else {
        tableRow.hide();
        checkboxCartLauncher.attr('data-relies-default', 'hidden');
      }

      $(checkboxCartLauncher).on("change", function () {
        if ($(this).prop("checked")) {
          tableRow.show();
          checkboxCartLauncher.attr('data-relies-default', 'visible');
        } else {
          tableRow.hide();
          checkboxCartLauncher.attr('data-relies-default', 'hidden');
        }
      });
    }
  }, {
    key: "supportUsOptions",
    value: function supportUsOptions() {
      var checkboxSupportUs = $("#support_us_enable");
      var fieldPartnerCode = $("#support_us_partner_code");
      var tableRow = fieldPartnerCode.closest('tr');

      if (checkboxSupportUs.prop("checked")) {
        tableRow.show();
        fieldPartnerCode.attr('data-relies-default', 'visible');
      } else {
        tableRow.hide();
        fieldPartnerCode.attr('data-relies-default', 'hidden');
      }

      $(checkboxSupportUs).on("change", function () {
        if ($(this).prop("checked")) {
          tableRow.show();
          fieldPartnerCode.attr('data-relies-default', 'visible');
        } else {
          tableRow.hide();
          fieldPartnerCode.attr('data-relies-default', 'hidden');
        }
      });
    }
  }, {
    key: "recommendationsOptions",
    value: function recommendationsOptions() {
      var checkboxRecommendationEnable = $("#product_recommendation_engine_enable");
      var fieldRecommendationType = $("#product_recommendation_engine_type");
      var tableRowRecommendationType = fieldRecommendationType.closest('tr');
      var fieldRecommendationFallback = $("#product_recommendation_engine_fallback");
      var tableRowRecommendationFallback = fieldRecommendationFallback.closest('tr');
      var fieldRecommendationText = $("#product_recommendation_engine_text");
      var tableRowRecommendationText = fieldRecommendationText.closest('tr');
      var fieldRecommendationCustom = $("#product_recommendation_engine_custom_global");
      var tableRowRecommendationCustom = fieldRecommendationCustom.closest('tr');

      if (checkboxRecommendationEnable.prop("checked")) {
        tableRowRecommendationType.show();
        tableRowRecommendationFallback.show();
        tableRowRecommendationText.show();

        if (fieldRecommendationType.val() === 'custom') {
          tableRowRecommendationCustom.show();
        } else {
          tableRowRecommendationCustom.hide();
        }
      } else {
        tableRowRecommendationType.hide();
        tableRowRecommendationText.hide();
        tableRowRecommendationFallback.hide();
        tableRowRecommendationCustom.hide();
      }

      $(checkboxRecommendationEnable).on("change", function () {
        if ($(this).prop("checked")) {
          tableRowRecommendationType.show();
          tableRowRecommendationText.show();
          tableRowRecommendationFallback.show();

          if (fieldRecommendationType.val() === 'custom') {
            tableRowRecommendationCustom.show();
          } else {
            tableRowRecommendationCustom.hide();
          }
        } else {
          tableRowRecommendationType.hide();
          tableRowRecommendationText.hide();
          tableRowRecommendationFallback.hide();
          tableRowRecommendationCustom.hide();
        }
      });
      $(fieldRecommendationType).on('change', function () {
        var value = $(this).val();

        if (value === 'custom') {
          tableRowRecommendationCustom.show();
        } else {
          tableRowRecommendationCustom.hide();
        }
      });
    }
  }, {
    key: "shipingMeterOptions",
    value: function shipingMeterOptions() {
      var checkboxShippingMeterEnable = $("#free_shipping_meter_enable");
      var fieldShippingMeterCustom = $("#free_shipping_meter_custom_global");
      var tableRowShippingMeterCustom = fieldShippingMeterCustom.closest('tr');
      var fieldShippingMeterType = $("#free_shipping_meter_type");
      var tableRowShippingMeterType = fieldShippingMeterType.closest('tr');
      var fieldShippingMeterTextBase = $("#free_shipping_meter_text_base");
      var tableRowShippingMeterTextBase = fieldShippingMeterTextBase.closest('tr');
      var fieldShippingMeterTextAchieved = $("#free_shipping_meter_text_achieved");
      var tableRowShippingMeterTextAchieved = fieldShippingMeterTextAchieved.closest('tr');

      if (checkboxShippingMeterEnable.prop("checked")) {
        console.log("Checked");
        tableRowShippingMeterType.show();
        tableRowShippingMeterTextBase.show();
        tableRowShippingMeterTextAchieved.show();

        if (fieldShippingMeterType.val() === 'custom') {
          tableRowShippingMeterCustom.show();
        }
      } else {
        tableRowShippingMeterType.hide();
        tableRowShippingMeterTextBase.hide();
        tableRowShippingMeterTextAchieved.hide();
        tableRowShippingMeterCustom.hide();
      }

      $(checkboxShippingMeterEnable).on("change", function () {
        if ($(this).prop("checked")) {
          tableRowShippingMeterType.show();
          tableRowShippingMeterTextBase.show();
          tableRowShippingMeterTextAchieved.show();

          if (fieldShippingMeterType.val() === 'custom') {
            tableRowShippingMeterCustom.show();
          } else {
            tableRowShippingMeterCustom.hide();
          }
        } else {
          tableRowShippingMeterType.hide();
          tableRowShippingMeterTextBase.hide();
          tableRowShippingMeterTextAchieved.hide();
          tableRowShippingMeterCustom.hide();
        }
      });
      $(fieldShippingMeterType).on('change', function () {
        var value = $(this).val();

        if (value === 'custom') {
          tableRowShippingMeterCustom.show();
        } else {
          tableRowShippingMeterCustom.hide();
        }
      });
    }
  }]);

  return OptionVisibility;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionVisibility);

/***/ }),

/***/ "../node_modules/codemirror-minified/lib/codemirror.js":
/*!*************************************************************!*\
  !*** ../node_modules/codemirror-minified/lib/codemirror.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(y,E,D){y instanceof String&&(y=String(y));for(var v=y.length,I=0;I<v;I++){var ja=y[I];if(E.call(D,ja,I,y))return{i:I,v:ja}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(y,E,D){if(y==Array.prototype||y==Object.prototype)return y;y[E]=D.value;return y};$jscomp.getGlobal=function(y){y=["object"==typeof globalThis&&globalThis,y,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var E=0;E<y.length;++E){var D=y[E];if(D&&D.Math==Math)return D}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(y,E){var D=$jscomp.propertyToPolyfillSymbol[E];if(null==D)return y[E];D=y[D];return void 0!==D?D:y[E]};
$jscomp.polyfill=function(y,E,D,v){E&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(y,E,D,v):$jscomp.polyfillUnisolated(y,E,D,v))};$jscomp.polyfillUnisolated=function(y,E,D,v){D=$jscomp.global;y=y.split(".");for(v=0;v<y.length-1;v++){var I=y[v];if(!(I in D))return;D=D[I]}y=y[y.length-1];v=D[y];E=E(v);E!=v&&null!=E&&$jscomp.defineProperty(D,y,{configurable:!0,writable:!0,value:E})};
$jscomp.polyfillIsolated=function(y,E,D,v){var I=y.split(".");y=1===I.length;v=I[0];v=!y&&v in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var ja=0;ja<I.length-1;ja++){var va=I[ja];if(!(va in v))return;v=v[va]}I=I[I.length-1];D=$jscomp.IS_SYMBOL_NATIVE&&"es6"===D?v[I]:null;E=E(D);null!=E&&(y?$jscomp.defineProperty($jscomp.polyfills,I,{configurable:!0,writable:!0,value:E}):E!==D&&(void 0===$jscomp.propertyToPolyfillSymbol[I]&&($jscomp.propertyToPolyfillSymbol[I]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(I):$jscomp.POLYFILL_PREFIX+I),I=$jscomp.propertyToPolyfillSymbol[I],$jscomp.defineProperty(v,I,{configurable:!0,writable:!0,value:E})))};$jscomp.polyfill("Array.prototype.find",function(y){return y?y:function(E,D){return $jscomp.findInternal(this,E,D).v}},"es6","es3");
(function(y,E){ true?module.exports=E():0})(this,function(){function y(a){return new RegExp("(^|\\s)"+a+"(?:$|\\s)\\s*")}function E(a){for(var b=a.childNodes.length;0<b;--b)a.removeChild(a.firstChild);return a}function D(a,b){return E(a).appendChild(b)}function v(a,b,d,c){a=document.createElement(a);d&&(a.className=d);c&&(a.style.cssText=c);if("string"==typeof b)a.appendChild(document.createTextNode(b));
else if(b)for(d=0;d<b.length;++d)a.appendChild(b[d]);return a}function I(a,b,d,c){a=v(a,b,d,c);a.setAttribute("role","presentation");return a}function ja(a,b){3==b.nodeType&&(b=b.parentNode);if(a.contains)return a.contains(b);do if(11==b.nodeType&&(b=b.host),b==a)return!0;while(b=b.parentNode)}function va(){try{var a=document.activeElement}catch(b){a=document.body||null}for(;a&&a.shadowRoot&&a.shadowRoot.activeElement;)a=a.shadowRoot.activeElement;return a}function Wa(a,b){var d=a.className;y(b).test(d)||
(a.className+=(d?" ":"")+b)}function dd(a,b){a=a.split(" ");for(var d=0;d<a.length;d++)a[d]&&!y(a[d]).test(b)&&(b+=" "+a[d]);return b}function ed(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Xa(a,b,d){b||(b={});for(var c in a)!a.hasOwnProperty(c)||!1===d&&b.hasOwnProperty(c)||(b[c]=a[c]);return b}function wa(a,b,d,c,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));c=c||0;for(e=e||0;;){var f=a.indexOf("\t",c);if(0>f||f>=b)return e+(b-
c);e+=f-c;e+=d-e%d;c=f+1}}function ea(a,b){for(var d=0;d<a.length;++d)if(a[d]==b)return d;return-1}function fd(a,b,d){for(var c=0,e=0;;){var f=a.indexOf("\t",c);-1==f&&(f=a.length);var g=f-c;if(f==a.length||e+g>=b)return c+Math.min(g,b-e);e+=f-c;e+=d-e%d;c=f+1;if(e>=b)return c}}function gd(a){for(;tc.length<=a;)tc.push(K(tc)+" ");return tc[a]}function K(a){return a[a.length-1]}function uc(a,b){for(var d=[],c=0;c<a.length;c++)d[c]=b(a[c],c);return d}function wg(a,b,d){for(var c=0,e=d(b);c<a.length&&
d(a[c])<=e;)c++;a.splice(c,0,b)}function ne(){}function oe(a,b){Object.create?a=Object.create(a):(ne.prototype=a,a=new ne);b&&Xa(b,a);return a}function hd(a){return/\w/.test(a)||"\u0080"<a&&(a.toUpperCase()!=a.toLowerCase()||xg.test(a))}function vc(a,b){return b?-1<b.source.indexOf("\\w")&&hd(a)?!0:b.test(a):hd(a)}function pe(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function id(a){return 768<=a.charCodeAt(0)&&yg.test(a)}function qe(a,b,d){for(;(0>d?0<b:b<a.length)&&id(a.charAt(b));)b+=
d;return b}function Hb(a,b,d){for(var c=b>d?-1:1;;){if(b==d)return b;var e=(b+d)/2;e=0>c?Math.ceil(e):Math.floor(e);if(e==b)return a(e)?b:d;a(e)?d=e:b=e+c}}function zg(a,b,d,c){if(!a)return c(b,d,"ltr",0);for(var e=!1,f=0;f<a.length;++f){var g=a[f];if(g.from<d&&g.to>b||b==d&&g.to==b)c(Math.max(g.from,b),Math.min(g.to,d),1==g.level?"rtl":"ltr",f),e=!0}e||c(b,d,"ltr")}function Ib(a,b,d){var c;Jb=null;for(var e=0;e<a.length;++e){var f=a[e];if(f.from<b&&f.to>b)return e;f.to==b&&(f.from!=f.to&&"before"==
d?c=e:Jb=e);f.from==b&&(f.from!=f.to&&"before"!=d?c=e:Jb=e)}return null!=c?c:Jb}function Ja(a,b){var d=a.order;null==d&&(d=a.order=Ag(a.text,b));return d}function ra(a,b,d){if(a.removeEventListener)a.removeEventListener(b,d,!1);else if(a.detachEvent)a.detachEvent("on"+b,d);else{var c=(a=a._handlers)&&a[b];c&&(d=ea(c,d),-1<d&&(a[b]=c.slice(0,d).concat(c.slice(d+1))))}}function W(a,b){var d=a._handlers&&a._handlers[b]||wc;if(d.length)for(var c=Array.prototype.slice.call(arguments,2),e=0;e<d.length;++e)d[e].apply(null,
c)}function Z(a,b,d){"string"==typeof b&&(b={type:b,preventDefault:function(){this.defaultPrevented=!0}});W(a,d||b.type,a,b);return jd(b)||b.codemirrorIgnore}function re(a){var b=a._handlers&&a._handlers.cursorActivity;if(b){a=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]);for(var d=0;d<b.length;++d)-1==ea(a,b[d])&&a.push(b[d])}}function xa(a,b){return 0<(a._handlers&&a._handlers[b]||wc).length}function nb(a){a.prototype.on=function(b,d){z(this,b,d)};a.prototype.off=function(b,
d){ra(this,b,d)}}function ka(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function se(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0}function jd(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function Kb(a){ka(a);se(a)}function te(a){var b=a.which;null==b&&(a.button&1?b=1:a.button&2?b=3:a.button&4&&(b=2));ya&&a.ctrlKey&&1==b&&(b=3);return b}function Bg(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2));kd[a]=b}function xc(a){if("string"==
typeof a&&ob.hasOwnProperty(a))a=ob[a];else if(a&&"string"==typeof a.name&&ob.hasOwnProperty(a.name)){var b=ob[a.name];"string"==typeof b&&(b={name:b});a=oe(b,a);a.name=b.name}else{if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return xc("application/xml");if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+json$/.test(a))return xc("application/json")}return"string"==typeof a?{name:a}:a||{name:"null"}}function ld(a,b){b=xc(b);var d=kd[b.name];if(!d)return ld(a,"text/plain");a=d(a,b);if(pb.hasOwnProperty(b.name)){d=
pb[b.name];for(var c in d)d.hasOwnProperty(c)&&(a.hasOwnProperty(c)&&(a["_"+c]=a[c]),a[c]=d[c])}a.name=b.name;b.helperType&&(a.helperType=b.helperType);if(b.modeProps)for(var e in b.modeProps)a[e]=b.modeProps[e];return a}function Cg(a,b){a=pb.hasOwnProperty(a)?pb[a]:pb[a]={};Xa(b,a)}function Ya(a,b){if(!0===b)return b;if(a.copyState)return a.copyState(b);a={};for(var d in b){var c=b[d];c instanceof Array&&(c=c.concat([]));a[d]=c}return a}function md(a,b){for(var d;a.innerMode;){d=a.innerMode(b);if(!d||
d.mode==a)break;b=d.state;a=d.mode}return d||{mode:a,state:b}}function ue(a,b,d){return a.startState?a.startState(b,d):!0}function w(a,b){b-=a.first;if(0>b||b>=a.size)throw Error("There is no line "+(b+a.first)+" in the document.");for(;!a.lines;)for(var d=0;;++d){var c=a.children[d],e=c.chunkSize();if(b<e){a=c;break}b-=e}return a.lines[b]}function Za(a,b,d){var c=[],e=b.line;a.iter(b.line,d.line+1,function(f){f=f.text;e==d.line&&(f=f.slice(0,d.ch));e==b.line&&(f=f.slice(b.ch));c.push(f);++e});return c}
function nd(a,b,d){var c=[];a.iter(b,d,function(e){c.push(e.text)});return c}function Da(a,b){if(b-=a.height)for(;a;a=a.parent)a.height+=b}function N(a){if(null==a.parent)return null;var b=a.parent;a=ea(b.lines,a);for(var d=b.parent;d;b=d,d=d.parent)for(var c=0;d.children[c]!=b;++c)a+=d.children[c].chunkSize();return a+b.first}function $a(a,b){var d=a.first;a:do{for(var c=0;c<a.children.length;++c){var e=a.children[c],f=e.height;if(b<f){a=e;continue a}b-=f;d+=e.chunkSize()}return d}while(!a.lines);
for(c=0;c<a.lines.length;++c){e=a.lines[c].height;if(b<e)break;b-=e}return d+c}function Lb(a,b){return b>=a.first&&b<a.first+a.size}function od(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function t(a,b,d){void 0===d&&(d=null);if(!(this instanceof t))return new t(a,b,d);this.line=a;this.ch=b;this.sticky=d}function B(a,b){return a.line-b.line||a.ch-b.ch}function pd(a,b){return a.sticky==b.sticky&&0==B(a,b)}function qd(a){return t(a.line,a.ch)}function yc(a,b){return 0>B(a,b)?b:a}
function zc(a,b){return 0>B(a,b)?a:b}function C(a,b){if(b.line<a.first)return t(a.first,0);var d=a.first+a.size-1;if(b.line>d)return t(d,w(a,d).text.length);a=w(a,b.line).text.length;d=b.ch;b=null==d||d>a?t(b.line,a):0>d?t(b.line,0):b;return b}function ve(a,b){for(var d=[],c=0;c<b.length;c++)d[c]=C(a,b[c]);return d}function we(a,b,d,c){var e=[a.state.modeGen],f={};xe(a,b.text,a.doc.mode,d,function(k,l){return e.push(k,l)},f,c);var g=d.state;c=function(k){d.baseTokens=e;var l=a.state.overlays[k],m=
1,n=0;d.state=!0;xe(a,b.text,l.mode,d,function(p,q){for(var r=m;n<p;){var u=e[m];u>p&&e.splice(m,1,p,e[m+1],u);m+=2;n=Math.min(p,u)}if(q)if(l.opaque)e.splice(r,m-r,p,"overlay "+q),m=r+2;else for(;r<m;r+=2)p=e[r+1],e[r+1]=(p?p+" ":"")+"overlay "+q},f);d.state=g;d.baseTokens=null;d.baseTokenPos=1};for(var h=0;h<a.state.overlays.length;++h)c(h);return{styles:e,classes:f.bgClass||f.textClass?f:null}}function ye(a,b,d){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=Mb(a,N(b)),e=b.text.length>a.options.maxHighlightLength&&
Ya(a.doc.mode,c.state),f=we(a,b,c);e&&(c.state=e);b.stateAfter=c.save(!e);b.styles=f.styles;f.classes?b.styleClasses=f.classes:b.styleClasses&&(b.styleClasses=null);d===a.doc.highlightFrontier&&(a.doc.modeFrontier=Math.max(a.doc.modeFrontier,++a.doc.highlightFrontier))}return b.styles}function Mb(a,b,d){var c=a.doc,e=a.display;if(!c.mode.startState)return new Ea(c,!0,b);var f=Dg(a,b,d),g=f>c.first&&w(c,f-1).stateAfter,h=g?Ea.fromSaved(c,g,f):new Ea(c,ue(c.mode),f);c.iter(f,b,function(k){rd(a,k.text,
h);var l=h.line;k.stateAfter=l==b-1||0==l%5||l>=e.viewFrom&&l<e.viewTo?h.save():null;h.nextLine()});d&&(c.modeFrontier=h.line);return h}function rd(a,b,d,c){var e=a.doc.mode;a=new X(b,a.options.tabSize,d);a.start=a.pos=c||0;for(""==b&&ze(e,d.state);!a.eol();)sd(e,a,d.state),a.start=a.pos}function ze(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode&&(a=md(a,b),a.mode.blankLine))return a.mode.blankLine(a.state)}function sd(a,b,d,c){for(var e=0;10>e;e++){c&&(c[0]=md(a,d).mode);var f=a.token(b,
d);if(b.pos>b.start)return f}throw Error("Mode "+a.name+" failed to advance stream.");}function Ae(a,b,d,c){var e=a.doc,f=e.mode;b=C(e,b);var g=w(e,b.line);d=Mb(a,b.line,d);a=new X(g.text,a.options.tabSize,d);var h;for(c&&(h=[]);(c||a.pos<b.ch)&&!a.eol();){a.start=a.pos;var k=sd(f,a,d.state);c&&h.push(new Be(a,k,Ya(e.mode,d.state)))}return c?h:new Be(a,k,d.state)}function Ce(a,b){if(a)for(;;){var d=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!d)break;a=a.slice(0,d.index)+a.slice(d.index+d[0].length);
var c=d[1]?"bgClass":"textClass";null==b[c]?b[c]=d[2]:(new RegExp("(?:^|\\s)"+d[2]+"(?:$|\\s)")).test(b[c])||(b[c]+=" "+d[2])}return a}function xe(a,b,d,c,e,f,g){var h=d.flattenSpans;null==h&&(h=a.options.flattenSpans);var k=0,l=null,m=new X(b,a.options.tabSize,c),n=a.options.addModeClass&&[null];for(""==b&&Ce(ze(d,c.state),f);!m.eol();){if(m.pos>a.options.maxHighlightLength){h=!1;g&&rd(a,b,c,m.pos);m.pos=b.length;var p=null}else p=Ce(sd(d,m,c.state,n),f);if(n){var q=n[0].name;q&&(p="m-"+(p?q+" "+
p:q))}if(!h||l!=p){for(;k<m.start;)k=Math.min(m.start,k+5E3),e(k,l);l=p}m.start=m.pos}for(;k<m.pos;)a=Math.min(m.pos,k+5E3),e(a,l),k=a}function Dg(a,b,d){for(var c,e,f=a.doc,g=d?-1:b-(a.doc.mode.innerMode?1E3:100);b>g;--b){if(b<=f.first)return f.first;var h=w(f,b-1),k=h.stateAfter;if(k&&(!d||b+(k instanceof Ac?k.lookAhead:0)<=f.modeFrontier))return b;h=wa(h.text,null,a.options.tabSize);if(null==e||c>h)e=b-1,c=h}return e}function Eg(a,b){a.modeFrontier=Math.min(a.modeFrontier,b);if(!(a.highlightFrontier<
b-10)){for(var d=a.first,c=b-1;c>d;c--){var e=w(a,c).stateAfter;if(e&&(!(e instanceof Ac)||c+e.lookAhead<b)){d=c+1;break}}a.highlightFrontier=Math.min(a.highlightFrontier,d)}}function Bc(a,b,d){this.marker=a;this.from=b;this.to=d}function Nb(a,b){if(a)for(var d=0;d<a.length;++d){var c=a[d];if(c.marker==b)return c}}function td(a,b){if(b.full)return null;var d=Lb(a,b.from.line)&&w(a,b.from.line).markedSpans,c=Lb(a,b.to.line)&&w(a,b.to.line).markedSpans;if(!d&&!c)return null;a=b.from.ch;var e=b.to.ch,
f=0==B(b.from,b.to),g;if(d)for(var h=0;h<d.length;++h){var k=d[h],l=k.marker;if(null==k.from||(l.inclusiveLeft?k.from<=a:k.from<a)||!(k.from!=a||"bookmark"!=l.type||f&&k.marker.insertLeft)){var m=null==k.to||(l.inclusiveRight?k.to>=a:k.to>a);(g||(g=[])).push(new Bc(l,k.from,m?null:k.to))}}d=g;var n;if(c)for(g=0;g<c.length;++g)if(h=c[g],k=h.marker,null==h.to||(k.inclusiveRight?h.to>=e:h.to>e)||h.from==e&&"bookmark"==k.type&&(!f||h.marker.insertLeft))l=null==h.from||(k.inclusiveLeft?h.from<=e:h.from<
e),(n||(n=[])).push(new Bc(k,l?null:h.from-e,null==h.to?null:h.to-e));c=1==b.text.length;e=K(b.text).length+(c?a:0);if(d)for(f=0;f<d.length;++f)if(g=d[f],null==g.to)(h=Nb(n,g.marker),h)?c&&(g.to=null==h.to?null:h.to+e):g.to=a;if(n)for(a=0;a<n.length;++a)f=n[a],null!=f.to&&(f.to+=e),null==f.from?Nb(d,f.marker)||(f.from=e,c&&(d||(d=[])).push(f)):(f.from+=e,c&&(d||(d=[])).push(f));d&&(d=De(d));n&&n!=d&&(n=De(n));a=[d];if(!c){b=b.text.length-2;var p;if(0<b&&d)for(c=0;c<d.length;++c)null==d[c].to&&(p||
(p=[])).push(new Bc(d[c].marker,null,null));for(d=0;d<b;++d)a.push(p);a.push(n)}return a}function De(a){for(var b=0;b<a.length;++b){var d=a[b];null!=d.from&&d.from==d.to&&!1!==d.marker.clearWhenEmpty&&a.splice(b--,1)}return a.length?a:null}function Fg(a,b,d){var c=null;a.iter(b.line,d.line+1,function(m){if(m.markedSpans)for(var n=0;n<m.markedSpans.length;++n){var p=m.markedSpans[n].marker;!p.readOnly||c&&-1!=ea(c,p)||(c||(c=[])).push(p)}});if(!c)return null;a=[{from:b,to:d}];for(b=0;b<c.length;++b){d=
c[b];for(var e=d.find(0),f=0;f<a.length;++f){var g=a[f];if(!(0>B(g.to,e.from)||0<B(g.from,e.to))){var h=[f,1],k=B(g.from,e.from),l=B(g.to,e.to);(0>k||!d.inclusiveLeft&&!k)&&h.push({from:g.from,to:e.from});(0<l||!d.inclusiveRight&&!l)&&h.push({from:e.to,to:g.to});a.splice.apply(a,h);f+=h.length-3}}}return a}function Ee(a){var b=a.markedSpans;if(b){for(var d=0;d<b.length;++d)b[d].marker.detachLine(a);a.markedSpans=null}}function Fe(a,b){if(b){for(var d=0;d<b.length;++d)b[d].marker.attachLine(a);a.markedSpans=
b}}function ud(a,b){var d=a.lines.length-b.lines.length;if(0!=d)return d;d=a.find();var c=b.find(),e=B(d.from,c.from)||(a.inclusiveLeft?-1:0)-(b.inclusiveLeft?-1:0);return e?-e:(d=B(d.to,c.to)||(a.inclusiveRight?1:0)-(b.inclusiveRight?1:0))?d:b.id-a.id}function qb(a,b){a=Ka&&a.markedSpans;if(a)for(var d,c=0;c<a.length;++c)if(d=a[c],d.marker.collapsed&&null==(b?d.from:d.to)&&(!e||0>ud(e,d.marker)))var e=d.marker;return e}function Ge(a,b,d,c,e){a=w(a,b);if(a=Ka&&a.markedSpans)for(b=0;b<a.length;++b){var f=
a[b];if(f.marker.collapsed){var g=f.marker.find(0),h=B(g.from,d)||(f.marker.inclusiveLeft?-1:0)-(e.inclusiveLeft?-1:0),k=B(g.to,c)||(f.marker.inclusiveRight?1:0)-(e.inclusiveRight?1:0);if(!(0<=h&&0>=k||0>=h&&0<=k)&&(0>=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0<=B(g.to,d):0<B(g.to,d))||0<=h&&(f.marker.inclusiveRight&&e.inclusiveLeft?0>=B(g.from,c):0>B(g.from,c))))return!0}}}function Fa(a){for(var b;b=qb(a,!0);)a=b.find(-1,!0).line;return a}function vd(a,b){a=w(a,b);var d=Fa(a);return a==d?b:N(d)}
function He(a,b){if(b>a.lastLine())return b;var d=w(a,b);if(!Oa(a,d))return b;for(;a=qb(d,!1);)d=a.find(1,!0).line;return N(d)+1}function Oa(a,b){var d=Ka&&b.markedSpans;if(d)for(var c,e=0;e<d.length;++e)if(c=d[e],c.marker.collapsed&&(null==c.from||!c.marker.widgetNode&&0==c.from&&c.marker.inclusiveLeft&&wd(a,b,c)))return!0}function wd(a,b,d){if(null==d.to)return b=d.marker.find(1,!0),wd(a,b.line,Nb(b.line.markedSpans,d.marker));if(d.marker.inclusiveRight&&d.to==b.text.length)return!0;for(var c,e=
0;e<b.markedSpans.length;++e)if(c=b.markedSpans[e],c.marker.collapsed&&!c.marker.widgetNode&&c.from==d.to&&(null==c.to||c.to!=d.from)&&(c.marker.inclusiveLeft||d.marker.inclusiveRight)&&wd(a,b,c))return!0}function Ga(a){a=Fa(a);for(var b=0,d=a.parent,c=0;c<d.lines.length;++c){var e=d.lines[c];if(e==a)break;else b+=e.height}for(a=d.parent;a;d=a,a=d.parent)for(c=0;c<a.children.length&&(e=a.children[c],e!=d);++c)b+=e.height;return b}function Cc(a){if(0==a.height)return 0;for(var b=a.text.length,d,c=
a;d=qb(c,!0);)d=d.find(0,!0),c=d.from.line,b+=d.from.ch-d.to.ch;for(c=a;d=qb(c,!1);)a=d.find(0,!0),b-=c.text.length-a.from.ch,c=a.to.line,b+=c.text.length-a.to.ch;return b}function xd(a){var b=a.display;a=a.doc;b.maxLine=w(a,a.first);b.maxLineLength=Cc(b.maxLine);b.maxLineChanged=!0;a.iter(function(d){var c=Cc(d);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=d)})}function Ie(a,b){if(!a||/^\s*$/.test(a))return null;b=b.addModeClass?Gg:Hg;return b[a]||(b[a]=a.replace(/\S+/g,"cm-$&"))}function Je(a,
b){var d=I("span",null,null,fa?"padding-right: .1px":null);d={pre:I("pre",[d],"CodeMirror-line"),content:d,col:0,pos:0,cm:a,trailingSpace:!1,splitSpaces:a.getOption("lineWrapping")};b.measure={};for(var c=0;c<=(b.rest?b.rest.length:0);c++){var e=c?b.rest[c-1]:b.line,f=void 0;d.pos=0;d.addToken=Ig;var g=a.display.measure;if(null!=yd)g=yd;else{var h=D(g,document.createTextNode("A\u062eA")),k=Ob(h,0,1).getBoundingClientRect();h=Ob(h,1,2).getBoundingClientRect();E(g);g=k&&k.left!=k.right?yd=3>h.right-
k.right:!1}g&&(f=Ja(e,a.doc.direction))&&(d.addToken=Jg(d.addToken,f));d.map=[];var l=b!=a.display.externalMeasured&&N(e);a:{var m=h=k=g=void 0,n=void 0,p=void 0,q=void 0;f=d;l=ye(a,e,l);var r=e.markedSpans,u=e.text,A=0;if(r)for(var Y=u.length,x=0,P=1,L="",Q=0;;){if(Q==x){n=m=h=p="";k=g=null;Q=Infinity;for(var S=[],F=void 0,R=0;R<r.length;++R){var H=r[R],M=H.marker;if("bookmark"==M.type&&H.from==x&&M.widgetNode)S.push(M);else if(H.from<=x&&(null==H.to||H.to>x||M.collapsed&&H.to==x&&H.from==x)){null!=
H.to&&H.to!=x&&Q>H.to&&(Q=H.to,m="");M.className&&(n+=" "+M.className);M.css&&(p=(p?p+";":"")+M.css);M.startStyle&&H.from==x&&(h+=" "+M.startStyle);M.endStyle&&H.to==Q&&(F||(F=[])).push(M.endStyle,H.to);M.title&&((g||(g={})).title=M.title);if(M.attributes)for(var ha in M.attributes)(g||(g={}))[ha]=M.attributes[ha];M.collapsed&&(!k||0>ud(k.marker,M))&&(k=H)}else H.from>x&&Q>H.from&&(Q=H.from)}if(F)for(R=0;R<F.length;R+=2)F[R+1]==Q&&(m+=" "+F[R]);if(!k||k.from==x)for(F=0;F<S.length;++F)Ke(f,0,S[F]);
if(k&&(k.from||0)==x){Ke(f,(null==k.to?Y+1:k.to)-x,k.marker,null==k.from);if(null==k.to)break a;k.to==x&&(k=!1)}}if(x>=Y)break;for(S=Math.min(Y,Q);;){if(L){F=x+L.length;k||(R=F>S?L.slice(0,S-x):L,f.addToken(f,R,q?q+n:n,h,x+R.length==Q?m:"",p,g));if(F>=S){L=L.slice(S-x);x=S;break}x=F;h=""}L=u.slice(A,A=l[P++]);q=Ie(l[P++],f.cm.options)}}else for(g=1;g<l.length;g+=2)f.addToken(f,u.slice(A,A=l[g]),Ie(l[g+1],f.cm.options))}e.styleClasses&&(e.styleClasses.bgClass&&(d.bgClass=dd(e.styleClasses.bgClass,
d.bgClass||"")),e.styleClasses.textClass&&(d.textClass=dd(e.styleClasses.textClass,d.textClass||"")));0==d.map.length&&(e=d.map,f=e.push,g=d.content,k=g.appendChild,h=a.display.measure,null==zd&&(m=v("span","\u200b"),D(h,v("span",[m,document.createTextNode("x")])),0!=h.firstChild.offsetHeight&&(zd=1>=m.offsetWidth&&2<m.offsetHeight&&!(G&&8>T))),h=zd?v("span","\u200b"):v("span","\u00a0",null,"display: inline-block; width: 1px; margin-right: -1px"),h.setAttribute("cm-text",""),f.call(e,0,0,k.call(g,
h)));0==c?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||(b.measure.caches=[])).push({}))}fa&&(ha=d.content.lastChild,/\bcm-tab\b/.test(ha.className)||ha.querySelector&&ha.querySelector(".cm-tab"))&&(d.content.className="cm-tab-wrap-hack");W(a,"renderLine",a,b.line,d.pre);d.pre.className&&(d.textClass=dd(d.pre.className,d.textClass||""));return d}function Kg(a){var b=v("span","\u2022","cm-invalidchar");b.title="\\u"+a.charCodeAt(0).toString(16);
b.setAttribute("aria-label",b.title);return b}function Ig(a,b,d,c,e,f,g){if(b){if(a.splitSpaces){var h=a.trailingSpace;if(1<b.length&&!/  /.test(b))h=b;else{for(var k="",l=0;l<b.length;l++){var m=b.charAt(l);" "!=m||!h||l!=b.length-1&&32!=b.charCodeAt(l+1)||(m="\u00a0");k+=m;h=" "==m}h=k}}else h=b;k=h;l=a.cm.state.specialChars;m=!1;if(l.test(b)){h=document.createDocumentFragment();for(var n=0;;){l.lastIndex=n;var p=l.exec(b),q=p?p.index-n:b.length-n;if(q){var r=document.createTextNode(k.slice(n,n+
q));G&&9>T?h.appendChild(v("span",[r])):h.appendChild(r);a.map.push(a.pos,a.pos+q,r);a.col+=q;a.pos+=q}if(!p)break;n+=q+1;"\t"==p[0]?(p=a.cm.options.tabSize,p-=a.col%p,q=h.appendChild(v("span",gd(p),"cm-tab")),q.setAttribute("role","presentation"),q.setAttribute("cm-text","\t"),a.col+=p):("\r"==p[0]||"\n"==p[0]?(q=h.appendChild(v("span","\r"==p[0]?"\u240d":"\u2424","cm-invalidchar")),q.setAttribute("cm-text",p[0])):(q=a.cm.options.specialCharPlaceholder(p[0]),q.setAttribute("cm-text",p[0]),G&&9>T?
h.appendChild(v("span",[q])):h.appendChild(q)),a.col+=1);a.map.push(a.pos,a.pos+1,q);a.pos++}}else a.col+=b.length,h=document.createTextNode(k),a.map.push(a.pos,a.pos+b.length,h),G&&9>T&&(m=!0),a.pos+=b.length;a.trailingSpace=32==k.charCodeAt(b.length-1);if(d||c||e||m||f||g){b=d||"";c&&(b+=c);e&&(b+=e);c=v("span",[h],b,f);if(g)for(var u in g)g.hasOwnProperty(u)&&"style"!=u&&"class"!=u&&c.setAttribute(u,g[u]);return a.content.appendChild(c)}a.content.appendChild(h)}}function Jg(a,b){return function(d,
c,e,f,g,h,k){e=e?e+" cm-force-border":"cm-force-border";for(var l=d.pos,m=l+c.length;;){for(var n=void 0,p=0;p<b.length&&!(n=b[p],n.to>l&&n.from<=l);p++);if(n.to>=m)return a(d,c,e,f,g,h,k);a(d,c.slice(0,n.to-l),e,f,null,h,k);f=null;c=c.slice(n.to-l);l=n.to}}}function Ke(a,b,d,c){var e=!c&&d.widgetNode;e&&a.map.push(a.pos,a.pos+b,e);!c&&a.cm.display.input.needsContentAttribute&&(e||(e=a.content.appendChild(document.createElement("span"))),e.setAttribute("cm-marker",d.id));e&&(a.cm.display.input.setUneditable(e),
a.content.appendChild(e));a.pos+=b;a.trailingSpace=!1}function Le(a,b,d){for(var c=this.line=b,e;c=qb(c,!1);)c=c.find(1,!0).line,(e||(e=[])).push(c);this.size=(this.rest=e)?N(K(this.rest))-d+1:1;this.node=this.text=null;this.hidden=Oa(a,b)}function Dc(a,b,d){var c=[],e;for(e=b;e<d;)b=new Le(a.doc,w(a.doc,e),e),e+=b.size,c.push(b);return c}function Lg(a,b){if(a=a.ownsGroup)try{var d=a.delayedCallbacks,c=0;do{for(;c<d.length;c++)d[c].call(null);for(var e=0;e<a.ops.length;e++){var f=a.ops[e];if(f.cursorActivityHandlers)for(;f.cursorActivityCalled<
f.cursorActivityHandlers.length;)f.cursorActivityHandlers[f.cursorActivityCalled++].call(null,f.cm)}}while(c<d.length)}finally{rb=null,b(a)}}function ca(a,b){var d=a._handlers&&a._handlers[b]||wc;if(d.length){var c=Array.prototype.slice.call(arguments,2);if(rb)var e=rb.delayedCallbacks;else Pb?e=Pb:(e=Pb=[],setTimeout(Mg,0));for(var f=function(h){e.push(function(){return d[h].apply(null,c)})},g=0;g<d.length;++g)f(g)}}function Mg(){var a=Pb;Pb=null;for(var b=0;b<a.length;++b)a[b]()}function Me(a,b,
d,c){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];if("text"==f){f=a;var g=b,h=g.text.className,k=Ne(f,g);g.text==g.node&&(g.node=k.pre);g.text.parentNode.replaceChild(k.pre,g.text);g.text=k.pre;k.bgClass!=g.bgClass||k.textClass!=g.textClass?(g.bgClass=k.bgClass,g.textClass=k.textClass,Ad(f,g)):h&&(g.text.className=h)}else if("gutter"==f)Oe(a,b,d,c);else if("class"==f)Ad(a,b);else if("widget"==f){f=a;g=b;h=c;g.alignable&&(g.alignable=null);k=y("CodeMirror-linewidget");for(var l=g.node.firstChild,
m;l;l=m)m=l.nextSibling,k.test(l.className)&&g.node.removeChild(l);Pe(f,g,h)}}b.changes=null}function Qb(a){a.node==a.text&&(a.node=v("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),G&&8>T&&(a.node.style.zIndex=2));return a.node}function Ne(a,b){var d=a.display.externalMeasured;return d&&d.line==b.line?(a.display.externalMeasured=null,b.measure=d.measure,d.built):Je(a,b)}function Ad(a,b){var d=b.bgClass?b.bgClass+" "+
(b.line.bgClass||""):b.line.bgClass;d&&(d+=" CodeMirror-linebackground");if(b.background)d?b.background.className=d:(b.background.parentNode.removeChild(b.background),b.background=null);else if(d){var c=Qb(b);b.background=c.insertBefore(v("div",null,d),c.firstChild);a.display.input.setUneditable(b.background)}b.line.wrapClass?Qb(b).className=b.line.wrapClass:b.node!=b.text&&(b.node.className="");b.text.className=(b.textClass?b.textClass+" "+(b.line.textClass||""):b.line.textClass)||""}function Oe(a,
b,d,c){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);b.gutterBackground&&(b.node.removeChild(b.gutterBackground),b.gutterBackground=null);if(b.line.gutterClass){var e=Qb(b);b.gutterBackground=v("div",null,"CodeMirror-gutter-background "+b.line.gutterClass,"left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px; width: "+c.gutterTotalWidth+"px");a.display.input.setUneditable(b.gutterBackground);e.insertBefore(b.gutterBackground,b.text)}e=b.line.gutterMarkers;if(a.options.lineNumbers||
e){var f=Qb(b),g=b.gutter=v("div",null,"CodeMirror-gutter-wrapper","left: "+(a.options.fixedGutter?c.fixedPos:-c.gutterTotalWidth)+"px");a.display.input.setUneditable(g);f.insertBefore(g,b.text);b.line.gutterClass&&(g.className+=" "+b.line.gutterClass);!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(v("div",od(a.options,d),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+c.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px")));
if(e)for(b=0;b<a.display.gutterSpecs.length;++b)d=a.display.gutterSpecs[b].className,(f=e.hasOwnProperty(d)&&e[d])&&g.appendChild(v("div",[f],"CodeMirror-gutter-elt","left: "+c.gutterLeft[d]+"px; width: "+c.gutterWidth[d]+"px"))}}function Ng(a,b,d,c){var e=Ne(a,b);b.text=b.node=e.pre;e.bgClass&&(b.bgClass=e.bgClass);e.textClass&&(b.textClass=e.textClass);Ad(a,b);Oe(a,b,d,c);Pe(a,b,c);return b.node}function Pe(a,b,d){Qe(a,b.line,b,d,!0);if(b.rest)for(var c=0;c<b.rest.length;c++)Qe(a,b.rest[c],b,d,
!1)}function Qe(a,b,d,c,e){if(b.widgets){var f=Qb(d),g=0;for(b=b.widgets;g<b.length;++g){var h=b[g],k=v("div",[h.node],"CodeMirror-linewidget"+(h.className?" "+h.className:""));h.handleMouseEvents||k.setAttribute("cm-ignore-events","true");var l=h,m=k,n=c;if(l.noHScroll){(d.alignable||(d.alignable=[])).push(m);var p=n.wrapperWidth;m.style.left=n.fixedPos+"px";l.coverGutter||(p-=n.gutterTotalWidth,m.style.paddingLeft=n.gutterTotalWidth+"px");m.style.width=p+"px"}l.coverGutter&&(m.style.zIndex=5,m.style.position=
"relative",l.noHScroll||(m.style.marginLeft=-n.gutterTotalWidth+"px"));a.display.input.setUneditable(k);e&&h.above?f.insertBefore(k,d.gutter||d.text):f.appendChild(k);ca(h,"redraw")}}}function Rb(a){if(null!=a.height)return a.height;var b=a.doc.cm;if(!b)return 0;if(!ja(document.body,a.node)){var d="position: relative;";a.coverGutter&&(d+="margin-left: -"+b.display.gutters.offsetWidth+"px;");a.noHScroll&&(d+="width: "+b.display.wrapper.clientWidth+"px;");D(b.display.measure,v("div",[a.node],null,d))}return a.height=
a.node.parentNode.offsetHeight}function La(a,b){for(b=b.target||b.srcElement;b!=a.wrapper;b=b.parentNode)if(!b||1==b.nodeType&&"true"==b.getAttribute("cm-ignore-events")||b.parentNode==a.sizer&&b!=a.mover)return!0}function Bd(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Re(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=D(a.measure,v("pre","x","CodeMirror-line-like"));b=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle;b={left:parseInt(b.paddingLeft),right:parseInt(b.paddingRight)};
isNaN(b.left)||isNaN(b.right)||(a.cachedPaddingH=b);return b}function Ha(a){return 50-a.display.nativeBarWidth}function ab(a){return a.display.scroller.clientWidth-Ha(a)-a.display.barWidth}function Cd(a){return a.display.scroller.clientHeight-Ha(a)-a.display.barHeight}function Se(a,b,d){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var c=0;c<a.rest.length;c++)if(a.rest[c]==b)return{map:a.measure.maps[c],cache:a.measure.caches[c]};for(b=0;b<a.rest.length;b++)if(N(a.rest[b])>d)return{map:a.measure.maps[b],
cache:a.measure.caches[b],before:!0}}function Dd(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[bb(a,b)];if((a=a.display.externalMeasured)&&b>=a.lineN&&b<a.lineN+a.size)return a}function cb(a,b){var d=N(b),c=Dd(a,d);c&&!c.text?c=null:c&&c.changes&&(Me(a,c,d,Ed(a)),a.curOp.forceUpdate=!0);if(!c){var e=Fa(b);c=N(e);e=a.display.externalMeasured=new Le(a.doc,e,c);e.lineN=c;c=e.built=Je(a,e);e.text=c.pre;D(a.display.lineMeasure,c.pre);c=e}a=Se(c,b,d);return{line:b,view:c,rect:null,
map:a.map,cache:a.cache,before:a.before,hasHeights:!1}}function za(a,b,d,c,e){b.before&&(d=-1);var f=d+(c||"");if(b.cache.hasOwnProperty(f))a=b.cache[f];else{b.rect||(b.rect=b.view.text.getBoundingClientRect());if(!b.hasHeights){var g=b.view,h=b.rect,k=a.options.lineWrapping,l=k&&ab(a);if(!g.measure.heights||k&&g.measure.width!=l){var m=g.measure.heights=[];if(k)for(g.measure.width=l,g=g.text.firstChild.getClientRects(),k=0;k<g.length-1;k++){l=g[k];var n=g[k+1];2<Math.abs(l.bottom-n.bottom)&&m.push((l.bottom+
n.top)/2-h.top)}m.push(h.bottom-h.top)}b.hasHeights=!0}m=c;g=Te(b.map,d,m);c=g.node;h=g.start;k=g.end;d=g.collapse;if(3==c.nodeType){for(var p=0;4>p;p++){for(;h&&id(b.line.text.charAt(g.coverStart+h));)--h;for(;g.coverStart+k<g.coverEnd&&id(b.line.text.charAt(g.coverStart+k));)++k;if(G&&9>T&&0==h&&k==g.coverEnd-g.coverStart)var q=c.parentNode.getBoundingClientRect();else{q=Ob(c,h,k).getClientRects();k=Ue;if("left"==m)for(l=0;l<q.length&&(k=q[l]).left==k.right;l++);else for(l=q.length-1;0<=l&&(k=q[l]).left==
k.right;l--);q=k}if(q.left||q.right||0==h)break;k=h;--h;d="right"}G&&11>T&&((p=!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI)||(null!=Fd?p=Fd:(m=D(a.display.measure,v("span","x")),p=m.getBoundingClientRect(),m=Ob(m,0,1).getBoundingClientRect(),p=Fd=1<Math.abs(p.left-m.left)),p=!p),p||(p=screen.logicalXDPI/screen.deviceXDPI,m=screen.logicalYDPI/screen.deviceYDPI,q={left:q.left*p,right:q.right*p,top:q.top*m,bottom:q.bottom*m}))}else 0<h&&(d=m="right"),q=a.options.lineWrapping&&
1<(p=c.getClientRects()).length?p["right"==m?p.length-1:0]:c.getBoundingClientRect();!(G&&9>T)||h||q&&(q.left||q.right)||(q=(q=c.parentNode.getClientRects()[0])?{left:q.left,right:q.left+sb(a.display),top:q.top,bottom:q.bottom}:Ue);c=q.top-b.rect.top;h=q.bottom-b.rect.top;p=(c+h)/2;m=b.view.measure.heights;for(g=0;g<m.length-1&&!(p<m[g]);g++);d={left:("right"==d?q.right:q.left)-b.rect.left,right:("left"==d?q.left:q.right)-b.rect.left,top:g?m[g-1]:0,bottom:m[g]};q.left||q.right||(d.bogus=!0);a.options.singleCursorHeightPerLine||
(d.rtop=c,d.rbottom=h);a=d;a.bogus||(b.cache[f]=a)}return{left:a.left,right:a.right,top:e?a.rtop:a.top,bottom:e?a.rbottom:a.bottom}}function Te(a,b,d){for(var c,e,f,g,h,k,l=0;l<a.length;l+=3){h=a[l];k=a[l+1];if(b<h)e=0,f=1,g="left";else if(b<k)e=b-h,f=e+1;else if(l==a.length-3||b==k&&a[l+3]>b)f=k-h,e=f-1,b>=k&&(g="right");if(null!=e){c=a[l+2];h==k&&d==(c.insertLeft?"left":"right")&&(g=d);if("left"==d&&0==e)for(;l&&a[l-2]==a[l-3]&&a[l-1].insertLeft;)c=a[(l-=3)+2],g="left";if("right"==d&&e==k-h)for(;l<
a.length-3&&a[l+3]==a[l+4]&&!a[l+5].insertLeft;)c=a[(l+=3)+2],g="right";break}}return{node:c,start:e,end:f,collapse:g,coverStart:h,coverEnd:k}}function Ve(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function We(a){a.display.externalMeasure=null;E(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)Ve(a.display.view[b])}function Sb(a){We(a);a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=
null;a.options.lineWrapping||(a.display.maxLineChanged=!0);a.display.lineNumChars=null}function Xe(){return Ec&&Fc?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function Ye(){return Ec&&Fc?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Gd(a){var b=
0;if(a.widgets)for(var d=0;d<a.widgets.length;++d)a.widgets[d].above&&(b+=Rb(a.widgets[d]));return b}function Gc(a,b,d,c,e){e||(e=Gd(b),d.top+=e,d.bottom+=e);if("line"==c)return d;c||(c="local");b=Ga(b);b="local"==c?b+a.display.lineSpace.offsetTop:b-a.display.viewOffset;if("page"==c||"window"==c)a=a.display.lineSpace.getBoundingClientRect(),b+=a.top+("window"==c?0:Ye()),c=a.left+("window"==c?0:Xe()),d.left+=c,d.right+=c;d.top+=b;d.bottom+=b;return d}function Ze(a,b,d){if("div"==d)return b;var c=b.left;
b=b.top;"page"==d?(c-=Xe(),b-=Ye()):"local"!=d&&d||(d=a.display.sizer.getBoundingClientRect(),c+=d.left,b+=d.top);a=a.display.lineSpace.getBoundingClientRect();return{left:c-a.left,top:b-a.top}}function Hd(a,b,d,c,e){c||(c=w(a.doc,b.line));var f=c;b=b.ch;c=za(a,cb(a,c),b,e);return Gc(a,f,c,d)}function Aa(a,b,d,c,e,f){function g(p,q){p=za(a,e,p,q?"right":"left",f);q?p.left=p.right:p.right=p.left;return Gc(a,c,p,d)}function h(p,q,r){return g(r?p-1:p,1==k[q].level!=r)}c=c||w(a.doc,b.line);e||(e=cb(a,
c));var k=Ja(c,a.doc.direction),l=b.ch;b=b.sticky;l>=c.text.length?(l=c.text.length,b="before"):0>=l&&(l=0,b="after");if(!k)return g("before"==b?l-1:l,"before"==b);var m=Ib(k,l,b),n=Jb;m=h(l,m,"before"==b);null!=n&&(m.other=h(l,n,"before"!=b));return m}function $e(a,b){var d=0;b=C(a.doc,b);a.options.lineWrapping||(d=sb(a.display)*b.ch);b=w(a.doc,b.line);a=Ga(b)+a.display.lineSpace.offsetTop;return{left:d,right:d,top:a,bottom:a+b.height}}function Id(a,b,d,c,e){a=t(a,b,d);a.xRel=e;c&&(a.outside=c);
return a}function Jd(a,b,d){var c=a.doc;d+=a.display.viewOffset;if(0>d)return Id(c.first,0,null,-1,-1);var e=$a(c,d),f=c.first+c.size-1;if(e>f)return Id(c.first+c.size-1,w(c,f).text.length,null,1,1);0>b&&(b=0);for(var g=w(c,e);;){f=Og(a,g,e,b,d);var h=void 0;var k=f.ch+(0<f.xRel||0<f.outside?1:0);if(g=Ka&&g.markedSpans)for(var l=0;l<g.length;++l){var m=g[l];m.marker.collapsed&&(null==m.from||m.from<k)&&(null==m.to||m.to>k)&&(!h||0>ud(h,m.marker))&&(h=m.marker)}if(!h)return f;f=h.find(1);if(f.line==
e)return f;g=w(c,e=f.line)}}function af(a,b,d,c){c-=Gd(b);b=b.text.length;var e=Hb(function(f){return za(a,d,f-1).bottom<=c},b,0);b=Hb(function(f){return za(a,d,f).top>c},e,b);return{begin:e,end:b}}function bf(a,b,d,c){d||(d=cb(a,b));c=Gc(a,b,za(a,d,c),"line").top;return af(a,b,d,c)}function Kd(a,b,d,c){return a.bottom<=d?!1:a.top>d?!0:(c?a.left:a.right)>b}function Og(a,b,d,c,e){e-=Ga(b);var f=cb(a,b),g=Gd(b),h=0,k=b.text.length,l=!0,m=Ja(b,a.doc.direction);m&&(m=(a.options.lineWrapping?Pg:Qg)(a,
b,d,f,m,c,e),h=(l=1!=m.level)?m.from:m.to-1,k=l?m.to:m.from-1);var n=null,p=null;m=Hb(function(r){var u=za(a,f,r);u.top+=g;u.bottom+=g;if(!Kd(u,c,e,!1))return!1;u.top<=e&&u.left<=c&&(n=r,p=u);return!0},h,k);var q=!1;p?(h=c-p.left<p.right-c,l=h==l,m=n+(l?0:1),l=l?"after":"before",h=h?p.left:p.right):(l||m!=k&&m!=h||m++,l=0==m?"after":m==b.text.length?"before":za(a,f,m-(l?1:0)).bottom+g<=e==l?"after":"before",q=Aa(a,t(d,m,l),"line",b,f),h=q.left,q=e<q.top?-1:e>=q.bottom?1:0);m=qe(b.text,m,1);return Id(d,
m,l,q,c-h)}function Qg(a,b,d,c,e,f,g){var h=Hb(function(m){m=e[m];var n=1!=m.level;return Kd(Aa(a,t(d,n?m.to:m.from,n?"before":"after"),"line",b,c),f,g,!0)},0,e.length-1),k=e[h];if(0<h){var l=1!=k.level;l=Aa(a,t(d,l?k.from:k.to,l?"after":"before"),"line",b,c);Kd(l,f,g,!0)&&l.top>g&&(k=e[h-1])}return k}function Pg(a,b,d,c,e,f,g){g=af(a,b,c,g);d=g.begin;g=g.end;/\s/.test(b.text.charAt(g-1))&&g--;for(var h=b=null,k=0;k<e.length;k++){var l=e[k];if(!(l.from>=g||l.to<=d)){var m=za(a,c,1!=l.level?Math.min(g,
l.to)-1:Math.max(d,l.from)).right;m=m<f?f-m+1E9:m-f;if(!b||h>m)b=l,h=m}}b||(b=e[e.length-1]);b.from<d&&(b={from:d,to:b.to,level:b.level});b.to>g&&(b={from:b.from,to:g,level:b.level});return b}function tb(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==db){db=v("pre",null,"CodeMirror-line-like");for(var b=0;49>b;++b)db.appendChild(document.createTextNode("x")),db.appendChild(v("br"));db.appendChild(document.createTextNode("x"))}D(a.measure,db);b=db.offsetHeight/50;3<b&&(a.cachedTextHeight=
b);E(a.measure);return b||1}function sb(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=v("span","xxxxxxxxxx"),d=v("pre",[b],"CodeMirror-line-like");D(a.measure,d);b=b.getBoundingClientRect();b=(b.right-b.left)/10;2<b&&(a.cachedCharWidth=b);return b||10}function Ed(a){for(var b=a.display,d={},c={},e=b.gutters.clientLeft,f=b.gutters.firstChild,g=0;f;f=f.nextSibling,++g){var h=a.display.gutterSpecs[g].className;d[h]=f.offsetLeft+f.clientLeft+e;c[h]=f.clientWidth}return{fixedPos:Ld(b),gutterTotalWidth:b.gutters.offsetWidth,
gutterLeft:d,gutterWidth:c,wrapperWidth:b.wrapper.clientWidth}}function Ld(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function cf(a){var b=tb(a.display),d=a.options.lineWrapping,c=d&&Math.max(5,a.display.scroller.clientWidth/sb(a.display)-3);return function(e){if(Oa(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return d?f+(Math.ceil(e.text.length/c)||1)*b:f+b}}function Md(a){var b=
a.doc,d=cf(a);b.iter(function(c){var e=d(c);e!=c.height&&Da(c,e)})}function eb(a,b,d,c){var e=a.display;if(!d&&"true"==(b.target||b.srcElement).getAttribute("cm-not-content"))return null;d=e.lineSpace.getBoundingClientRect();try{var f=b.clientX-d.left;var g=b.clientY-d.top}catch(k){return null}b=Jd(a,f,g);var h;c&&0<b.xRel&&(h=w(a.doc,b.line).text).length==b.ch&&(c=wa(h,h.length,a.options.tabSize)-h.length,b=t(b.line,Math.max(0,Math.round((f-Re(a.display).left)/sb(a.display))-c)));return b}function bb(a,
b){if(b>=a.display.viewTo)return null;b-=a.display.viewFrom;if(0>b)return null;a=a.display.view;for(var d=0;d<a.length;d++)if(b-=a[d].size,0>b)return d}function la(a,b,d,c){null==b&&(b=a.doc.first);null==d&&(d=a.doc.first+a.doc.size);c||(c=0);var e=a.display;c&&d<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b);a.curOp.viewChanged=!0;if(b>=e.viewTo)Ka&&vd(a.doc,b)<e.viewTo&&Pa(a);else if(d<=e.viewFrom)Ka&&He(a.doc,d+c)>e.viewFrom?Pa(a):(e.viewFrom+=c,e.viewTo+=
c);else if(b<=e.viewFrom&&d>=e.viewTo)Pa(a);else if(b<=e.viewFrom){var f=Hc(a,d,d+c,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=c):Pa(a)}else if(d>=e.viewTo)(f=Hc(a,b,b,-1))?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Pa(a);else{f=Hc(a,b,b,-1);var g=Hc(a,d,d+c,1);f&&g?(e.view=e.view.slice(0,f.index).concat(Dc(a,f.lineN,g.lineN)).concat(e.view.slice(g.index)),e.viewTo+=c):Pa(a)}if(a=e.externalMeasured)d<a.lineN?a.lineN+=c:b<a.lineN+a.size&&(e.externalMeasured=null)}function Qa(a,
b,d){a.curOp.viewChanged=!0;var c=a.display,e=a.display.externalMeasured;e&&b>=e.lineN&&b<e.lineN+e.size&&(c.externalMeasured=null);b<c.viewFrom||b>=c.viewTo||(a=c.view[bb(a,b)],null!=a.node&&(a=a.changes||(a.changes=[]),-1==ea(a,d)&&a.push(d)))}function Pa(a){a.display.viewFrom=a.display.viewTo=a.doc.first;a.display.view=[];a.display.viewOffset=0}function Hc(a,b,d,c){var e=bb(a,b),f=a.display.view;if(!Ka||d==a.doc.first+a.doc.size)return{index:e,lineN:d};for(var g=a.display.viewFrom,h=0;h<e;h++)g+=
f[h].size;if(g!=b){if(0<c){if(e==f.length-1)return null;b=g+f[e].size-b;e++}else b=g-b;d+=b}for(;vd(a.doc,d)!=d;){if(e==(0>c?0:f.length-1))return null;d+=c*f[e-(0>c?1:0)].size;e+=c}return{index:e,lineN:d}}function df(a){a=a.display.view;for(var b=0,d=0;d<a.length;d++){var c=a[d];c.hidden||c.node&&!c.changes||++b}return b}function Tb(a){a.display.input.showSelection(a.display.input.prepareSelection())}function ef(a,b){void 0===b&&(b=!0);for(var d=a.doc,c={},e=c.cursors=document.createDocumentFragment(),
f=c.selection=document.createDocumentFragment(),g=0;g<d.sel.ranges.length;g++)if(b||g!=d.sel.primIndex){var h=d.sel.ranges[g];if(!(h.from().line>=a.display.viewTo||h.to().line<a.display.viewFrom)){var k=h.empty();(k||a.options.showCursorWhenSelecting)&&ff(a,h.head,e);k||Rg(a,h,f)}}return c}function ff(a,b,d){b=Aa(a,b,"div",null,null,!a.options.singleCursorHeightPerLine);var c=d.appendChild(v("div","\u00a0","CodeMirror-cursor"));c.style.left=b.left+"px";c.style.top=b.top+"px";c.style.height=Math.max(0,
b.bottom-b.top)*a.options.cursorHeight+"px";b.other&&(a=d.appendChild(v("div","\u00a0","CodeMirror-cursor CodeMirror-secondarycursor")),a.style.display="",a.style.left=b.other.left+"px",a.style.top=b.other.top+"px",a.style.height=.85*(b.other.bottom-b.other.top)+"px")}function Ic(a,b){return a.top-b.top||a.left-b.left}function Rg(a,b,d){function c(q,r,u,A){0>r&&(r=0);r=Math.round(r);A=Math.round(A);h.appendChild(v("div",null,"CodeMirror-selected","position: absolute; left: "+q+"px;\n                             top: "+
r+"px; width: "+(null==u?m-q:u)+"px;\n                             height: "+(A-r)+"px"))}function e(q,r,u){function A(F,R){return Hd(a,t(q,F),"div",x,R)}function Y(F,R,H){F=bf(a,x,null,F);R="ltr"==R==("after"==H)?"left":"right";H="after"==H?F.begin:F.end-(/\s/.test(x.text.charAt(F.end-1))?2:1);return A(H,R)[R]}var x=w(g,q),P=x.text.length,L,Q,S=Ja(x,g.direction);zg(S,r||0,null==u?P:u,function(F,R,H,M){var ha="ltr"==H,ma=A(F,ha?"left":"right"),sa=A(R-1,ha?"right":"left"),fb=null==r&&0==F,gb=null==
u&&R==P,Nd=0==M;M=!S||M==S.length-1;3>=sa.top-ma.top?(R=(n?fb:gb)&&Nd?l:(ha?ma:sa).left,c(R,ma.top,((n?gb:fb)&&M?m:(ha?sa:ma).right)-R,ma.bottom)):(ha?(ha=n&&fb&&Nd?l:ma.left,fb=n?m:Y(F,H,"before"),F=n?l:Y(R,H,"after"),gb=n&&gb&&M?m:sa.right):(ha=n?Y(F,H,"before"):l,fb=!n&&fb&&Nd?m:ma.right,F=!n&&gb&&M?l:sa.left,gb=n?Y(R,H,"after"):m),c(ha,ma.top,fb-ha,ma.bottom),ma.bottom<sa.top&&c(l,ma.bottom,null,sa.top),c(F,sa.top,gb-F,sa.bottom));if(!L||0>Ic(ma,L))L=ma;0>Ic(sa,L)&&(L=sa);if(!Q||0>Ic(ma,Q))Q=
ma;0>Ic(sa,Q)&&(Q=sa)});return{start:L,end:Q}}var f=a.display,g=a.doc,h=document.createDocumentFragment(),k=Re(a.display),l=k.left,m=Math.max(f.sizerWidth,ab(a)-f.sizer.offsetLeft)-k.right,n="ltr"==g.direction;f=b.from();b=b.to();if(f.line==b.line)e(f.line,f.ch,b.ch);else{var p=w(g,f.line);k=w(g,b.line);k=Fa(p)==Fa(k);f=e(f.line,f.ch,k?p.text.length+1:null).end;b=e(b.line,k?0:null,b.ch).start;k&&(f.top<b.top-2?(c(f.right,f.top,null,f.bottom),c(l,b.top,b.left,b.bottom)):c(f.right,f.top,b.left-f.right,
f.bottom));f.bottom<b.top&&c(l,f.bottom,null,b.top)}d.appendChild(h)}function Od(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var d=!0;b.cursorDiv.style.visibility="";0<a.options.cursorBlinkRate?b.blinker=setInterval(function(){a.hasFocus()||ub(a);b.cursorDiv.style.visibility=(d=!d)?"":"hidden"},a.options.cursorBlinkRate):0>a.options.cursorBlinkRate&&(b.cursorDiv.style.visibility="hidden")}}function gf(a){a.hasFocus()||(a.display.input.focus(),a.state.focused||Pd(a))}function Qd(a){a.state.delayingBlurEvent=
!0;setTimeout(function(){a.state.delayingBlurEvent&&(a.state.delayingBlurEvent=!1,a.state.focused&&ub(a))},100)}function Pd(a,b){a.state.delayingBlurEvent&&!a.state.draggingText&&(a.state.delayingBlurEvent=!1);"nocursor"!=a.options.readOnly&&(a.state.focused||(W(a,"focus",a,b),a.state.focused=!0,Wa(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(a.display.input.reset(),fa&&setTimeout(function(){return a.display.input.reset(!0)},20)),a.display.input.receivedFocus()),
Od(a))}function ub(a,b){a.state.delayingBlurEvent||(a.state.focused&&(W(a,"blur",a,b),a.state.focused=!1,hb(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150))}function Jc(a){for(var b=a.display,d=b.lineDiv.offsetTop,c=0;c<b.view.length;c++){var e=b.view[c],f=a.options.lineWrapping,g=0;if(!e.hidden){if(G&&8>T){f=e.node.offsetTop+e.node.offsetHeight;var h=f-d;d=f}else{var k=e.node.getBoundingClientRect();h=k.bottom-
k.top;!f&&e.text.firstChild&&(g=e.text.firstChild.getBoundingClientRect().right-k.left-1)}f=e.line.height-h;if(.005<f||-.005>f)if(Da(e.line,h),hf(e.line),e.rest)for(h=0;h<e.rest.length;h++)hf(e.rest[h]);g>a.display.sizerWidth&&(g=Math.ceil(g/sb(a.display)),g>a.display.maxLineLength&&(a.display.maxLineLength=g,a.display.maxLine=e.line,a.display.maxLineChanged=!0))}}}function hf(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b){var d=a.widgets[b],c=d.node.parentNode;c&&(d.height=c.offsetHeight)}}
function Kc(a,b,d){var c=d&&null!=d.top?Math.max(0,d.top):a.scroller.scrollTop;c=Math.floor(c-a.lineSpace.offsetTop);var e=d&&null!=d.bottom?d.bottom:c+a.wrapper.clientHeight;c=$a(b,c);e=$a(b,e);if(d&&d.ensure){var f=d.ensure.from.line;d=d.ensure.to.line;f<c?(c=f,e=$a(b,Ga(w(b,f))+a.wrapper.clientHeight)):Math.min(d,b.lastLine())>=e&&(c=$a(b,Ga(w(b,d))-a.wrapper.clientHeight),e=d)}return{from:c,to:Math.max(e,c+1)}}function Rd(a,b){var d=a.display,c=tb(a.display);0>b.top&&(b.top=0);var e=a.curOp&&
null!=a.curOp.scrollTop?a.curOp.scrollTop:d.scroller.scrollTop,f=Cd(a),g={};b.bottom-b.top>f&&(b.bottom=b.top+f);var h=a.doc.height+Bd(d),k=b.top<c;c=b.bottom>h-c;b.top<e?g.scrollTop=k?0:b.top:b.bottom>e+f&&(f=Math.min(b.top,(c?h:b.bottom)-f),f!=e&&(g.scrollTop=f));e=a.options.fixedGutter?0:d.gutters.offsetWidth;f=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:d.scroller.scrollLeft-e;a=ab(a)-d.gutters.offsetWidth;if(d=b.right-b.left>a)b.right=b.left+a;10>b.left?g.scrollLeft=0:b.left<f?g.scrollLeft=
Math.max(0,b.left+e-(d?0:10)):b.right>a+f-3&&(g.scrollLeft=b.right+(d?0:10)-a);return g}function Lc(a,b){null!=b&&(Mc(a),a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+b)}function vb(a){Mc(a);var b=a.getCursor();a.curOp.scrollToPos={from:b,to:b,margin:a.options.cursorScrollMargin}}function Ub(a,b,d){null==b&&null==d||Mc(a);null!=b&&(a.curOp.scrollLeft=b);null!=d&&(a.curOp.scrollTop=d)}function Mc(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var d=$e(a,
b.from),c=$e(a,b.to);jf(a,d,c,b.margin)}}function jf(a,b,d,c){b=Rd(a,{left:Math.min(b.left,d.left),top:Math.min(b.top,d.top)-c,right:Math.max(b.right,d.right),bottom:Math.max(b.bottom,d.bottom)+c});Ub(a,b.scrollLeft,b.scrollTop)}function Vb(a,b){2>Math.abs(a.doc.scrollTop-b)||(Ma||Sd(a,{top:b}),kf(a,b,!0),Ma&&Sd(a),Wb(a,100))}function kf(a,b,d){b=Math.max(0,Math.min(a.display.scroller.scrollHeight-a.display.scroller.clientHeight,b));if(a.display.scroller.scrollTop!=b||d)a.doc.scrollTop=b,a.display.scrollbars.setScrollTop(b),
a.display.scroller.scrollTop!=b&&(a.display.scroller.scrollTop=b)}function ib(a,b,d,c){b=Math.max(0,Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth));(d?b==a.doc.scrollLeft:2>Math.abs(a.doc.scrollLeft-b))&&!c||(a.doc.scrollLeft=b,lf(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbars.setScrollLeft(b))}function Xb(a){var b=a.display,d=b.gutters.offsetWidth,c=Math.round(a.doc.height+Bd(a.display));return{clientHeight:b.scroller.clientHeight,
viewHeight:b.wrapper.clientHeight,scrollWidth:b.scroller.scrollWidth,clientWidth:b.scroller.clientWidth,viewWidth:b.wrapper.clientWidth,barLeft:a.options.fixedGutter?d:0,docHeight:c,scrollHeight:c+Ha(a)+b.barHeight,nativeBarWidth:b.nativeBarWidth,gutterWidth:d}}function wb(a,b){b||(b=Xb(a));var d=a.display.barWidth,c=a.display.barHeight;mf(a,b);for(b=0;4>b&&d!=a.display.barWidth||c!=a.display.barHeight;b++)d!=a.display.barWidth&&a.options.lineWrapping&&Jc(a),mf(a,Xb(a)),d=a.display.barWidth,c=a.display.barHeight}
function mf(a,b){var d=a.display,c=d.scrollbars.update(b);d.sizer.style.paddingRight=(d.barWidth=c.right)+"px";d.sizer.style.paddingBottom=(d.barHeight=c.bottom)+"px";d.heightForcer.style.borderBottom=c.bottom+"px solid transparent";c.right&&c.bottom?(d.scrollbarFiller.style.display="block",d.scrollbarFiller.style.height=c.bottom+"px",d.scrollbarFiller.style.width=c.right+"px"):d.scrollbarFiller.style.display="";c.bottom&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(d.gutterFiller.style.display=
"block",d.gutterFiller.style.height=c.bottom+"px",d.gutterFiller.style.width=b.gutterWidth+"px"):d.gutterFiller.style.display=""}function nf(a){a.display.scrollbars&&(a.display.scrollbars.clear(),a.display.scrollbars.addClass&&hb(a.display.wrapper,a.display.scrollbars.addClass));a.display.scrollbars=new of[a.options.scrollbarStyle](function(b){a.display.wrapper.insertBefore(b,a.display.scrollbarFiller);z(b,"mousedown",function(){a.state.focused&&setTimeout(function(){return a.display.input.focus()},
0)});b.setAttribute("cm-not-content","true")},function(b,d){"horizontal"==d?ib(a,b):Vb(a,b)},a);a.display.scrollbars.addClass&&Wa(a.display.wrapper,a.display.scrollbars.addClass)}function jb(a){a.curOp={cm:a,viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Sg};a=a.curOp;rb?rb.ops.push(a):a.ownsGroup=rb={ops:[a],
delayedCallbacks:[]}}function kb(a){(a=a.curOp)&&Lg(a,function(b){for(var d=0;d<b.ops.length;d++)b.ops[d].cm.curOp=null;b=b.ops;for(d=0;d<b.length;d++){var c=b[d],e=c.cm,f=e.display,g=e.display;!g.scrollbarsClipped&&g.scroller.offsetWidth&&(g.nativeBarWidth=g.scroller.offsetWidth-g.scroller.clientWidth,g.heightForcer.style.height=Ha(e)+"px",g.sizer.style.marginBottom=-g.nativeBarWidth+"px",g.sizer.style.borderRightWidth=Ha(e)+"px",g.scrollbarsClipped=!0);c.updateMaxLine&&xd(e);c.mustUpdate=c.viewChanged||
c.forceUpdate||null!=c.scrollTop||c.scrollToPos&&(c.scrollToPos.from.line<f.viewFrom||c.scrollToPos.to.line>=f.viewTo)||f.maxLineChanged&&e.options.lineWrapping;c.update=c.mustUpdate&&new Nc(e,c.mustUpdate&&{top:c.scrollTop,ensure:c.scrollToPos},c.forceUpdate)}for(d=0;d<b.length;d++)c=b[d],c.updatedDisplay=c.mustUpdate&&Td(c.cm,c.update);for(d=0;d<b.length;d++)if(c=b[d],e=c.cm,f=e.display,c.updatedDisplay&&Jc(e),c.barMeasure=Xb(e),f.maxLineChanged&&!e.options.lineWrapping&&(g=f.maxLine.text.length,
g=za(e,cb(e,f.maxLine),g,void 0),c.adjustWidthTo=g.left+3,e.display.sizerWidth=c.adjustWidthTo,c.barMeasure.scrollWidth=Math.max(f.scroller.clientWidth,f.sizer.offsetLeft+c.adjustWidthTo+Ha(e)+e.display.barWidth),c.maxScrollLeft=Math.max(0,f.sizer.offsetLeft+c.adjustWidthTo-ab(e))),c.updatedDisplay||c.selectionChanged)c.preparedSelection=f.input.prepareSelection();for(d=0;d<b.length;d++)c=b[d],e=c.cm,null!=c.adjustWidthTo&&(e.display.sizer.style.minWidth=c.adjustWidthTo+"px",c.maxScrollLeft<e.doc.scrollLeft&&
ib(e,Math.min(e.display.scroller.scrollLeft,c.maxScrollLeft),!0),e.display.maxLineChanged=!1),f=c.focus&&c.focus==va(),c.preparedSelection&&e.display.input.showSelection(c.preparedSelection,f),(c.updatedDisplay||c.startHeight!=e.doc.height)&&wb(e,c.barMeasure),c.updatedDisplay&&Ud(e,c.barMeasure),c.selectionChanged&&Od(e),e.state.focused&&c.updateInput&&e.display.input.reset(c.typing),f&&gf(c.cm);for(d=0;d<b.length;d++){var h=void 0;c=b[d];e=c.cm;f=e.display;g=e.doc;c.updatedDisplay&&pf(e,c.update);
null==f.wheelStartX||null==c.scrollTop&&null==c.scrollLeft&&!c.scrollToPos||(f.wheelStartX=f.wheelStartY=null);null!=c.scrollTop&&kf(e,c.scrollTop,c.forceScroll);null!=c.scrollLeft&&ib(e,c.scrollLeft,!0,!0);if(c.scrollToPos){var k=C(g,c.scrollToPos.from);var l=C(g,c.scrollToPos.to);var m=c.scrollToPos.margin;null==m&&(m=0);e.options.lineWrapping||k!=l||(k=k.ch?t(k.line,"before"==k.sticky?k.ch-1:k.ch,"after"):k,l="before"==k.sticky?t(k.line,k.ch+1,"before"):k);for(var n=0;5>n;n++){var p=!1;h=Aa(e,
k);var q=l&&l!=k?Aa(e,l):h;h={left:Math.min(h.left,q.left),top:Math.min(h.top,q.top)-m,right:Math.max(h.left,q.left),bottom:Math.max(h.bottom,q.bottom)+m};q=Rd(e,h);var r=e.doc.scrollTop,u=e.doc.scrollLeft;null!=q.scrollTop&&(Vb(e,q.scrollTop),1<Math.abs(e.doc.scrollTop-r)&&(p=!0));null!=q.scrollLeft&&(ib(e,q.scrollLeft),1<Math.abs(e.doc.scrollLeft-u)&&(p=!0));if(!p)break}l=h;Z(e,"scrollCursorIntoView")||(m=e.display,n=m.sizer.getBoundingClientRect(),k=null,0>l.top+n.top?k=!0:l.bottom+n.top>(window.innerHeight||
document.documentElement.clientHeight)&&(k=!1),null==k||Tg||(l=v("div","\u200b",null,"position: absolute;\n                         top: "+(l.top-m.viewOffset-e.display.lineSpace.offsetTop)+"px;\n                         height: "+(l.bottom-l.top+Ha(e)+m.barHeight)+"px;\n                         left: "+l.left+"px; width: "+Math.max(2,l.right-l.left)+"px;"),e.display.lineSpace.appendChild(l),l.scrollIntoView(k),e.display.lineSpace.removeChild(l)))}l=c.maybeHiddenMarkers;k=c.maybeUnhiddenMarkers;if(l)for(m=
0;m<l.length;++m)l[m].lines.length||W(l[m],"hide");if(k)for(l=0;l<k.length;++l)k[l].lines.length&&W(k[l],"unhide");f.wrapper.offsetHeight&&(g.scrollTop=e.display.scroller.scrollTop);c.changeObjs&&W(e,"changes",e,c.changeObjs);c.update&&c.update.finish()}})}function pa(a,b){if(a.curOp)return b();jb(a);try{return b()}finally{kb(a)}}function aa(a,b){return function(){if(a.curOp)return b.apply(a,arguments);jb(a);try{return b.apply(a,arguments)}finally{kb(a)}}}function ia(a){return function(){if(this.curOp)return a.apply(this,
arguments);jb(this);try{return a.apply(this,arguments)}finally{kb(this)}}}function ba(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);jb(b);try{return a.apply(this,arguments)}finally{kb(b)}}}function Wb(a,b){a.doc.highlightFrontier<a.display.viewTo&&a.state.highlight.set(b,ed(Ug,a))}function Ug(a){var b=a.doc;if(!(b.highlightFrontier>=a.display.viewTo)){var d=+new Date+a.options.workTime,c=Mb(a,b.highlightFrontier),e=[];b.iter(c.line,Math.min(b.first+b.size,a.display.viewTo+
500),function(f){if(c.line>=a.display.viewFrom){var g=f.styles,h=f.text.length>a.options.maxHighlightLength?Ya(b.mode,c.state):null,k=we(a,f,c,!0);h&&(c.state=h);f.styles=k.styles;h=f.styleClasses;(k=k.classes)?f.styleClasses=k:h&&(f.styleClasses=null);k=!g||g.length!=f.styles.length||h!=k&&(!h||!k||h.bgClass!=k.bgClass||h.textClass!=k.textClass);for(h=0;!k&&h<g.length;++h)k=g[h]!=f.styles[h];k&&e.push(c.line);f.stateAfter=c.save()}else f.text.length<=a.options.maxHighlightLength&&rd(a,f.text,c),
f.stateAfter=0==c.line%5?c.save():null;c.nextLine();if(+new Date>d)return Wb(a,a.options.workDelay),!0});b.highlightFrontier=c.line;b.modeFrontier=Math.max(b.modeFrontier,c.line);e.length&&pa(a,function(){for(var f=0;f<e.length;f++)Qa(a,e[f],"text")})}}function Td(a,b){var d=a.display,c=a.doc;if(b.editorIsHidden)return Pa(a),!1;if(!b.force&&b.visible.from>=d.viewFrom&&b.visible.to<=d.viewTo&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo)&&d.renderedView==d.view&&0==df(a))return!1;qf(a)&&
(Pa(a),b.dims=Ed(a));var e=c.first+c.size,f=Math.max(b.visible.from-a.options.viewportMargin,c.first),g=Math.min(e,b.visible.to+a.options.viewportMargin);d.viewFrom<f&&20>f-d.viewFrom&&(f=Math.max(c.first,d.viewFrom));d.viewTo>g&&20>d.viewTo-g&&(g=Math.min(e,d.viewTo));Ka&&(f=vd(a.doc,f),g=He(a.doc,g));c=f!=d.viewFrom||g!=d.viewTo||d.lastWrapHeight!=b.wrapperHeight||d.lastWrapWidth!=b.wrapperWidth;e=a.display;0==e.view.length||f>=e.viewTo||g<=e.viewFrom?(e.view=Dc(a,f,g),e.viewFrom=f):(e.viewFrom>
f?e.view=Dc(a,f,e.viewFrom).concat(e.view):e.viewFrom<f&&(e.view=e.view.slice(bb(a,f))),e.viewFrom=f,e.viewTo<g?e.view=e.view.concat(Dc(a,e.viewTo,g)):e.viewTo>g&&(e.view=e.view.slice(0,bb(a,g))));e.viewTo=g;d.viewOffset=Ga(w(a.doc,d.viewFrom));a.display.mover.style.top=d.viewOffset+"px";g=df(a);if(!c&&0==g&&!b.force&&d.renderedView==d.view&&(null==d.updateLineNumbers||d.updateLineNumbers>=d.viewTo))return!1;a.hasFocus()?f=null:(f=va())&&ja(a.display.lineDiv,f)?(f={activeElt:f},window.getSelection&&
(e=window.getSelection(),e.anchorNode&&e.extend&&ja(a.display.lineDiv,e.anchorNode)&&(f.anchorNode=e.anchorNode,f.anchorOffset=e.anchorOffset,f.focusNode=e.focusNode,f.focusOffset=e.focusOffset))):f=null;4<g&&(d.lineDiv.style.display="none");Vg(a,d.updateLineNumbers,b.dims);4<g&&(d.lineDiv.style.display="");d.renderedView=d.view;(g=f)&&g.activeElt&&g.activeElt!=va()&&(g.activeElt.focus(),!/^(INPUT|TEXTAREA)$/.test(g.activeElt.nodeName)&&g.anchorNode&&ja(document.body,g.anchorNode)&&ja(document.body,
g.focusNode)&&(f=window.getSelection(),e=document.createRange(),e.setEnd(g.anchorNode,g.anchorOffset),e.collapse(!1),f.removeAllRanges(),f.addRange(e),f.extend(g.focusNode,g.focusOffset)));E(d.cursorDiv);E(d.selectionDiv);d.gutters.style.height=d.sizer.style.minHeight=0;c&&(d.lastWrapHeight=b.wrapperHeight,d.lastWrapWidth=b.wrapperWidth,Wb(a,400));d.updateLineNumbers=null;return!0}function pf(a,b){for(var d=b.viewport,c=!0;;c=!1){if(c&&a.options.lineWrapping&&b.oldDisplayWidth!=ab(a))c&&(b.visible=
Kc(a.display,a.doc,d));else if(d&&null!=d.top&&(d={top:Math.min(a.doc.height+Bd(a.display)-Cd(a),d.top)}),b.visible=Kc(a.display,a.doc,d),b.visible.from>=a.display.viewFrom&&b.visible.to<=a.display.viewTo)break;if(!Td(a,b))break;Jc(a);c=Xb(a);Tb(a);wb(a,c);Ud(a,c);b.force=!1}b.signal(a,"update",a);if(a.display.viewFrom!=a.display.reportedViewFrom||a.display.viewTo!=a.display.reportedViewTo)b.signal(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo),a.display.reportedViewFrom=a.display.viewFrom,
a.display.reportedViewTo=a.display.viewTo}function Sd(a,b){b=new Nc(a,b);if(Td(a,b)){Jc(a);pf(a,b);var d=Xb(a);Tb(a);wb(a,d);Ud(a,d);b.finish()}}function Vg(a,b,d){function c(p){var q=p.nextSibling;fa&&ya&&a.display.currentWheelTarget==p?p.style.display="none":p.parentNode.removeChild(p);return q}var e=a.display,f=a.options.lineNumbers,g=e.lineDiv,h=g.firstChild,k=e.view;e=e.viewFrom;for(var l=0;l<k.length;l++){var m=k[l];if(!m.hidden)if(m.node&&m.node.parentNode==g){for(;h!=m.node;)h=c(h);h=f&&null!=
b&&b<=e&&m.lineNumber;m.changes&&(-1<ea(m.changes,"gutter")&&(h=!1),Me(a,m,e,d));h&&(E(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(od(a.options,e))));h=m.node.nextSibling}else{var n=Ng(a,m,e,d);g.insertBefore(n,h)}e+=m.size}for(;h;)h=c(h)}function Vd(a){a.sizer.style.marginLeft=a.gutters.offsetWidth+"px"}function Ud(a,b){a.display.sizer.style.minHeight=b.docHeight+"px";a.display.heightForcer.style.top=b.docHeight+"px";a.display.gutters.style.height=b.docHeight+a.display.barHeight+
Ha(a)+"px"}function lf(a){var b=a.display,d=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var c=Ld(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=c+"px",g=0;g<d.length;g++)if(!d[g].hidden){a.options.fixedGutter&&(d[g].gutter&&(d[g].gutter.style.left=f),d[g].gutterBackground&&(d[g].gutterBackground.style.left=f));var h=d[g].alignable;if(h)for(var k=0;k<h.length;k++)h[k].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=c+e+"px")}}function qf(a){if(!a.options.lineNumbers)return!1;
var b=a.doc;b=od(a.options,b.first+b.size-1);var d=a.display;if(b.length!=d.lineNumChars){var c=d.measure.appendChild(v("div",[v("div",b)],"CodeMirror-linenumber CodeMirror-gutter-elt")),e=c.firstChild.offsetWidth;c=c.offsetWidth-e;d.lineGutter.style.width="";d.lineNumInnerWidth=Math.max(e,d.lineGutter.offsetWidth-c)+1;d.lineNumWidth=d.lineNumInnerWidth+c;d.lineNumChars=d.lineNumInnerWidth?b.length:-1;d.lineGutter.style.width=d.lineNumWidth+"px";Vd(a.display);return!0}return!1}function Wd(a,b){for(var d=
[],c=!1,e=0;e<a.length;e++){var f=a[e],g=null;"string"!=typeof f&&(g=f.style,f=f.className);if("CodeMirror-linenumbers"==f)if(b)c=!0;else continue;d.push({className:f,style:g})}b&&!c&&d.push({className:"CodeMirror-linenumbers",style:null});return d}function rf(a){var b=a.gutters,d=a.gutterSpecs;E(b);a.lineGutter=null;for(var c=0;c<d.length;++c){var e=d[c],f=e.className;e=e.style;var g=b.appendChild(v("div",null,"CodeMirror-gutter "+f));e&&(g.style.cssText=e);"CodeMirror-linenumbers"==f&&(a.lineGutter=
g,g.style.width=(a.lineNumWidth||1)+"px")}b.style.display=d.length?"":"none";Vd(a)}function Yb(a){rf(a.display);la(a);lf(a)}function Wg(a,b,d,c){this.input=d;this.scrollbarFiller=v("div",null,"CodeMirror-scrollbar-filler");this.scrollbarFiller.setAttribute("cm-not-content","true");this.gutterFiller=v("div",null,"CodeMirror-gutter-filler");this.gutterFiller.setAttribute("cm-not-content","true");this.lineDiv=I("div",null,"CodeMirror-code");this.selectionDiv=v("div",null,null,"position: relative; z-index: 1");
this.cursorDiv=v("div",null,"CodeMirror-cursors");this.measure=v("div",null,"CodeMirror-measure");this.lineMeasure=v("div",null,"CodeMirror-measure");this.lineSpace=I("div",[this.measure,this.lineMeasure,this.selectionDiv,this.cursorDiv,this.lineDiv],null,"position: relative; outline: none");var e=I("div",[this.lineSpace],"CodeMirror-lines");this.mover=v("div",[e],null,"position: relative");this.sizer=v("div",[this.mover],"CodeMirror-sizer");this.sizerWidth=null;this.heightForcer=v("div",null,null,
"position: absolute; height: 50px; width: 1px;");this.gutters=v("div",null,"CodeMirror-gutters");this.lineGutter=null;this.scroller=v("div",[this.sizer,this.heightForcer,this.gutters],"CodeMirror-scroll");this.scroller.setAttribute("tabIndex","-1");this.wrapper=v("div",[this.scrollbarFiller,this.gutterFiller,this.scroller],"CodeMirror");G&&8>T&&(this.gutters.style.zIndex=-1,this.scroller.style.paddingRight=0);fa||Ma&&Zb||(this.scroller.draggable=!0);a&&(a.appendChild?a.appendChild(this.wrapper):a(this.wrapper));
this.reportedViewFrom=this.reportedViewTo=this.viewFrom=this.viewTo=b.first;this.view=[];this.externalMeasured=this.renderedView=null;this.lastWrapHeight=this.lastWrapWidth=this.viewOffset=0;this.updateLineNumbers=null;this.nativeBarWidth=this.barHeight=this.barWidth=0;this.scrollbarsClipped=!1;this.lineNumWidth=this.lineNumInnerWidth=this.lineNumChars=null;this.alignWidgets=!1;this.maxLine=this.cachedCharWidth=this.cachedTextHeight=this.cachedPaddingH=null;this.maxLineLength=0;this.maxLineChanged=
!1;this.wheelDX=this.wheelDY=this.wheelStartX=this.wheelStartY=null;this.shift=!1;this.activeTouch=this.selForContextMenu=null;this.gutterSpecs=Wd(c.gutters,c.lineNumbers);rf(this);d.init(this)}function sf(a){var b=a.wheelDeltaX,d=a.wheelDeltaY;null==b&&a.detail&&a.axis==a.HORIZONTAL_AXIS&&(b=a.detail);null==d&&a.detail&&a.axis==a.VERTICAL_AXIS?d=a.detail:null==d&&(d=a.wheelDelta);return{x:b,y:d}}function Xg(a){a=sf(a);a.x*=ta;a.y*=ta;return a}function tf(a,b){var d=sf(b),c=d.x;d=d.y;var e=a.display,
f=e.scroller,g=f.scrollWidth>f.clientWidth,h=f.scrollHeight>f.clientHeight;if(c&&g||d&&h){if(d&&ya&&fa){g=b.target;var k=e.view;a:for(;g!=f;g=g.parentNode)for(var l=0;l<k.length;l++)if(k[l].node==g){a.display.currentWheelTarget=g;break a}}!c||Ma||Ba||null==ta?(d&&null!=ta&&(b=d*ta,h=a.doc.scrollTop,g=h+e.wrapper.clientHeight,0>b?h=Math.max(0,h+b-50):g=Math.min(a.doc.height,g+b+50),Sd(a,{top:h,bottom:g})),20>Oc&&(null==e.wheelStartX?(e.wheelStartX=f.scrollLeft,e.wheelStartY=f.scrollTop,e.wheelDX=c,
e.wheelDY=d,setTimeout(function(){if(null!=e.wheelStartX){var m=f.scrollLeft-e.wheelStartX,n=f.scrollTop-e.wheelStartY;m=n&&e.wheelDY&&n/e.wheelDY||m&&e.wheelDX&&m/e.wheelDX;e.wheelStartX=e.wheelStartY=null;m&&(ta=(ta*Oc+m)/(Oc+1),++Oc)}},200)):(e.wheelDX+=c,e.wheelDY+=d))):(d&&h&&Vb(a,Math.max(0,f.scrollTop+d*ta)),ib(a,Math.max(0,f.scrollLeft+c*ta)),(!d||d&&h)&&ka(b),e.wheelStartX=null)}}function Ca(a,b,d){a=a&&a.options.selectionsMayTouch;d=b[d];b.sort(function(k,l){return B(k.from(),l.from())});
d=ea(b,d);for(var c=1;c<b.length;c++){var e=b[c],f=b[c-1],g=B(f.to(),e.from());if(a&&!e.empty()?0<g:0<=g){g=zc(f.from(),e.from());var h=yc(f.to(),e.to());e=f.empty()?e.from()==e.head:f.from()==f.head;c<=d&&--d;b.splice(--c,2,new J(e?h:g,e?g:h))}}return new ua(b,d)}function Na(a,b){return new ua([new J(a,b||a)],0)}function Ra(a){return a.text?t(a.from.line+a.text.length-1,K(a.text).length+(1==a.text.length?a.from.ch:0)):a.to}function uf(a,b){if(0>B(a,b.from))return a;if(0>=B(a,b.to))return Ra(b);var d=
a.line+b.text.length-(b.to.line-b.from.line)-1,c=a.ch;a.line==b.to.line&&(c+=Ra(b).ch-b.to.ch);return t(d,c)}function Xd(a,b){for(var d=[],c=0;c<a.sel.ranges.length;c++){var e=a.sel.ranges[c];d.push(new J(uf(e.anchor,b),uf(e.head,b)))}return Ca(a.cm,d,a.sel.primIndex)}function vf(a,b,d){return a.line==b.line?t(d.line,a.ch-b.ch+d.ch):t(d.line+(a.line-b.line),a.ch)}function Yd(a){a.doc.mode=ld(a.options,a.doc.modeOption);$b(a)}function $b(a){a.doc.iter(function(b){b.stateAfter&&(b.stateAfter=null);
b.styles&&(b.styles=null)});a.doc.modeFrontier=a.doc.highlightFrontier=a.doc.first;Wb(a,100);a.state.modeGen++;a.curOp&&la(a)}function wf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==K(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function Zd(a,b,d,c){function e(r,u,A){r.text=u;r.stateAfter&&(r.stateAfter=null);r.styles&&(r.styles=null);null!=r.order&&(r.order=null);Ee(r);Fe(r,A);u=c?c(r):1;u!=r.height&&Da(r,u);ca(r,"change",r,b)}function f(r,u){for(var A=[];r<u;++r)A.push(new xb(k[r],d?d[r]:
null,c));return A}var g=b.from,h=b.to,k=b.text,l=w(a,g.line),m=w(a,h.line),n=K(k),p=d?d[k.length-1]:null,q=h.line-g.line;b.full?(a.insert(0,f(0,k.length)),a.remove(k.length,a.size-k.length)):wf(a,b)?(h=f(0,k.length-1),e(m,m.text,p),q&&a.remove(g.line,q),h.length&&a.insert(g.line,h)):l==m?1==k.length?e(l,l.text.slice(0,g.ch)+n+l.text.slice(h.ch),p):(q=f(1,k.length-1),q.push(new xb(n+l.text.slice(h.ch),p,c)),e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),a.insert(g.line+1,q)):1==k.length?(e(l,l.text.slice(0,
g.ch)+k[0]+m.text.slice(h.ch),d?d[0]:null),a.remove(g.line+1,q)):(e(l,l.text.slice(0,g.ch)+k[0],d?d[0]:null),e(m,n+m.text.slice(h.ch),p),p=f(1,k.length-1),1<q&&a.remove(g.line+1,q-1),a.insert(g.line+1,p));ca(a,"change",a,b)}function Sa(a,b,d){function c(e,f,g){if(e.linked)for(var h=0;h<e.linked.length;++h){var k=e.linked[h];if(k.doc!=f){var l=g&&k.sharedHist;if(!d||l)b(k.doc,l),c(k.doc,e,l)}}}c(a,null,!0)}function xf(a,b){if(b.cm)throw Error("This document is already in use.");a.doc=b;b.cm=a;Md(a);
Yd(a);yf(a);a.options.lineWrapping||xd(a);a.options.mode=b.modeOption;la(a)}function yf(a){("rtl"==a.doc.direction?Wa:hb)(a.display.lineDiv,"CodeMirror-rtl")}function Yg(a){pa(a,function(){yf(a);la(a)})}function Pc(a){this.done=[];this.undone=[];this.undoDepth=Infinity;this.lastModTime=this.lastSelTime=0;this.lastOrigin=this.lastSelOrigin=this.lastOp=this.lastSelOp=null;this.generation=this.maxGeneration=a||1}function $d(a,b){var d={from:qd(b.from),to:Ra(b),text:Za(a,b.from,b.to)};zf(a,d,b.from.line,
b.to.line+1);Sa(a,function(c){return zf(c,d,b.from.line,b.to.line+1)},!0);return d}function Af(a){for(;a.length;)if(K(a).ranges)a.pop();else break}function Bf(a,b,d,c){var e=a.history;e.undone.length=0;var f=+new Date,g;if(g=e.lastOp==c||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&e.lastModTime>f-(a.cm?a.cm.options.historyEventDelay:500)||"*"==b.origin.charAt(0))){if(e.lastOp==c){Af(e.done);var h=K(e.done)}else e.done.length&&!K(e.done).ranges?h=K(e.done):1<e.done.length&&!e.done[e.done.length-
2].ranges?(e.done.pop(),h=K(e.done)):h=void 0;g=h}if(g){var k=K(h.changes);0==B(b.from,b.to)&&0==B(b.from,k.to)?k.to=Ra(b):h.changes.push($d(a,b))}else for((h=K(e.done))&&h.ranges||Qc(a.sel,e.done),h={changes:[$d(a,b)],generation:e.generation},e.done.push(h);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift();e.done.push(d);e.generation=++e.maxGeneration;e.lastModTime=e.lastSelTime=f;e.lastOp=e.lastSelOp=c;e.lastOrigin=e.lastSelOrigin=b.origin;k||W(a,"historyAdded")}function Qc(a,
b){var d=K(b);d&&d.ranges&&d.equals(a)||b.push(a)}function zf(a,b,d,c){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,d),Math.min(a.first+a.size,c),function(g){g.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=g.markedSpans);++f})}function Cf(a,b){var d;if(d=b["spans_"+a.id]){for(var c=[],e=0;e<b.text.length;++e){var f=c,g=f.push;var h=void 0;var k=d[e];if(k){for(var l=0;l<k.length;++l)k[l].marker.explicitlyCleared?h||(h=k.slice(0,l)):h&&h.push(k[l]);h=h?h.length?h:null:k}else h=null;g.call(f,h)}d=
c}else d=null;a=td(a,b);if(!d)return a;if(!a)return d;for(b=0;b<d.length;++b)if(c=d[b],e=a[b],c&&e)a:for(f=0;f<e.length;++f){g=e[f];for(h=0;h<c.length;++h)if(c[h].marker==g.marker)continue a;c.push(g)}else e&&(d[b]=e);return d}function yb(a,b,d){for(var c=[],e=0;e<a.length;++e){var f=a[e];if(f.ranges)c.push(d?ua.prototype.deepCopy.call(f):f);else{f=f.changes;var g=[];c.push({changes:g});for(var h=0;h<f.length;++h){var k=f[h],l;g.push({from:k.from,to:k.to,text:k.text});if(b)for(var m in k)(l=m.match(/^spans_(\d+)$/))&&
-1<ea(b,Number(l[1]))&&(K(g)[m]=k[m],delete k[m])}}}return c}function ae(a,b,d,c){return c?(a=a.anchor,d&&(c=0>B(b,a),c!=0>B(d,a)?(a=b,b=d):c!=0>B(b,d)&&(b=d)),new J(a,b)):new J(d||b,b)}function Rc(a,b,d,c,e){null==e&&(e=a.cm&&(a.cm.display.shift||a.extend));da(a,new ua([ae(a.sel.primary(),b,d,e)],0),c)}function Df(a,b,d){for(var c=[],e=a.cm&&(a.cm.display.shift||a.extend),f=0;f<a.sel.ranges.length;f++)c[f]=ae(a.sel.ranges[f],b[f],null,e);b=Ca(a.cm,c,a.sel.primIndex);da(a,b,d)}function be(a,b,d,c){var e=
a.sel.ranges.slice(0);e[b]=d;da(a,Ca(a.cm,e,a.sel.primIndex),c)}function Zg(a,b,d){d={ranges:b.ranges,update:function(c){this.ranges=[];for(var e=0;e<c.length;e++)this.ranges[e]=new J(C(a,c[e].anchor),C(a,c[e].head))},origin:d&&d.origin};W(a,"beforeSelectionChange",a,d);a.cm&&W(a.cm,"beforeSelectionChange",a.cm,d);return d.ranges!=b.ranges?Ca(a.cm,d.ranges,d.ranges.length-1):b}function Ef(a,b,d){var c=a.history.done,e=K(c);e&&e.ranges?(c[c.length-1]=b,Sc(a,b,d)):da(a,b,d)}function da(a,b,d){Sc(a,
b,d);b=a.sel;var c=a.cm?a.cm.curOp.id:NaN,e=a.history,f=d&&d.origin,g;if(!(g=c==e.lastSelOp)&&(g=f&&e.lastSelOrigin==f)&&!(g=e.lastModTime==e.lastSelTime&&e.lastOrigin==f)){g=K(e.done);var h=f.charAt(0);g="*"==h||"+"==h&&g.ranges.length==b.ranges.length&&g.somethingSelected()==b.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}g?e.done[e.done.length-1]=b:Qc(b,e.done);e.lastSelTime=+new Date;e.lastSelOrigin=f;e.lastSelOp=c;d&&!1!==d.clearRedo&&Af(e.undone)}
function Sc(a,b,d){if(xa(a,"beforeSelectionChange")||a.cm&&xa(a.cm,"beforeSelectionChange"))b=Zg(a,b,d);var c=d&&d.bias||(0>B(b.primary().head,a.sel.primary().head)?-1:1);Ff(a,Gf(a,b,c,!0));d&&!1===d.scroll||!a.cm||"nocursor"==a.cm.getOption("readOnly")||vb(a.cm)}function Ff(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=1,a.cm.curOp.selectionChanged=!0,re(a.cm)),ca(a,"cursorActivity",a))}function Hf(a){Ff(a,Gf(a,a.sel,null,!1))}function Gf(a,b,d,c){for(var e,f=0;f<b.ranges.length;f++){var g=
b.ranges[f],h=b.ranges.length==a.sel.ranges.length&&a.sel.ranges[f],k=Tc(a,g.anchor,h&&h.anchor,d,c);h=Tc(a,g.head,h&&h.head,d,c);if(e||k!=g.anchor||h!=g.head)e||(e=b.ranges.slice(0,f)),e[f]=new J(k,h)}return e?Ca(a.cm,e,b.primIndex):b}function zb(a,b,d,c,e){var f=w(a,b.line);if(f.markedSpans)for(var g=0;g<f.markedSpans.length;++g){var h=f.markedSpans[g],k=h.marker,l="selectLeft"in k?!k.selectLeft:k.inclusiveLeft,m="selectRight"in k?!k.selectRight:k.inclusiveRight;if((null==h.from||(l?h.from<=b.ch:
h.from<b.ch))&&(null==h.to||(m?h.to>=b.ch:h.to>b.ch))){if(e&&(W(k,"beforeCursorEnter"),k.explicitlyCleared))if(f.markedSpans){--g;continue}else break;if(k.atomic){if(d){g=k.find(0>c?1:-1);h=void 0;if(0>c?m:l)g=If(a,g,-c,g&&g.line==b.line?f:null);if(g&&g.line==b.line&&(h=B(g,d))&&(0>c?0>h:0<h))return zb(a,g,b,c,e)}d=k.find(0>c?-1:1);if(0>c?l:m)d=If(a,d,c,d.line==b.line?f:null);return d?zb(a,d,b,c,e):null}}}return b}function Tc(a,b,d,c,e){c=c||1;b=zb(a,b,d,c,e)||!e&&zb(a,b,d,c,!0)||zb(a,b,d,-c,e)||
!e&&zb(a,b,d,-c,!0);return b?b:(a.cantEdit=!0,t(a.first,0))}function If(a,b,d,c){return 0>d&&0==b.ch?b.line>a.first?C(a,t(b.line-1)):null:0<d&&b.ch==(c||w(a,b.line)).text.length?b.line<a.first+a.size-1?t(b.line+1,0):null:new t(b.line,b.ch+d)}function Jf(a){a.setSelection(t(a.firstLine(),0),t(a.lastLine()),Ia)}function Kf(a,b,d){var c={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){return c.canceled=!0}};d&&(c.update=function(e,f,g,h){e&&(c.from=C(a,e));f&&(c.to=C(a,
f));g&&(c.text=g);void 0!==h&&(c.origin=h)});W(a,"beforeChange",a,c);a.cm&&W(a.cm,"beforeChange",a.cm,c);return c.canceled?(a.cm&&(a.cm.curOp.updateInput=2),null):{from:c.from,to:c.to,text:c.text,origin:c.origin}}function Ab(a,b,d){if(a.cm){if(!a.cm.curOp)return aa(a.cm,Ab)(a,b,d);if(a.cm.state.suppressEdits)return}if(xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange"))if(b=Kf(a,b,!0),!b)return;if(d=Lf&&!d&&Fg(a,b.from,b.to))for(var c=d.length-1;0<=c;--c)Mf(a,{from:d[c].from,to:d[c].to,text:c?[""]:
b.text,origin:b.origin});else Mf(a,b)}function Mf(a,b){if(1!=b.text.length||""!=b.text[0]||0!=B(b.from,b.to)){var d=Xd(a,b);Bf(a,b,d,a.cm?a.cm.curOp.id:NaN);ac(a,b,d,td(a,b));var c=[];Sa(a,function(e,f){f||-1!=ea(c,e.history)||(Nf(e.history,b),c.push(e.history));ac(e,b,null,td(e,b))})}}function Uc(a,b,d){var c=a.cm&&a.cm.state.suppressEdits;if(!c||d){for(var e=a.history,f,g=a.sel,h="undo"==b?e.done:e.undone,k="undo"==b?e.undone:e.done,l=0;l<h.length&&(f=h[l],d?!f.ranges||f.equals(a.sel):f.ranges);l++);
if(l!=h.length){for(e.lastOrigin=e.lastSelOrigin=null;;)if(f=h.pop(),f.ranges){Qc(f,k);if(d&&!f.equals(a.sel)){da(a,f,{clearRedo:!1});return}g=f}else{if(c){h.push(f);return}break}var m=[];Qc(g,k);k.push({changes:m,generation:e.generation});e.generation=f.generation||++e.maxGeneration;var n=xa(a,"beforeChange")||a.cm&&xa(a.cm,"beforeChange");d=function(p){var q=f.changes[p];q.origin=b;if(n&&!Kf(a,q,!1))return h.length=0,{};m.push($d(a,q));var r=p?Xd(a,q):K(h);ac(a,q,r,Cf(a,q));!p&&a.cm&&a.cm.scrollIntoView({from:q.from,
to:Ra(q)});var u=[];Sa(a,function(A,Y){Y||-1!=ea(u,A.history)||(Nf(A.history,q),u.push(A.history));ac(A,q,null,Cf(A,q))})};for(c=f.changes.length-1;0<=c;--c)if(e=d(c))return e.v}}}function Of(a,b){if(0!=b&&(a.first+=b,a.sel=new ua(uc(a.sel.ranges,function(e){return new J(t(e.anchor.line+b,e.anchor.ch),t(e.head.line+b,e.head.ch))}),a.sel.primIndex),a.cm)){la(a.cm,a.first,a.first-b,b);for(var d=a.cm.display,c=d.viewFrom;c<d.viewTo;c++)Qa(a.cm,c,"gutter")}}function ac(a,b,d,c){if(a.cm&&!a.cm.curOp)return aa(a.cm,
ac)(a,b,d,c);if(b.to.line<a.first)Of(a,b.text.length-1-(b.to.line-b.from.line));else if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Of(a,e);b={from:t(a.first,0),to:t(b.to.line+e,b.to.ch),text:[K(b.text)],origin:b.origin}}e=a.lastLine();b.to.line>e&&(b={from:b.from,to:t(e,w(a,e).text.length),text:[b.text[0]],origin:b.origin});b.removed=Za(a,b.from,b.to);d||(d=Xd(a,b));a.cm?$g(a.cm,b,c):Zd(a,b,c);Sc(a,d,Ia);a.cantEdit&&Tc(a,t(a.firstLine(),0))&&(a.cantEdit=
!1)}}function $g(a,b,d){var c=a.doc,e=a.display,f=b.from,g=b.to,h=!1,k=f.line;a.options.lineWrapping||(k=N(Fa(w(c,f.line))),c.iter(k,g.line+1,function(l){if(l==e.maxLine)return h=!0}));-1<c.sel.contains(b.from,b.to)&&re(a);Zd(c,b,d,cf(a));a.options.lineWrapping||(c.iter(k,f.line+b.text.length,function(l){var m=Cc(l);m>e.maxLineLength&&(e.maxLine=l,e.maxLineLength=m,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0));Eg(c,f.line);Wb(a,400);d=b.text.length-(g.line-f.line)-1;b.full?la(a):f.line!=
g.line||1!=b.text.length||wf(a.doc,b)?la(a,f.line,g.line+1,d):Qa(a,f.line,"text");d=xa(a,"changes");if((c=xa(a,"change"))||d)b={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin},c&&ca(a,"change",a,b),d&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(b);a.display.selForContextMenu=null}function Bb(a,b,d,c,e){c||(c=d);0>B(c,d)&&(c=[c,d],d=c[0],c=c[1]);"string"==typeof b&&(b=a.splitLines(b));Ab(a,{from:d,to:c,text:b,origin:e})}function Pf(a,b,d,c){d<a.line?a.line+=c:b<a.line&&(a.line=b,
a.ch=0)}function Qf(a,b,d,c){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges)for(f.copied||(f=a[e]=f.deepCopy(),f.copied=!0),g=0;g<f.ranges.length;g++)Pf(f.ranges[g].anchor,b,d,c),Pf(f.ranges[g].head,b,d,c);else{for(var h=0;h<f.changes.length;++h){var k=f.changes[h];if(d<k.from.line)k.from=t(k.from.line+c,k.from.ch),k.to=t(k.to.line+c,k.to.ch);else if(b<=k.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Nf(a,b){var d=b.from.line,c=b.to.line;b=b.text.length-(c-d)-1;Qf(a.done,d,c,b);
Qf(a.undone,d,c,b)}function bc(a,b,d,c){var e=b,f=b;"number"==typeof b?f=w(a,Math.max(a.first,Math.min(b,a.first+a.size-1))):e=N(b);if(null==e)return null;c(f,e)&&a.cm&&Qa(a.cm,e,d);return f}function cc(a){this.lines=a;this.parent=null;for(var b=0,d=0;d<a.length;++d)a[d].parent=this,b+=a[d].height;this.height=b}function dc(a){this.children=a;for(var b=0,d=0,c=0;c<a.length;++c){var e=a[c];b+=e.chunkSize();d+=e.height;e.parent=this}this.size=b;this.height=d;this.parent=null}function ah(a,b,d,c){var e=
new ec(a,d,c),f=a.cm;f&&e.noHScroll&&(f.display.alignWidgets=!0);bc(a,b,"widget",function(g){var h=g.widgets||(g.widgets=[]);null==e.insertAt?h.push(e):h.splice(Math.min(h.length,Math.max(0,e.insertAt)),0,e);e.line=g;f&&!Oa(a,g)&&(h=Ga(g)<a.scrollTop,Da(g,g.height+Rb(e)),h&&Lc(f,e.height),f.curOp.forceUpdate=!0);return!0});f&&ca(f,"lineWidgetAdded",f,e,"number"==typeof b?b:N(b));return e}function Cb(a,b,d,c,e){if(c&&c.shared)return bh(a,b,d,c,e);if(a.cm&&!a.cm.curOp)return aa(a.cm,Cb)(a,b,d,c,e);
var f=new Ta(a,e);e=B(b,d);c&&Xa(c,f,!1);if(0<e||0==e&&!1!==f.clearWhenEmpty)return f;f.replacedWith&&(f.collapsed=!0,f.widgetNode=I("span",[f.replacedWith],"CodeMirror-widget"),c.handleMouseEvents||f.widgetNode.setAttribute("cm-ignore-events","true"),c.insertLeft&&(f.widgetNode.insertLeft=!0));if(f.collapsed){if(Ge(a,b.line,b,d,f)||b.line!=d.line&&Ge(a,d.line,b,d,f))throw Error("Inserting collapsed marker partially overlapping an existing one");Ka=!0}f.addToHistory&&Bf(a,{from:b,to:d,origin:"markText"},
a.sel,NaN);var g=b.line,h=a.cm,k;a.iter(g,d.line+1,function(l){h&&f.collapsed&&!h.options.lineWrapping&&Fa(l)==h.display.maxLine&&(k=!0);f.collapsed&&g!=b.line&&Da(l,0);var m=new Bc(f,g==b.line?b.ch:null,g==d.line?d.ch:null);l.markedSpans=l.markedSpans?l.markedSpans.concat([m]):[m];m.marker.attachLine(l);++g});f.collapsed&&a.iter(b.line,d.line+1,function(l){Oa(a,l)&&Da(l,0)});f.clearOnEnter&&z(f,"beforeCursorEnter",function(){return f.clear()});f.readOnly&&(Lf=!0,(a.history.done.length||a.history.undone.length)&&
a.clearHistory());f.collapsed&&(f.id=++Rf,f.atomic=!0);if(h){k&&(h.curOp.updateMaxLine=!0);if(f.collapsed)la(h,b.line,d.line+1);else if(f.className||f.startStyle||f.endStyle||f.css||f.attributes||f.title)for(c=b.line;c<=d.line;c++)Qa(h,c,"text");f.atomic&&Hf(h.doc);ca(h,"markerAdded",h,f)}return f}function bh(a,b,d,c,e){c=Xa(c);c.shared=!1;var f=[Cb(a,b,d,c,e)],g=f[0],h=c.widgetNode;Sa(a,function(k){h&&(c.widgetNode=h.cloneNode(!0));f.push(Cb(k,C(k,b),C(k,d),c,e));for(var l=0;l<k.linked.length;++l)if(k.linked[l].isParent)return;
g=K(f)});return new fc(f,g)}function Sf(a){return a.findMarks(t(a.first,0),a.clipPos(t(a.lastLine())),function(b){return b.parent})}function ch(a){for(var b=function(c){c=a[c];var e=[c.primary.doc];Sa(c.primary.doc,function(h){return e.push(h)});for(var f=0;f<c.markers.length;f++){var g=c.markers[f];-1==ea(e,g.doc)&&(g.parent=null,c.markers.splice(f--,1))}},d=0;d<a.length;d++)b(d)}function dh(a){var b=this;Tf(b);if(!Z(b,a)&&!La(b.display,a)){ka(a);G&&(Uf=+new Date);var d=eb(b,a,!0),c=a.dataTransfer.files;
if(d&&!b.isReadOnly())if(c&&c.length&&window.FileReader&&window.File)for(var e=c.length,f=Array(e),g=0,h=function(){++g==e&&aa(b,function(){d=C(b.doc,d);var m={from:d,to:d,text:b.doc.splitLines(f.filter(function(n){return null!=n}).join(b.doc.lineSeparator())),origin:"paste"};Ab(b.doc,m);Ef(b.doc,Na(C(b.doc,d),C(b.doc,Ra(m))))})()},k=function(m,n){if(b.options.allowDropFileTypes&&-1==ea(b.options.allowDropFileTypes,m.type))h();else{var p=new FileReader;p.onerror=function(){return h()};p.onload=function(){var q=
p.result;/[\x00-\x08\x0e-\x1f]{2}/.test(q)||(f[n]=q);h()};p.readAsText(m)}},l=0;l<c.length;l++)k(c[l],l);else if(b.state.draggingText&&-1<b.doc.sel.contains(d))b.state.draggingText(a),setTimeout(function(){return b.display.input.focus()},20);else try{if(k=a.dataTransfer.getData("Text")){b.state.draggingText&&!b.state.draggingText.copy&&(l=b.listSelections());Sc(b.doc,Na(d,d));if(l)for(c=0;c<l.length;++c)Bb(b.doc,"",l[c].anchor,l[c].head,"drag");b.replaceSelection(k,"around","paste");b.display.input.focus()}}catch(m){}}}
function Tf(a){a.display.dragCursor&&(a.display.lineSpace.removeChild(a.display.dragCursor),a.display.dragCursor=null)}function Vf(a){if(document.getElementsByClassName){for(var b=document.getElementsByClassName("CodeMirror"),d=[],c=0;c<b.length;c++){var e=b[c].CodeMirror;e&&d.push(e)}d.length&&d[0].operation(function(){for(var f=0;f<d.length;f++)a(d[f])})}}function eh(){var a;z(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null;Vf(fh)},100))});z(window,"blur",function(){return Vf(ub)})}
function fh(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null;b.scrollbarsClipped=!1;a.setSize()}function gh(a){var b=a.split(/-(?!$)/);a=b[b.length-1];for(var d,c,e,f,g=0;g<b.length-1;g++){var h=b[g];if(/^(cmd|meta|m)$/i.test(h))f=!0;else if(/^a(lt)?$/i.test(h))d=!0;else if(/^(c|ctrl|control)$/i.test(h))c=!0;else if(/^s(hift)?$/i.test(h))e=!0;else throw Error("Unrecognized modifier name: "+h);}d&&(a="Alt-"+a);c&&(a="Ctrl-"+a);f&&(a="Cmd-"+a);e&&(a="Shift-"+a);return a}
function hh(a){var b={},d;for(d in a)if(a.hasOwnProperty(d)){var c=a[d];if(!/^(name|fallthrough|(de|at)tach)$/.test(d)){if("..."!=c)for(var e=uc(d.split(" "),gh),f=0;f<e.length;f++){if(f==e.length-1){var g=e.join(" ");var h=c}else g=e.slice(0,f+1).join(" "),h="...";var k=b[g];if(!k)b[g]=h;else if(k!=h)throw Error("Inconsistent bindings for "+g);}delete a[d]}}for(var l in b)a[l]=b[l];return a}function Db(a,b,d,c){b=Vc(b);var e=b.call?b.call(a,c):b[a];if(!1===e)return"nothing";if("..."===e)return"multi";
if(null!=e&&d(e))return"handled";if(b.fallthrough){if("[object Array]"!=Object.prototype.toString.call(b.fallthrough))return Db(a,b.fallthrough,d,c);for(e=0;e<b.fallthrough.length;e++){var f=Db(a,b.fallthrough[e],d,c);if(f)return f}}}function Wf(a){a="string"==typeof a?a:Ua[a.keyCode];return"Ctrl"==a||"Alt"==a||"Shift"==a||"Mod"==a}function Xf(a,b,d){var c=a;b.altKey&&"Alt"!=c&&(a="Alt-"+a);(Yf?b.metaKey:b.ctrlKey)&&"Ctrl"!=c&&(a="Ctrl-"+a);(Yf?b.ctrlKey:b.metaKey)&&"Mod"!=c&&(a="Cmd-"+a);!d&&b.shiftKey&&
"Shift"!=c&&(a="Shift-"+a);return a}function Zf(a,b){if(Ba&&34==a.keyCode&&a["char"])return!1;var d=Ua[a.keyCode];if(null==d||a.altGraphKey)return!1;3==a.keyCode&&a.code&&(d=a.code);return Xf(d,a,b)}function Vc(a){return"string"==typeof a?gc[a]:a}function Eb(a,b){for(var d=a.doc.sel.ranges,c=[],e=0;e<d.length;e++){for(var f=b(d[e]);c.length&&0>=B(f.from,K(c).to);){var g=c.pop();if(0>B(g.from,f.from)){f.from=g.from;break}}c.push(f)}pa(a,function(){for(var h=c.length-1;0<=h;h--)Bb(a.doc,"",c[h].from,
c[h].to,"+delete");vb(a)})}function ce(a,b,d){b=qe(a.text,b+d,d);return 0>b||b>a.text.length?null:b}function de(a,b,d){a=ce(a,b.ch,d);return null==a?null:new t(b.line,a,0>d?"after":"before")}function ee(a,b,d,c,e){if(a&&("rtl"==b.doc.direction&&(e=-e),a=Ja(d,b.doc.direction))){a=0>e?K(a):a[0];var f=0>e==(1==a.level)?"after":"before";if(0<a.level||"rtl"==b.doc.direction){var g=cb(b,d);var h=0>e?d.text.length-1:0;var k=za(b,g,h).top;h=Hb(function(l){return za(b,g,l).top==k},0>e==(1==a.level)?a.from:
a.to-1,h);"before"==f&&(h=ce(d,h,1))}else h=0>e?a.to:a.from;return new t(c,h,f)}return new t(c,0>e?d.text.length:0,0>e?"before":"after")}function ih(a,b,d,c){var e=Ja(b,a.doc.direction);if(!e)return de(b,d,c);d.ch>=b.text.length?(d.ch=b.text.length,d.sticky="before"):0>=d.ch&&(d.ch=0,d.sticky="after");var f=Ib(e,d.ch,d.sticky),g=e[f];if("ltr"==a.doc.direction&&0==g.level%2&&(0<c?g.to>d.ch:g.from<d.ch))return de(b,d,c);var h=function(q,r){return ce(b,q instanceof t?q.ch:q,r)},k,l=function(q){if(!a.options.lineWrapping)return{begin:0,
end:b.text.length};k=k||cb(a,b);return bf(a,b,k,q)},m=l("before"==d.sticky?h(d,-1):d.ch);if("rtl"==a.doc.direction||1==g.level){var n=1==g.level==0>c,p=h(d,n?1:-1);if(null!=p&&(n?p<=g.to&&p<=m.end:p>=g.from&&p>=m.begin))return new t(d.line,p,n?"before":"after")}g=function(q,r,u){for(var A=function(L,Q){return Q?new t(d.line,h(L,1),"before"):new t(d.line,L,"after")};0<=q&&q<e.length;q+=r){var Y=e[q],x=0<r==(1!=Y.level),P=x?u.begin:h(u.end,-1);if(Y.from<=P&&P<Y.to)return A(P,x);P=x?Y.from:h(Y.to,-1);
if(u.begin<=P&&P<u.end)return A(P,x)}};if(f=g(f+c,c,m))return f;m=0<c?m.end:h(m.begin,-1);return null==m||0<c&&m==b.text.length||!(f=g(0<c?0:e.length-1,c,l(m)))?null:f}function $f(a,b){var d=w(a.doc,b),c=Fa(d);c!=d&&(b=N(c));return ee(!0,a,c,b,1)}function ag(a,b){var d=$f(a,b.line),c=w(a.doc,d.line);a=Ja(c,a.doc.direction);return a&&0!=a[0].level?d:(c=Math.max(d.ch,c.text.search(/\S/)),t(d.line,b.line==d.line&&b.ch<=c&&b.ch?0:c,d.sticky))}function Wc(a,b,d){if("string"==typeof b&&(b=hc[b],!b))return!1;
a.display.input.ensurePolled();var c=a.display.shift,e=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),d&&(a.display.shift=!1),e=b(a)!=Xc}finally{a.display.shift=c,a.state.suppressEdits=!1}return e}function ic(a,b,d,c){var e=a.state.keySeq;if(e){if(Wf(b))return"handled";/'$/.test(b)?a.state.keySeq=null:jh.set(50,function(){a.state.keySeq==e&&(a.state.keySeq=null,a.display.input.reset())});if(bg(a,e+" "+b,d,c))return!0}return bg(a,b,d,c)}function bg(a,b,d,c){a:{for(var e=0;e<a.state.keyMaps.length;e++){var f=
Db(b,a.state.keyMaps[e],c,a);if(f){c=f;break a}}c=a.options.extraKeys&&Db(b,a.options.extraKeys,c,a)||Db(b,a.options.keyMap,c,a)}"multi"==c&&(a.state.keySeq=b);"handled"==c&&ca(a,"keyHandled",a,b,d);if("handled"==c||"multi"==c)ka(d),Od(a);return!!c}function cg(a,b){var d=Zf(b,!0);return d?b.shiftKey&&!a.state.keySeq?ic(a,"Shift-"+d,b,function(c){return Wc(a,c,!0)})||ic(a,d,b,function(c){if("string"==typeof c?/^go[A-Z]/.test(c):c.motion)return Wc(a,c)}):ic(a,d,b,function(c){return Wc(a,c)}):!1}function kh(a,
b,d){return ic(a,"'"+d+"'",b,function(c){return Wc(a,c,!0)})}function dg(a){if(!a.target||a.target==this.display.input.getField())if(this.curOp.focus=va(),!Z(this,a)){G&&11>T&&27==a.keyCode&&(a.returnValue=!1);var b=a.keyCode;this.display.shift=16==b||a.shiftKey;var d=cg(this,a);Ba&&(fe=d?b:null,!d&&88==b&&!lh&&(ya?a.metaKey:a.ctrlKey)&&this.replaceSelection("",null,"cut"));Ma&&!ya&&!d&&46==b&&a.shiftKey&&!a.ctrlKey&&document.execCommand&&document.execCommand("cut");18!=b||/\bCodeMirror-crosshair\b/.test(this.display.lineDiv.className)||
mh(this)}}function mh(a){function b(c){18!=c.keyCode&&c.altKey||(hb(d,"CodeMirror-crosshair"),ra(document,"keyup",b),ra(document,"mouseover",b))}var d=a.display.lineDiv;Wa(d,"CodeMirror-crosshair");z(document,"keyup",b);z(document,"mouseover",b)}function eg(a){16==a.keyCode&&(this.doc.sel.shift=!1);Z(this,a)}function fg(a){if(!(a.target&&a.target!=this.display.input.getField()||La(this.display,a)||Z(this,a)||a.ctrlKey&&!a.altKey||ya&&a.metaKey)){var b=a.keyCode,d=a.charCode;if(Ba&&b==fe)fe=null,ka(a);
else if(!Ba||a.which&&!(10>a.which)||!cg(this,a))if(b=String.fromCharCode(null==d?b:d),"\b"!=b&&!kh(this,a,b))this.display.input.onKeyPress(a)}}function nh(a,b){var d=+new Date;if(jc&&jc.compare(d,a,b))return kc=jc=null,"triple";if(kc&&kc.compare(d,a,b))return jc=new ge(d,a,b),kc=null,"double";kc=new ge(d,a,b);jc=null;return"single"}function gg(a){var b=this.display;if(!(Z(this,a)||b.activeTouch&&b.input.supportsTouch()))if(b.input.ensurePolled(),b.shift=a.shiftKey,La(b,a))fa||(b.scroller.draggable=
!1,setTimeout(function(){return b.scroller.draggable=!0},100));else if(!Yc(this,a,"gutterClick",!0)){var d=eb(this,a),c=te(a),e=d?nh(d,c):"single";window.focus();1==c&&this.state.selectingText&&this.state.selectingText(a);if(!d||!oh(this,c,d,e,a))if(1==c)d?ph(this,d,e,a):(a.target||a.srcElement)==b.scroller&&ka(a);else if(2==c)d&&Rc(this.doc,d),setTimeout(function(){return b.input.focus()},20);else if(3==c)if(he)this.display.input.onContextMenu(a);else Qd(this)}}function oh(a,b,d,c,e){var f="Click";
"double"==c?f="Double"+f:"triple"==c&&(f="Triple"+f);return ic(a,Xf((1==b?"Left":2==b?"Middle":"Right")+f,e),e,function(g){"string"==typeof g&&(g=hc[g]);if(!g)return!1;var h=!1;try{a.isReadOnly()&&(a.state.suppressEdits=!0),h=g(a,d)!=Xc}finally{a.state.suppressEdits=!1}return h})}function ph(a,b,d,c){G?setTimeout(ed(gf,a),0):a.curOp.focus=va();var e=a.getOption("configureMouse");e=e?e(a,d,c):{};null==e.unit&&(e.unit=(qh?c.shiftKey&&c.metaKey:c.altKey)?"rectangle":"single"==d?"char":"double"==d?"word":
"line");if(null==e.extend||a.doc.extend)e.extend=a.doc.extend||c.shiftKey;null==e.addNew&&(e.addNew=ya?c.metaKey:c.ctrlKey);null==e.moveOnDrag&&(e.moveOnDrag=!(ya?c.altKey:c.ctrlKey));var f=a.doc.sel,g;a.options.dragDrop&&rh&&!a.isReadOnly()&&"single"==d&&-1<(g=f.contains(b))&&(0>B((g=f.ranges[g]).from(),b)||0<b.xRel)&&(0<B(g.to(),b)||0>b.xRel)?sh(a,c,b,e):th(a,c,b,e)}function sh(a,b,d,c){var e=a.display,f=!1,g=aa(a,function(l){fa&&(e.scroller.draggable=!1);a.state.draggingText=!1;a.state.delayingBlurEvent&&
(a.hasFocus()?a.state.delayingBlurEvent=!1:Qd(a));ra(e.wrapper.ownerDocument,"mouseup",g);ra(e.wrapper.ownerDocument,"mousemove",h);ra(e.scroller,"dragstart",k);ra(e.scroller,"drop",g);f||(ka(l),c.addNew||Rc(a.doc,d,null,null,c.extend),fa&&!Zc||G&&9==T?setTimeout(function(){e.wrapper.ownerDocument.body.focus({preventScroll:!0});e.input.focus()},20):e.input.focus())}),h=function(l){f=f||10<=Math.abs(b.clientX-l.clientX)+Math.abs(b.clientY-l.clientY)},k=function(){return f=!0};fa&&(e.scroller.draggable=
!0);a.state.draggingText=g;g.copy=!c.moveOnDrag;z(e.wrapper.ownerDocument,"mouseup",g);z(e.wrapper.ownerDocument,"mousemove",h);z(e.scroller,"dragstart",k);z(e.scroller,"drop",g);a.state.delayingBlurEvent=!0;setTimeout(function(){return e.input.focus()},20);e.scroller.dragDrop&&e.scroller.dragDrop()}function hg(a,b,d){if("char"==d)return new J(b,b);if("word"==d)return a.findWordAt(b);if("line"==d)return new J(t(b.line,0),C(a.doc,t(b.line+1,0)));a=d(a,b);return new J(a.from,a.to)}function th(a,b,d,
c){function e(x){if(0!=B(q,x))if(q=x,"rectangle"==c.unit){var P=[],L=a.options.tabSize,Q=wa(w(k,d.line).text,d.ch,L),S=wa(w(k,x.line).text,x.ch,L),F=Math.min(Q,S);Q=Math.max(Q,S);S=Math.min(d.line,x.line);for(var R=Math.min(a.lastLine(),Math.max(d.line,x.line));S<=R;S++){var H=w(k,S).text,M=fd(H,F,L);F==Q?P.push(new J(t(S,M),t(S,M))):H.length>M&&P.push(new J(t(S,M),t(S,fd(H,Q,L))))}P.length||P.push(new J(d,d));da(k,Ca(a,l.ranges.slice(0,n).concat(P),n),{origin:"*mouse",scroll:!1});a.scrollIntoView(x)}else P=
p,F=hg(a,x,c.unit),x=P.anchor,0<B(F.anchor,x)?(L=F.head,x=zc(P.from(),F.anchor)):(L=F.anchor,x=yc(P.to(),F.head)),P=l.ranges.slice(0),P[n]=uh(a,new J(C(k,x),L)),da(k,Ca(a,P,n),ie)}function f(x){var P=++u,L=eb(a,x,!0,"rectangle"==c.unit);if(L)if(0!=B(L,q)){a.curOp.focus=va();e(L);var Q=Kc(h,k);(L.line>=Q.to||L.line<Q.from)&&setTimeout(aa(a,function(){u==P&&f(x)}),150)}else{var S=x.clientY<r.top?-20:x.clientY>r.bottom?20:0;S&&setTimeout(aa(a,function(){u==P&&(h.scroller.scrollTop+=S,f(x))}),50)}}function g(x){a.state.selectingText=
!1;u=Infinity;x&&(ka(x),h.input.focus());ra(h.wrapper.ownerDocument,"mousemove",A);ra(h.wrapper.ownerDocument,"mouseup",Y);k.history.lastSelOrigin=null}G&&Qd(a);var h=a.display,k=a.doc;ka(b);var l=k.sel,m=l.ranges;if(c.addNew&&!c.extend){var n=k.sel.contains(d);var p=-1<n?m[n]:new J(d,d)}else p=k.sel.primary(),n=k.sel.primIndex;"rectangle"==c.unit?(c.addNew||(p=new J(d,d)),d=eb(a,b,!0,!0),n=-1):(b=hg(a,d,c.unit),p=c.extend?ae(p,b.anchor,b.head,c.extend):b);c.addNew?-1==n?(n=m.length,da(k,Ca(a,m.concat([p]),
n),{scroll:!1,origin:"*mouse"})):1<m.length&&m[n].empty()&&"char"==c.unit&&!c.extend?(da(k,Ca(a,m.slice(0,n).concat(m.slice(n+1)),0),{scroll:!1,origin:"*mouse"}),l=k.sel):be(k,n,p,ie):(n=0,da(k,new ua([p],0),ie),l=k.sel);var q=d,r=h.wrapper.getBoundingClientRect(),u=0,A=aa(a,function(x){0!==x.buttons&&te(x)?f(x):g(x)}),Y=aa(a,g);a.state.selectingText=Y;z(h.wrapper.ownerDocument,"mousemove",A);z(h.wrapper.ownerDocument,"mouseup",Y)}function uh(a,b){var d=b.anchor,c=b.head,e=w(a.doc,d.line);if(0==B(d,
c)&&d.sticky==c.sticky)return b;e=Ja(e);if(!e)return b;var f=Ib(e,d.ch,d.sticky),g=e[f];if(g.from!=d.ch&&g.to!=d.ch)return b;var h=f+(g.from==d.ch==(1!=g.level)?0:1);if(0==h||h==e.length)return b;c.line!=d.line?a=0<(c.line-d.line)*("ltr"==a.doc.direction?1:-1):(a=Ib(e,c.ch,c.sticky),f=a-f||(c.ch-d.ch)*(1==g.level?-1:1),a=a==h-1||a==h?0>f:0<f);e=e[h+(a?-1:0)];e=(h=a==(1==e.level))?e.from:e.to;h=h?"after":"before";return d.ch==e&&d.sticky==h?b:new J(new t(d.line,e,h),c)}function Yc(a,b,d,c){if(b.touches){var e=
b.touches[0].clientX;var f=b.touches[0].clientY}else try{e=b.clientX,f=b.clientY}catch(k){return!1}if(e>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;c&&ka(b);c=a.display;var g=c.lineDiv.getBoundingClientRect();if(f>g.bottom||!xa(a,d))return jd(b);f-=g.top-c.viewOffset;for(g=0;g<a.display.gutterSpecs.length;++g){var h=c.gutters.childNodes[g];if(h&&h.getBoundingClientRect().right>=e)return e=$a(a.doc,f),W(a,d,a,e,a.display.gutterSpecs[g].className,b),jd(b)}}function ig(a,b){var d;
(d=La(a.display,b))||(d=xa(a,"gutterContextMenu")?Yc(a,b,"gutterContextMenu",!1):!1);if(!d&&!Z(a,b,"contextmenu")&&!he)a.display.input.onContextMenu(b)}function jg(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-");Sb(a)}function vh(a,b,d){!b!=!(d&&d!=Fb)&&(d=a.display.dragFunctions,b=b?z:ra,b(a.display.scroller,"dragstart",d.start),b(a.display.scroller,"dragenter",d.enter),b(a.display.scroller,"dragover",d.over),b(a.display.scroller,
"dragleave",d.leave),b(a.display.scroller,"drop",d.drop))}function wh(a){a.options.lineWrapping?(Wa(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth="",a.display.sizerWidth=null):(hb(a.display.wrapper,"CodeMirror-wrap"),xd(a));Md(a);la(a);Sb(a);setTimeout(function(){return wb(a)},100)}function U(a,b){var d=this;if(!(this instanceof U))return new U(a,b);this.options=b=b?Xa(b):{};Xa(kg,b,!1);var c=b.value;"string"==typeof c?c=new na(c,b.mode,null,b.lineSeparator,b.direction):b.mode&&
(c.modeOption=b.mode);this.doc=c;var e=new U.inputStyles[b.inputStyle](this);a=this.display=new Wg(a,c,e,b);a.wrapper.CodeMirror=this;jg(this);b.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap");nf(this);this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new Va,keySeq:null,specialChars:null};b.autofocus&&!Zb&&a.input.focus();G&&11>T&&setTimeout(function(){return d.display.input.reset(!0)},
20);xh(this);lg||(eh(),lg=!0);jb(this);this.curOp.forceUpdate=!0;xf(this,c);b.autofocus&&!Zb||this.hasFocus()?setTimeout(function(){d.hasFocus()&&!d.state.focused&&Pd(d)},20):ub(this);for(var f in $c)if($c.hasOwnProperty(f))$c[f](this,b[f],Fb);qf(this);b.finishInit&&b.finishInit(this);for(c=0;c<je.length;++c)je[c](this);kb(this);fa&&b.lineWrapping&&"optimizelegibility"==getComputedStyle(a.lineDiv).textRendering&&(a.lineDiv.style.textRendering="auto")}function xh(a){function b(){c.activeTouch&&(e=
setTimeout(function(){return c.activeTouch=null},1E3),f=c.activeTouch,f.end=+new Date)}function d(h,k){if(null==k.left)return!0;var l=k.left-h.left;h=k.top-h.top;return 400<l*l+h*h}var c=a.display;z(c.scroller,"mousedown",aa(a,gg));G&&11>T?z(c.scroller,"dblclick",aa(a,function(h){if(!Z(a,h)){var k=eb(a,h);!k||Yc(a,h,"gutterClick",!0)||La(a.display,h)||(ka(h),h=a.findWordAt(k),Rc(a.doc,h.anchor,h.head))}})):z(c.scroller,"dblclick",function(h){return Z(a,h)||ka(h)});z(c.scroller,"contextmenu",function(h){return ig(a,
h)});z(c.input.getField(),"contextmenu",function(h){c.scroller.contains(h.target)||ig(a,h)});var e,f={end:0};z(c.scroller,"touchstart",function(h){var k;if(k=!Z(a,h))1!=h.touches.length?k=!1:(k=h.touches[0],k=1>=k.radiusX&&1>=k.radiusY),k=!k;k&&!Yc(a,h,"gutterClick",!0)&&(c.input.ensurePolled(),clearTimeout(e),k=+new Date,c.activeTouch={start:k,moved:!1,prev:300>=k-f.end?f:null},1==h.touches.length&&(c.activeTouch.left=h.touches[0].pageX,c.activeTouch.top=h.touches[0].pageY))});z(c.scroller,"touchmove",
function(){c.activeTouch&&(c.activeTouch.moved=!0)});z(c.scroller,"touchend",function(h){var k=c.activeTouch;if(k&&!La(c,h)&&null!=k.left&&!k.moved&&300>new Date-k.start){var l=a.coordsChar(c.activeTouch,"page");k=!k.prev||d(k,k.prev)?new J(l,l):!k.prev.prev||d(k,k.prev.prev)?a.findWordAt(l):new J(t(l.line,0),C(a.doc,t(l.line+1,0)));a.setSelection(k.anchor,k.head);a.focus();ka(h)}b()});z(c.scroller,"touchcancel",b);z(c.scroller,"scroll",function(){c.scroller.clientHeight&&(Vb(a,c.scroller.scrollTop),
ib(a,c.scroller.scrollLeft,!0),W(a,"scroll",a))});z(c.scroller,"mousewheel",function(h){return tf(a,h)});z(c.scroller,"DOMMouseScroll",function(h){return tf(a,h)});z(c.wrapper,"scroll",function(){return c.wrapper.scrollTop=c.wrapper.scrollLeft=0});c.dragFunctions={enter:function(h){Z(a,h)||Kb(h)},over:function(h){if(!Z(a,h)){var k=eb(a,h);if(k){var l=document.createDocumentFragment();ff(a,k,l);a.display.dragCursor||(a.display.dragCursor=v("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),a.display.lineSpace.insertBefore(a.display.dragCursor,
a.display.cursorDiv));D(a.display.dragCursor,l)}Kb(h)}},start:function(h){if(G&&(!a.state.draggingText||100>+new Date-Uf))Kb(h);else if(!Z(a,h)&&!La(a.display,h)&&(h.dataTransfer.setData("Text",a.getSelection()),h.dataTransfer.effectAllowed="copyMove",h.dataTransfer.setDragImage&&!Zc)){var k=v("img",null,null,"position: fixed; left: 0; top: 0;");k.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Ba&&(k.width=k.height=1,a.display.wrapper.appendChild(k),k._top=k.offsetTop);
h.dataTransfer.setDragImage(k,0,0);Ba&&k.parentNode.removeChild(k)}},drop:aa(a,dh),leave:function(h){Z(a,h)||Tf(a)}};var g=c.input.getField();z(g,"keyup",function(h){return eg.call(a,h)});z(g,"keydown",aa(a,dg));z(g,"keypress",aa(a,fg));z(g,"focus",function(h){return Pd(a,h)});z(g,"blur",function(h){return ub(a,h)})}function lc(a,b,d,c){var e=a.doc,f;null==d&&(d="add");"smart"==d&&(e.mode.indent?f=Mb(a,b).state:d="prev");var g=a.options.tabSize,h=w(e,b),k=wa(h.text,null,g);h.stateAfter&&(h.stateAfter=
null);var l=h.text.match(/^\s*/)[0];if(!c&&!/\S/.test(h.text)){var m=0;d="not"}else if("smart"==d&&(m=e.mode.indent(f,h.text.slice(l.length),h.text),m==Xc||150<m)){if(!c)return;d="prev"}"prev"==d?m=b>e.first?wa(w(e,b-1).text,null,g):0:"add"==d?m=k+a.options.indentUnit:"subtract"==d?m=k-a.options.indentUnit:"number"==typeof d&&(m=k+d);m=Math.max(0,m);d="";c=0;if(a.options.indentWithTabs)for(a=Math.floor(m/g);a;--a)c+=g,d+="\t";c<m&&(d+=gd(m-c));if(d!=l)return Bb(e,d,t(b,0),t(b,l.length),"+input"),
h.stateAfter=null,!0;for(g=0;g<e.sel.ranges.length;g++)if(h=e.sel.ranges[g],h.head.line==b&&h.head.ch<l.length){b=t(b,l.length);be(e,g,new J(b,b));break}}function ke(a,b,d,c,e){var f=a.doc;a.display.shift=!1;c||(c=f.sel);var g=+new Date-200,h="paste"==e||a.state.pasteIncoming>g,k=le(b),l=null;if(h&&1<c.ranges.length)if(qa&&qa.text.join("\n")==b){if(0==c.ranges.length%qa.text.length){l=[];for(var m=0;m<qa.text.length;m++)l.push(f.splitLines(qa.text[m]))}}else k.length==c.ranges.length&&a.options.pasteLinesPerSelection&&
(l=uc(k,function(u){return[u]}));m=a.curOp.updateInput;for(var n=c.ranges.length-1;0<=n;n--){var p=c.ranges[n],q=p.from(),r=p.to();p.empty()&&(d&&0<d?q=t(q.line,q.ch-d):a.state.overwrite&&!h?r=t(r.line,Math.min(w(f,r.line).text.length,r.ch+K(k).length)):h&&qa&&qa.lineWise&&qa.text.join("\n")==k.join("\n")&&(q=r=t(q.line,0)));p={from:q,to:r,text:l?l[n%l.length]:k,origin:e||(h?"paste":a.state.cutIncoming>g?"cut":"+input")};Ab(a.doc,p);ca(a,"inputRead",a,p)}b&&!h&&mg(a,b);vb(a);2>a.curOp.updateInput&&
(a.curOp.updateInput=m);a.curOp.typing=!0;a.state.pasteIncoming=a.state.cutIncoming=-1}function ng(a,b){var d=a.clipboardData&&a.clipboardData.getData("Text");if(d)return a.preventDefault(),b.isReadOnly()||b.options.disableInput||pa(b,function(){return ke(b,d,0,null,"paste")}),!0}function mg(a,b){if(a.options.electricChars&&a.options.smartIndent)for(var d=a.doc.sel,c=d.ranges.length-1;0<=c;c--){var e=d.ranges[c];if(!(100<e.head.ch||c&&d.ranges[c-1].head.line==e.head.line)){var f=a.getModeAt(e.head),
g=!1;if(f.electricChars)for(var h=0;h<f.electricChars.length;h++){if(-1<b.indexOf(f.electricChars.charAt(h))){g=lc(a,e.head.line,"smart");break}}else f.electricInput&&f.electricInput.test(w(a.doc,e.head.line).text.slice(0,e.head.ch))&&(g=lc(a,e.head.line,"smart"));g&&ca(a,"electricInput",a,e.head.line)}}}function og(a){for(var b=[],d=[],c=0;c<a.doc.sel.ranges.length;c++){var e=a.doc.sel.ranges[c].head.line;e={anchor:t(e,0),head:t(e+1,0)};d.push(e);b.push(a.getRange(e.anchor,e.head))}return{text:b,
ranges:d}}function pg(a,b,d,c){a.setAttribute("autocorrect",d?"":"off");a.setAttribute("autocapitalize",c?"":"off");a.setAttribute("spellcheck",!!b)}function qg(){var a=v("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),b=v("div",[a],null,"overflow: hidden; position: relative; width: 3px; height: 0px;");fa?a.style.width="1000px":a.setAttribute("wrap","off");mc&&(a.style.border="1px solid black");pg(a);return b}function me(a,b,d,c,e){function f(u){if("codepoint"==
c){var A=k.text.charCodeAt(b.ch+(0<d?0:-1));A=isNaN(A)?null:new t(b.line,Math.max(0,Math.min(k.text.length,b.ch+d*((0<d?55296<=A&&56320>A:56320<=A&&57343>A)?2:1))),-d)}else A=e?ih(a.cm,k,b,d):de(k,b,d);if(null==A){if(u=!u)u=b.line+l,u<a.first||u>=a.first+a.size?u=!1:(b=new t(u,b.ch,b.sticky),u=k=w(a,u));if(u)b=ee(e,a.cm,k,b.line,l);else return!1}else b=A;return!0}var g=b,h=d,k=w(a,b.line),l=e&&"rtl"==a.direction?-d:d;if("char"==c||"codepoint"==c)f();else if("column"==c)f(!0);else if("word"==c||"group"==
c)for(var m=null,n="group"==c,p=a.cm&&a.cm.getHelper(b,"wordChars"),q=!0;!(0>d)||f(!q);q=!1){var r=k.text.charAt(b.ch)||"\n";r=vc(r,p)?"w":n&&"\n"==r?"n":!n||/\s/.test(r)?null:"p";!n||q||r||(r="s");if(m&&m!=r){0>d&&(d=1,f(),b.sticky="after");break}r&&(m=r);if(0<d&&!f(!q))break}h=Tc(a,b,g,h,!0);pd(g,h)&&(h.hitSide=!0);return h}function rg(a,b,d,c){var e=a.doc,f=b.left;if("page"==c){var g=Math.max(Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)-.5*
tb(a.display),3);g=(0<d?b.bottom:b.top)+d*g}else"line"==c&&(g=0<d?b.bottom+3:b.top-3);for(;;){b=Jd(a,f,g);if(!b.outside)break;if(0>d?0>=g:g>=e.height){b.hitSide=!0;break}g+=5*d}return b}function sg(a,b){var d=Dd(a,b.line);if(!d||d.hidden)return null;var c=w(a.doc,b.line);d=Se(d,c,b.line);a=Ja(c,a.doc.direction);c="left";a&&(c=Ib(a,b.ch)%2?"right":"left");b=Te(d.map,b.ch,c);b.offset="right"==b.collapse?b.end:b.start;return b}function yh(a){for(;a;a=a.parentNode)if(/CodeMirror-gutter-wrapper/.test(a.className))return!0;
return!1}function Gb(a,b){b&&(a.bad=!0);return a}function zh(a,b,d,c,e){function f(q){return function(r){return r.id==q}}function g(){m&&(l+=n,p&&(l+=n),m=p=!1)}function h(q){q&&(g(),l+=q)}function k(q){if(1==q.nodeType){var r=q.getAttribute("cm-text");if(r)h(r);else{r=q.getAttribute("cm-marker");var u;if(r)q=a.findMarks(t(c,0),t(e+1,0),f(+r)),q.length&&(u=q[0].find(0))&&h(Za(a.doc,u.from,u.to).join(n));else if("false"!=q.getAttribute("contenteditable")&&(u=/^(pre|div|p|li|table|br)$/i.test(q.nodeName),
/^br$/i.test(q.nodeName)||0!=q.textContent.length)){u&&g();for(r=0;r<q.childNodes.length;r++)k(q.childNodes[r]);/^(pre|p)$/i.test(q.nodeName)&&(p=!0);u&&(m=!0)}}}else 3==q.nodeType&&h(q.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))}for(var l="",m=!1,n=a.doc.lineSeparator(),p=!1;;){k(b);if(b==d)break;b=b.nextSibling;p=!1}return l}function ad(a,b,d){if(b==a.display.lineDiv){var c=a.display.lineDiv.childNodes[d];if(!c)return Gb(a.clipPos(t(a.display.viewTo-1)),!0);b=null;d=0}else for(c=b;;c=
c.parentNode){if(!c||c==a.display.lineDiv)return null;if(c.parentNode&&c.parentNode==a.display.lineDiv)break}for(var e=0;e<a.display.view.length;e++){var f=a.display.view[e];if(f.node==c)return Ah(f,b,d)}}function Ah(a,b,d){function c(m,n,p){for(var q=-1;q<(l?l.length:0);q++)for(var r=0>q?k.map:l[q],u=0;u<r.length;u+=3){var A=r[u+2];if(A==m||A==n){n=N(0>q?a.line:a.rest[q]);q=r[u]+p;if(0>p||A!=m)q=r[u+(p?1:0)];return t(n,q)}}}var e=a.text.firstChild,f=!1;if(!b||!ja(e,b))return Gb(t(N(a.line),0),!0);
if(b==e&&(f=!0,b=e.childNodes[d],d=0,!b))return d=a.rest?K(a.rest):a.line,Gb(t(N(d),d.text.length),f);var g=3==b.nodeType?b:null,h=b;g||1!=b.childNodes.length||3!=b.firstChild.nodeType||(g=b.firstChild,d&&(d=g.nodeValue.length));for(;h.parentNode!=e;)h=h.parentNode;var k=a.measure,l=k.maps;if(b=c(g,h,d))return Gb(b,f);e=h.nextSibling;for(g=g?g.nodeValue.length-d:0;e;e=e.nextSibling){if(b=c(e,e.firstChild,0))return Gb(t(b.line,b.ch-g),f);g+=e.textContent.length}for(h=h.previousSibling;h;h=h.previousSibling){if(b=
c(h,h.firstChild,-1))return Gb(t(b.line,b.ch+d),f);d+=h.textContent.length}}var oa=navigator.userAgent,tg=navigator.platform,Ma=/gecko\/\d/i.test(oa),ug=/MSIE \d/.test(oa),vg=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(oa),bd=/Edge\/(\d+)/.exec(oa),G=ug||vg||bd,T=G&&(ug?document.documentMode||6:+(bd||vg)[1]),fa=!bd&&/WebKit\//.test(oa),Bh=fa&&/Qt\/\d+\.\d+/.test(oa),Ec=!bd&&/Chrome\//.test(oa),Ba=/Opera\//.test(oa),Zc=/Apple Computer/.test(navigator.vendor),Ch=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(oa),
Tg=/PhantomJS/.test(oa),mc=Zc&&(/Mobile\/\w+/.test(oa)||2<navigator.maxTouchPoints),Fc=/Android/.test(oa),Zb=mc||Fc||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(oa),ya=mc||/Mac/.test(tg),qh=/\bCrOS\b/.test(oa),Dh=/win/i.test(tg),lb=Ba&&oa.match(/Version\/(\d*\.\d*)/);lb&&(lb=Number(lb[1]));lb&&15<=lb&&(Ba=!1,fa=!0);var Yf=ya&&(Bh||Ba&&(null==lb||12.11>lb)),he=Ma||G&&9<=T,hb=function(a,b){var d=a.className;if(b=y(b).exec(d)){var c=d.slice(b.index+b[0].length);a.className=d.slice(0,b.index)+
(c?b[1]+c:"")}};var Ob=document.createRange?function(a,b,d,c){var e=document.createRange();e.setEnd(c||a,d);e.setStart(a,b);return e}:function(a,b,d){var c=document.body.createTextRange();try{c.moveToElementText(a.parentNode)}catch(e){return c}c.collapse(!0);c.moveEnd("character",d);c.moveStart("character",b);return c};var nc=function(a){a.select()};mc?nc=function(a){a.selectionStart=0;a.selectionEnd=a.value.length}:G&&(nc=function(a){try{a.select()}catch(b){}});var Va=function(){this.f=this.id=null;
this.time=0;this.handler=ed(this.onTimeout,this)};Va.prototype.onTimeout=function(a){a.id=0;a.time<=+new Date?a.f():setTimeout(a.handler,a.time-+new Date)};Va.prototype.set=function(a,b){this.f=b;b=+new Date+a;if(!this.id||b<this.time)clearTimeout(this.id),this.id=setTimeout(this.handler,a),this.time=b};var Xc={toString:function(){return"CodeMirror.Pass"}},Ia={scroll:!1},ie={origin:"*mouse"},oc={origin:"+move"},tc=[""],xg=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
yg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
Jb=null,Ag=function(){function a(g,h,k){this.level=g;this.from=h;this.to=k}var b=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,d=/[stwN]/,c=/[LRr]/,e=/[Lb1n]/,f=/[1n]/;return function(g,h){var k="ltr"==h?"L":"R";if(0==g.length||"ltr"==h&&!b.test(g))return!1;for(var l=g.length,m=[],n=0;n<l;++n){var p=m,q=p.push;var r=g.charCodeAt(n);r=247>=r?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(r):
1424<=r&&1524>=r?"R":1536<=r&&1785>=r?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(r-1536):1774<=r&&2220>=r?"r":8192<=r&&8203>=r?"w":8204==r?"b":"L";q.call(p,r)}n=0;for(p=k;n<l;++n)q=m[n],"m"==q?m[n]=p:p=q;n=0;for(p=k;n<l;++n)q=m[n],"1"==q&&"r"==p?m[n]="n":c.test(q)&&(p=q,"r"==q&&(m[n]=
"R"));n=1;for(p=m[0];n<l-1;++n)q=m[n],"+"==q&&"1"==p&&"1"==m[n+1]?m[n]="1":","!=q||p!=m[n+1]||"1"!=p&&"n"!=p||(m[n]=p),p=q;for(n=0;n<l;++n)if(p=m[n],","==p)m[n]="N";else if("%"==p){for(p=n+1;p<l&&"%"==m[p];++p);for(q=n&&"!"==m[n-1]||p<l&&"1"==m[p]?"1":"N";n<p;++n)m[n]=q;n=p-1}n=0;for(p=k;n<l;++n)q=m[n],"L"==p&&"1"==q?m[n]="L":c.test(q)&&(p=q);for(p=0;p<l;++p)if(d.test(m[p])){for(n=p+1;n<l&&d.test(m[n]);++n);q="L"==(p?m[p-1]:k);for(q=q==("L"==(n<l?m[n]:k))?q?"L":"R":k;p<n;++p)m[p]=q;p=n-1}k=[];var u;
for(n=0;n<l;)if(e.test(m[n])){p=n;for(++n;n<l&&e.test(m[n]);++n);k.push(new a(0,p,n))}else{var A=n;p=k.length;q="rtl"==h?1:0;for(++n;n<l&&"L"!=m[n];++n);for(r=A;r<n;)if(f.test(m[r])){A<r&&(k.splice(p,0,new a(1,A,r)),p+=q);A=r;for(++r;r<n&&f.test(m[r]);++r);k.splice(p,0,new a(2,A,r));p+=q;A=r}else++r;A<n&&k.splice(p,0,new a(1,A,n))}"ltr"==h&&(1==k[0].level&&(u=g.match(/^\s+/))&&(k[0].from=u[0].length,k.unshift(new a(0,0,u[0].length))),1==K(k).level&&(u=g.match(/\s+$/))&&(K(k).to-=u[0].length,k.push(new a(0,
l-u[0].length,l))));return"rtl"==h?k.reverse():k}}(),wc=[],z=function(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent?a.attachEvent("on"+b,d):(a=a._handlers||(a._handlers={}),a[b]=(a[b]||wc).concat(d))},rh=function(){if(G&&9>T)return!1;var a=v("div");return"draggable"in a||"dragDrop"in a}(),zd,yd,le=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,d=[],c=a.length;b<=c;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");
-1!=g?(d.push(f.slice(0,g)),b+=g+1):(d.push(f),b=e+1)}return d}:function(a){return a.split(/\r\n?|\n/)},Eh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(d){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},lh=function(){var a=v("div");if("oncopy"in a)return!0;a.setAttribute("oncopy","return;");return"function"==typeof a.oncopy}(),Fd=null,kd={},ob={},pb={},X=
function(a,b,d){this.pos=this.start=0;this.string=a;this.tabSize=b||8;this.lineStart=this.lastColumnPos=this.lastColumnValue=0;this.lineOracle=d};X.prototype.eol=function(){return this.pos>=this.string.length};X.prototype.sol=function(){return this.pos==this.lineStart};X.prototype.peek=function(){return this.string.charAt(this.pos)||void 0};X.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)};X.prototype.eat=function(a){var b=this.string.charAt(this.pos);
if("string"==typeof a?b==a:b&&(a.test?a.test(b):a(b)))return++this.pos,b};X.prototype.eatWhile=function(a){for(var b=this.pos;this.eat(a););return this.pos>b};X.prototype.eatSpace=function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a};X.prototype.skipToEnd=function(){this.pos=this.string.length};X.prototype.skipTo=function(a){a=this.string.indexOf(a,this.pos);if(-1<a)return this.pos=a,!0};X.prototype.backUp=function(a){this.pos-=a};X.prototype.column=
function(){this.lastColumnPos<this.start&&(this.lastColumnValue=wa(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start);return this.lastColumnValue-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.indentation=function(){return wa(this.string,null,this.tabSize)-(this.lineStart?wa(this.string,this.lineStart,this.tabSize):0)};X.prototype.match=function(a,b,d){if("string"==typeof a){var c=function(f){return d?f.toLowerCase():
f},e=this.string.substr(this.pos,a.length);if(c(e)==c(a))return!1!==b&&(this.pos+=a.length),!0}else{if((a=this.string.slice(this.pos).match(a))&&0<a.index)return null;a&&!1!==b&&(this.pos+=a[0].length);return a}};X.prototype.current=function(){return this.string.slice(this.start,this.pos)};X.prototype.hideFirstChars=function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}};X.prototype.lookAhead=function(a){var b=this.lineOracle;return b&&b.lookAhead(a)};X.prototype.baseToken=function(){var a=
this.lineOracle;return a&&a.baseToken(this.pos)};var Ac=function(a,b){this.state=a;this.lookAhead=b},Ea=function(a,b,d,c){this.state=b;this.doc=a;this.line=d;this.maxLookAhead=c||0;this.baseTokens=null;this.baseTokenPos=1};Ea.prototype.lookAhead=function(a){var b=this.doc.getLine(this.line+a);null!=b&&a>this.maxLookAhead&&(this.maxLookAhead=a);return b};Ea.prototype.baseToken=function(a){if(!this.baseTokens)return null;for(;this.baseTokens[this.baseTokenPos]<=a;)this.baseTokenPos+=2;var b=this.baseTokens[this.baseTokenPos+
1];return{type:b&&b.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-a}};Ea.prototype.nextLine=function(){this.line++;0<this.maxLookAhead&&this.maxLookAhead--};Ea.fromSaved=function(a,b,d){return b instanceof Ac?new Ea(a,Ya(a.mode,b.state),d,b.lookAhead):new Ea(a,Ya(a.mode,b),d)};Ea.prototype.save=function(a){a=!1!==a?Ya(this.doc.mode,this.state):this.state;return 0<this.maxLookAhead?new Ac(a,this.maxLookAhead):a};var Be=function(a,b,d){this.start=a.start;this.end=a.pos;this.string=
a.current();this.type=b||null;this.state=d},Lf=!1,Ka=!1,xb=function(a,b,d){this.text=a;Fe(this,b);this.height=d?d(this):1};xb.prototype.lineNo=function(){return N(this)};nb(xb);var Hg={},Gg={},rb=null,Pb=null,Ue={left:0,right:0,top:0,bottom:0},db,mb=function(a,b,d){this.cm=d;var c=this.vert=v("div",[v("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),e=this.horiz=v("div",[v("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar");c.tabIndex=e.tabIndex=-1;a(c);a(e);z(c,
"scroll",function(){c.clientHeight&&b(c.scrollTop,"vertical")});z(e,"scroll",function(){e.clientWidth&&b(e.scrollLeft,"horizontal")});this.checkedZeroWidth=!1;G&&8>T&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")};mb.prototype.update=function(a){var b=a.scrollWidth>a.clientWidth+1,d=a.scrollHeight>a.clientHeight+1,c=a.nativeBarWidth;d?(this.vert.style.display="block",this.vert.style.bottom=b?c+"px":"0",this.vert.firstChild.style.height=Math.max(0,a.scrollHeight-a.clientHeight+(a.viewHeight-
(b?c:0)))+"px"):(this.vert.style.display="",this.vert.firstChild.style.height="0");b?(this.horiz.style.display="block",this.horiz.style.right=d?c+"px":"0",this.horiz.style.left=a.barLeft+"px",this.horiz.firstChild.style.width=Math.max(0,a.scrollWidth-a.clientWidth+(a.viewWidth-a.barLeft-(d?c:0)))+"px"):(this.horiz.style.display="",this.horiz.firstChild.style.width="0");!this.checkedZeroWidth&&0<a.clientHeight&&(0==c&&this.zeroWidthHack(),this.checkedZeroWidth=!0);return{right:d?c:0,bottom:b?c:0}};
mb.prototype.setScrollLeft=function(a){this.horiz.scrollLeft!=a&&(this.horiz.scrollLeft=a);this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")};mb.prototype.setScrollTop=function(a){this.vert.scrollTop!=a&&(this.vert.scrollTop=a);this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")};mb.prototype.zeroWidthHack=function(){this.horiz.style.height=this.vert.style.width=ya&&!Ch?"12px":"18px";this.horiz.style.pointerEvents=this.vert.style.pointerEvents=
"none";this.disableHoriz=new Va;this.disableVert=new Va};mb.prototype.enableZeroWidthBar=function(a,b,d){function c(){var e=a.getBoundingClientRect();("vert"==d?document.elementFromPoint(e.right-1,(e.top+e.bottom)/2):document.elementFromPoint((e.right+e.left)/2,e.bottom-1))!=a?a.style.pointerEvents="none":b.set(1E3,c)}a.style.pointerEvents="auto";b.set(1E3,c)};mb.prototype.clear=function(){var a=this.horiz.parentNode;a.removeChild(this.horiz);a.removeChild(this.vert)};var pc=function(){};pc.prototype.update=
function(){return{bottom:0,right:0}};pc.prototype.setScrollLeft=function(){};pc.prototype.setScrollTop=function(){};pc.prototype.clear=function(){};var of={"native":mb,"null":pc},Sg=0,Nc=function(a,b,d){var c=a.display;this.viewport=b;this.visible=Kc(c,a.doc,b);this.editorIsHidden=!c.wrapper.offsetWidth;this.wrapperHeight=c.wrapper.clientHeight;this.wrapperWidth=c.wrapper.clientWidth;this.oldDisplayWidth=ab(a);this.force=d;this.dims=Ed(a);this.events=[]};Nc.prototype.signal=function(a,b){xa(a,b)&&
this.events.push(arguments)};Nc.prototype.finish=function(){for(var a=0;a<this.events.length;a++)W.apply(null,this.events[a])};var Oc=0,ta=null;G?ta=-.53:Ma?ta=15:Ec?ta=-.7:Zc&&(ta=-1/3);var ua=function(a,b){this.ranges=a;this.primIndex=b};ua.prototype.primary=function(){return this.ranges[this.primIndex]};ua.prototype.equals=function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var d=this.ranges[b],c=a.ranges[b];
if(!pd(d.anchor,c.anchor)||!pd(d.head,c.head))return!1}return!0};ua.prototype.deepCopy=function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new J(qd(this.ranges[b].anchor),qd(this.ranges[b].head));return new ua(a,this.primIndex)};ua.prototype.somethingSelected=function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1};ua.prototype.contains=function(a,b){b||(b=a);for(var d=0;d<this.ranges.length;d++){var c=this.ranges[d];if(0<=B(b,c.from())&&0>=B(a,c.to()))return d}return-1};
var J=function(a,b){this.anchor=a;this.head=b};J.prototype.from=function(){return zc(this.anchor,this.head)};J.prototype.to=function(){return yc(this.anchor,this.head)};J.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch};cc.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var d=a,c=a+b;d<c;++d){var e=this.lines[d];this.height-=e.height;var f=e;f.parent=null;Ee(f);ca(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,
this.lines)},insertInner:function(a,b,d){this.height+=d;this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(a=0;a<b.length;++a)b[a].parent=this},iterN:function(a,b,d){for(b=a+b;a<b;++a)if(d(this.lines[a]))return!0}};dc.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var d=0;d<this.children.length;++d){var c=this.children[d],e=c.chunkSize();if(a<e){var f=Math.min(b,e-a),g=c.height;c.removeInner(a,f);this.height-=g-c.height;e==f&&(this.children.splice(d--,
1),c.parent=null);if(0==(b-=f))break;a=0}else a-=e}25>this.size-b&&(1<this.children.length||!(this.children[0]instanceof cc))&&(a=[],this.collapse(a),this.children=[new cc(a)],this.children[0].parent=this)},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,d){this.size+=b.length;this.height+=d;for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<=f){e.insertInner(a,b,d);if(e.lines&&50<e.lines.length){for(b=
a=e.lines.length%25+25;b<e.lines.length;)d=new cc(e.lines.slice(b,b+=25)),e.height-=d.height,this.children.splice(++c,0,d),d.parent=this;e.lines=e.lines.slice(0,a);this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(10>=this.children.length)){var a=this;do{var b=a.children.splice(a.children.length-5,5);b=new dc(b);if(a.parent){a.size-=b.size;a.height-=b.height;var d=ea(a.parent.children,a);a.parent.children.splice(d+1,0,b)}else d=new dc(a.children),d.parent=a,a.children=[d,b],a=d;b.parent=a.parent}while(10<
a.children.length);a.parent.maybeSpill()}},iterN:function(a,b,d){for(var c=0;c<this.children.length;++c){var e=this.children[c],f=e.chunkSize();if(a<f){f=Math.min(b,f-a);if(e.iterN(a,f,d))return!0;if(0==(b-=f))break;a=0}else a-=f}}};var ec=function(a,b,d){if(d)for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);this.doc=a;this.node=b};ec.prototype.clear=function(){var a=this.doc.cm,b=this.line.widgets,d=this.line,c=N(d);if(null!=c&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||
(d.widgets=null);var f=Rb(this);Da(d,Math.max(0,d.height-f));a&&(pa(a,function(){var g=-f;Ga(d)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Lc(a,g);Qa(a,c,"widget")}),ca(a,"lineWidgetCleared",a,this,c))}};ec.prototype.changed=function(){var a=this,b=this.height,d=this.doc.cm,c=this.line;this.height=null;var e=Rb(this)-b;e&&(Oa(this.doc,c)||Da(c,c.height+e),d&&pa(d,function(){d.curOp.forceUpdate=!0;Ga(c)<(d.curOp&&d.curOp.scrollTop||d.doc.scrollTop)&&Lc(d,e);ca(d,"lineWidgetChanged",d,a,N(c))}))};
nb(ec);var Rf=0,Ta=function(a,b){this.lines=[];this.type=b;this.doc=a;this.id=++Rf};Ta.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;b&&jb(a);if(xa(this,"clear")){var d=this.find();d&&ca(this,"clear",d.from,d.to)}for(var c=d=null,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);a&&!this.collapsed?Qa(a,N(f),"text"):a&&(null!=g.to&&(c=N(f)),null!=g.from&&(d=N(f)));for(var h=f,k=void 0,l=f.markedSpans,m=g,n=0;n<l.length;++n)l[n]!=m&&(k||
(k=[])).push(l[n]);h.markedSpans=k;null==g.from&&this.collapsed&&!Oa(this.doc,f)&&a&&Da(f,tb(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(e=0;e<this.lines.length;++e)f=Fa(this.lines[e]),g=Cc(f),g>a.display.maxLineLength&&(a.display.maxLine=f,a.display.maxLineLength=g,a.display.maxLineChanged=!0);null!=d&&a&&this.collapsed&&la(a,d,c+1);this.lines.length=0;this.explicitlyCleared=!0;this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Hf(a.doc));a&&ca(a,"markerCleared",a,this,d,
c);b&&kb(a);this.parent&&this.parent.clear()}};Ta.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var d,c,e=0;e<this.lines.length;++e){var f=this.lines[e],g=Nb(f.markedSpans,this);if(null!=g.from&&(d=t(b?f:N(f),g.from),-1==a))return d;if(null!=g.to&&(c=t(b?f:N(f),g.to),1==a))return c}return d&&{from:d,to:c}};Ta.prototype.changed=function(){var a=this,b=this.find(-1,!0),d=this,c=this.doc.cm;b&&c&&pa(c,function(){var e=b.line,f=N(b.line);if(f=Dd(c,f))Ve(f),c.curOp.selectionChanged=
c.curOp.forceUpdate=!0;c.curOp.updateMaxLine=!0;Oa(d.doc,e)||null==d.height||(f=d.height,d.height=null,(f=Rb(d)-f)&&Da(e,e.height+f));ca(c,"markerChanged",c,a)})};Ta.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=ea(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)};Ta.prototype.detachLine=function(a){this.lines.splice(ea(this.lines,a),1);!this.lines.length&&this.doc.cm&&
(a=this.doc.cm.curOp,(a.maybeHiddenMarkers||(a.maybeHiddenMarkers=[])).push(this))};nb(Ta);var fc=function(a,b){this.markers=a;this.primary=b;for(b=0;b<a.length;++b)a[b].parent=this};fc.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();ca(this,"clear")}};fc.prototype.find=function(a,b){return this.primary.find(a,b)};nb(fc);var Fh=0,na=function(a,b,d,c,e){if(!(this instanceof na))return new na(a,b,d,c,e);null==
d&&(d=0);dc.call(this,[new cc([new xb("",null)])]);this.first=d;this.scrollTop=this.scrollLeft=0;this.cantEdit=!1;this.cleanGeneration=1;this.modeFrontier=this.highlightFrontier=d;d=t(d,0);this.sel=Na(d);this.history=new Pc(null);this.id=++Fh;this.modeOption=b;this.lineSep=c;this.direction="rtl"==e?"rtl":"ltr";this.extend=!1;"string"==typeof a&&(a=this.splitLines(a));Zd(this,{from:d,to:d,text:a});da(this,Na(d),Ia)};na.prototype=oe(dc.prototype,{constructor:na,iter:function(a,b,d){d?this.iterN(a-this.first,
b-a,d):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var d=0,c=0;c<b.length;++c)d+=b[c].height;this.insertInner(a-this.first,b,d)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=nd(this,this.first,this.first+this.size);return!1===a?b:b.join(a||this.lineSeparator())},setValue:ba(function(a){var b=t(this.first,0),d=this.first+this.size-1;Ab(this,{from:b,to:t(d,w(this,d).text.length),text:this.splitLines(a),origin:"setValue",full:!0},!0);this.cm&&
Ub(this.cm,0,0);da(this,Na(b),Ia)}),replaceRange:function(a,b,d,c){b=C(this,b);d=d?C(this,d):b;Bb(this,a,b,d,c)},getRange:function(a,b,d){a=Za(this,C(this,a),C(this,b));return!1===d?a:a.join(d||this.lineSeparator())},getLine:function(a){return(a=this.getLineHandle(a))&&a.text},getLineHandle:function(a){if(Lb(this,a))return w(this,a)},getLineNumber:function(a){return N(a)},getLineHandleVisualStart:function(a){"number"==typeof a&&(a=w(this,a));return Fa(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},
lastLine:function(){return this.first+this.size-1},clipPos:function(a){return C(this,a)},getCursor:function(a){var b=this.sel.primary();return null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||!1===a?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ba(function(a,b,d){a=C(this,"number"==typeof a?t(a,b||0):a);da(this,Na(a,null),d)}),setSelection:ba(function(a,b,d){var c=C(this,a);a=C(this,b||
a);da(this,Na(c,a),d)}),extendSelection:ba(function(a,b,d){Rc(this,C(this,a),b&&C(this,b),d)}),extendSelections:ba(function(a,b){Df(this,ve(this,a),b)}),extendSelectionsBy:ba(function(a,b){a=uc(this.sel.ranges,a);Df(this,ve(this,a),b)}),setSelections:ba(function(a,b,d){if(a.length){for(var c=[],e=0;e<a.length;e++)c[e]=new J(C(this,a[e].anchor),C(this,a[e].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex));da(this,Ca(this.cm,c,b),d)}}),addSelection:ba(function(a,b,d){var c=this.sel.ranges.slice(0);
c.push(new J(C(this,a),C(this,b||a)));da(this,Ca(this.cm,c,c.length-1),d)}),getSelection:function(a){for(var b=this.sel.ranges,d,c=0;c<b.length;c++){var e=Za(this,b[c].from(),b[c].to());d=d?d.concat(e):e}return!1===a?d:d.join(a||this.lineSeparator())},getSelections:function(a){for(var b=[],d=this.sel.ranges,c=0;c<d.length;c++){var e=Za(this,d[c].from(),d[c].to());!1!==a&&(e=e.join(a||this.lineSeparator()));b[c]=e}return b},replaceSelection:function(a,b,d){for(var c=[],e=0;e<this.sel.ranges.length;e++)c[e]=
a;this.replaceSelections(c,b,d||"+input")},replaceSelections:ba(function(a,b,d){for(var c=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];c[f]={from:g.from(),to:g.to(),text:this.splitLines(a[f]),origin:d}}if(a=b&&"end"!=b){a=[];e=d=t(this.first,0);for(f=0;f<c.length;f++){var h=c[f];g=vf(h.from,d,e);var k=vf(Ra(h),d,e);d=h.to;e=k;"around"==b?(h=this.sel.ranges[f],h=0>B(h.head,h.anchor),a[f]=new J(h?k:g,h?g:k)):a[f]=new J(g,g)}a=new ua(a,this.sel.primIndex)}b=a;for(a=c.length-1;0<=a;a--)Ab(this,
c[a]);b?Ef(this,b):this.cm&&vb(this.cm)}),undo:ba(function(){Uc(this,"undo")}),redo:ba(function(){Uc(this,"redo")}),undoSelection:ba(function(){Uc(this,"undo",!0)}),redoSelection:ba(function(){Uc(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,d=0,c=0;c<a.done.length;c++)a.done[c].ranges||++b;for(c=0;c<a.undone.length;c++)a.undone[c].ranges||++d;return{undo:b,redo:d}},clearHistory:function(){var a=
this;this.history=new Pc(this.history.maxGeneration);Sa(this,function(b){return b.history=a.history},!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){a&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null);return this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:yb(this.history.done),undone:yb(this.history.undone)}},setHistory:function(a){var b=
this.history=new Pc(this.history.maxGeneration);b.done=yb(a.done.slice(0),null,!0);b.undone=yb(a.undone.slice(0),null,!0)},setGutterMarker:ba(function(a,b,d){return bc(this,a,"gutter",function(c){var e=c.gutterMarkers||(c.gutterMarkers={});e[b]=d;!d&&pe(e)&&(c.gutterMarkers=null);return!0})}),clearGutter:ba(function(a){var b=this;this.iter(function(d){d.gutterMarkers&&d.gutterMarkers[a]&&bc(b,d,"gutter",function(){d.gutterMarkers[a]=null;pe(d.gutterMarkers)&&(d.gutterMarkers=null);return!0})})}),
lineInfo:function(a){if("number"==typeof a){if(!Lb(this,a))return null;var b=a;a=w(this,a);if(!a)return null}else if(b=N(a),null==b)return null;return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},addLineClass:ba(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass";if(c[e]){if(y(d).test(c[e]))return!1;
c[e]+=" "+d}else c[e]=d;return!0})}),removeLineClass:ba(function(a,b,d){return bc(this,a,"gutter"==b?"gutter":"class",function(c){var e="text"==b?"textClass":"background"==b?"bgClass":"gutter"==b?"gutterClass":"wrapClass",f=c[e];if(f)if(null==d)c[e]=null;else{var g=f.match(y(d));if(!g)return!1;var h=g.index+g[0].length;c[e]=f.slice(0,g.index)+(g.index&&h!=f.length?" ":"")+f.slice(h)||null}else return!1;return!0})}),addLineWidget:ba(function(a,b,d){return ah(this,a,b,d)}),removeLineWidget:function(a){a.clear()},
markText:function(a,b,d){return Cb(this,C(this,a),C(this,b),d,d&&d.type||"range")},setBookmark:function(a,b){b={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared,handleMouseEvents:b&&b.handleMouseEvents};a=C(this,a);return Cb(this,a,a,b,"bookmark")},findMarksAt:function(a){a=C(this,a);var b=[],d=w(this,a.line).markedSpans;if(d)for(var c=0;c<d.length;++c){var e=d[c];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||
e.marker)}return b},findMarks:function(a,b,d){a=C(this,a);b=C(this,b);var c=[],e=a.line;this.iter(a.line,b.line+1,function(f){if(f=f.markedSpans)for(var g=0;g<f.length;g++){var h=f[g];null!=h.to&&e==a.line&&a.ch>=h.to||null==h.from&&e!=a.line||null!=h.from&&e==b.line&&h.from>=b.ch||d&&!d(h.marker)||c.push(h.marker.parent||h.marker)}++e});return c},getAllMarks:function(){var a=[];this.iter(function(b){if(b=b.markedSpans)for(var d=0;d<b.length;++d)null!=b[d].from&&a.push(b[d].marker)});return a},posFromIndex:function(a){var b,
d=this.first,c=this.lineSeparator().length;this.iter(function(e){e=e.text.length+c;if(e>a)return b=a,!0;a-=e;++d});return C(this,t(d,b))},indexFromPos:function(a){a=C(this,a);var b=a.ch;if(a.line<this.first||0>a.ch)return 0;var d=this.lineSeparator().length;this.iter(this.first,a.line,function(c){b+=c.text.length+d});return b},copy:function(a){var b=new na(nd(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction);b.scrollTop=this.scrollTop;b.scrollLeft=this.scrollLeft;
b.sel=this.sel;b.extend=!1;a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory()));return b},linkedDoc:function(a){a||(a={});var b=this.first,d=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from);null!=a.to&&a.to<d&&(d=a.to);b=new na(nd(this,b,d),a.mode||this.modeOption,b,this.lineSep,this.direction);a.sharedHist&&(b.history=this.history);(this.linked||(this.linked=[])).push({doc:b,sharedHist:a.sharedHist});b.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}];a=Sf(this);
for(d=0;d<a.length;d++){var c=a[d],e=c.find(),f=b.clipPos(e.from);e=b.clipPos(e.to);B(f,e)&&(f=Cb(b,f,e,c.primary,c.primary.type),c.markers.push(f),f.parent=c)}return b},unlinkDoc:function(a){a instanceof U&&(a=a.doc);if(this.linked)for(var b=0;b<this.linked.length;++b)if(this.linked[b].doc==a){this.linked.splice(b,1);a.unlinkDoc(this);ch(Sf(this));break}if(a.history==this.history){var d=[a.id];Sa(a,function(c){return d.push(c.id)},!0);a.history=new Pc(null);a.history.done=yb(this.history.done,d);
a.history.undone=yb(this.history.undone,d)}},iterLinkedDocs:function(a){Sa(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(a){return this.lineSep?a.split(this.lineSep):le(a)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ba(function(a){"rtl"!=a&&(a="ltr");a!=this.direction&&(this.direction=a,this.iter(function(b){return b.order=null}),this.cm&&Yg(this.cm))})});na.prototype.eachLine=na.prototype.iter;for(var Uf=0,lg=!1,Ua={3:"Pause",
8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",224:"Mod",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},qc=0;10>qc;qc++)Ua[qc+48]=Ua[qc+96]=String(qc);for(var cd=65;90>=cd;cd++)Ua[cd]=String.fromCharCode(cd);for(var rc=1;12>=rc;rc++)Ua[rc+111]=Ua[rc+63235]="F"+rc;var gc={basic:{Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",
Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},pcDefault:{"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},emacsy:{"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore",
"Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},macDefault:{"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext",
"Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]}};gc["default"]=ya?gc.macDefault:gc.pcDefault;var hc={selectAll:Jf,singleSelection:function(a){return a.setSelection(a.getCursor("anchor"),a.getCursor("head"),Ia)},killLine:function(a){return Eb(a,
function(b){if(b.empty()){var d=w(a.doc,b.head.line).text.length;return b.head.ch==d&&b.head.line<a.lastLine()?{from:b.head,to:t(b.head.line+1,0)}:{from:b.head,to:t(b.head.line,d)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:C(a.doc,t(b.to().line+1,0))}})},delLineLeft:function(a){return Eb(a,function(b){return{from:t(b.from().line,0),to:b.from()}})},delWrappedLineLeft:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,
"div").top+5;return{from:a.coordsChar({left:0,top:d},"div"),to:b.from()}})},delWrappedLineRight:function(a){return Eb(a,function(b){var d=a.charCoords(b.head,"div").top+5;d=a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:d},"div");return{from:b.from(),to:d}})},undo:function(a){return a.undo()},redo:function(a){return a.redo()},undoSelection:function(a){return a.undoSelection()},redoSelection:function(a){return a.redoSelection()},goDocStart:function(a){return a.extendSelection(t(a.firstLine(),
0))},goDocEnd:function(a){return a.extendSelection(t(a.lastLine()))},goLineStart:function(a){return a.extendSelectionsBy(function(b){return $f(a,b.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(a){return a.extendSelectionsBy(function(b){return ag(a,b.head)},{origin:"+move",bias:1})},goLineEnd:function(a){return a.extendSelectionsBy(function(b){b=b.head.line;var d=w(a.doc,b);var c=d;for(var e;e=qb(c,!1);)c=e.find(1,!0).line;c!=d&&(b=N(c));return ee(!0,a,d,b,-1)},{origin:"+move",bias:-1})},
goLineRight:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:b},"div")},oc)},goLineLeft:function(a){return a.extendSelectionsBy(function(b){b=a.cursorCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:b},"div")},oc)},goLineLeftSmart:function(a){return a.extendSelectionsBy(function(b){var d=a.cursorCoords(b.head,"div").top+5;d=a.coordsChar({left:0,top:d},"div");return d.ch<a.getLine(d.line).search(/\S/)?
ag(a,b.head):d},oc)},goLineUp:function(a){return a.moveV(-1,"line")},goLineDown:function(a){return a.moveV(1,"line")},goPageUp:function(a){return a.moveV(-1,"page")},goPageDown:function(a){return a.moveV(1,"page")},goCharLeft:function(a){return a.moveH(-1,"char")},goCharRight:function(a){return a.moveH(1,"char")},goColumnLeft:function(a){return a.moveH(-1,"column")},goColumnRight:function(a){return a.moveH(1,"column")},goWordLeft:function(a){return a.moveH(-1,"word")},goGroupRight:function(a){return a.moveH(1,
"group")},goGroupLeft:function(a){return a.moveH(-1,"group")},goWordRight:function(a){return a.moveH(1,"word")},delCharBefore:function(a){return a.deleteH(-1,"codepoint")},delCharAfter:function(a){return a.deleteH(1,"char")},delWordBefore:function(a){return a.deleteH(-1,"word")},delWordAfter:function(a){return a.deleteH(1,"word")},delGroupBefore:function(a){return a.deleteH(-1,"group")},delGroupAfter:function(a){return a.deleteH(1,"group")},indentAuto:function(a){return a.indentSelection("smart")},
indentMore:function(a){return a.indentSelection("add")},indentLess:function(a){return a.indentSelection("subtract")},insertTab:function(a){return a.replaceSelection("\t")},insertSoftTab:function(a){for(var b=[],d=a.listSelections(),c=a.options.tabSize,e=0;e<d.length;e++){var f=d[e].from();f=wa(a.getLine(f.line),f.ch,c);b.push(gd(c-f%c))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){return pa(a,function(){for(var b=
a.listSelections(),d=[],c=0;c<b.length;c++)if(b[c].empty()){var e=b[c].head,f=w(a.doc,e.line).text;if(f)if(e.ch==f.length&&(e=new t(e.line,e.ch-1)),0<e.ch)e=new t(e.line,e.ch+1),a.replaceRange(f.charAt(e.ch-1)+f.charAt(e.ch-2),t(e.line,e.ch-2),e,"+transpose");else if(e.line>a.doc.first){var g=w(a.doc,e.line-1).text;g&&(e=new t(e.line,1),a.replaceRange(f.charAt(0)+a.doc.lineSeparator()+g.charAt(g.length-1),t(e.line-1,g.length-1),e,"+transpose"))}d.push(new J(e,e))}a.setSelections(d)})},newlineAndIndent:function(a){return pa(a,
function(){for(var b=a.listSelections(),d=b.length-1;0<=d;d--)a.replaceRange(a.doc.lineSeparator(),b[d].anchor,b[d].head,"+input");b=a.listSelections();for(d=0;d<b.length;d++)a.indentLine(b[d].from().line,null,!0);vb(a)})},openLine:function(a){return a.replaceSelection("\n","start")},toggleOverwrite:function(a){return a.toggleOverwrite()}},jh=new Va,fe=null,ge=function(a,b,d){this.time=a;this.pos=b;this.button=d};ge.prototype.compare=function(a,b,d){return this.time+400>a&&0==B(b,this.pos)&&d==this.button};
var kc,jc,Fb={toString:function(){return"CodeMirror.Init"}},kg={},$c={};U.defaults=kg;U.optionHandlers=$c;var je=[];U.defineInitHook=function(a){return je.push(a)};var qa=null,O=function(a){this.cm=a;this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null;this.polling=new Va;this.composing=null;this.gracePeriod=!1;this.readDOMTimeout=null};O.prototype.init=function(a){function b(h){for(h=h.target;h;h=h.parentNode){if(h==g)return!0;if(/\bCodeMirror-(?:line)?widget\b/.test(h.className))break}return!1}
function d(h){if(b(h)&&!Z(f,h)){if(f.somethingSelected())qa={lineWise:!1,text:f.getSelections()},"cut"==h.type&&f.replaceSelection("",null,"cut");else if(f.options.lineWiseCopyCut){var k=og(f);qa={lineWise:!0,text:k.text};"cut"==h.type&&f.operation(function(){f.setSelections(k.ranges,0,Ia);f.replaceSelection("",null,"cut")})}else return;if(h.clipboardData){h.clipboardData.clearData();var l=qa.text.join("\n");h.clipboardData.setData("Text",l);if(h.clipboardData.getData("Text")==l){h.preventDefault();
return}}var m=qg();h=m.firstChild;f.display.lineSpace.insertBefore(m,f.display.lineSpace.firstChild);h.value=qa.text.join("\n");var n=document.activeElement;nc(h);setTimeout(function(){f.display.lineSpace.removeChild(m);n.focus();n==g&&e.showPrimarySelection()},50)}}var c=this,e=this,f=e.cm,g=e.div=a.lineDiv;pg(g,f.options.spellcheck,f.options.autocorrect,f.options.autocapitalize);z(g,"paste",function(h){!b(h)||Z(f,h)||ng(h,f)||11>=T&&setTimeout(aa(f,function(){return c.updateFromDOM()}),20)});z(g,
"compositionstart",function(h){c.composing={data:h.data,done:!1}});z(g,"compositionupdate",function(h){c.composing||(c.composing={data:h.data,done:!1})});z(g,"compositionend",function(h){c.composing&&(h.data!=c.composing.data&&c.readFromDOMSoon(),c.composing.done=!0)});z(g,"touchstart",function(){return e.forceCompositionEnd()});z(g,"input",function(){c.composing||c.readFromDOMSoon()});z(g,"copy",d);z(g,"cut",d)};O.prototype.screenReaderLabelChanged=function(a){a?this.div.setAttribute("aria-label",
a):this.div.removeAttribute("aria-label")};O.prototype.prepareSelection=function(){var a=ef(this.cm,!1);a.focus=document.activeElement==this.div;return a};O.prototype.showSelection=function(a,b){a&&this.cm.display.view.length&&((a.focus||b)&&this.showPrimarySelection(),this.showMultipleSelections(a))};O.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()};O.prototype.showPrimarySelection=function(){var a=this.getSelection(),b=this.cm,d=b.doc.sel.primary(),
c=d.from();d=d.to();if(b.display.viewTo==b.display.viewFrom||c.line>=b.display.viewTo||d.line<b.display.viewFrom)a.removeAllRanges();else{var e=ad(b,a.anchorNode,a.anchorOffset),f=ad(b,a.focusNode,a.focusOffset);if(!e||e.bad||!f||f.bad||0!=B(zc(e,f),c)||0!=B(yc(e,f),d))if(e=b.display.view,c=c.line>=b.display.viewFrom&&sg(b,c)||{node:e[0].measure.map[2],offset:0},d=d.line<b.display.viewTo&&sg(b,d),d||(d=e[e.length-1].measure,d=d.maps?d.maps[d.maps.length-1]:d.map,d={node:d[d.length-1],offset:d[d.length-
2]-d[d.length-3]}),c&&d){e=a.rangeCount&&a.getRangeAt(0);try{var g=Ob(c.node,c.offset,d.offset,d.node)}catch(h){}g&&(!Ma&&b.state.focused?(a.collapse(c.node,c.offset),g.collapsed||(a.removeAllRanges(),a.addRange(g))):(a.removeAllRanges(),a.addRange(g)),e&&null==a.anchorNode?a.addRange(e):Ma&&this.startGracePeriod());this.rememberSelection()}else a.removeAllRanges()}};O.prototype.startGracePeriod=function(){var a=this;clearTimeout(this.gracePeriod);this.gracePeriod=setTimeout(function(){a.gracePeriod=
!1;a.selectionChanged()&&a.cm.operation(function(){return a.cm.curOp.selectionChanged=!0})},20)};O.prototype.showMultipleSelections=function(a){D(this.cm.display.cursorDiv,a.cursors);D(this.cm.display.selectionDiv,a.selection)};O.prototype.rememberSelection=function(){var a=this.getSelection();this.lastAnchorNode=a.anchorNode;this.lastAnchorOffset=a.anchorOffset;this.lastFocusNode=a.focusNode;this.lastFocusOffset=a.focusOffset};O.prototype.selectionInEditor=function(){var a=this.getSelection();if(!a.rangeCount)return!1;
a=a.getRangeAt(0).commonAncestorContainer;return ja(this.div,a)};O.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())};O.prototype.blur=function(){this.div.blur()};O.prototype.getField=function(){return this.div};O.prototype.supportsTouch=function(){return!0};O.prototype.receivedFocus=function(){function a(){b.cm.state.focused&&(b.pollSelection(),b.polling.set(b.cm.options.pollInterval,
a))}var b=this;this.selectionInEditor()?this.pollSelection():pa(this.cm,function(){return b.cm.curOp.selectionChanged=!0});this.polling.set(this.cm.options.pollInterval,a)};O.prototype.selectionChanged=function(){var a=this.getSelection();return a.anchorNode!=this.lastAnchorNode||a.anchorOffset!=this.lastAnchorOffset||a.focusNode!=this.lastFocusNode||a.focusOffset!=this.lastFocusOffset};O.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var a=
this.getSelection(),b=this.cm;if(Fc&&Ec&&this.cm.display.gutterSpecs.length&&yh(a.anchorNode))this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),this.focus();else if(!this.composing){this.rememberSelection();var d=ad(b,a.anchorNode,a.anchorOffset),c=ad(b,a.focusNode,a.focusOffset);d&&c&&pa(b,function(){da(b.doc,Na(d,c),Ia);if(d.bad||c.bad)b.curOp.selectionChanged=!0})}}};O.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),
this.readDOMTimeout=null);var a=this.cm,b=a.display,d=a.doc.sel.primary(),c=d.from(),e=d.to();0==c.ch&&c.line>a.firstLine()&&(c=t(c.line-1,w(a.doc,c.line-1).length));e.ch==w(a.doc,e.line).text.length&&e.line<a.lastLine()&&(e=t(e.line+1,0));if(c.line<b.viewFrom||e.line>b.viewTo-1)return!1;var f;c.line==b.viewFrom||0==(f=bb(a,c.line))?(d=N(b.view[0].line),f=b.view[0].node):(d=N(b.view[f].line),f=b.view[f-1].node.nextSibling);var g=bb(a,e.line);g==b.view.length-1?(e=b.viewTo-1,b=b.lineDiv.lastChild):
(e=N(b.view[g+1].line)-1,b=b.view[g+1].node.previousSibling);if(!f)return!1;b=a.doc.splitLines(zh(a,f,b,d,e));for(f=Za(a.doc,t(d,0),t(e,w(a.doc,e).text.length));1<b.length&&1<f.length;)if(K(b)==K(f))b.pop(),f.pop(),e--;else if(b[0]==f[0])b.shift(),f.shift(),d++;else break;var h=0;g=0;for(var k=b[0],l=f[0],m=Math.min(k.length,l.length);h<m&&k.charCodeAt(h)==l.charCodeAt(h);)++h;k=K(b);l=K(f);for(m=Math.min(k.length-(1==b.length?h:0),l.length-(1==f.length?h:0));g<m&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-
g-1);)++g;if(1==b.length&&1==f.length&&d==c.line)for(;h&&h>c.ch&&k.charCodeAt(k.length-g-1)==l.charCodeAt(l.length-g-1);)h--,g++;b[b.length-1]=k.slice(0,k.length-g).replace(/^\u200b+/,"");b[0]=b[0].slice(h).replace(/\u200b+$/,"");c=t(d,h);d=t(e,f.length?K(f).length-g:0);if(1<b.length||b[0]||B(c,d))return Bb(a.doc,b,c,d,"+input"),!0};O.prototype.ensurePolled=function(){this.forceCompositionEnd()};O.prototype.reset=function(){this.forceCompositionEnd()};O.prototype.forceCompositionEnd=function(){this.composing&&
(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())};O.prototype.readFromDOMSoon=function(){var a=this;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){a.readDOMTimeout=null;if(a.composing)if(a.composing.done)a.composing=null;else return;a.updateFromDOM()},80))};O.prototype.updateFromDOM=function(){var a=this;!this.cm.isReadOnly()&&this.pollContent()||pa(this.cm,function(){return la(a.cm)})};O.prototype.setUneditable=function(a){a.contentEditable=
"false"};O.prototype.onKeyPress=function(a){0==a.charCode||this.composing||(a.preventDefault(),this.cm.isReadOnly()||aa(this.cm,ke)(this.cm,String.fromCharCode(null==a.charCode?a.keyCode:a.charCode),0))};O.prototype.readOnlyChanged=function(a){this.div.contentEditable=String("nocursor"!=a)};O.prototype.onContextMenu=function(){};O.prototype.resetPosition=function(){};O.prototype.needsContentAttribute=!0;var V=function(a){this.cm=a;this.prevInput="";this.pollingFast=!1;this.polling=new Va;this.hasSelection=
!1;this.composing=null};V.prototype.init=function(a){function b(g){if(!Z(e,g)){if(e.somethingSelected())qa={lineWise:!1,text:e.getSelections()};else if(e.options.lineWiseCopyCut){var h=og(e);qa={lineWise:!0,text:h.text};"cut"==g.type?e.setSelections(h.ranges,null,Ia):(c.prevInput="",f.value=h.text.join("\n"),nc(f))}else return;"cut"==g.type&&(e.state.cutIncoming=+new Date)}}var d=this,c=this,e=this.cm;this.createField(a);var f=this.textarea;a.wrapper.insertBefore(this.wrapper,a.wrapper.firstChild);
mc&&(f.style.width="0px");z(f,"input",function(){G&&9<=T&&d.hasSelection&&(d.hasSelection=null);c.poll()});z(f,"paste",function(g){Z(e,g)||ng(g,e)||(e.state.pasteIncoming=+new Date,c.fastPoll())});z(f,"cut",b);z(f,"copy",b);z(a.scroller,"paste",function(g){if(!La(a,g)&&!Z(e,g))if(f.dispatchEvent){var h=new Event("paste");h.clipboardData=g.clipboardData;f.dispatchEvent(h)}else e.state.pasteIncoming=+new Date,c.focus()});z(a.lineSpace,"selectstart",function(g){La(a,g)||ka(g)});z(f,"compositionstart",
function(){var g=e.getCursor("from");c.composing&&c.composing.range.clear();c.composing={start:g,range:e.markText(g,e.getCursor("to"),{className:"CodeMirror-composing"})}});z(f,"compositionend",function(){c.composing&&(c.poll(),c.composing.range.clear(),c.composing=null)})};V.prototype.createField=function(a){this.wrapper=qg();this.textarea=this.wrapper.firstChild};V.prototype.screenReaderLabelChanged=function(a){a?this.textarea.setAttribute("aria-label",a):this.textarea.removeAttribute("aria-label")};
V.prototype.prepareSelection=function(){var a=this.cm,b=a.display,d=a.doc,c=ef(a);if(a.options.moveInputWithCursor){a=Aa(a,d.sel.primary().head,"div");d=b.wrapper.getBoundingClientRect();var e=b.lineDiv.getBoundingClientRect();c.teTop=Math.max(0,Math.min(b.wrapper.clientHeight-10,a.top+e.top-d.top));c.teLeft=Math.max(0,Math.min(b.wrapper.clientWidth-10,a.left+e.left-d.left))}return c};V.prototype.showSelection=function(a){var b=this.cm.display;D(b.cursorDiv,a.cursors);D(b.selectionDiv,a.selection);
null!=a.teTop&&(this.wrapper.style.top=a.teTop+"px",this.wrapper.style.left=a.teLeft+"px")};V.prototype.reset=function(a){if(!this.contextMenuPending&&!this.composing){var b=this.cm;b.somethingSelected()?(this.prevInput="",a=b.getSelection(),this.textarea.value=a,b.state.focused&&nc(this.textarea),G&&9<=T&&(this.hasSelection=a)):a||(this.prevInput=this.textarea.value="",G&&9<=T&&(this.hasSelection=null))}};V.prototype.getField=function(){return this.textarea};V.prototype.supportsTouch=function(){return!1};
V.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!Zb||va()!=this.textarea))try{this.textarea.focus()}catch(a){}};V.prototype.blur=function(){this.textarea.blur()};V.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0};V.prototype.receivedFocus=function(){this.slowPoll()};V.prototype.slowPoll=function(){var a=this;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){a.poll();a.cm.state.focused&&a.slowPoll()})};V.prototype.fastPoll=
function(){function a(){d.poll()||b?(d.pollingFast=!1,d.slowPoll()):(b=!0,d.polling.set(60,a))}var b=!1,d=this;d.pollingFast=!0;d.polling.set(20,a)};V.prototype.poll=function(){var a=this,b=this.cm,d=this.textarea,c=this.prevInput;if(this.contextMenuPending||!b.state.focused||Eh(d)&&!c&&!this.composing||b.isReadOnly()||b.options.disableInput||b.state.keySeq)return!1;var e=d.value;if(e==c&&!b.somethingSelected())return!1;if(G&&9<=T&&this.hasSelection===e||ya&&/[\uf700-\uf7ff]/.test(e))return b.display.input.reset(),
!1;if(b.doc.sel==b.display.selForContextMenu){var f=e.charCodeAt(0);8203!=f||c||(c="\u200b");if(8666==f)return this.reset(),this.cm.execCommand("undo")}var g=0;for(f=Math.min(c.length,e.length);g<f&&c.charCodeAt(g)==e.charCodeAt(g);)++g;pa(b,function(){ke(b,e.slice(g),c.length-g,null,a.composing?"*compose":null);1E3<e.length||-1<e.indexOf("\n")?d.value=a.prevInput="":a.prevInput=e;a.composing&&(a.composing.range.clear(),a.composing.range=b.markText(a.composing.start,b.getCursor("to"),{className:"CodeMirror-composing"}))});
return!0};V.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)};V.prototype.onKeyPress=function(){G&&9<=T&&(this.hasSelection=null);this.fastPoll()};V.prototype.onContextMenu=function(a){function b(){if(null!=g.selectionStart){var q=e.somethingSelected(),r="\u200b"+(q?g.value:"");g.value="\u21da";g.value=r;c.prevInput=q?"":"\u200b";g.selectionStart=1;g.selectionEnd=r.length;f.selForContextMenu=e.doc.sel}}function d(){if(c.contextMenuPending==d&&(c.contextMenuPending=
!1,c.wrapper.style.cssText=m,g.style.cssText=l,G&&9>T&&f.scrollbars.setScrollTop(f.scroller.scrollTop=k),null!=g.selectionStart)){(!G||G&&9>T)&&b();var q=0,r=function(){f.selForContextMenu==e.doc.sel&&0==g.selectionStart&&0<g.selectionEnd&&"\u200b"==c.prevInput?aa(e,Jf)(e):10>q++?f.detectingSelectAll=setTimeout(r,500):(f.selForContextMenu=null,f.input.reset())};f.detectingSelectAll=setTimeout(r,200)}}var c=this,e=c.cm,f=e.display,g=c.textarea;c.contextMenuPending&&c.contextMenuPending();var h=eb(e,
a),k=f.scroller.scrollTop;if(h&&!Ba){e.options.resetSelectionOnContextMenu&&-1==e.doc.sel.contains(h)&&aa(e,da)(e.doc,Na(h),Ia);var l=g.style.cssText,m=c.wrapper.style.cssText;h=c.wrapper.offsetParent.getBoundingClientRect();c.wrapper.style.cssText="position: static";g.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(a.clientY-h.top-5)+"px; left: "+(a.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(G?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
if(fa)var n=window.scrollY;f.input.focus();fa&&window.scrollTo(null,n);f.input.reset();e.somethingSelected()||(g.value=c.prevInput=" ");c.contextMenuPending=d;f.selForContextMenu=e.doc.sel;clearTimeout(f.detectingSelectAll);G&&9<=T&&b();if(he){Kb(a);var p=function(){ra(window,"mouseup",p);setTimeout(d,20)};z(window,"mouseup",p)}else setTimeout(d,50)}};V.prototype.readOnlyChanged=function(a){a||this.reset();this.textarea.disabled="nocursor"==a;this.textarea.readOnly=!!a};V.prototype.setUneditable=
function(){};V.prototype.needsContentAttribute=!1;(function(a){function b(c,e,f,g){a.defaults[c]=e;f&&(d[c]=g?function(h,k,l){l!=Fb&&f(h,k,l)}:f)}var d=a.optionHandlers;a.defineOption=b;a.Init=Fb;b("value","",function(c,e){return c.setValue(e)},!0);b("mode",null,function(c,e){c.doc.modeOption=e;Yd(c)},!0);b("indentUnit",2,Yd,!0);b("indentWithTabs",!1);b("smartIndent",!0);b("tabSize",4,function(c){$b(c);Sb(c);la(c)},!0);b("lineSeparator",null,function(c,e){if(c.doc.lineSep=e){var f=[],g=c.doc.first;
c.doc.iter(function(k){for(var l=0;;){var m=k.text.indexOf(e,l);if(-1==m)break;l=m+e.length;f.push(t(g,m))}g++});for(var h=f.length-1;0<=h;h--)Bb(c.doc,e,f[h],t(f[h].line,f[h].ch+e.length))}});b("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,function(c,e,f){c.state.specialChars=new RegExp(e.source+(e.test("\t")?"":"|\t"),"g");f!=Fb&&c.refresh()});b("specialCharPlaceholder",Kg,function(c){return c.refresh()},!0);b("electricChars",
!0);b("inputStyle",Zb?"contenteditable":"textarea",function(){throw Error("inputStyle can not (yet) be changed in a running editor");},!0);b("spellcheck",!1,function(c,e){return c.getInputField().spellcheck=e},!0);b("autocorrect",!1,function(c,e){return c.getInputField().autocorrect=e},!0);b("autocapitalize",!1,function(c,e){return c.getInputField().autocapitalize=e},!0);b("rtlMoveVisually",!Dh);b("wholeLineUpdateBefore",!0);b("theme","default",function(c){jg(c);Yb(c)},!0);b("keyMap","default",function(c,
e,f){e=Vc(e);(f=f!=Fb&&Vc(f))&&f.detach&&f.detach(c,e);e.attach&&e.attach(c,f||null)});b("extraKeys",null);b("configureMouse",null);b("lineWrapping",!1,wh,!0);b("gutters",[],function(c,e){c.display.gutterSpecs=Wd(e,c.options.lineNumbers);Yb(c)},!0);b("fixedGutter",!0,function(c,e){c.display.gutters.style.left=e?Ld(c.display)+"px":"0";c.refresh()},!0);b("coverGutterNextToScrollbar",!1,function(c){return wb(c)},!0);b("scrollbarStyle","native",function(c){nf(c);wb(c);c.display.scrollbars.setScrollTop(c.doc.scrollTop);
c.display.scrollbars.setScrollLeft(c.doc.scrollLeft)},!0);b("lineNumbers",!1,function(c,e){c.display.gutterSpecs=Wd(c.options.gutters,e);Yb(c)},!0);b("firstLineNumber",1,Yb,!0);b("lineNumberFormatter",function(c){return c},Yb,!0);b("showCursorWhenSelecting",!1,Tb,!0);b("resetSelectionOnContextMenu",!0);b("lineWiseCopyCut",!0);b("pasteLinesPerSelection",!0);b("selectionsMayTouch",!1);b("readOnly",!1,function(c,e){"nocursor"==e&&(ub(c),c.display.input.blur());c.display.input.readOnlyChanged(e)});b("screenReaderLabel",
null,function(c,e){c.display.input.screenReaderLabelChanged(""===e?null:e)});b("disableInput",!1,function(c,e){e||c.display.input.reset()},!0);b("dragDrop",!0,vh);b("allowDropFileTypes",null);b("cursorBlinkRate",530);b("cursorScrollMargin",0);b("cursorHeight",1,Tb,!0);b("singleCursorHeightPerLine",!0,Tb,!0);b("workTime",100);b("workDelay",100);b("flattenSpans",!0,$b,!0);b("addModeClass",!1,$b,!0);b("pollInterval",100);b("undoDepth",200,function(c,e){return c.doc.history.undoDepth=e});b("historyEventDelay",
1250);b("viewportMargin",10,function(c){return c.refresh()},!0);b("maxHighlightLength",1E4,$b,!0);b("moveInputWithCursor",!0,function(c,e){e||c.display.input.resetPosition()});b("tabindex",null,function(c,e){return c.display.input.getField().tabIndex=e||""});b("autofocus",null);b("direction","ltr",function(c,e){return c.doc.setDirection(e)},!0);b("phrases",null)})(U);(function(a){var b=a.optionHandlers,d=a.helpers={};a.prototype={constructor:a,focus:function(){window.focus();this.display.input.focus()},
setOption:function(c,e){var f=this.options,g=f[c];if(f[c]!=e||"mode"==c)f[c]=e,b.hasOwnProperty(c)&&aa(this,b[c])(this,e,g),W(this,"optionChange",this,c)},getOption:function(c){return this.options[c]},getDoc:function(){return this.doc},addKeyMap:function(c,e){this.state.keyMaps[e?"push":"unshift"](Vc(c))},removeKeyMap:function(c){for(var e=this.state.keyMaps,f=0;f<e.length;++f)if(e[f]==c||e[f].name==c)return e.splice(f,1),!0},addOverlay:ia(function(c,e){var f=c.token?c:a.getMode(this.options,c);if(f.startState)throw Error("Overlays may not be stateful.");
wg(this.state.overlays,{mode:f,modeSpec:c,opaque:e&&e.opaque,priority:e&&e.priority||0},function(g){return g.priority});this.state.modeGen++;la(this)}),removeOverlay:ia(function(c){for(var e=this.state.overlays,f=0;f<e.length;++f){var g=e[f].modeSpec;if(g==c||"string"==typeof c&&g.name==c){e.splice(f,1);this.state.modeGen++;la(this);break}}}),indentLine:ia(function(c,e,f){"string"!=typeof e&&"number"!=typeof e&&(e=null==e?this.options.smartIndent?"smart":"prev":e?"add":"subtract");Lb(this.doc,c)&&
lc(this,c,e,f)}),indentSelection:ia(function(c){for(var e=this.doc.sel.ranges,f=-1,g=0;g<e.length;g++){var h=e[g];if(h.empty())h.head.line>f&&(lc(this,h.head.line,c,!0),f=h.head.line,g==this.doc.sel.primIndex&&vb(this));else{var k=h.from();h=h.to();var l=Math.max(f,k.line);f=Math.min(this.lastLine(),h.line-(h.ch?0:1))+1;for(h=l;h<f;++h)lc(this,h,c);h=this.doc.sel.ranges;0==k.ch&&e.length==h.length&&0<h[g].from().ch&&be(this.doc,g,new J(k,h[g].to()),Ia)}}}),getTokenAt:function(c,e){return Ae(this,
c,e)},getLineTokens:function(c,e){return Ae(this,t(c),e,!0)},getTokenTypeAt:function(c){c=C(this.doc,c);var e=ye(this,w(this.doc,c.line)),f=0,g=(e.length-1)/2;c=c.ch;if(0==c)e=e[2];else for(;;){var h=f+g>>1;if((h?e[2*h-1]:0)>=c)g=h;else if(e[2*h+1]<c)f=h+1;else{e=e[2*h+2];break}}f=e?e.indexOf("overlay "):-1;return 0>f?e:0==f?null:e.slice(0,f-1)},getModeAt:function(c){var e=this.doc.mode;return e.innerMode?a.innerMode(e,this.getTokenAt(c).state).mode:e},getHelper:function(c,e){return this.getHelpers(c,
e)[0]},getHelpers:function(c,e){var f=[];if(!d.hasOwnProperty(e))return f;var g=d[e];c=this.getModeAt(c);if("string"==typeof c[e])g[c[e]]&&f.push(g[c[e]]);else if(c[e])for(var h=0;h<c[e].length;h++){var k=g[c[e][h]];k&&f.push(k)}else c.helperType&&g[c.helperType]?f.push(g[c.helperType]):g[c.name]&&f.push(g[c.name]);for(e=0;e<g._global.length;e++)h=g._global[e],h.pred(c,this)&&-1==ea(f,h.val)&&f.push(h.val);return f},getStateAfter:function(c,e){var f=this.doc;c=Math.max(f.first,Math.min(null==c?f.first+
f.size-1:c,f.first+f.size-1));return Mb(this,c+1,e).state},cursorCoords:function(c,e){var f=this.doc.sel.primary();c=null==c?f.head:"object"==typeof c?C(this.doc,c):c?f.from():f.to();return Aa(this,c,e||"page")},charCoords:function(c,e){return Hd(this,C(this.doc,c),e||"page")},coordsChar:function(c,e){c=Ze(this,c,e||"page");return Jd(this,c.left,c.top)},lineAtHeight:function(c,e){c=Ze(this,{top:c,left:0},e||"page").top;return $a(this.doc,c+this.display.viewOffset)},heightAtLine:function(c,e,f){var g=
!1;if("number"==typeof c){var h=this.doc.first+this.doc.size-1;c<this.doc.first?c=this.doc.first:c>h&&(c=h,g=!0);c=w(this.doc,c)}return Gc(this,c,{top:0,left:0},e||"page",f||g).top+(g?this.doc.height-Ga(c):0)},defaultTextHeight:function(){return tb(this.display)},defaultCharWidth:function(){return sb(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(c,e,f,g,h){var k=this.display;c=Aa(this,C(this.doc,c));var l=c.bottom,m=c.left;e.style.position=
"absolute";e.setAttribute("cm-ignore-events","true");this.display.input.setUneditable(e);k.sizer.appendChild(e);if("over"==g)l=c.top;else if("above"==g||"near"==g){var n=Math.max(k.wrapper.clientHeight,this.doc.height),p=Math.max(k.sizer.clientWidth,k.lineSpace.clientWidth);("above"==g||c.bottom+e.offsetHeight>n)&&c.top>e.offsetHeight?l=c.top-e.offsetHeight:c.bottom+e.offsetHeight<=n&&(l=c.bottom);m+e.offsetWidth>p&&(m=p-e.offsetWidth)}e.style.top=l+"px";e.style.left=e.style.right="";"right"==h?(m=
k.sizer.clientWidth-e.offsetWidth,e.style.right="0px"):("left"==h?m=0:"middle"==h&&(m=(k.sizer.clientWidth-e.offsetWidth)/2),e.style.left=m+"px");f&&(c=Rd(this,{left:m,top:l,right:m+e.offsetWidth,bottom:l+e.offsetHeight}),null!=c.scrollTop&&Vb(this,c.scrollTop),null!=c.scrollLeft&&ib(this,c.scrollLeft))},triggerOnKeyDown:ia(dg),triggerOnKeyPress:ia(fg),triggerOnKeyUp:eg,triggerOnMouseDown:ia(gg),execCommand:function(c){if(hc.hasOwnProperty(c))return hc[c].call(null,this)},triggerElectric:ia(function(c){mg(this,
c)}),findPosH:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);c=C(this.doc,c);for(var k=0;k<e&&(c=me(this.doc,c,h,f,g),!c.hitSide);++k);return c},moveH:ia(function(c,e){var f=this;this.extendSelectionsBy(function(g){return f.display.shift||f.doc.extend||g.empty()?me(f.doc,g.head,c,e,f.options.rtlMoveVisually):0>c?g.from():g.to()},oc)}),deleteH:ia(function(c,e){var f=this.doc;this.doc.sel.somethingSelected()?f.replaceSelection("",null,"+delete"):Eb(this,function(g){var h=me(f,g.head,c,e,!1);return 0>c?
{from:h,to:g.head}:{from:g.head,to:h}})}),findPosV:function(c,e,f,g){var h=1;0>e&&(h=-1,e=-e);var k=C(this.doc,c);for(c=0;c<e&&(k=Aa(this,k,"div"),null==g?g=k.left:k.left=g,k=rg(this,k,h,f),!k.hitSide);++c);return k},moveV:ia(function(c,e){var f=this,g=this.doc,h=[],k=!this.display.shift&&!g.extend&&g.sel.somethingSelected();g.extendSelectionsBy(function(m){if(k)return 0>c?m.from():m.to();var n=Aa(f,m.head,"div");null!=m.goalColumn&&(n.left=m.goalColumn);h.push(n.left);var p=rg(f,n,c,e);"page"==e&&
m==g.sel.primary()&&Lc(f,Hd(f,p,"div").top-n.top);return p},oc);if(h.length)for(var l=0;l<g.sel.ranges.length;l++)g.sel.ranges[l].goalColumn=h[l]}),findWordAt:function(c){var e=w(this.doc,c.line).text,f=c.ch,g=c.ch;if(e){var h=this.getHelper(c,"wordChars");"before"!=c.sticky&&g!=e.length||!f?++g:--f;var k=e.charAt(f);for(k=vc(k,h)?function(l){return vc(l,h)}:/\s/.test(k)?function(l){return/\s/.test(l)}:function(l){return!/\s/.test(l)&&!vc(l)};0<f&&k(e.charAt(f-1));)--f;for(;g<e.length&&k(e.charAt(g));)++g}return new J(t(c.line,
f),t(c.line,g))},toggleOverwrite:function(c){if(null==c||c!=this.state.overwrite)(this.state.overwrite=!this.state.overwrite)?Wa(this.display.cursorDiv,"CodeMirror-overwrite"):hb(this.display.cursorDiv,"CodeMirror-overwrite"),W(this,"overwriteToggle",this,this.state.overwrite)},hasFocus:function(){return this.display.input.getField()==va()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ia(function(c,e){Ub(this,c,e)}),getScrollInfo:function(){var c=this.display.scroller;
return{left:c.scrollLeft,top:c.scrollTop,height:c.scrollHeight-Ha(this)-this.display.barHeight,width:c.scrollWidth-Ha(this)-this.display.barWidth,clientHeight:Cd(this),clientWidth:ab(this)}},scrollIntoView:ia(function(c,e){null==c?(c={from:this.doc.sel.primary().head,to:null},null==e&&(e=this.options.cursorScrollMargin)):"number"==typeof c?c={from:t(c,0),to:null}:null==c.from&&(c={from:c,to:null});c.to||(c.to=c.from);c.margin=e||0;null!=c.from.line?(Mc(this),this.curOp.scrollToPos=c):jf(this,c.from,
c.to,c.margin)}),setSize:ia(function(c,e){var f=this,g=function(k){return"number"==typeof k||/^\d+$/.test(String(k))?k+"px":k};null!=c&&(this.display.wrapper.style.width=g(c));null!=e&&(this.display.wrapper.style.height=g(e));this.options.lineWrapping&&We(this);var h=this.display.viewFrom;this.doc.iter(h,this.display.viewTo,function(k){if(k.widgets)for(var l=0;l<k.widgets.length;l++)if(k.widgets[l].noHScroll){Qa(f,h,"widget");break}++h});this.curOp.forceUpdate=!0;W(this,"refresh",this)}),operation:function(c){return pa(this,
c)},startOperation:function(){return jb(this)},endOperation:function(){return kb(this)},refresh:ia(function(){var c=this.display.cachedTextHeight;la(this);this.curOp.forceUpdate=!0;Sb(this);Ub(this,this.doc.scrollLeft,this.doc.scrollTop);Vd(this.display);(null==c||.5<Math.abs(c-tb(this.display))||this.options.lineWrapping)&&Md(this);W(this,"refresh",this)}),swapDoc:ia(function(c){var e=this.doc;e.cm=null;this.state.selectingText&&this.state.selectingText();xf(this,c);Sb(this);this.display.input.reset();
Ub(this,c.scrollLeft,c.scrollTop);this.curOp.forceScroll=!0;ca(this,"swapDoc",this,e);return e}),phrase:function(c){var e=this.options.phrases;return e&&Object.prototype.hasOwnProperty.call(e,c)?e[c]:c},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}};nb(a);a.registerHelper=function(c,e,f){d.hasOwnProperty(c)||
(d[c]=a[c]={_global:[]});d[c][e]=f};a.registerGlobalHelper=function(c,e,f,g){a.registerHelper(c,e,g);d[c]._global.push({pred:f,val:g})}})(U);var Gh="iter insert remove copy getEditor constructor".split(" "),sc;for(sc in na.prototype)na.prototype.hasOwnProperty(sc)&&0>ea(Gh,sc)&&(U.prototype[sc]=function(a){return function(){return a.apply(this.doc,arguments)}}(na.prototype[sc]));nb(na);U.inputStyles={textarea:V,contenteditable:O};U.defineMode=function(a){U.defaults.mode||"null"==a||(U.defaults.mode=
a);Bg.apply(this,arguments)};U.defineMIME=function(a,b){ob[a]=b};U.defineMode("null",function(){return{token:function(a){return a.skipToEnd()}}});U.defineMIME("text/plain","null");U.defineExtension=function(a,b){U.prototype[a]=b};U.defineDocExtension=function(a,b){na.prototype[a]=b};U.fromTextArea=function(a,b){function d(){a.value=h.getValue()}b=b?Xa(b):{};b.value=a.value;!b.tabindex&&a.tabIndex&&(b.tabindex=a.tabIndex);!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder);if(null==b.autofocus){var c=
va();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(z(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form;var f=e.submit;try{var g=e.submit=function(){d();e.submit=f;e.submit();e.submit=g}}catch(k){}}b.finishInit=function(k){k.save=d;k.getTextArea=function(){return a};k.toTextArea=function(){k.toTextArea=isNaN;d();a.parentNode.removeChild(k.getWrapperElement());a.style.display="";a.form&&(ra(a.form,"submit",d),b.leaveSubmitMethodAlone||"function"!=typeof a.form.submit||
(a.form.submit=f))}};a.style.display="none";var h=U(function(k){return a.parentNode.insertBefore(k,a.nextSibling)},b);return h};(function(a){a.off=ra;a.on=z;a.wheelEventPixels=Xg;a.Doc=na;a.splitLines=le;a.countColumn=wa;a.findColumn=fd;a.isWordChar=hd;a.Pass=Xc;a.signal=W;a.Line=xb;a.changeEnd=Ra;a.scrollbarModel=of;a.Pos=t;a.cmpPos=B;a.modes=kd;a.mimeModes=ob;a.resolveMode=xc;a.getMode=ld;a.modeExtensions=pb;a.extendMode=Cg;a.copyState=Ya;a.startState=ue;a.innerMode=md;a.commands=hc;a.keyMap=gc;
a.keyName=Zf;a.isModifierKey=Wf;a.lookupKey=Db;a.normalizeKeyMap=hh;a.StringStream=X;a.SharedTextMarker=fc;a.TextMarker=Ta;a.LineWidget=ec;a.e_preventDefault=ka;a.e_stopPropagation=se;a.e_stop=Kb;a.addClass=Wa;a.contains=ja;a.rmClass=hb;a.keyNames=Ua})(U);U.version="5.59.2";return U});


/***/ }),

/***/ "../node_modules/feather-icons/dist/feather.js":
/*!*****************************************************!*\
  !*** ../node_modules/feather-icons/dist/feather.js ***!
  \*****************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_574__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_574__);
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
/******/ 	__nested_webpack_require_574__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_574__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_574__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_574__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_574__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_574__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_574__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_574__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_574__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_574__(__nested_webpack_require_574__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_63153__) {

__nested_webpack_require_63153__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__nested_webpack_require_63153__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __nested_webpack_require_63153__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_64303__) {

var isObject = __nested_webpack_require_64303__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_64884__) {

"use strict";

var bind = __nested_webpack_require_64884__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __nested_webpack_require_64884__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __nested_webpack_require_64884__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __nested_webpack_require_64884__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __nested_webpack_require_64884__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __nested_webpack_require_64884__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __nested_webpack_require_64884__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_67506__) {

var toIndexedObject = __nested_webpack_require_67506__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __nested_webpack_require_67506__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __nested_webpack_require_67506__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_69228__) {

var aFunction = __nested_webpack_require_69228__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_70317__) {

var anObject = __nested_webpack_require_70317__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_71254__) {

var wellKnownSymbol = __nested_webpack_require_71254__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_73012__) {

var classofRaw = __nested_webpack_require_73012__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __nested_webpack_require_73012__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_74453__) {

var has = __nested_webpack_require_74453__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __nested_webpack_require_74453__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __nested_webpack_require_74453__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __nested_webpack_require_74453__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_75752__) {

var fails = __nested_webpack_require_75752__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_76425__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_76425__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __nested_webpack_require_76425__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __nested_webpack_require_76425__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __nested_webpack_require_76425__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __nested_webpack_require_76425__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_78439__) {

"use strict";

var toPrimitive = __nested_webpack_require_78439__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __nested_webpack_require_78439__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_78439__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_79489__) {

"use strict";

var $ = __nested_webpack_require_79489__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __nested_webpack_require_79489__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __nested_webpack_require_79489__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __nested_webpack_require_79489__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __nested_webpack_require_79489__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __nested_webpack_require_79489__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_79489__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __nested_webpack_require_79489__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_79489__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __nested_webpack_require_79489__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __nested_webpack_require_79489__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_84548__) {

var fails = __nested_webpack_require_84548__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_85211__) {

var global = __nested_webpack_require_85211__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_85211__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_86501__) {

var global = __nested_webpack_require_86501__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __nested_webpack_require_86501__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __nested_webpack_require_86501__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __nested_webpack_require_86501__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __nested_webpack_require_86501__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __nested_webpack_require_86501__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __nested_webpack_require_86501__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90209__) {

var shared = __nested_webpack_require_90209__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_90762__) {

var classof = __nested_webpack_require_90762__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __nested_webpack_require_90762__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __nested_webpack_require_90762__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_91626__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_91626__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_93334__) {

var DESCRIPTORS = __nested_webpack_require_93334__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_93334__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __nested_webpack_require_93334__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_94311__) {

var global = __nested_webpack_require_94311__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_94859__) {

var DESCRIPTORS = __nested_webpack_require_94859__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __nested_webpack_require_94859__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __nested_webpack_require_94859__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_95796__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __nested_webpack_require_95796__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __nested_webpack_require_95796__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_96779__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_96779__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __nested_webpack_require_96779__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __nested_webpack_require_96779__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __nested_webpack_require_96779__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __nested_webpack_require_96779__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __nested_webpack_require_96779__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __nested_webpack_require_96779__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_99095__) {

var wellKnownSymbol = __nested_webpack_require_99095__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __nested_webpack_require_99095__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_99926__) {

var fails = __nested_webpack_require_99926__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_101660__) {

"use strict";

var getPrototypeOf = __nested_webpack_require_101660__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __nested_webpack_require_101660__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_101660__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_101660__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __nested_webpack_require_101660__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_103948__) {

var fails = __nested_webpack_require_103948__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_104608__) {

var global = __nested_webpack_require_104608__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __nested_webpack_require_104608__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_105350__) {

var anObject = __nested_webpack_require_105350__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __nested_webpack_require_105350__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __nested_webpack_require_105350__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __nested_webpack_require_105350__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __nested_webpack_require_105350__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __nested_webpack_require_105350__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __nested_webpack_require_105350__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_107983__) {

var DESCRIPTORS = __nested_webpack_require_107983__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __nested_webpack_require_107983__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __nested_webpack_require_107983__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __nested_webpack_require_107983__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_109180__) {

var DESCRIPTORS = __nested_webpack_require_109180__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __nested_webpack_require_109180__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __nested_webpack_require_109180__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __nested_webpack_require_109180__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_110592__) {

var DESCRIPTORS = __nested_webpack_require_110592__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __nested_webpack_require_110592__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __nested_webpack_require_110592__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __nested_webpack_require_110592__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __nested_webpack_require_110592__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __nested_webpack_require_110592__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __nested_webpack_require_110592__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_112394__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __nested_webpack_require_112394__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_112394__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_113734__) {

var has = __nested_webpack_require_113734__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __nested_webpack_require_113734__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __nested_webpack_require_113734__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_113734__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_115046__) {

var has = __nested_webpack_require_115046__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __nested_webpack_require_115046__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __nested_webpack_require_115046__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __nested_webpack_require_115046__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_116282__) {

var internalObjectKeys = __nested_webpack_require_116282__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __nested_webpack_require_116282__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_117944__) {

var validateSetPrototypeOfArguments = __nested_webpack_require_117944__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_119101__) {

var global = __nested_webpack_require_119101__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __nested_webpack_require_119101__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __nested_webpack_require_119101__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __nested_webpack_require_119101__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120343__) {

module.exports = __nested_webpack_require_120343__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_120782__) {

var global = __nested_webpack_require_120782__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_120782__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __nested_webpack_require_120782__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __nested_webpack_require_120782__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __nested_webpack_require_120782__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __nested_webpack_require_120782__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __nested_webpack_require_120782__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_123762__) {

var global = __nested_webpack_require_123762__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __nested_webpack_require_123762__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_124480__) {

var defineProperty = __nested_webpack_require_124480__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __nested_webpack_require_124480__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __nested_webpack_require_124480__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_125451__) {

var shared = __nested_webpack_require_125451__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_125451__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_126088__) {

var global = __nested_webpack_require_126088__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __nested_webpack_require_126088__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __nested_webpack_require_126088__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_127098__) {

var toInteger = __nested_webpack_require_127098__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __nested_webpack_require_127098__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_128446__) {

var toInteger = __nested_webpack_require_128446__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_129314__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_129314__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __nested_webpack_require_129314__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_130652__) {

var toInteger = __nested_webpack_require_130652__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_131354__) {

var requireObjectCoercible = __nested_webpack_require_131354__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_132032__) {

var isObject = __nested_webpack_require_132032__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_133659__) {

var isObject = __nested_webpack_require_133659__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __nested_webpack_require_133659__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_134430__) {

var global = __nested_webpack_require_134430__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __nested_webpack_require_134430__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __nested_webpack_require_134430__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __nested_webpack_require_134430__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_135432__) {

var $ = __nested_webpack_require_135432__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __nested_webpack_require_135432__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __nested_webpack_require_135432__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_136446__) {

"use strict";

var codePointAt = __nested_webpack_require_136446__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __nested_webpack_require_136446__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __nested_webpack_require_136446__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_139191__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __nested_webpack_require_139191__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __nested_webpack_require_139191__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_142349__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __nested_webpack_require_142349__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __nested_webpack_require_142349__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __nested_webpack_require_142349__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_143325__) {

"use strict";


var _icons = __nested_webpack_require_143325__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __nested_webpack_require_143325__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __nested_webpack_require_143325__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_144107__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __nested_webpack_require_144107__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __nested_webpack_require_144107__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-bouy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_157167__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __nested_webpack_require_157167__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __nested_webpack_require_158389__) {

__nested_webpack_require_158389__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __nested_webpack_require_158389__(/*! /home/travis/build/feathericons/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=feather.js.map

/***/ }),

/***/ "../node_modules/select2/dist/js/select2.js":
/*!**************************************************!*\
  !*** ../node_modules/select2/dist/js/select2.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id with a prefix.
    // If an id already exists, it simply returns it with a prefix.

    var select2Id = element.getAttribute('data-select2-id');

    if (select2Id != null) {
      return select2Id;
    }

    // If element has id, use it.
    if (element.id) {
      select2Id = 'select2-data-' + element.id;
    } else {
      select2Id = 'select2-data-' + (++id).toString() +
        '-' + Utils.generateChars(4);
    }

    element.setAttribute('data-select2-id', select2Id);

    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select2-id');
  };

  Utils.copyNonInternalCssClasses = function (dest, src) {
    var classes;

    var destinationClasses = dest.getAttribute('class').trim().split(/\s+/);

    destinationClasses = destinationClasses.filter(function (clazz) {
      // Save all Select2 classes
      return clazz.indexOf('select2-') === 0;
    });

    var sourceClasses = src.getAttribute('class').trim().split(/\s+/);

    sourceClasses = sourceClasses.filter(function (clazz) {
      // Only copy non-Select2 classes
      return clazz.indexOf('select2-') !== 0;
    });

    var replacements = destinationClasses.concat(sourceClasses);

    dest.setAttribute('class', replacements.join(' '));
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option--selectable');

    var $selected = $options.filter('.select2-results__option--selected');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = selected.map(function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option--selectable');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && selectedIds.indexOf(id) > -1)) {
          this.classList.add('select2-results__option--selected');
          $option.attr('aria-selected', 'true');
        } else {
          this.classList.remove('select2-results__option--selected');
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.classList.add('select2-results__option');
    option.classList.add('select2-results__option--selectable');

    var attrs = {
      'role': 'option'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      attrs['aria-disabled'] = 'true';

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--disabled');
    }

    if (data.id == null) {
      option.classList.remove('select2-results__option--selectable');
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;

      option.classList.remove('select2-results__option--selectable');
      option.classList.add('select2-results__option--group');
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'none'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.hasClass('select2-results__option--selected')) {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('.select2-results__option--selectable');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element[0].classList.add('select2-results__option--highlighted');
      params.element[0].setAttribute('aria-selected', 'true');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option--selectable',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.hasClass('select2-results__option--selected')) {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option--selectable',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('.select2-results__option--selectable');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);
    this.$selection.attr('aria-controls', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection[0].classList.add('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';
    this.$selection.find('.select2-selection__rendered').attr('id', id);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on(
      'keydown',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        evt.stopPropagation();
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select2-selection__rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<button type="button" class="select2-selection__choice__remove" ' +
        'tabindex="-1">' +
          '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '<span class="select2-selection__choice__display"></span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    var selectionIdPrefix = this.$selection.find('.select2-selection__rendered')
      .attr('id') + '-choice-';

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      var selectionId = selectionIdPrefix + Utils.generateChars(4) + '-';

      if (selection.id) {
        selectionId += selection.id;
      } else {
        selectionId += Utils.generateChars(4);
      }

      $selection.find('.select2-selection__choice__display')
        .append(formatted)
        .attr('id', selectionId);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      var removeItem = this.options.get('translations').get('removeItem');

      var $remove = $selection.find('.select2-selection__choice__remove');

      $remove.attr('title', removeItem());
      $remove.attr('aria-label', removeItem());
      $remove.attr('aria-describedby', selectionId);

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    $rendered.append($selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[

], function () {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder[0].classList.add('select2-selection__placeholder');
    $placeholder[0].classList.remove('select2-selection__choice');

    var placeholderTitle = placeholder.title ||
      placeholder.text ||
      $placeholder.text();

    this.$selection.find('.select2-selection__rendered').attr(
      'title',
      placeholderTitle
    );

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    this.$selection.find('.select2-selection__clear').remove();
    this.$selection[0].classList.remove('select2-selection--clearable');

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var selectionId = this.$selection.find('.select2-selection__rendered')
      .attr('id');

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<button type="button" class="select2-selection__clear" tabindex="-1">' +
        '<span aria-hidden="true">&times;</span>' +
      '</button>'
    );
    $remove.attr('title', removeAll());
    $remove.attr('aria-label', removeAll());
    $remove.attr('aria-describedby', selectionId);
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.prepend($remove);
    this.$selection[0].classList.add('select2-selection--clearable');
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var searchLabel = this.options.get('translations').get('search');
    var $search = $(
      '<span class="select2-search select2-search--inline">' +
        '<textarea class="select2-search__field"'+
        ' type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" >' +
        '</textarea>' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('textarea');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    var $rendered = decorated.call(this);

    this._transferTabIndex();
    $rendered.append(this.$searchContainer);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';
    var selectionId = container.id + '-container';

    decorated.call(this, container, $container);

    self.$search.attr('aria-describedby', selectionId);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.resizeSearch();
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$selection
          .find('.select2-selection__choice').last();

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search--inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '100%';

    if (this.$search.attr('placeholder') === '') {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/selectionCss',[
  '../utils'
], function (Utils) {
  function SelectionCSS () { }

  SelectionCSS.prototype.render = function (decorated) {
    var $selection = decorated.call(this);

    var selectionCssClass = this.options.get('selectionCssClass') || '';

    if (selectionCssClass.indexOf(':all:') !== -1) {
      selectionCssClass = selectionCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($selection[0], this.$element[0]);
    }

    $selection.addClass(selectionCssClass);

    return $selection;
  };

  return SelectionCSS;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if (relayEvents.indexOf(name) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if (preventableEvents.indexOf(name) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var self = this;

    var data = Array.prototype.map.call(
      this.$element[0].querySelectorAll(':checked'),
      function (selectedElement) {
        return self.item($(selectedElement));
      }
    );

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if (
      data.element != null && data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if (val.indexOf(id) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if (
      data.element != null &&
      data.element.tagName.toLowerCase() === 'option'
    ) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && val.indexOf(id) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      if (
        this.tagName.toLowerCase() !== 'option' &&
        this.tagName.toLowerCase() !== 'optgroup'
      ) {
        return;
      }

      var $option = $(this);

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    this.$element.append($options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $(option);
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    var option = $option[0];

    if (option.tagName.toLowerCase() === 'option') {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if (option.tagName.toLowerCase() === 'optgroup') {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if (existingIds.indexOf(item.id) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        $option.append($children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if (typeof this._request.abort === 'function') {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !Array.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if (Array.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', 'true');

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    if (params.term == null) {
      return null;
    }

    var term = params.term.trim();

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if (separators.indexOf(termChar) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery'
], function ($) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);
    var searchLabel = this.options.get('translations').get('search');

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    this.$search.prop('autocomplete', this.options.get('autocomplete'));
    this.$search.attr('aria-label', searchLabel());

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer[0].classList.remove('select2-search--hide');
        } else {
          self.$searchContainer[0].classList.add('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown[0].classList.remove('select2');
    $dropdown[0].classList.add('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown[0].classList
      .contains('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown[0].classList
      .contains('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown[0].classList.remove('select2-dropdown--below');
      this.$dropdown[0].classList.remove('select2-dropdown--above');
      this.$dropdown[0].classList.add('select2-dropdown--' + newDirection);

      this.$container[0].classList.remove('select2-container--below');
      this.$container[0].classList.remove('select2-container--above');
      this.$container[0].classList.add('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/dropdown/dropdownCss',[
  '../utils'
], function (Utils) {
  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      Utils.copyNonInternalCssClasses($dropdown[0], this.$element[0]);
    }

    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/dropdown/tagsSearchHighlight',[
  '../utils'
], function (Utils) {
  function TagsSearchHighlight () { }

  TagsSearchHighlight.prototype.highlightFirstItem = function (decorated) {
    var $options = this.$results
    .find(
      '.select2-results__option--selectable' +
      ':not(.select2-results__option--selected)'
    );

    if ($options.length > 0) {
      var $firstOption = $options.first();
      var data = Utils.GetData($firstOption[0], 'data');
      var firstElement = data.element;

      if (firstElement && firstElement.getAttribute) {
        if (firstElement.getAttribute('data-select2-tag') === 'true') {
          $firstOption.trigger('mouseenter');

          return;
        }
      }
    }

    decorated.call(this);
  };

  return TagsSearchHighlight;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    },
    removeAllItems: function () {
      return 'Remove all items';
    },
    removeItem: function () {
      return 'Remove item';
    },
    search: function() {
      return 'Search';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/selectionCss',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',
  './dropdown/dropdownCss',
  './dropdown/tagsSearchHighlight',

  './i18n/en'
], function ($,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, SelectionCSS, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,
             DropdownCSS, TagsSearchHighlight,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }

      if (options.tags) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          TagsSearchHighlight
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (options.dropdownCssClass != null) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (options.selectionCssClass != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if (params.term == null || params.term.trim() === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdLanguageBase: './i18n/',
      autocomplete: 'off',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: {},
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!Array.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'jquery',
  './defaults',
  './utils'
], function ($, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.autocomplete == null && $e.prop('autocomplete')) {
      this.options.autocomplete = $e.prop('autocomplete');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if (excludedData.indexOf(key) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element[0].classList.add('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    this._observer = new window.MutationObserver(function (mutations) {
      self._syncA();
      self._syncS(mutations);
    });
    this._observer.observe(this.$element[0], {
      attributes: true,
      childList: true,
      subtree: false
    });
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if (nonRelayEvents.indexOf(name) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container[0].classList.add('select2-container--open');
    });

    this.on('close', function () {
      self.$container[0].classList.remove('select2-container--open');
    });

    this.on('enable', function () {
      self.$container[0].classList.remove('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container[0].classList.add('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container[0].classList.remove('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (mutations) {
    var self = this;

    if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          return true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      return true;
    } else if (Array.isArray(mutations)) {
      return mutations.some(function (mutation) {
        return self._isChangeMutation(mutation);
      });
    }

    return false;
  };

  Select2.prototype._syncSubtree = function (mutations) {
    var changed = this._isChangeMutation(mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container[0].classList.contains('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container[0].classList.contains('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container[0].classList.add('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if (Array.isArray(newVal)) {
      newVal = newVal.map(function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    Utils.RemoveData(this.$container[0]);
    this.$container.remove();

    this._observer.disconnect();
    this._observer = null;

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element[0].classList.remove('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container[0].classList
      .add('select2-container--' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if (thisMethods.indexOf(options) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));


/***/ }),

/***/ "../node_modules/spectrum-colorpicker2/dist/spectrum.js":
/*!**************************************************************!*\
  !*** ../node_modules/spectrum-colorpicker2/dist/spectrum.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Spectrum Colorpicker v2.0.0
// https://github.com/seballot/spectrum
// Author: Brian Grinstead and spectrum contributors
// License: MIT

(function (factory) {
    "use strict";

    if (true) { // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
})(function ($, undefined) {
    "use strict";

    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false, // Deprecated - use type instead
        type: '', // text, color, component or flat
        showInput: false,
        allowEmpty: true,
        showButtons: true,
        clickoutFiresChange: true,
        showInitial: false,
        showPalette: true,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 8,
        locale: "en",
        cancelText: "cancel",
        chooseText: "choose",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: "name",
        className: "", // Deprecated - use containerClassName and replacerClassName instead.
        containerClassName: "",
        replacerClassName: "",
        showAlpha: true,
        theme: "sp-light",
        palette: [
            ["#000000", "#444444", "#5b5b5b", "#999999", "#bcbcbc", "#eeeeee", "#f3f6f4", "#ffffff"],
            ["#f44336", "#744700", "#ce7e00", "#8fce00", "#2986cc", "#16537e", "#6a329f", "#c90076"],
            ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            ["#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            ["#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            ["#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
        ],
        selectionPalette: [],
        disabled: false,
        offset: null
    },
        spectrums = [],
        IE = !!/msie/i.exec(window.navigator.userAgent),
        rgbaSupport = (function () {
            function contains(str, substr) {
                return !!~('' + str).indexOf(substr);
            }

            var elem = document.createElement('div');
            var style = elem.style;
            style.cssText = 'background-color:rgba(0,0,0,.5)';
            return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
        })(),
        replaceInput = [
            "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9660;</div>",
            "</div>"
        ].join(''),
        markup = (function () {

            // IE does not support gradients with multiple stops, so we need to simulate
            //  that for the rainbow slider with 8 divs that each have a single gradient
            var gradientFix = "";
            if (IE) {
                for (var i = 1; i <= 6; i++) {
                    gradientFix += "<div class='sp-" + i + "'></div>";
                }
            }

            return [
                "<div class='sp-container sp-hidden'>",
                "<div class='sp-palette-container'>",
                "<div class='sp-palette sp-thumb sp-cf'></div>",
                "<div class='sp-palette-button-container sp-cf'>",
                "<button type='button' class='sp-palette-toggle'></button>",
                "</div>",
                "</div>",
                "<div class='sp-picker-container'>",
                "<div class='sp-top sp-cf'>",
                "<div class='sp-fill'></div>",
                "<div class='sp-top-inner'>",
                "<div class='sp-color'>",
                "<div class='sp-sat'>",
                "<div class='sp-val'>",
                "<div class='sp-dragger'></div>",
                "</div>",
                "</div>",
                "</div>",
                "<div class='sp-clear sp-clear-display'>",
                "</div>",
                "<div class='sp-hue'>",
                "<div class='sp-slider'></div>",
                gradientFix,
                "</div>",
                "</div>",
                "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                "</div>",
                "<div class='sp-input-container sp-cf'>",
                "<input class='sp-input' type='text' spellcheck='false'  />",
                "</div>",
                "<div class='sp-initial sp-thumb sp-cf'></div>",
                "<div class='sp-button-container sp-cf'>",
                "<button class='sp-cancel' href='#'></button>",
                "<button type='button' class='sp-choose'></button>",
                "</div>",
                "</div>",
                "</div>"
            ].join("");
        })();

    function paletteTemplate(p, color, className, opts) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if (current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
                var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';"></span></span>');
            } else {
                html.push('<span class="sp-thumb-el sp-clear-display" ><span class="sp-clear-palette-only" style="background-color: transparent;"></span></span>');
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        o.locale = o.locale || window.navigator.language;
        if (o.locale) o.locale = o.locale.split('-')[0].toLowerCase(); // handle locale like "fr-FR"
        if (o.locale != 'en' && $.spectrum.localization[o.locale]) {
            o = $.extend({}, $.spectrum.localization[o.locale], o);
        }
        var opts = $.extend({}, defaultOpts, o);

        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            type = opts.type,
            flat = (type == 'flat'),
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            isDragging = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = [],
            paletteArray = [],
            paletteLookup = {},
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            abortNextInputChange = false,
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            pickerContainer = container.find(".sp-picker-container"),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            clearButton = container.find(".sp-clear"),
            chooseButton = container.find(".sp-choose"),
            toggleButton = container.find(".sp-palette-toggle"),
            isInput = boundElement.is("input"),
            isInputTypeColor = isInput && boundElement.attr("type") === "color" && inputTypeColorSupport(),
            shouldReplace = isInput && type == 'color',
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            currentPreferredFormat = opts.preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
            isEmpty = !initialColor,
            allowEmpty = opts.allowEmpty;

        // Element to be updated with the input color. Populated in initialize method
        var originalInputContainer = null,
            colorizeElement = null,
            colorizeElementInitialColor = null,
            colorizeElementInitialBackground = null;

        //If there is a label for this element, when clicked on, show the colour picker
        var thisId = boundElement.attr('id');
        if (thisId !== undefined && thisId.length > 0) {
            var label = $('label[for="' + thisId + '"]');
            if (label.length) {
                label.on('click', function (e) {
                    e.preventDefault();
                    boundElement.spectrum('show');
                    return false;
                });
            }
        }

        function applyOptions() {

            if (opts.showPaletteOnly) {
                opts.showPalette = true;
            }

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);

            if (opts.palette) {
                palette = opts.palette.slice(0);
                paletteArray = $.isArray(palette[0]) ? palette : [palette];
                paletteLookup = {};
                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }

                // if showPaletteOnly and didn't set initialcolor
                // set initialcolor to first palette
                if (opts.showPaletteOnly && !initialColor) {
                    initialColor = (palette[0][0] === '') ? palette[0][0] : Object.keys(paletteLookup)[0];
                }
            }

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-clear-enabled", allowEmpty);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-buttons-disabled", !opts.togglePaletteOnly);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className).addClass(opts.containerClassName);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            originalInputContainer = $('<span class="sp-original-input-container"></span>');
            ['margin'].forEach(function (cssProp) {
                originalInputContainer.css(cssProp, boundElement.css(cssProp));
            });
            // inline-flex by default, switching to flex if needed
            if (boundElement.css('display') == 'block') originalInputContainer.css('display', 'flex');

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            } else if (type == 'text') {
                originalInputContainer.addClass('sp-colorize-container');
                boundElement.addClass('spectrum sp-colorize').wrap(originalInputContainer);
            } else if (type == 'component') {
                boundElement.addClass('spectrum').wrap(originalInputContainer);
                var addOn = $(["<div class='sp-colorize-container sp-add-on'>",
                    "<div class='sp-colorize'></div> ",
                    "</div>"].join(''));
                addOn.width(boundElement.outerHeight() + 'px')
                    .css('border-radius', boundElement.css('border-radius'))
                    .css('border', boundElement.css('border'));
                boundElement.addClass('with-add-on').before(addOn);
            }

            colorizeElement = boundElement.parent().find('.sp-colorize');
            colorizeElementInitialColor = colorizeElement.css('color');
            colorizeElementInitialBackground = colorizeElement.css('background-color');

            if (!allowEmpty) {
                clearButton.hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            updateSelectionPaletteFromStorage();

            offsetElement.on("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if (boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            [textInput, boundElement].forEach(function (input) {
                input.change(function () { setFromTextInput(input.val()); });
                input.on("paste", function () {
                    setTimeout(function () { setFromTextInput(input.val()); }, 1);
                });
                input.keydown(function (e) {
                    if (e.keyCode == 13) {
                        setFromTextInput($(input).val());
                        if (input == boundElement) hide();
                    }
                });
            });

            cancelButton.text(opts.cancelText);
            cancelButton.on("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                revert();
                hide();
            });

            clearButton.attr("title", opts.clearText);
            clearButton.on("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                isEmpty = true;
                move();

                if (flat) {
                    //for the flat style, this is a change event
                    updateOriginalInput(true);
                }
            });

            chooseButton.text(opts.chooseText);
            chooseButton.on("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (IE && textInput.is(":focus")) {
                    textInput.trigger('change');
                }

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            toggleButton.text(opts.showPaletteOnly ? opts.togglePaletteMoreText : opts.togglePaletteLessText);
            toggleButton.on("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                opts.showPaletteOnly = !opts.showPaletteOnly;

                // To make sure the Picker area is drawn on the right, next to the
                // Palette area (and not below the palette), first move the Palette
                // to the left to make space for the picker, plus 5px extra.
                // The 'applyOptions' function puts the whole container back into place
                // and takes care of the button-text and the sp-palette-only CSS class.
                if (!opts.showPaletteOnly && !flat) {
                    container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
                }
                applyOptions();
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                isEmpty = false;
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            }, dragStart, dragStop);

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                }
                else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - (currentValue * dragHeight);
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }

                move();

            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = tinycolor(initialColor).format || opts.preferredFormat;
                addColorToSelectionPalette(initialColor);
            } else if (initialColor === '') {
                set(initialColor);
                updateUI();
            } else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function paletteElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();
                }
                else {
                    set($(e.target).closest(".sp-thumb-el").data("color"));
                    move();

                    // If the picker is going to close immediately, a palette selection
                    // is a change.  Otherwise, it's a move only.
                    if (opts.hideAfterPaletteSelect) {
                        updateOriginalInput(true);
                        hide();
                    } else {
                        updateOriginalInput();
                    }
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.on(paletteEvent, ".sp-thumb-el", paletteElementClick);
            initialColorContainer.on(paletteEvent, ".sp-thumb-el:nth-child(1)", { ignore: true }, paletteElementClick);
        }

        function updateSelectionPaletteFromStorage() {

            if (localStorageKey) {
                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var localStorage = window.localStorage;
                    var oldPalette = localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete localStorage[localStorageKey];
                        $.each(oldPalette, function (i, c) {
                            addColorToSelectionPalette(c);
                        });
                    }
                }
                catch (e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
                    selectionPalette.push(rgb);
                    while (selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch (e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            if (opts.showPalette) {
                for (var i = 0; i < selectionPalette.length; i++) {
                    var rgb = tinycolor(selectionPalette[i]).toRgbString();

                    if (!paletteLookup[rgb]) {
                        unique.push(selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts);
            });

            updateSelectionPaletteFromStorage();

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            isDragging = true;
            container.addClass(draggingClass);
            shiftMovementDirection = null;
            boundElement.trigger('dragstart.spectrum', [get()]);
        }

        function dragStop() {
            isDragging = false;
            container.removeClass(draggingClass);
            boundElement.trigger('dragstop.spectrum', [get()]);
        }

        function setFromTextInput(value) {
            if (abortNextInputChange) { abortNextInputChange = false; return; }
            if ((value === null || value === "") && allowEmpty) {
                set(null);
                move();
                updateOriginalInput();
            }
            else {
                var tiny = tinycolor(value);
                if (tiny.isValid()) {
                    set(tiny);
                    move();
                    updateOriginalInput();
                }
                else {
                    textInput.addClass("sp-validation-error");
                }
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            // debugger;
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [get()]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).on("keydown.spectrum", onkeydown);
            $(doc).on("click.spectrum", clickout);
            $(window).on("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [colorOnShow]);
        }

        function onkeydown(e) {
            // Close on ESC
            if (e.keyCode === 27) {
                hide();
            }
        }

        function clickout(e) {
            // Return on right click.
            if (e.button == 2) { return; }

            // If a drag event was happening during the mouseup, don't hide
            // on click.
            if (isDragging) { return; }

            if (clickoutFiresChange) {
                updateOriginalInput(true);
            }
            else {
                revert();
            }
            hide();
        }

        function hide() {
            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).off("keydown.spectrum", onkeydown);
            $(doc).off("click.spectrum", clickout);
            $(window).off("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [get()]);
        }

        function revert() {
            set(colorOnShow, true);
            updateOriginalInput(true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                updateUI();
                return;
            }

            var newColor, newHsv;
            if ((!color || color === undefined) && allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                currentHue = (newHsv.h % 360) / 360;
                currentSaturation = newHsv.s;
                currentValue = newHsv.v;
                currentAlpha = newHsv.a;
            }
            updateUI();

            if (newColor && newColor.isValid() && !ignoreFormatChange) {
                currentPreferredFormat = opts.preferredFormat || newColor.getFormat();
            }
        }

        function get(opts) {
            opts = opts || {};

            if (allowEmpty && isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 1000) / 1000
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [get()]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                displayColor = '';

            //reset background info for preview element
            previewElement.removeClass("sp-clear-display");
            previewElement.css('background-color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                previewElement.addClass("sp-clear-display");
            }
            else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (rgbaSupport || realColor.alpha === 1) {
                    previewElement.css("background-color", realRgb);
                }
                else {
                    previewElement.css("background-color", "transparent");
                    previewElement.css("filter", realColor.toFilter());
                }

                if (opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (IE) {
                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    }
                    else {
                        alphaSliderInner.css("background", "-webkit-" + gradient);
                        alphaSliderInner.css("background", "-moz-" + gradient);
                        alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        alphaSliderInner.css("background",
                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(displayColor);
            }
            boundElement.val(displayColor);
            if (opts.type == "text" || opts.type == "component") {
                var color = realColor;
                if (color && colorizeElement) {
                    var textColor = (color.isLight() || color.getAlpha() < 0.4) ? 'black' : 'white';
                    colorizeElement.css('background-color', color.toRgbString()).css('color', textColor);
                } else {
                    colorizeElement.css('background-color', colorizeElementInitialBackground)
                        .css('color', colorizeElementInitialColor);
                }
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            if (allowEmpty && isEmpty) {
                //if selected color is empty, hide the helpers
                alphaSlideHelper.hide();
                slideHelper.hide();
                dragHelper.hide();
            }
            else {
                //make sure helpers are visible
                alphaSlideHelper.show();
                slideHelper.show();
                dragHelper.show();

                // Where to show the little circle in that displays your current selected color
                var dragX = s * dragWidth;
                var dragY = dragHeight - (v * dragHeight);
                dragX = Math.max(
                    -dragHelperHeight,
                    Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
                );
                dragY = Math.max(
                    -dragHelperHeight,
                    Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
                );
                dragHelper.css({
                    "top": dragY + "px",
                    "left": dragX + "px"
                });

                var alphaX = currentAlpha * alphaWidth;
                alphaSlideHelper.css({
                    "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
                });

                // Where to show the bar that displays your current selected hue
                var slideY = (currentHue) * slideHeight;
                slideHelper.css({
                    "top": (slideY - slideHelperHeight) + "px"
                });
            }
        }

        function updateOriginalInput(fireCallback) {
            var color = get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, colorOnShow);

            if (color) {
                displayColor = color.toString(currentPreferredFormat);
                // Update the selection palette with the current color
                addColorToSelectionPalette(color);
            }

            if (fireCallback && hasChanged) {
                callbacks.change(color);
                // we trigger the change event or input, but the input change event is also binded
                // to some spectrum processing, that we do no need
                abortNextInputChange = true;
                boundElement.trigger('change', [color]);
            }
        }

        function reflow() {
            if (!visible) {
                return; // Calculations would be useless and wouldn't be reliable anyways
            }
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                if (opts.offset) {
                    container.offset(opts.offset);
                } else {
                    container.offset(getOffset(container, offsetElement));
                }
            }

            updateHelperLocations();

            if (opts.showPalette) {
                drawPalette();
            }

            boundElement.trigger('reflow.spectrum');
        }

        function destroy() {
            boundElement.show().removeClass('spectrum with-add-on sp-colorize');
            offsetElement.off("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            if (colorizeElement) {
                colorizeElement.css('background-color', colorizeElementInitialBackground)
                    .css('color', colorizeElementInitialColor);
            }
            var originalInputContainer = boundElement.closest('.sp-original-input-container');
            if (originalInputContainer.length > 0) {
                originalInputContainer.after(boundElement).remove();
            }
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;

            if (optionName === "preferredFormat") {
                currentPreferredFormat = opts.preferredFormat;
            }
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        function setOffset(coord) {
            opts.offset = coord;
            reflow();
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            offset: setOffset,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        var offsetLeft = offset.left;
        var offsetTop = offset.top;

        offsetTop += inputHeight;

        offsetLeft -=
            Math.min(offsetLeft, (offsetLeft + dpWidth > viewWidth && viewWidth > dpWidth) ?
                Math.abs(offsetLeft + dpWidth - viewWidth) : 0);

        offsetTop -=
            Math.min(offsetTop, ((offsetTop + dpHeight > viewHeight && viewHeight > dpHeight) ?
                Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return {
            top: offsetTop,
            bottom: offset.bottom,
            left: offsetLeft,
            right: offset.right,
            width: offset.width,
            height: offset.height
        };
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && doc.documentMode < 9 && !e.button) {
                    return stop();
                }

                var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
                var pageX = t0 && t0.pageX || e.pageX;
                var pageY = t0 && t0.pageY || e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).on(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    move(e);

                    prevent(e);
                }
            }
        }

        function stop() {
            if (dragging) {
                $(doc).off(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");

                // Wait a tick before notifying observers to allow the click event
                // to fire in Chrome.
                setTimeout(function () {
                    onstop.apply(element, arguments);
                }, 0);
            }
            dragging = false;
        }

        $(element).on("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    function inputTypeColorSupport() {
        return $.fn.spectrum.inputTypeColorSupport();
    }

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {
                    var method = spect[opts];
                    if (!method) {
                        throw new Error("Spectrum: no such method: '" + opts + "'");
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var options = $.extend({}, $(this).data(), opts);
            // Infer default type from input params and deprecated options
            if (!$(this).is('input')) options.type = 'noInput';
            else if (options.flat || options.type == "flat") options.type = 'flat';
            else if ($(this).attr('type') == 'color') options.type = 'color';
            else options.type = options.type || 'component';

            var spect = spectrum(this, options);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;
    $.fn.spectrum.inputTypeColorSupport = function inputTypeColorSupport() {
        if (typeof inputTypeColorSupport._cachedResult === "undefined") {
            var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
            inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
        }
        return inputTypeColorSupport._cachedResult;
    };

    $.spectrum = {};
    $.spectrum.localization = {};
    $.spectrum.palettes = {};

    $.fn.spectrum.processNativeColorInputs = function () {
        var colorInputs = $("input[type=color]");
        if (colorInputs.length && !inputTypeColorSupport()) {
            colorInputs.spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor v1.1.2
    // https://github.com/bgrins/TinyColor
    // Brian Grinstead, MIT License

    (function () {

        var trimLeft = /^[\s,#]+/,
            trimRight = /\s+$/,
            tinyCounter = 0,
            math = Math,
            mathRound = math.round,
            mathMin = math.min,
            mathMax = math.max,
            mathRandom = math.random;

        var tinycolor = function (color, opts) {

            color = (color) ? color : '';
            opts = opts || {};

            // If input is already a tinycolor, return itself
            if (color instanceof tinycolor) {
                return color;
            }
            // If we are called as a function, call using new instead
            if (!(this instanceof tinycolor)) {
                return new tinycolor(color, opts);
            }

            var rgb = inputToRGB(color);
            this._originalInput = color;
            this._r = rgb.r;
            this._g = rgb.g;
            this._b = rgb.b;
            this._a = rgb.a;
            this._roundA = mathRound(1000 * this._a) / 1000;
            this._format = opts.format || rgb.format;
            this._gradientType = opts.gradientType;

            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1
            // If it was supposed to be 128, this was already taken care of by `inputToRgb`
            if (this._r < 1) { this._r = mathRound(this._r); }
            if (this._g < 1) { this._g = mathRound(this._g); }
            if (this._b < 1) { this._b = mathRound(this._b); }

            this._ok = rgb.ok;
            this._tc_id = tinyCounter++;
        };

        tinycolor.prototype = {
            isDark: function () {
                return this.getBrightness() < 128;
            },
            isLight: function () {
                return !this.isDark();
            },
            isValid: function () {
                return this._ok;
            },
            getOriginalInput: function () {
                return this._originalInput;
            },
            getFormat: function () {
                return this._format;
            },
            getAlpha: function () {
                return this._a;
            },
            getBrightness: function () {
                var rgb = this.toRgb();
                return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
            },
            setAlpha: function (value) {
                this._a = boundAlpha(value);
                this._roundA = mathRound(1000 * this._a) / 1000;
                return this;
            },
            toHsv: function () {
                var hsv = rgbToHsv(this._r, this._g, this._b);
                return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
            },
            toHsvString: function () {
                var hsv = rgbToHsv(this._r, this._g, this._b);
                var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                return (this._a == 1) ?
                    "hsv(" + h + ", " + s + "%, " + v + "%)" :
                    "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
            },
            toHsl: function () {
                var hsl = rgbToHsl(this._r, this._g, this._b);
                return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
            },
            toHslString: function () {
                var hsl = rgbToHsl(this._r, this._g, this._b);
                var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                return (this._a == 1) ?
                    "hsl(" + h + ", " + s + "%, " + l + "%)" :
                    "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
            },
            toHex: function (allow3Char) {
                return rgbToHex(this._r, this._g, this._b, allow3Char);
            },
            toHexString: function (allow3Char) {
                return '#' + this.toHex(allow3Char);
            },
            toHex8: function () {
                return rgbaToHex(this._r, this._g, this._b, this._a);
            },
            toHex8String: function () {
                return '#' + this.toHex8();
            },
            toRgb: function () {
                return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
            },
            toRgbString: function () {
                return (this._a == 1) ?
                    "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
                    "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
            },
            toPercentageRgb: function () {
                return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
            },
            toPercentageRgbString: function () {
                return (this._a == 1) ?
                    "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
                    "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
            },
            toName: function () {
                if (this._a === 0) {
                    return "transparent";
                }

                if (this._a < 1) {
                    return false;
                }

                return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
            },
            toFilter: function (secondColor) {
                var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
                var secondHex8String = hex8String;
                var gradientType = this._gradientType ? "GradientType = 1, " : "";

                if (secondColor) {
                    var s = tinycolor(secondColor);
                    secondHex8String = s.toHex8String();
                }

                return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
            },
            toString: function (format) {
                var formatSet = !!format;
                format = format || this._format;

                var formattedString = false;
                var hasAlpha = this._a < 1 && this._a >= 0;
                var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

                if (needsAlphaFormat) {
                    // Special case for "transparent", all other non-alpha formats
                    // will return rgba when there is transparency.
                    if (format === "name" && this._a === 0) {
                        return this.toName();
                    }
                    return this.toRgbString();
                }
                if (format === "rgb") {
                    formattedString = this.toRgbString();
                }
                if (format === "prgb") {
                    formattedString = this.toPercentageRgbString();
                }
                if (format === "hex" || format === "hex6") {
                    formattedString = this.toHexString();
                }
                if (format === "hex3") {
                    formattedString = this.toHexString(true);
                }
                if (format === "hex8") {
                    formattedString = this.toHex8String();
                }
                if (format === "name") {
                    formattedString = this.toName();
                }
                if (format === "hsl") {
                    formattedString = this.toHslString();
                }
                if (format === "hsv") {
                    formattedString = this.toHsvString();
                }

                return formattedString || this.toHexString();
            },

            _applyModification: function (fn, args) {
                var color = fn.apply(null, [this].concat([].slice.call(args)));
                this._r = color._r;
                this._g = color._g;
                this._b = color._b;
                this.setAlpha(color._a);
                return this;
            },
            lighten: function () {
                return this._applyModification(lighten, arguments);
            },
            brighten: function () {
                return this._applyModification(brighten, arguments);
            },
            darken: function () {
                return this._applyModification(darken, arguments);
            },
            desaturate: function () {
                return this._applyModification(desaturate, arguments);
            },
            saturate: function () {
                return this._applyModification(saturate, arguments);
            },
            greyscale: function () {
                return this._applyModification(greyscale, arguments);
            },
            spin: function () {
                return this._applyModification(spin, arguments);
            },

            _applyCombination: function (fn, args) {
                return fn.apply(null, [this].concat([].slice.call(args)));
            },
            analogous: function () {
                return this._applyCombination(analogous, arguments);
            },
            complement: function () {
                return this._applyCombination(complement, arguments);
            },
            monochromatic: function () {
                return this._applyCombination(monochromatic, arguments);
            },
            splitcomplement: function () {
                return this._applyCombination(splitcomplement, arguments);
            },
            triad: function () {
                return this._applyCombination(triad, arguments);
            },
            tetrad: function () {
                return this._applyCombination(tetrad, arguments);
            }
        };

        // If input is an object, force 1 into "1.0" to handle ratios properly
        // String input requires "1.0" as input, so 1 will be treated as 1
        tinycolor.fromRatio = function (color, opts) {
            if (typeof color == "object") {
                var newColor = {};
                for (var i in color) {
                    if (color.hasOwnProperty(i)) {
                        if (i === "a") {
                            newColor[i] = color[i];
                        }
                        else {
                            newColor[i] = convertToPercentage(color[i]);
                        }
                    }
                }
                color = newColor;
            }

            return tinycolor(color, opts);
        };

        // Given a string or object, convert that input to RGB
        // Possible string inputs:
        //
        //     "red"
        //     "#f00" or "f00"
        //     "#ff0000" or "ff0000"
        //     "#ff000000" or "ff000000"
        //     "rgb 255 0 0" or "rgb (255, 0, 0)"
        //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
        //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
        //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
        //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
        //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
        //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
        //
        function inputToRGB(color) {

            var rgb = { r: 0, g: 0, b: 0 };
            var a = 1;
            var ok = false;
            var format = false;

            if (typeof color == "string") {
                color = stringInputToObject(color);
            }

            if (typeof color == "object") {
                if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                    rgb = rgbToRgb(color.r, color.g, color.b);
                    ok = true;
                    format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                    color.s = convertToPercentage(color.s);
                    color.v = convertToPercentage(color.v);
                    rgb = hsvToRgb(color.h, color.s, color.v);
                    ok = true;
                    format = "hsv";
                }
                else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                    color.s = convertToPercentage(color.s);
                    color.l = convertToPercentage(color.l);
                    rgb = hslToRgb(color.h, color.s, color.l);
                    ok = true;
                    format = "hsl";
                }

                if (color.hasOwnProperty("a")) {
                    a = color.a;
                }
            }

            a = boundAlpha(a);

            return {
                ok: ok,
                format: color.format || format,
                r: mathMin(255, mathMax(rgb.r, 0)),
                g: mathMin(255, mathMax(rgb.g, 0)),
                b: mathMin(255, mathMax(rgb.b, 0)),
                a: a
            };
        }


        // Conversion Functions
        // --------------------

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

        // `rgbToRgb`
        // Handle bounds / percentage checking to conform to CSS color spec
        // <http://www.w3.org/TR/css3-color/>
        // *Assumes:* r, g, b in [0, 255] or [0, 1]
        // *Returns:* { r, g, b } in [0, 255]
        function rgbToRgb(r, g, b) {
            return {
                r: bound01(r, 255) * 255,
                g: bound01(g, 255) * 255,
                b: bound01(b, 255) * 255
            };
        }

        // `rgbToHsl`
        // Converts an RGB color value to HSL.
        // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
        // *Returns:* { h, s, l } in [0,1]
        function rgbToHsl(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            }
            else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }

                h /= 6;
            }

            return { h: h, s: s, l: l };
        }

        // `hslToRgb`
        // Converts an HSL color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hslToRgb(h, s, l) {
            var r, g, b;

            h = bound01(h, 360);
            s = bound01(s, 100);
            l = bound01(l, 100);

            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            if (s === 0) {
                r = g = b = l; // achromatic
            }
            else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHsv`
        // Converts an RGB color value to HSV
        // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
        // *Returns:* { h, s, v } in [0,1]
        function rgbToHsv(r, g, b) {

            r = bound01(r, 255);
            g = bound01(g, 255);
            b = bound01(b, 255);

            var max = mathMax(r, g, b), min = mathMin(r, g, b);
            var h, s, v = max;

            var d = max - min;
            s = max === 0 ? 0 : d / max;

            if (max == min) {
                h = 0; // achromatic
            }
            else {
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        }

        // `hsvToRgb`
        // Converts an HSV color value to RGB.
        // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
        // *Returns:* { r, g, b } in the set [0, 255]
        function hsvToRgb(h, s, v) {

            h = bound01(h, 360) * 6;
            s = bound01(s, 100);
            v = bound01(v, 100);

            var i = math.floor(h),
                f = h - i,
                p = v * (1 - s),
                q = v * (1 - f * s),
                t = v * (1 - (1 - f) * s),
                mod = i % 6,
                r = [v, q, p, p, t, v][mod],
                g = [t, v, v, q, p, p][mod],
                b = [p, p, t, v, v, q][mod];

            return { r: r * 255, g: g * 255, b: b * 255 };
        }

        // `rgbToHex`
        // Converts an RGB color to hex
        // Assumes r, g, and b are contained in the set [0, 255]
        // Returns a 3 or 6 character hex
        function rgbToHex(r, g, b, allow3Char) {

            var hex = [
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            // Return a 3 character hex if possible
            if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
                return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
            }

            return hex.join("");
        }
        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b and a are contained in the set [0, 255]
        // Returns an 8 character hex
        function rgbaToHex(r, g, b, a) {

            var hex = [
                pad2(convertDecimalToHex(a)),
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            return hex.join("");
        }

        // `equals`
        // Can be called with any tinycolor input
        tinycolor.equals = function (color1, color2) {
            if (!color1 || !color2) { return false; }
            return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function () {
            return tinycolor.fromRatio({
                r: mathRandom(),
                g: mathRandom(),
                b: mathRandom()
            });
        };


        // Modification Functions
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

        function desaturate(color, amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = tinycolor(color).toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        }

        function saturate(color, amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = tinycolor(color).toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return tinycolor(hsl);
        }

        function greyscale(color) {
            return tinycolor(color).desaturate(100);
        }

        function lighten(color, amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = tinycolor(color).toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        }

        function brighten(color, amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var rgb = tinycolor(color).toRgb();
            rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
            rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
            rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
            return tinycolor(rgb);
        }

        function darken(color, amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = tinycolor(color).toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return tinycolor(hsl);
        }

        // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
        // Values outside of this range will be wrapped into this range.
        function spin(color, amount) {
            var hsl = tinycolor(color).toHsl();
            var hue = (mathRound(hsl.h) + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return tinycolor(hsl);
        }

        // Combination Functions
        // ---------------------
        // Thanks to jQuery xColor for some of the ideas behind these
        // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

        function complement(color) {
            var hsl = tinycolor(color).toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return tinycolor(hsl);
        }

        function triad(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
            ];
        }

        function tetrad(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
            ];
        }

        function splitcomplement(color) {
            var hsl = tinycolor(color).toHsl();
            var h = hsl.h;
            return [
                tinycolor(color),
                tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
                tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
            ];
        }

        function analogous(color, results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = tinycolor(color).toHsl();
            var part = 360 / slices;
            var ret = [tinycolor(color)];

            for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results;) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(tinycolor(hsl));
            }
            return ret;
        }

        function monochromatic(color, results) {
            results = results || 6;
            var hsv = tinycolor(color).toHsv();
            var h = hsv.h, s = hsv.s, v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(tinycolor({ h: h, s: s, v: v }));
                v = (v + modification) % 1;
            }

            return ret;
        }

        // Utility Functions
        // ---------------------

        tinycolor.mix = function (color1, color2, amount) {
            amount = (amount === 0) ? 0 : (amount || 50);

            var rgb1 = tinycolor(color1).toRgb();
            var rgb2 = tinycolor(color2).toRgb();

            var p = amount / 100;
            var w = p * 2 - 1;
            var a = rgb2.a - rgb1.a;

            var w1;

            if (w * a == -1) {
                w1 = w;
            } else {
                w1 = (w + a) / (1 + w * a);
            }

            w1 = (w1 + 1) / 2;

            var w2 = 1 - w1;

            var rgba = {
                r: rgb2.r * w1 + rgb1.r * w2,
                g: rgb2.g * w1 + rgb1.g * w2,
                b: rgb2.b * w1 + rgb1.b * w2,
                a: rgb2.a * p + rgb1.a * (1 - p)
            };

            return tinycolor(rgba);
        };


        // Readability Functions
        // ---------------------
        // <http://www.w3.org/TR/AERT#color-contrast>

        // `readability`
        // Analyze the 2 colors and returns an object with the following properties:
        //    `brightness`: difference in brightness between the two colors
        //    `color`: difference in color/hue between the two colors
        tinycolor.readability = function (color1, color2) {
            var c1 = tinycolor(color1);
            var c2 = tinycolor(color2);
            var rgb1 = c1.toRgb();
            var rgb2 = c2.toRgb();
            var brightnessA = c1.getBrightness();
            var brightnessB = c2.getBrightness();
            var colorDiff = (
                Math.max(rgb1.r, rgb2.r) - Math.min(rgb1.r, rgb2.r) +
                Math.max(rgb1.g, rgb2.g) - Math.min(rgb1.g, rgb2.g) +
                Math.max(rgb1.b, rgb2.b) - Math.min(rgb1.b, rgb2.b)
            );

            return {
                brightness: Math.abs(brightnessA - brightnessB),
                color: colorDiff
            };
        };

        // `readable`
        // http://www.w3.org/TR/AERT#color-contrast
        // Ensure that foreground and background color combinations provide sufficient contrast.
        // *Example*
        //    tinycolor.isReadable("#000", "#111") => false
        tinycolor.isReadable = function (color1, color2) {
            var readability = tinycolor.readability(color1, color2);
            return readability.brightness > 125 && readability.color > 500;
        };

        // `mostReadable`
        // Given a base color and a list of possible foreground or background
        // colors for that base, returns the most readable color.
        // *Example*
        //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
        tinycolor.mostReadable = function (baseColor, colorList) {
            var bestColor = null;
            var bestScore = 0;
            var bestIsReadable = false;
            for (var i = 0; i < colorList.length; i++) {

                // We normalize both around the "acceptable" breaking point,
                // but rank brightness constrast higher than hue.

                var readability = tinycolor.readability(baseColor, colorList[i]);
                var readable = readability.brightness > 125 && readability.color > 500;
                var score = 3 * (readability.brightness / 125) + (readability.color / 500);

                if ((readable && !bestIsReadable) ||
                    (readable && bestIsReadable && score > bestScore) ||
                    ((!readable) && (!bestIsReadable) && score > bestScore)) {
                    bestIsReadable = readable;
                    bestScore = score;
                    bestColor = tinycolor(colorList[i]);
                }
            }
            return bestColor;
        };


        // Big List of Colors
        // ------------------
        // <http://www.w3.org/TR/css3-color/#svg-color>
        var names = tinycolor.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        };

        // Make it easy to access colors via `hexNames[hex]`
        var hexNames = tinycolor.hexNames = flip(names);


        // Utilities
        // ---------

        // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
        function flip(o) {
            var flipped = {};
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    flipped[o[i]] = i;
                }
            }
            return flipped;
        }

        // Return a valid alpha value [0,1] with all invalid values being set to 1
        function boundAlpha(a) {
            a = parseFloat(a);

            if (isNaN(a) || a < 0 || a > 1) {
                a = 1;
            }

            return a;
        }

        // Take input from [0, n] and return it as [0, 1]
        function bound01(n, max) {
            if (isOnePointZero(n)) { n = "100%"; }

            var processPercent = isPercentage(n);
            n = mathMin(max, mathMax(0, parseFloat(n)));

            // Automatically convert percentage into number
            if (processPercent) {
                n = parseInt(n * max, 10) / 100;
            }

            // Handle floating point rounding errors
            if ((math.abs(n - max) < 0.000001)) {
                return 1;
            }

            // Convert into [0, 1] range if it isn't already
            return (n % max) / parseFloat(max);
        }

        // Force a number between 0 and 1
        function clamp01(val) {
            return mathMin(1, mathMax(0, val));
        }

        // Parse a base-16 hex value into a base-10 integer
        function parseIntFromHex(val) {
            return parseInt(val, 16);
        }

        // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
        // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
        function isOnePointZero(n) {
            return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
        }

        // Check to see if string passed in is a percentage
        function isPercentage(n) {
            return typeof n === "string" && n.indexOf('%') != -1;
        }

        // Force a hex value to have 2 characters
        function pad2(c) {
            return c.length == 1 ? '0' + c : '' + c;
        }

        // Replace a decimal with it's percentage value
        function convertToPercentage(n) {
            if (n <= 1) {
                n = (n * 100) + "%";
            }

            return n;
        }

        // Converts a decimal to a hex value
        function convertDecimalToHex(d) {
            return Math.round(parseFloat(d) * 255).toString(16);
        }
        // Converts a hex value to a decimal
        function convertHexToDecimal(h) {
            return (parseIntFromHex(h) / 255);
        }

        var matchers = (function () {

            // <http://www.w3.org/TR/css3-values/#integers>
            var CSS_INTEGER = "[-\\+]?\\d+%?";

            // <http://www.w3.org/TR/css3-values/#number-value>
            var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

            // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
            var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

            // Actual matching.
            // Parentheses and commas are optional, but not required.
            // Whitespace can take the place of commas or opening paren
            var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
            var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

            return {
                rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
                rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
                hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
                hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
                hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
                hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
                hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            };
        })();

        // `stringInputToObject`
        // Permissive string parsing.  Take in a number of formats, and output an object
        // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
        function stringInputToObject(color) {

            color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
            var named = false;
            if (names[color]) {
                color = names[color];
                named = true;
            }
            else if (color == 'transparent') {
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
            }

            // Try to match string input using regular expressions.
            // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
            // Just return an object and let the conversion functions handle that.
            // This way the result will be the same whether the tinycolor is initialized with string or object.
            var match;
            if ((match = matchers.rgb.exec(color))) {
                return { r: match[1], g: match[2], b: match[3] };
            }
            if ((match = matchers.rgba.exec(color))) {
                return { r: match[1], g: match[2], b: match[3], a: match[4] };
            }
            if ((match = matchers.hsl.exec(color))) {
                return { h: match[1], s: match[2], l: match[3] };
            }
            if ((match = matchers.hsla.exec(color))) {
                return { h: match[1], s: match[2], l: match[3], a: match[4] };
            }
            if ((match = matchers.hsv.exec(color))) {
                return { h: match[1], s: match[2], v: match[3] };
            }
            if ((match = matchers.hsva.exec(color))) {
                return { h: match[1], s: match[2], v: match[3], a: match[4] };
            }
            if ((match = matchers.hex8.exec(color))) {
                return {
                    a: convertHexToDecimal(match[1]),
                    r: parseIntFromHex(match[2]),
                    g: parseIntFromHex(match[3]),
                    b: parseIntFromHex(match[4]),
                    format: named ? "name" : "hex8"
                };
            }
            if ((match = matchers.hex6.exec(color))) {
                return {
                    r: parseIntFromHex(match[1]),
                    g: parseIntFromHex(match[2]),
                    b: parseIntFromHex(match[3]),
                    format: named ? "name" : "hex"
                };
            }
            if ((match = matchers.hex3.exec(color))) {
                return {
                    r: parseIntFromHex(match[1] + '' + match[1]),
                    g: parseIntFromHex(match[2] + '' + match[2]),
                    b: parseIntFromHex(match[3] + '' + match[3]),
                    format: named ? "name" : "hex"
                };
            }

            return false;
        }

        window.tinycolor = tinycolor;
    })();

    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

});

// Spectrum Colorpicker
// Arabic (ar) localization
// https://github.com/seballot/spectrum
(function ( $ ) {

  var localization = $.spectrum.localization["ar"] = {
      cancelText: "إلغاء",
      chooseText: "إختار",
      clearText: "إرجاع الألوان على ما كانت",
      noColorSelectedText: "لم تختار أي لون",
      togglePaletteMoreText: "أكثر",
      togglePaletteLessText: "أقل"
  };

})( jQuery );

// Spectrum Colorpicker
// Catalan (ca) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["ca"] = {
        cancelText: "Cancel·lar",
        chooseText: "Escollir",
        clearText: "Esborrar color seleccionat",
        noColorSelectedText: "Cap color seleccionat",
        togglePaletteMoreText: "Més",
        togglePaletteLessText: "Menys"
    };

})( jQuery );

// Spectrum Colorpicker
// Czech (cs) localization
// https://github.com/seballot/spectrum
// author localization cs Pavel Laupe Dvorak pavel@pavel-dvorak.cz

(function ( $ ) {

    var localization = $.spectrum.localization["cs"] = {
        cancelText: "zrušit",
        chooseText: "vybrat",
        clearText: "Resetovat výměr barev",
        noColorSelectedText: "Žádná barva nebyla vybrána",
        togglePaletteMoreText: "více",
        togglePaletteLessText: "méně"
    };

})( jQuery );
// Spectrum Colorpicker
// German (de) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["de"] = {
        cancelText: "Abbrechen",
        chooseText: "Wählen",
        clearText: "Farbauswahl zurücksetzen",
        noColorSelectedText: "Keine Farbe ausgewählt",
        togglePaletteMoreText: "Mehr",
        togglePaletteLessText: "Weniger"
    };

})( jQuery );

// Spectrum Colorpicker
// Danish (dk) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["dk"] = {
		cancelText: "annuller",
		chooseText: "Vælg"
    };

})( jQuery );

// Spectrum Colorpicker
// Spanish (es) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["es"] = {
        cancelText: "Cancelar",
        chooseText: "Elegir",
        clearText: "Borrar color seleccionado",
        noColorSelectedText: "Ningún color seleccionado",
        togglePaletteMoreText: "Más",
        togglePaletteLessText: "Menos"
    };

})( jQuery );

// Spectrum Colorpicker
// Estonian (et) localization
// https://github.com/bgrins/spectrum

 (function ( $ ) {

     var localization = $.spectrum.localization["et"] = {
        cancelText: "Katkesta",
        chooseText: "Vali",
        clearText: "Tühista värvivalik",
        noColorSelectedText: "Ühtki värvi pole valitud",
        togglePaletteMoreText: "Rohkem",
        togglePaletteLessText: "Vähem"
    };

 })( jQuery );

// Spectrum Colorpicker
// Persian (fa) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["fa"] = {
        cancelText: "لغو",
        chooseText: "انتخاب",
        clearText: "تنظیم مجدد رنگ",
        noColorSelectedText: "هیچ رنگی انتخاب نشده است!",
        togglePaletteMoreText: "بیشتر",
        togglePaletteLessText: "کمتر"
    };

})( jQuery );

// Spectrum Colorpicker
// Finnish (fi) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["fi"] = {
        cancelText: "Kumoa",
        chooseText: "Valitse"
    };

})( jQuery );

// Spectrum Colorpicker
// French (fr) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["fr"] = {
        cancelText: "Annuler",
        chooseText: "Valider",
        clearText: "Effacer couleur sélectionnée",
        noColorSelectedText: "Aucune couleur sélectionnée",
        togglePaletteMoreText: "Plus",
        togglePaletteLessText: "Moins"
    };

})( jQuery );

// Spectrum Colorpicker
// Greek (gr) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["gr"] = {
        cancelText: "Ακύρωση",
        chooseText: "Επιλογή",
        clearText: "Καθαρισμός επιλεγμένου χρώματος",
        noColorSelectedText: "Δεν έχει επιλεχθεί κάποιο χρώμα",
        togglePaletteMoreText: "Περισσότερα",
        togglePaletteLessText: "Λιγότερα"
    };

})( jQuery );

// Spectrum Colorpicker
// Hebrew (he) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["he"] = {
        cancelText: "בטל בחירה",
        chooseText: "בחר צבע",
        clearText: "אפס בחירה",
        noColorSelectedText: "לא נבחר צבע",
        togglePaletteMoreText: "עוד צבעים",
        togglePaletteLessText: "פחות צבעים"
    };

})( jQuery );

// Spectrum Colorpicker
// Croatian (hr) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["hr"] = {
        cancelText: "Odustani",
        chooseText: "Odaberi",
        clearText: "Poništi odabir",
        noColorSelectedText: "Niti jedna boja nije odabrana",
        togglePaletteMoreText: "Više",
        togglePaletteLessText: "Manje"
    };

})( jQuery );

// Spectrum Colorpicker
// Hungarian (hu) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

  var localization = $.spectrum.localization["hu"] = {
      cancelText: "Mégsem",
      chooseText: "Mentés",
      clearText: "A színválasztás visszaállítása",
      noColorSelectedText: "Nincs szín kijelölve",
      togglePaletteMoreText: "Több",
      togglePaletteLessText: "Kevesebb"
  };

})( jQuery );

// Spectrum Colorpicker
// Indonesia/Bahasa Indonesia (id) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["id"] = {
        cancelText: "Batal",
        chooseText: "Pilih",
        clearText: "Hapus Pilihan Warna",
        noColorSelectedText: "Warna Tidak Dipilih",
        togglePaletteMoreText: "tambah",
        togglePaletteLessText: "kurangi"
    };

})( jQuery );

// Spectrum Colorpicker
// Italian (it) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["it"] = {
		cancelText: "annulla",
		chooseText: "scegli",
		clearText: "Annulla selezione colore",
		noColorSelectedText: "Nessun colore selezionato"
	};

})( jQuery );

// Spectrum Colorpicker
// Japanese (ja) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["ja"] = {
        cancelText: "中止",
        chooseText: "選択"
    };

})( jQuery );

// Spectrum Colorpicker
// Korean (ko) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["ko"] = {
        cancelText: "취소",
        chooseText: "선택",
        clearText: "선택 초기화",
        noColorSelectedText: "선택된 색상 없음",
        togglePaletteMoreText: "더보기",
        togglePaletteLessText: "줄이기"
    };

})( jQuery );

// Spectrum Colorpicker
// Lithuanian (lt) localization
// https://github.com/liesislukas

(function ( $ ) {

    var localization = $.spectrum.localization["lt"] = {
        cancelText: "Atšaukti",
        chooseText: "Pasirinkti",
        clearText: "Išvalyti pasirinkimą",
        noColorSelectedText: "Spalva nepasirinkta",
        togglePaletteMoreText: "Daugiau",
        togglePaletteLessText: "Mažiau"
    };

})( jQuery );

// Spectrum Colorpicker
// Norwegian, Bokmål (nb-no) localization
// https://github.com/greendimka

(function ( $ ) {

    var localization = $.spectrum.localization["nb-no"] = {
        cancelText: "Avbryte",
        chooseText: "Velg",
        clearText: "Tilbakestill",
        noColorSelectedText: "Farge er ikke valgt",
        togglePaletteMoreText: "Mer",
        togglePaletteLessText: "Mindre"
    };

})( jQuery );

// Spectrum Colorpicker
// Dutch (nl-nl) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["nl-nl"] = {
        cancelText: "Annuleer",
        chooseText: "Kies",
        clearText: "Wis kleur selectie",
        togglePaletteMoreText: 'Meer',
        togglePaletteLessText: 'Minder'
    };

})( jQuery );

// Spectrum Colorpicker
// Polish (pl) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["pl"] = {
        cancelText: "Anuluj",
        chooseText: "Wybierz",
        clearText: "Usuń wybór koloru",
        noColorSelectedText: "Nie wybrano koloru",
        togglePaletteMoreText: "Więcej",
        togglePaletteLessText: "Mniej"
    };

})( jQuery );

// Spectrum Colorpicker
// Brazilian (pt-br) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["pt-br"] = {
        cancelText: "Cancelar",
        chooseText: "Escolher",
        clearText: "Limpar cor selecionada",
        noColorSelectedText: "Nenhuma cor selecionada",
        togglePaletteMoreText: "Mais",
        togglePaletteLessText: "Menos"
    };

})( jQuery );

// Spectrum Colorpicker
// Portuguese (pt-pt) localization
// https://github.com/bgrins/spectrum

 (function ( $ ) {

     var localization = $.spectrum.localization["pt-pt"] = {
        cancelText: "Cancelar",
        chooseText: "Escolher",
        clearText: "Limpar cor seleccionada",
        noColorSelectedText: "Nenhuma cor seleccionada",
        togglePaletteMoreText: "Mais",
        togglePaletteLessText: "Menos"
    };

 })( jQuery );

// Spectrum Colorpicker
// Russian (ru) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["ru"] = {
        cancelText: "Отмена",
        chooseText: "Выбрать",
        clearText: "Сбросить",
        noColorSelectedText: "Цвет не выбран",
        togglePaletteMoreText: "Ещё",
        togglePaletteLessText: "Скрыть"
    };

})( jQuery );

// Spectrum Colorpicker
// Swedish (sv) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["sv"] = {
        cancelText: "Avbryt",
        chooseText: "Välj"
    };

})( jQuery );

// Spectrum Colorpicker
// Turkish (tr) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["tr"] = {
		cancelText: "iptal",
		chooseText: "tamam"
	};

})( jQuery );

// Spectrum Colorpicker
// Simplified Chinese (zh-cn) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["zh-cn"] = {
        cancelText: "取消",
        chooseText: "选择",
        clearText: "清除",
        togglePaletteMoreText: "更多选项",
        togglePaletteLessText: "隐藏",
        noColorSelectedText: "尚未选择任何颜色"
    };

})( jQuery );

// Spectrum Colorpicker
// Traditional Chinese (zh-tw) localization
// https://github.com/seballot/spectrum

(function ( $ ) {

    var localization = $.spectrum.localization["zh-tw"] = {
        cancelText: "取消",
        chooseText: "選擇",
        clearText: "清除",
        togglePaletteMoreText: "更多選項",
        togglePaletteLessText: "隱藏",
        noColorSelectedText: "尚未選擇任何顏色"
    };

})( jQuery );


/***/ }),

/***/ "../node_modules/sweetalert/dist/sweetalert.min.js":
/*!*********************************************************!*\
  !*** ../node_modules/sweetalert/dist/sweetalert.min.js ***!
  \*********************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("../assets/dev/js/admin/admin.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=admin.js.map