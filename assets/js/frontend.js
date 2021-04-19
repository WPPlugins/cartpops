/*! Copyright © Chris Jayden <help@cartpops.com> (https://cartpops.com) - cartpops - v1.2.16 - 18-04-2021 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/axios/index.js":
/*!**************************************!*\
  !*** ../node_modules/axios/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "../node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../node_modules/axios/lib/adapters/xhr.js":
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/adapters/xhr.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/axios.js":
/*!******************************************!*\
  !*** ../node_modules/axios/lib/axios.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "../node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/Cancel.js":
/*!**************************************************!*\
  !*** ../node_modules/axios/lib/cancel/Cancel.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/CancelToken.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/cancel/CancelToken.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/isCancel.js":
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/cancel/isCancel.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/Axios.js":
/*!***********************************************!*\
  !*** ../node_modules/axios/lib/core/Axios.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "../node_modules/axios/lib/core/InterceptorManager.js":
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/core/InterceptorManager.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "../node_modules/axios/lib/core/buildFullPath.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/core/buildFullPath.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/createError.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/core/createError.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "../node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/dispatchRequest.js":
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/core/dispatchRequest.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/core/enhanceError.js":
/*!******************************************************!*\
  !*** ../node_modules/axios/lib/core/enhanceError.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/mergeConfig.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/core/mergeConfig.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/settle.js":
/*!************************************************!*\
  !*** ../node_modules/axios/lib/core/settle.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "../node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "../node_modules/axios/lib/core/transformData.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/core/transformData.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "../node_modules/axios/lib/defaults.js":
/*!*********************************************!*\
  !*** ../node_modules/axios/lib/defaults.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "../node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "../node_modules/axios/lib/helpers/bind.js":
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/helpers/bind.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/buildURL.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/buildURL.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/combineURLs.js":
/*!********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/combineURLs.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/cookies.js":
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/cookies.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!**********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isAxiosError.js":
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!****************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/parseHeaders.js":
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/spread.js":
/*!***************************************************!*\
  !*** ../node_modules/axios/lib/helpers/spread.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/utils.js":
/*!******************************************!*\
  !*** ../node_modules/axios/lib/utils.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "../assets/dev/js/frontend/assistant.js":
/*!**********************************************!*\
  !*** ../assets/dev/js/frontend/assistant.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../assets/dev/js/frontend/core.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());


var CartPopsAssistant = /*#__PURE__*/function (_CartPopsCore) {
  _inherits(CartPopsAssistant, _CartPopsCore);

  var _super = _createSuper(CartPopsAssistant);

  function CartPopsAssistant(config, modals) {
    var _this;

    _classCallCheck(this, CartPopsAssistant);

    _this = _super.call(this, config, modals);
    _this.assistantEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-assistant');
    _this.assistantTriggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-toggle-assistant');
    return _this;
  }
  /**
  * Initialize the core of the plugin.
  */


  _createClass(CartPopsAssistant, [{
    key: "init",
    value: function init() {
      this._initListeners(this);

      this.emit('init', this);
    }
    /**
     * Initializes the event listeners.
     *
     * @private
     *
     * @param self instance of this object, used for binding "this" to the listeners.
     */

  }, {
    key: "_initListeners",
    value: function _initListeners(self) {
      this.drawerEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer');

      if (this.assistantTriggers && this.assistantEl) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.cpops-toggle-assistant', this.openAssistant.bind(self));
      }
    }
    /**
     * Handles the (+/-) quantity selectors.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "openAssistant",
    value: function openAssistant(ev) {
      ev.preventDefault();
      var btn = ev.target;
      var content = btn.getAttribute('data-assistant');

      if (content) {
        this.modals.assistant.show(content);
      }
    }
  }]);

  return CartPopsAssistant;
}(_core__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPopsAssistant);

/***/ }),

/***/ "../assets/dev/js/frontend/cart.js":
/*!*****************************************!*\
  !*** ../assets/dev/js/frontend/cart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../assets/dev/js/frontend/core.js");
/* harmony import */ var _modules_UpdateCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UpdateCart */ "../assets/dev/js/frontend/modules/UpdateCart.js");
/* harmony import */ var _modules_Coupons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Coupons */ "../assets/dev/js/frontend/modules/Coupons.js");
/* harmony import */ var _modules_RemoveProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/RemoveProduct */ "../assets/dev/js/frontend/modules/RemoveProduct.js");
/* harmony import */ var _modules_AddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/AddToCart */ "../assets/dev/js/frontend/modules/AddToCart.js");
/* harmony import */ var _modules_Requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Requests */ "../assets/dev/js/frontend/modules/Requests.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());







var CartPopsCart = /*#__PURE__*/function (_CartPopsCore) {
  _inherits(CartPopsCart, _CartPopsCore);

  var _super = _createSuper(CartPopsCart);

  function CartPopsCart(config, modals) {
    var _this;

    _classCallCheck(this, CartPopsCart);

    _this = _super.call(this, config, modals);
    _this.requestType = {
      addToCart: 'add_to_cart',
      removeCoupon: 'remove_coupon',
      addCoupon: 'add_coupon'
    };
    _this.updateDelay = null;
    _this.popupOpen = false;
    _this.openCart = true;
    return _this;
  }
  /**
  * Initialize the core of the plugin.
  */


  _createClass(CartPopsCart, [{
    key: "init",
    value: function init() {
      // Force Ajax fragment refresh. Should only be used with caution.
      if ('true' === this.config.forceRefresh) {
        this.refreshFragmentsOnLoad();
      }

      this._initListeners(this);

      this.emit('init', this);
    }
    /**
     * Refresh fragments onload.
     */

  }, {
    key: "refreshFragmentsOnLoad",
    value: function refreshFragmentsOnLoad() {
      setTimeout(function () {
        this.refreshFragments();
      }.bind(this), this.config.refreshDelay);
    }
    /**
     * Initializes the event listeners.
     *
     * @private
     *
     * @param self instance of this object, used for binding "this" to the listeners.
     */

  }, {
    key: "_initListeners",
    value: function _initListeners(self) {
      this.drawerEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer');
      this.popupEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-popup');
      this.documentBody = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body); // Listen to add to cart events and open cart.

      this.documentBody.on('added_to_cart', this.onAddedToCart.bind(self)); // Ajax add to cart on form submissions.

      if (this.config.ajaxAddToCart) {
        this.documentBody.on('submit', 'form.cart', this.singleAddProduct.bind(self));
      } // View cart links/buttons.


      this.documentBody.on('click', 'a.added_to_cart', this.viewCart.bind(self)); // Cart notifications

      this.drawerEl.on('click', '.cpops-drawer-notices-wrapper', this.hideCartNotification.bind(self)); // Quantity selectors.

      this.drawerEl.on('click', '.cpops-cart-item__quantity button', this.quantitySelector.bind(self));
      this.drawerEl.on('change', '.cpops-quantity__input', this.quantiySelectorChange.bind(self)); // Restore and remove.

      this.drawerEl.on('click', '.cpops-cart-item__actions--remove', {
        action: 'remove'
      }, this.updateItem.bind(self));
      this.drawerEl.on('click', '.cpops-restore-item', {
        action: 'restore'
      }, this.updateItem.bind(self)); // Coupons.

      this.drawerEl.on('click', '.cpops-drawer-form__button', this.addCoupon.bind(self));
      this.drawerEl.on('click', '.cpops-coupon-remove__item-delete', this.removeCoupon.bind(self)); // Refresh cart on the checkout/cart page if the shipping method is updated.

      if ('true' === this.config.isCheckoutPage || 'true' === this.config.isCartPage) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).on('updated_shipping_method', this.refreshFragments.bind(self));
      }
    }
    /**
     * To support themes that show a view cart link after an item is added to the cart.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "viewCart",
    value: function viewCart(ev) {
      ev.preventDefault();
      this.modals.drawer.show();
    }
    /**
     * Add a product to the cart.
     * @param {object} ev jQuery Event object.
     */

  }, {
    key: "addProduct",
    value: function addProduct(ev) {
      var buttonEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget);
      var productId = null; //If the button is disabled don't allow this to fire.

      if (buttonEl.hasClass('disabled')) {
        return;
      } //If the product is not simple on the shop page.


      if (buttonEl.hasClass('product_type_variable') || buttonEl.hasClass('product_type_bundle')) {
        return;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('form.cart').length > 0 && !buttonEl.hasClass('add_to_cart_button')) {
        var $form = buttonEl.closest('form.cart');
        productId = $form.find('input[name=add-to-cart]').val() || buttonEl.val();
      } else {
        productId = buttonEl.data('product_id');
      }

      if (!productId) {
        return;
      }

      ev.preventDefault();
      var data = {
        action: 'cpops_add_to_cart',
        nonce: this.config.nonce,
        'add-to-cart': productId,
        product_id: productId,
        request_type: this.requestType.addToCart
      };

      if (buttonEl.data('cpops-type')) {
        data.actionType = buttonEl.data('cpops-type');
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('form.cart').length > 0 && !buttonEl.hasClass('add_to_cart_button')) {
        $form.serializeArray().forEach(function (element) {
          data[element.name] = element.value;
        });
      } else {
        data.quantity = buttonEl.data('quantity');
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('adding_to_cart', [buttonEl, data]);
      (0,_modules_AddToCart__WEBPACK_IMPORTED_MODULE_5__.addToCart)($form, data, buttonEl);
    }
    /**
     * Single add to cart form submission.
     *
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "singleAddProduct",
    value: function singleAddProduct(ev) {
      var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget),
          buttonEl = form.find('button[type="submit"]'),
          data = {},
          rawData = form.serializeArray();
      var isUrl = false,
          productId = null,
          productIdExists = false;

      if (form.closest('.product').hasClass('product-type-external')) {
        return;
      }

      ev.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(rawData, function (key, form_item) {
        if ('productID' === form_item.name || 'add-to-cart' === form_item.name) {
          if (form_item.value) {
            productIdExists = true;
            return false;
          }
        }
      });

      if (!productIdExists) {
        isUrl = form.attr('action').match(/add-to-cart=([0-9]+)/);
        productId = isUrl ? isUrl[1] : false;
      }

      if (buttonEl.attr('name') && 'add-to-cart' === buttonEl.attr('name') && buttonEl.attr('value')) {
        productId = buttonEl.attr('value');
      }

      if (productId) {
        rawData.push({
          name: 'add-to-cart',
          value: productId
        });
      }

      rawData.push({
        name: 'action',
        value: 'cpops_add_to_cart'
      });
      rawData.push({
        name: 'product_id',
        value: productId
      });
      rawData.push({
        name: 'request_type',
        value: this.requestType.addToCart
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(rawData, function (i, obj) {
        data[obj.name] = obj.value;
      });
      (0,_modules_AddToCart__WEBPACK_IMPORTED_MODULE_5__.addToCart)(form, data, buttonEl);
    }
    /**
     * Added to cart
     *
     * @param {object} ev The jQuery Event object.
     * @param {Array} response Array with fragments from the WC Ajax API.
     * @param {string} cartHash Cart hash key.
     * @param {node} buton Button element.
     */

  }, {
    key: "onAddedToCart",
    value: function onAddedToCart(ev, response, cartHash, button) {
      if (ev) {
        ev.preventDefault();
      }

      var buttonArr = jquery__WEBPACK_IMPORTED_MODULE_0___default()(button);
      var addedToCartMessage = this.config.genericAddToCartMessage;
      var notificationEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-drawer-notices-wrapper');
      var openFlag = true;
      _modules_Requests__WEBPACK_IMPORTED_MODULE_6__.refreshFragments({
        data: {
          fragments: response
        }
      }, this.requestType.addToCart);
      notificationEl.empty();
      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(buttonArr, function (key, item) {
        if ('false' === item.getAttribute('data-cpops-cart-open')) {
          openFlag = false;
        }
      });

      if (openFlag) {
        switch (this.config.trigger) {
          case 'popup':
            this.modals.popup.show();
            break;

          case 'bar':
            this.modals.bar.show();
            break;

          default:
            this.modals.drawer.show();
            break;
        }
      }

      notificationEl.append("<div class=\"cpops-notification cpops-has-shadow cpops-is-light cpops-is-success\" data-type=\"success\">".concat(addedToCartMessage, "</div>"));
      setTimeout(function () {
        notificationEl.empty();
      }, this.config.notificationDelay);
    }
    /**
     * Handles the (+/-) quantity selectors.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "quantitySelector",
    value: function quantitySelector(ev) {
      ev.preventDefault();
      var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget),
          cartItemKey = element.data('key'),
          action = element.data('action'),
          inputEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#q-' + cartItemKey),
          step = parseFloat(inputEl.attr('step')),
          currentQuantity = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(inputEl).val());
      var setQuantity = 0;

      if ('down' === action && 1 === currentQuantity) {
        setQuantity = 0;
        (0,_modules_RemoveProduct__WEBPACK_IMPORTED_MODULE_4__.removeProduct)(cartItemKey);
      } else if ('down' === action && currentQuantity >= 1) {
        setQuantity = Number(inputEl.val()) - step;
        inputEl.val(setQuantity).trigger('change');
      } else if ('up' === action && currentQuantity >= 1) {
        setQuantity = Number(inputEl.val()) + step;
        inputEl.val(setQuantity).trigger('change');
      }
    }
    /**
     * Watch the quantity input for changes.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "quantiySelectorChange",
    value: function quantiySelectorChange(ev) {
      ev.preventDefault();
      var inputEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget),
          cartItemKey = inputEl.data('key'),
          newQty = parseFloat(inputEl.val()),
          step = parseFloat(inputEl.attr('step')),
          min = parseFloat(inputEl.attr('min')),
          max = parseFloat(inputEl.attr('max'));
      var invalid = false; // Client-side form validation.

      if (isNaN(newQty) || newQty < 0 || newQty < min) {
        invalid = true;
      } else if (newQty > max) {
        invalid = true;
      } else if (newQty % step !== 0) {
        invalid = true;
      } // Set back to default quantity.


      if (invalid) {
        inputEl.val(max);
      } else {
        inputEl.val(newQty);
      }

      clearTimeout(this.updateDelay);
      this.updateDelay = setTimeout(function () {
        (0,_modules_UpdateCart__WEBPACK_IMPORTED_MODULE_2__.default)(cartItemKey, newQty, inputEl);
      }, 150);
    }
    /**
     * Remove or restore an item in the Drawer.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "updateItem",
    value: function updateItem(ev) {
      ev.preventDefault();
      var el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget);
      var action = ev.data.action;
      var cartItemKey = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('key');

      if ('restore' === action) {
        (0,_modules_RemoveProduct__WEBPACK_IMPORTED_MODULE_4__.restoreProduct)(cartItemKey);
      } else {
        (0,_modules_RemoveProduct__WEBPACK_IMPORTED_MODULE_4__.removeProduct)(cartItemKey);
      }
    }
    /**
     * Add a coupon code to the drawer.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "addCoupon",
    value: function addCoupon(ev) {
      ev.preventDefault();
      var form = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget).closest('.cpops-coupon-form');
      var button = form.find(':submit');
      var input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(form).find('input');
      var coupon = input.val();
      (0,_modules_Coupons__WEBPACK_IMPORTED_MODULE_3__.applyCoupon)(coupon, input, button);
    }
    /**
     * Remove a coupon code from the drawer.
     * @param {object} ev The jQuery Event object.
     */

  }, {
    key: "removeCoupon",
    value: function removeCoupon(ev) {
      ev.preventDefault();
      var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget);
      var coupon = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('data-coupon');

      (0,_modules_Coupons__WEBPACK_IMPORTED_MODULE_3__.removeCoupon)(coupon, element.parent());
    }
    /**
     * Hide cart notification on click
     * @param {object} ev The Event object.
     */

  }, {
    key: "hideCartNotification",
    value: function hideCartNotification(ev) {
      ev.preventDefault();
      var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(ev.currentTarget);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hide();
    }
  }]);

  return CartPopsCart;
}(_core__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPopsCart);

/***/ }),

/***/ "../assets/dev/js/frontend/core.js":
/*!*****************************************!*\
  !*** ../assets/dev/js/frontend/core.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_Loggin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());




var log = new _modules_Loggin__WEBPACK_IMPORTED_MODULE_2__.default('Cart Refresh');

var CartPopsCore = /*#__PURE__*/function (_EventEmitter) {
  _inherits(CartPopsCore, _EventEmitter);

  var _super = _createSuper(CartPopsCore);

  function CartPopsCore(config, modals) {
    var _this;

    _classCallCheck(this, CartPopsCore);

    _this = _super.call(this);
    _this.config = config;
    _this.modals = modals;
    _this.cartNotificationId = null;

    _this.pageShow();

    return _this;
  }
  /**
   * Page show event listener.
   */


  _createClass(CartPopsCore, [{
    key: "pageShow",
    value: function pageShow() {
      if ('undefined' === typeof window.wc_cart_fragments_params) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('pageshow', this.onPageShow);
      }
    }
    /**
     * Refresh all WC fragments.
     */

  }, {
    key: "refreshFragments",
    value: function refreshFragments() {
      var _this2 = this;

      this.block();
      var data = {
        action: 'cpops_get_refreshed_fragments'
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default().post(this.config.ajax_url, qs__WEBPACK_IMPORTED_MODULE_4___default().stringify(data)).then(function (response) {
        log.send('Refreshing cart fragments on load');

        _this2.updateFragments(response);
      })["catch"](function (error) {
        console.log(error);
      })["finally"](function () {
        _this2.unblock();
      });
    }
    /**
     * Refresh WC fragments from AJAX response.
     *
     * @param {array} response Array with response from AJAX
     */

  }, {
    key: "updateFragments",
    value: function updateFragments(response) {
      if (response.data.fragments) {
        this.block(); //Set fragments

        jquery__WEBPACK_IMPORTED_MODULE_0___default().each(response.data.fragments, function (key, value) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(key).replaceWith(value);
        });

        if (typeof window.wc_cart_fragments_params !== 'undefined' && 'sessionStorage' in window && window.sessionStorage !== null) {
          sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(response.data.fragments));
          localStorage.setItem(wc_cart_fragments_params.cart_hash_key, response.data.cart_hash);
          sessionStorage.setItem(wc_cart_fragments_params.cart_hash_key, response.data.cart_hash);

          if (response.data.cart_hash) {
            sessionStorage.setItem('wc_cart_created', new Date().getTime());
          }
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('wc_fragments_refreshed');
        this.unblock();
      }

      if (this.config.forceRefresh && typeof window.wc_cart_fragments_params !== 'undefined') {
        this.block();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('wc_fragment_refresh');
      }
    }
    /**
     * Listen to returning of the page using the browser's forward or back buttons
     *
     * @param {boject} ev Event object.
     */

  }, {
    key: "onPageShow",
    value: function onPageShow(ev) {
      if (ev.originalEvent.persisted) {
        this.refreshMyFragments();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('wc_fragment_refresh');
      }
    }
    /**
     * Block the cart from user interaction.
     */

  }, {
    key: "block",
    value: function block() {}
    /**
     * Unblock the cart from user interaction.
     */

  }, {
    key: "unblock",
    value: function unblock() {}
  }]);

  return CartPopsCore;
}((events__WEBPACK_IMPORTED_MODULE_1___default()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPopsCore);

/***/ }),

/***/ "../assets/dev/js/frontend/frontend.js":
/*!*********************************************!*\
  !*** ../assets/dev/js/frontend/frontend.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_triggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/triggers */ "../assets/dev/js/frontend/modules/triggers.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "../assets/dev/js/frontend/cart.js");
/* harmony import */ var _assistant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assistant */ "../assets/dev/js/frontend/assistant.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());




var CartPopsFrontend = /*#__PURE__*/function () {
  function CartPopsFrontend(config) {
    _classCallCheck(this, CartPopsFrontend);

    this.config = config;
    this.modals = new _modules_triggers__WEBPACK_IMPORTED_MODULE_1__.default(this.config);
    this.cart = new _cart__WEBPACK_IMPORTED_MODULE_2__.default(this.config, this.modals);
    this.assistant = new _assistant__WEBPACK_IMPORTED_MODULE_3__.default(this.config, this.modals);
  }

  _createClass(CartPopsFrontend, [{
    key: "init",
    value: function init() {
      this.modals.init();
      this.cart.init();

      if (this.config.pro) {
        this.assistant.init();
      }
    }
    /**
    * Named static constructor to encapsulate how to create the object.
    */

  }], [{
    key: "run",
    value: function run() {
      // Bail out if the configuration is not passed from the server.
      if (_typeof('undefined') === CartPopsConfig) {
        return;
      }

      var instance = new CartPopsFrontend(CartPopsConfig);
      instance.init();
    }
  }]);

  return CartPopsFrontend;
}();

jQuery(function ($) {
  CartPopsFrontend.run();
});

/***/ }),

/***/ "../assets/dev/js/frontend/lib/modal.js":
/*!**********************************************!*\
  !*** ../assets/dev/js/frontend/lib/modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _factory = document.createElement('div');

var _defaults = Object.freeze({
  el: null,
  // Existing DOM element that will be turned into a modal.
  type: null,
  // References to the type of modal: Drawer, popup, bar, assistant.
  animate: true,
  // Shows CartPops with an animation (adds a class);
  animateClass: 'cpops-fade',
  // Animation class.
  animateInClass: 'cpops-show',
  // Animation class added during animating in.
  animateOutClass: 'cpops-is-closing',
  // Animate class during animation out.
  lockScroll: true,
  // Prevent scrolling when modal is open.
  appendTo: 'body',
  // DOM element to which constructed modal will be added to.
  backdrop: true,
  // Show a backdrop.
  keyboard: true,
  // Close modal on esc key.
  transition: 300,
  // Default transition time.
  backdropTransition: 150 // Default backdrop transition time.

});

var _templates = {
  backdrop: '<div class="cpops-modal-backdrop"></div>'
};
/**
 * Create random unique ID.
 * @return int Random ID
 */

function guid() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16) + ((1 + Math.random()) * 0x10000 | 0).toString(16); // eslint-disable-line no-bitwise
}

function data(el, prop, value) {
  var prefix = 'data';
  var elData = el[prefix] || {};

  if ('undefined' === typeof value) {
    if (el[prefix] && el[prefix][prop]) {
      el = el[prefix][prop];
    } else {
      var dataAttr = el.getAttribute("".concat(prefix, "-").concat(prop));

      if ('undefined' !== typeof dataAttr) {
        return dataAttr;
      }

      el = null;
    }
  } else {
    elData[prop] = value;
    el[prefix] = elData;
  }

  return el;
}

function build(html, all) {
  if (html.nodeName) {
    return html;
  }

  html = html.replace(/(\t|\n$)/g, '');
  _factory.innerHTML = '';
  _factory.innerHTML = html;

  if (true === all) {
    return _factory.childNodes;
  }

  return _factory.childNodes[0];
}

function calcScrollbarWidth() {
  var inner = null;
  var width = null;
  var outerWidth = null;
  var outer = document.createElement('div');
  Object.assign(outer.style, {
    visibility: 'hidden',
    width: '100px'
  });
  document.body.appendChild(outer);
  outerWidth = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  width = outerWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return width;
}

function getPath(node) {
  var nodes = [node];

  while (node.parentNode) {
    node = node.parentNode;
    nodes.push(node);
  }

  return nodes;
}

var CartPopsModal = /*#__PURE__*/function (_EventEmitter) {
  _inherits(CartPopsModal, _EventEmitter);

  var _super = _createSuper(CartPopsModal);

  function CartPopsModal() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CartPopsModal);

    _this = _super.call(this);
    _this.id = guid();
    _this.el = null;
    _this._html = {};
    _this._events = {};
    _this._visible = false;
    _this._options = Object.assign({}, CartPopsModal.options, options);
    _this._templates = Object.assign({}, CartPopsModal.templates, options.templates || {});
    _this._html.appendTo = document.querySelector(_this._options.appendTo);
    _this._scrollbarWidth = calcScrollbarWidth();

    if (_this._options.type !== null) {
      _this._type = _this._options.type;
    }

    if (_this._options.el) {
      var el = _this._options.el;

      if ('string' === typeof _this._options.el) {
        el = document.querySelector(_this._options.el);

        if (!el) {
          throw new Error("Selector: DOM Element ".concat(_this._options.el, " not found."));
        }
      }

      data(el, 'cpops-modal', _assertThisInitialized(_this));
      _this.el = el;
    }

    _this._mapDom();

    return _this;
  }

  _createClass(CartPopsModal, [{
    key: "_mapDom",
    value: function _mapDom() {
      var html = this._html;
      var o = this._options;

      if (this.el.classList.contains(o.animateClass)) {
        o.animate = true;
      }

      html.container = this.el;
      html.dialog = this.el.querySelector('.modal-dialog');
      html.content = this.el.querySelector('.modal-content');
      html.header = this.el.querySelector('.modal-header');
      html.headerClose = this.el.querySelector('.modal-header .close');
      html.body = this.el.querySelector('.modal-body');
      html.footer = this.el.querySelector('.modal-footer');
      return this;
    }
  }, {
    key: "_setEvents",
    value: function _setEvents() {
      var html = this._html;
      this._events.keydownHandler = this._handleKeydownEvent.bind(this);
      document.body.addEventListener('keydown', this._events.keydownHandler);
      this._events.clickHandler = this._handleClickEvent.bind(this);
      html.container.addEventListener('click', this._events.clickHandler);
      this._events.resizeHandler = this._handleResizeEvent.bind(this);
      window.addEventListener('resize', this._events.resizeHandler);
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _this2 = this;

      var path = getPath(e.target);
      path.every(function (node) {
        if ('HTML' === node.tagName) {
          return false;
        } // Hide backdrop on this specific modal instance only. Hidden to hide modal assistant too.
        // if (this._options.backdrop !== true && node.classList.contains('cpops-modal')) {
        //   return false;
        // }
        // Only hide assistant. Not the drawer.


        if ('cpops-assistant' === node.getAttribute('data-dismiss')) {
          _this2.emit('dismiss', _this2, e, data(e.target, 'button'));

          if (_this2._type !== 'drawer') {
            _this2.hide();
          }

          return false;
        }

        if ('cpops-modal' === node.getAttribute('data-dismiss')) {
          _this2.emit('dismiss', _this2, e, data(e.target, 'button'));

          _this2.hide();

          return false;
        }

        if (node.classList.contains('cpops-modal')) {
          _this2.emit('dismiss', _this2, e, null);

          _this2.hide();

          return false;
        }

        if (!node.classList.contains('cpops-modal')) {
          return false;
        }

        return true;
      });
    }
  }, {
    key: "_handleKeydownEvent",
    value: function _handleKeydownEvent(e) {
      if (27 === e.which && this._options.keyboard) {
        this.emit('dismiss', this, e, null);
        this.hide();
      }
    }
  }, {
    key: "_handleResizeEvent",
    value: function _handleResizeEvent() {
      this._resize();
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var o = this._options;
      var html = this._html;
      this.emit('show', this);

      this._checkScrollbar();

      this._setScrollbar();

      if (o.lockScroll !== false) {
        document.documentElement.classList.add('cpops-trigger-open');
      }

      if (o.construct) {
        html.appendTo.appendChild(html.container);
      }

      html.container.style.display = 'block';
      html.container.scrollTop = 0;

      if (content && 'assistant' === o.type) {
        var assistantContent = document.querySelectorAll("[data-assistant-content='".concat(content, "']"));

        if (assistantContent) {
          var _iterator = _createForOfIteratorHelper(assistantContent),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              element.style.display = 'block';
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        assistantContent = null;
      }

      if (false !== o.backdrop) {
        this.once('showBackdrop', function () {
          _this3._setEvents();

          if (o.animate) {
            // Force reflow
            html.container.offsetWidth; // eslint-disable-line
          }

          html.container.classList.add(o.animateInClass);
          setTimeout(function () {
            _this3._visible = true;

            _this3.emit('shown', _this3);
          }, o.transition);
        });

        this._backdrop();
      } else {
        this._setEvents();

        if (o.animate) {
          // Force reflow
          html.container.offsetWidth; // eslint-disable-line
        }

        html.container.classList.add(o.animateInClass);
        setTimeout(function () {
          _this3._visible = true;

          _this3.emit('shown', _this3);
        }, o.transition);
      }

      this._resize();

      return this;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this._visible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "_resize",
    value: function _resize() {
      var modalIsOverflowing = this._html.container.scrollHeight > document.documentElement.clientHeight;
      this._html.container.style.paddingLeft = !this.bodyIsOverflowing && modalIsOverflowing ? this._scrollbarWidth + 'px' : '';
      this._html.container.style.paddingRight = this.bodyIsOverflowing && !modalIsOverflowing ? this._scrollbarWidth + 'px' : '';
    }
  }, {
    key: "_backdrop",
    value: function _backdrop() {
      var _this4 = this;

      var html = this._html;
      var t = this._templates;
      var o = this._options;
      var animate = o.animate ? o.animateClass : false;
      html.backdrop = build(t.backdrop);

      if (animate) {
        html.backdrop.classList.add(animate); // eslint-disable-line
      }

      html.appendTo.appendChild(html.backdrop);

      if (animate) {
        html.backdrop.offsetWidth; // eslint-disable-line
      }

      html.backdrop.classList.add(o.animateInClass);
      setTimeout(function () {
        _this4.emit('showBackdrop', _this4);
      }, this._options.backdropTransition);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this5 = this;

      var html = this._html;
      var o = this._options;
      var type = this._type;
      var contCList = html.container.classList;
      this.emit('hide', this);
      contCList.remove(o.animateInClass);
      contCList.add(o.animateOutClass);

      if ('assistant' === type) {
        var assistantContent = document.querySelectorAll('.cpops-assistant-items__item');

        if (assistantContent) {
          var _iterator2 = _createForOfIteratorHelper(assistantContent),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var element = _step2.value;
              element.style.display = 'none';
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        assistantContent = null;
      }

      if (o.backdrop) {
        var backCList = html.backdrop.classList;
        backCList.remove(o.animateInClass);
      }

      this._removeEvents();

      setTimeout(function () {
        document.documentElement.classList.remove('cpops-trigger-open');
        document.body.style.paddingRight = _this5.originalBodyPad;
      }, o.backdropTransition);
      setTimeout(function () {
        if (o.backdrop) {
          html.backdrop.parentNode.removeChild(html.backdrop);
        }

        contCList.remove(o.animateOutClass);
        html.container.style.display = 'none';

        if (o.construct) {
          html.container.parentNode.removeChild(html.container);
        }

        _this5._visible = false;

        _this5.emit('hidden', _this5);
      }, o.transition);
      return this;
    }
  }, {
    key: "_removeEvents",
    value: function _removeEvents() {
      if (this._events.keydownHandler) {
        document.body.removeEventListener('keydown', this._events.keydownHandler);
      }

      this._html.container.removeEventListener('click', this._events.clickHandler);

      window.removeEventListener('resize', this._events.resizeHandler);
    }
  }, {
    key: "_checkScrollbar",
    value: function _checkScrollbar() {
      this.bodyIsOverflowing = document.body.clientWidth < window.innerWidth;
    }
  }, {
    key: "_setScrollbar",
    value: function _setScrollbar() {
      this.originalBodyPad = document.body.style.paddingRight || '';

      if (this.bodyIsOverflowing) {
        var basePadding = parseInt(this.originalBodyPad || 0, 10);
        document.body.style.paddingRight = basePadding + this._scrollbarWidth + 'px';
      }
    }
  }], [{
    key: "templates",
    get: function get() {
      return Object.assign({}, _templates, CartPopsModal._baseTemplates || {});
    },
    set: function set(templates) {
      this._baseTemplates = templates;
    }
  }, {
    key: "type",
    set: function set(options) {
      this._baseOptions = options.type;
    }
  }, {
    key: "options",
    get: function get() {
      return Object.assign({}, _defaults, CartPopsModal._baseOptions || {});
    },
    set: function set(options) {
      this._baseOptions = options;
    }
  }, {
    key: "version",
    get: function get() {
      return '1.0.0';
    }
  }]);

  return CartPopsModal;
}((events__WEBPACK_IMPORTED_MODULE_0___default()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartPopsModal);

/***/ }),

/***/ "../assets/dev/js/frontend/modules/AddToCart.js":
/*!******************************************************!*\
  !*** ../assets/dev/js/frontend/modules/AddToCart.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToCart": () => (/* binding */ addToCart)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loggin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Requests */ "../assets/dev/js/frontend/modules/Requests.js");
/* harmony import */ var _RefreshCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RefreshCart */ "../assets/dev/js/frontend/modules/RefreshCart.js");
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());





var log = new _Loggin__WEBPACK_IMPORTED_MODULE_1__.default('Add To Cart');
/**
 * AJAX call to add a product to the cart.
 * @param {string} cart_key Cart key
 * @param {int} quantity Quantity
 * @param {element} button HTML Button
 */

function addToCart(form, data, button) {
  var httpClient = (axios__WEBPACK_IMPORTED_MODULE_2___default());
  var action = data.actionType;
  var productId = data.product_id;
  var popupRecommendationsEl = button.parent().parent().parent();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('adding_to_cart', [button, data]);

  if (popupRecommendationsEl.hasClass('cpops-recommendations-shortcode')) {
    action = 'recommendation';
  }

  log.send('Preparing add to cart request with data:', data);
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  button.addClass('loading');
  httpClient.post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Product added to cart succesfully with data:', response.data); // Fragments are refreshed via the added_to_cart listener in Cart.js
    // Trigger added to cart event.

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('added_to_cart', [response.data.fragments, response.data.cart_hash, button]);
  })["catch"](function (error) {
    console.log(error);
  })["finally"](function () {
    _Requests__WEBPACK_IMPORTED_MODULE_4__.unblock(data.request_type);
    button.addClass('added');
    button.removeClass('loading');
  });
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/Collapse.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/frontend/modules/Collapse.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Collapse)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default()); // Use Immediately Invoked Function Express (IIFE)
// to keep JS scoped to this function
// and avoid overwriting of identifiers

function Collapse() {
  // Handler that uses various data-* attributes to trigger
  // specific actions, mimicing bootstraps attributes
  var triggers = Array.from(document.querySelectorAll('[data-cpops-toggle="collapse"]'));
  window.addEventListener('click', function (ev) {
    var elm = ev.target;
    var selector = elm.getAttribute('data-cpops-target');

    if (selector) {
      collapse(selector, 'toggle', elm);
    }
  }, false);
  var fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove'
  };

  var collapse = function collapse(selector, cmd, elm) {
    var targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(function (target) {
      target.classList[fnmap[cmd]]('cpops-show');
    });
    elm.classList[fnmap[cmd]]('cpops-show');

    if (elm.classList.contains('cpops-show')) {
      elm.setAttribute('aria-expanded', 'true');
    } else {
      elm.setAttribute('aria-expanded', 'false');
    }
  };
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/Coupons.js":
/*!****************************************************!*\
  !*** ../assets/dev/js/frontend/modules/Coupons.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyCoupon": () => (/* binding */ applyCoupon),
/* harmony export */   "removeCoupon": () => (/* binding */ removeCoupon)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loggin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Requests */ "../assets/dev/js/frontend/modules/Requests.js");
/* harmony import */ var _RefreshCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RefreshCart */ "../assets/dev/js/frontend/modules/RefreshCart.js");
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());





var log = new _Loggin__WEBPACK_IMPORTED_MODULE_1__.default('Coupon');
/**
 * AJAX function to add a coupon
 * @param {string} coupon A coupon to be added into WooCOmmerce
 * @param {element} input The input incoming input field
 */

function applyCoupon(coupon, input, button) {
  var data = {
    action: 'cpops_apply_coupon',
    coupon: coupon,
    nonce: CartPopsConfig.nonce,
    request_type: 'apply_coupon'
  };
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  log.send('Applying coupon with data:', data);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer button').prop('disabled', true);
  button.addClass('is-loading');
  axios__WEBPACK_IMPORTED_MODULE_2___default().post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Applied coupon successfully with data:', response.data);
    _Requests__WEBPACK_IMPORTED_MODULE_4__.refreshFragments(response, data.request_type);
    (0,_RefreshCart__WEBPACK_IMPORTED_MODULE_5__.default)(false);
  })["catch"](function (error) {
    console.log(error); // eslint-disable-line
  })["finally"](function () {
    // Reset input value..
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).val(''); // Remove loading class.

    button.removeClass('is-loading');
    _Requests__WEBPACK_IMPORTED_MODULE_4__.unblock(data.request_type);
  });
}
/**
 * AJAZX Function to remove a coupon from the cart
 * @param {string} coupon Coupon to be removed
 * @param {element} coupon_tag Element (coupon tag) to be removed.
 */

function removeCoupon(coupon, couponTag) {
  var data = {
    action: 'cpops_remove_coupon',
    nonce: CartPopsConfig.nonce,
    coupon: coupon,
    request_type: 'remove_coupon'
  };
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  axios__WEBPACK_IMPORTED_MODULE_2___default().post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Removed coupon successfully with data:', response.data);
    _Requests__WEBPACK_IMPORTED_MODULE_4__.refreshFragments(response, data.request_type); // Remove target coupon.

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(couponTag).remove();
    (0,_RefreshCart__WEBPACK_IMPORTED_MODULE_5__.default)(false);
  })["catch"](function (error) {
    console.log(error);
  })["finally"](function () {
    _Requests__WEBPACK_IMPORTED_MODULE_4__.unblock(data.request_type);
  });
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/Loggin.js":
/*!***************************************************!*\
  !*** ../assets/dev/js/frontend/modules/Loggin.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loggin = /*#__PURE__*/function () {
  function Loggin(title) {
    _classCallCheck(this, Loggin);

    this.debug = true;
    this.title = {
      body: title || '---'
    };
  }

  _createClass(Loggin, [{
    key: "send",
    value: function send() {
      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      // the second line is now the body because the first references the content after the first %c for the title
      if (window.CartPopsConfig.script_debug && this.debug) {
        console.log( // eslint-disable-line
        "%c\uD83D\uDCAC ".concat(this.title.body, ":%c").concat(body, " %c(SCRIPT_DEBUG is on)"), "color: white; padding: 3px 5px; margin-right: 10px; background: black; font-weight: bold;", "color: black;", "color: lightgray;");

        if (data) {
          console.table(data); // eslint-disable-line
        }
      }
    }
  }]);

  return Loggin;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loggin);

/***/ }),

/***/ "../assets/dev/js/frontend/modules/RefreshCart.js":
/*!********************************************************!*\
  !*** ../assets/dev/js/frontend/modules/RefreshCart.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ refreshCart)
/* harmony export */ });
/* harmony import */ var _Loggin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);



var log = new _Loggin__WEBPACK_IMPORTED_MODULE_0__.default('Cart Refresh');
/**
 *
 * @param {boolean} triggerCart Decide whether or not to open the cart.
 * @param {int} product_id Adds the product ID back to the refresh function. Important for fragments to work.
 */

function refreshCart() {
  var triggerCart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var product_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var cartHashKey = wc_cart_fragments_params.ajax_url.toString() + '-wc_cart_hash';
  var data = {
    action: 'cpops_refresh_cart',
    nonce: CartPopsConfig.nonce,
    product_id: product_id,
    request_type: 'refresh_cart'
  };
  axios__WEBPACK_IMPORTED_MODULE_1___default().post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_2___default().stringify(data)).then(function (response) {
    log.send('Force refreshing cart fragments', response.data); // const fragments = response.data.fragments;
    // const cartHash = response.data.cart_hash;
    // if ( fragments ) {
    // 	$.each( fragments, function( key, value ) {
    // 		$( key ).replaceWith( value );
    // 	} );
    // 	$( document.body ).trigger( 'wc_fragments_loaded' );
    // }
    // sessionStorage.setItem( wc_cart_fragments_params.fragment_name, JSON.stringify( fragments ) );
    // if ( cartHash && cartHashKey ) {
    // 	localStorage.setItem( cartHashKey, cartHash );
    // 	sessionStorage.setItem( cartHashKey, cartHash );
    // 	sessionStorage.setItem( 'wc_cart_created', ( new Date() ).getTime() );
    // }
    // if ( triggerCart ) {
    // 	if ( 'popup' === CartPopsConfig.trigger ) {
    // 		window.CartPops.popup.show();
    // 	} else if ( 'bar' === CartPopsConfig.trigger ) {
    // 		window.CartPops.bar.show();
    // 	} else {
    // 		window.CartPops.drawer.show();
    // 	}
    // }
  })["catch"](function (error) {
    console.log(error);
  })["finally"](function () {});
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/RemoveProduct.js":
/*!**********************************************************!*\
  !*** ../assets/dev/js/frontend/modules/RemoveProduct.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeProduct": () => (/* binding */ removeProduct),
/* harmony export */   "restoreProduct": () => (/* binding */ restoreProduct)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loggin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Requests */ "../assets/dev/js/frontend/modules/Requests.js");
/* harmony import */ var _RefreshCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RefreshCart */ "../assets/dev/js/frontend/modules/RefreshCart.js");
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());





var log = new _Loggin__WEBPACK_IMPORTED_MODULE_1__.default('Remove Product');
/**
 * AJAX call to update the cart.
 * @param {string} cart_key Cart key
 * @param {int} quantity Quantity
 * @param {element} button HTML Button
 */

function removeProduct(cartKey) {
  var httpClient = (axios__WEBPACK_IMPORTED_MODULE_2___default());
  var cartItemEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cpops-cart-item[data-key='".concat(cartKey, "']"));
  var data = {
    nonce: CartPopsConfig.nonce,
    action: 'cpops_remove_product',
    cart_key: cartKey,
    request_type: 'remove_product'
  };
  cartItemEl.append('<div class="cpops-cart-item__loading"><div class="cpops-cart-item__spinner"></div></div>');
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  log.send('Removing product from cart with data:', data);
  httpClient.post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Product removed with data:', response.data);
    _Requests__WEBPACK_IMPORTED_MODULE_4__.refreshFragments(response, data.request_type);
    (0,_RefreshCart__WEBPACK_IMPORTED_MODULE_5__.default)(false);
  })["catch"](function (error) {
    log.send('Error removing product', error);
  })["finally"](function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer button').prop('disabled', false);
  });
}
function restoreProduct(cartKey) {
  var httpClient = (axios__WEBPACK_IMPORTED_MODULE_2___default());
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer button').prop('disabled', true);
  var data = {
    nonce: CartPopsConfig.nonce,
    action: 'cpops_restore_product',
    cart_key: cartKey,
    request_type: 'restore_product'
  };
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  log.send('Restoring product from cart with data:', data);
  httpClient.post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Product restored with data:', response.data);
    _Requests__WEBPACK_IMPORTED_MODULE_4__.refreshFragments(response, data.request_type);
    (0,_RefreshCart__WEBPACK_IMPORTED_MODULE_5__.default)(false);
  })["catch"](function (error) {
    log.send('Error restoring product', error);
  })["finally"](function () {
    cartItemEl.find('.cpops-cart-item__loading').remove();
    _Requests__WEBPACK_IMPORTED_MODULE_4__.unblock(data.request_type);
  });
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/Requests.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/frontend/modules/Requests.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshFragments": () => (/* binding */ refreshFragments),
/* harmony export */   "block": () => (/* binding */ block),
/* harmony export */   "unblock": () => (/* binding */ unblock)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
var cartNotificationId = null;
var config = window.CartPopsConfig;
/**
 * Handle the response after a succesfull call with Axios.
 * Request types are: add_to_cart, update_cart, remove_product, restore_product
 * @param {object} response An object of the Axios response.
 * @param {string} requestType The type of request. Add to cart, coupon etc.
 */

function refreshFragments(response) {
  var requestType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  refreshFragmentsStarted();
  emptyNotifications();
  var cartHashKey = wc_cart_fragments_params.ajax_url.toString() + '-wc_cart_hash';
  var fragments = response.data.fragments;
  var cartHash = response.data.cart_hash;

  if (fragments) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(fragments, function (key, value) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(key).replaceWith(value);
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).trigger('wc_fragments_refreshed');
    sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(fragments));
    showNotifications();
  }

  if (cartHash && cartHashKey) {
    localStorage.setItem(cartHashKey, cartHash);
    sessionStorage.setItem(cartHashKey, cartHash);
    sessionStorage.setItem('wc_cart_created', new Date().getTime());
  }

  hideNotifications();
  refreshFragmentsCompleted();
}
function block() {
  var requestType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer button').prop('disabled', true);
}
function unblock() {
  var requestType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cartpops-drawer button').prop('disabled', false);
}

var refreshFragmentsStarted = function refreshFragmentsStarted() {};

var refreshFragmentsCompleted = function refreshFragmentsCompleted() {};

var emptyNotifications = function emptyNotifications() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-drawer-notices-wrapper').empty();
};

var showNotifications = function showNotifications() {
  setTimeout(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-drawer-notices-wrapper').show();
  }, 250);
};
/**
 * Hide any notifications.
 */


var hideNotifications = function hideNotifications() {
  if (cartNotificationId) {
    clearTimeout(cartNotificationId);
  }

  cartNotificationId = setTimeout(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-drawer-notices-wrapper').empty();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cpops-drawer-notices-wrapper').hide();
  }, config.notificationDelay);
};

/***/ }),

/***/ "../assets/dev/js/frontend/modules/UpdateCart.js":
/*!*******************************************************!*\
  !*** ../assets/dev/js/frontend/modules/UpdateCart.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCart)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loggin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggin */ "../assets/dev/js/frontend/modules/Loggin.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Requests */ "../assets/dev/js/frontend/modules/Requests.js");
/* harmony import */ var _RefreshCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RefreshCart */ "../assets/dev/js/frontend/modules/RefreshCart.js");
// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());





var log = new _Loggin__WEBPACK_IMPORTED_MODULE_1__.default('Update Cart');
/**
 * AJAX call to update the cart.
 * @param {string} cartKey Cart key
 * @param {int} quantity Quantity
 * @param {element} button HTML Button
 */

function updateCart(cartKey, quantity, button) {
  var httpClient = (axios__WEBPACK_IMPORTED_MODULE_2___default());
  var cartItemEl = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".cpops-cart-item[data-key='".concat(cartKey, "']"));
  var data = {
    nonce: CartPopsConfig.nonce,
    action: 'cpops_update_cart',
    cart_key: cartKey,
    quantity: quantity,
    request_type: 'update_cart'
  };
  cartItemEl.append('<div class="cpops-cart-item__loading"><div class="cpops-cart-item__spinner"></div></div>');
  _Requests__WEBPACK_IMPORTED_MODULE_4__.block(data.request_type);
  log.send('Preparing to update the cart with data:', data);
  httpClient.post(CartPopsConfig.ajax_url, qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(data)).then(function (response) {
    log.send('Cart updated with data:', response.data);
    _Requests__WEBPACK_IMPORTED_MODULE_4__.refreshFragments(response, data.request_type);
    (0,_RefreshCart__WEBPACK_IMPORTED_MODULE_5__.default)(false);
  })["catch"](function (error) {
    console.log(error);
  })["finally"](function () {
    cartItemEl.find('.cpops-cart-item__loading').remove();
    _Requests__WEBPACK_IMPORTED_MODULE_4__.unblock(data.request_type);
  });
}

/***/ }),

/***/ "../assets/dev/js/frontend/modules/triggers.js":
/*!*****************************************************!*\
  !*** ../assets/dev/js/frontend/modules/triggers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/modal */ "../assets/dev/js/frontend/lib/modal.js");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Collapse */ "../assets/dev/js/frontend/modules/Collapse.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Always expose jQuery to the window object.

window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_0___default());

 // eslint-disable-line



var Triggers = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Triggers, _EventEmitter);

  var _super = _createSuper(Triggers);

  function Triggers(config) {
    var _this;

    _classCallCheck(this, Triggers);

    _this = _super.call(this);
    _this.config = config;
    _this.payingUser = _this.config.pro;
    _this.drawer = null;
    _this.assistant = null;
    _this.popup = null;
    _this.bar = null;
    _this.drawerEl = document.getElementById('cpops-drawer-modal');
    _this.drawerToggles = document.querySelectorAll('.cpops-toggle-drawer');
    _this.assistantEl = document.getElementById('cpops-assistant-modal');
    _this.assistantToggles = document.querySelectorAll('.cpops-toggle-assistant');
    _this.popupEl = document.getElementById('cpops-popup-modal');
    _this.barEl = document.getElementById('cpops-bar-modal');
    return _this;
  }
  /**
  * Initializes the handler.
  */


  _createClass(Triggers, [{
    key: "init",
    value: function init() {
      this.emit('init', this);

      this._initModals(this);
    }
    /**
     * Initializes the event listeners.
     *
     * @private
     *
     * @param self instance of this object, used for binding "this" to the CartPops window object.
     */

  }, {
    key: "_initModals",
    value: function _initModals(self) {
      if (this.drawerEl) {
        this._createDrawer();
      }

      if (this.assistantEl && this.payingUser !== 'false') {
        this._createAssistant();
      }

      if ('popup' === this.config.trigger && this.popupEl) {
        this._createPopup();
      }

      if ('bar' === this.config.trigger && this.barEl) {
        this._createBar();
      }

      this._createEventListeners(self);

      window.CartPops = self;
    }
  }, {
    key: "_createEventListeners",
    value: function _createEventListeners(self) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.cpops-toggle-drawer', this.drawerTriggers.bind(self));
    }
    /**
     * Create the Drawer modal.
     */

  }, {
    key: "_createDrawer",
    value: function _createDrawer() {
      this.drawer = new _lib_modal__WEBPACK_IMPORTED_MODULE_2__.default({
        el: this.drawerEl,
        type: 'drawer'
      });
      (0,_Collapse__WEBPACK_IMPORTED_MODULE_3__.default)();
    }
  }, {
    key: "drawerTriggers",
    value: function drawerTriggers(ev) {
      ev.preventDefault();
      this.drawer.show();
    }
    /**
     * Create the Popup modal.
     */

  }, {
    key: "_createPopup",
    value: function _createPopup() {
      this.popup = new _lib_modal__WEBPACK_IMPORTED_MODULE_2__.default({
        el: this.popupEl,
        type: 'popup'
      });
    }
    /**
     * Create the Bar modal.
     */

  }, {
    key: "_createBar",
    value: function _createBar() {
      this.bar = new _lib_modal__WEBPACK_IMPORTED_MODULE_2__.default({
        el: this.barEl,
        backdrop: false,
        autoHide: true,
        lockScroll: false,
        type: 'bar'
      });
    }
    /**
     * Create the Assistant modal.
     */

  }, {
    key: "_createAssistant",
    value: function _createAssistant() {
      this.assistant = new _lib_modal__WEBPACK_IMPORTED_MODULE_2__.default({
        el: this.assistantEl,
        lockScroll: false,
        backdrop: false,
        autoHide: false,
        type: 'assistant'
      });
    }
  }]);

  return Triggers;
}((events__WEBPACK_IMPORTED_MODULE_1___default()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Triggers);

/***/ }),

/***/ "../node_modules/events/events.js":
/*!****************************************!*\
  !*** ../node_modules/events/events.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "../node_modules/qs/lib/formats.js":
/*!*****************************************!*\
  !*** ../node_modules/qs/lib/formats.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "../node_modules/qs/lib/index.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "../node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "../node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "../node_modules/qs/lib/parse.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/parse.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "../node_modules/qs/lib/stringify.js":
/*!*******************************************!*\
  !*** ../node_modules/qs/lib/stringify.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "../node_modules/qs/lib/utils.js":
/*!***************************************!*\
  !*** ../node_modules/qs/lib/utils.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "../node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__("../assets/dev/js/frontend/frontend.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=frontend.js.map