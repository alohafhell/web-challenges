"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxJQUFJRjtBQUVoQyxJQUFJLENBQUNBLGFBQWE7SUFDaEIsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQTs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT047QUFFcEIsSUFBSSxDQUFDSyxRQUFRO0lBQ1hBLFNBQVNDLE9BQU9OLFdBQVc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLE1BQU07UUFDZixPQUFPRixPQUFPRTtJQUNoQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csU0FBUztRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxVQUFVUix1REFBZ0JZLENBQUNYLGFBQWFTLE1BQU1HLEtBQUssQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGSyxPQUFPRSxPQUFPLE1BQU1GLE9BQU9HO0lBQzdCLEVBQUUsT0FBT00sR0FBRztRQUNWVCxPQUFPRyxVQUFVO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRTtBQUNoQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vZGIvY29ubmVjdC5qcz9jNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Product.js":
/*!******************************!*\
  !*** ./db/models/Product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review */ \"(api)/./db/models/Review.js\");\n// Create a schema for the Product model in the db/models folder.\n// The schema should have the following fields:\n// name (String)\n// description (String)\n// price (Number)\n// currency (String)\n\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n    name: String,\n    description: String,\n    price: Number,\n    currency: String,\n    reviews: {\n        type: [\n            Schema.Types.ObjectId\n        ],\n        ref: \"Review\"\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Product || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUVBQWlFO0FBRWpFLCtDQUErQztBQUUvQyxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFFWTtBQUNkO0FBRWxCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxnQkFBZ0IsSUFBSUQsT0FBTztJQUMvQkUsTUFBTUM7SUFDTkMsYUFBYUQ7SUFDYkUsT0FBT0M7SUFDUEMsVUFBVUo7SUFDVkssU0FBUztRQUNQQyxNQUFNO1lBQUNULE9BQU9VLE1BQU1DO1NBQVM7UUFDN0JDLEtBQUs7SUFDUDtBQUNGO0FBRUEsTUFBTUMsVUFDSmQsd0RBQWVlLENBQUNELFdBQVdkLHFEQUFjZ0IsQ0FBQyxXQUFXZDtBQUN2RCxpRUFBZVksT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtcmVhZF9wcm9kdWN0cy8uL2RiL21vZGVscy9Qcm9kdWN0LmpzPzI5NWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3JlYXRlIGEgc2NoZW1hIGZvciB0aGUgUHJvZHVjdCBtb2RlbCBpbiB0aGUgZGIvbW9kZWxzIGZvbGRlci5cblxuLy8gVGhlIHNjaGVtYSBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIGZpZWxkczpcblxuLy8gbmFtZSAoU3RyaW5nKVxuLy8gZGVzY3JpcHRpb24gKFN0cmluZylcbi8vIHByaWNlIChOdW1iZXIpXG4vLyBjdXJyZW5jeSAoU3RyaW5nKVxuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgXCIuL1Jldmlld1wiO1xuXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBwcmljZTogTnVtYmVyLFxuICBjdXJyZW5jeTogU3RyaW5nLFxuICByZXZpZXdzOiB7XG4gICAgdHlwZTogW1NjaGVtYS5UeXBlcy5PYmplY3RJZF0sXG4gICAgcmVmOiBcIlJldmlld1wiLFxuICB9LFxufSk7XG5cbmNvbnN0IFByb2R1Y3QgPVxuICBtb25nb29zZS5tb2RlbHMuUHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbChcIlByb2R1Y3RcIiwgcHJvZHVjdFNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwicHJvZHVjdFNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiY3VycmVuY3kiLCJyZXZpZXdzIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/models/Product.js\n");

/***/ }),

/***/ "(api)/./db/models/Review.js":
/*!*****************************!*\
  !*** ./db/models/Review.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// The schema should have the following fields:\n// title (String)\n// text (String)\n// rating (Number)\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst reviewSchema = new Schema({\n    title: String,\n    text: String,\n    rating: Number\n});\nconst Review = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Review || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Review\", reviewSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUmV2aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLCtDQUErQztBQUUvQyxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUVjO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxlQUFlLElBQUlELE9BQU87SUFDOUJFLE9BQU9DO0lBQ1BDLE1BQU1EO0lBQ05FLFFBQVFDO0FBQ1Y7QUFFQSxNQUFNQyxTQUFTUix3REFBZVMsQ0FBQ0QsVUFBVVIscURBQWNVLENBQUMsVUFBVVI7QUFFbEUsaUVBQWVNLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLXJlYWRfcHJvZHVjdHMvLi9kYi9tb2RlbHMvUmV2aWV3LmpzPzZiZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHNjaGVtYSBzaG91bGQgaGF2ZSB0aGUgZm9sbG93aW5nIGZpZWxkczpcblxuLy8gdGl0bGUgKFN0cmluZylcbi8vIHRleHQgKFN0cmluZylcbi8vIHJhdGluZyAoTnVtYmVyKVxuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgcmV2aWV3U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIHRpdGxlOiBTdHJpbmcsXG4gIHRleHQ6IFN0cmluZyxcbiAgcmF0aW5nOiBOdW1iZXIsXG59KTtcblxuY29uc3QgUmV2aWV3ID0gbW9uZ29vc2UubW9kZWxzLlJldmlldyB8fCBtb25nb29zZS5tb2RlbChcIlJldmlld1wiLCByZXZpZXdTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJyZXZpZXdTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsInRleHQiLCJyYXRpbmciLCJOdW1iZXIiLCJSZXZpZXciLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/Review.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/Product */ \"(api)/./db/models/Product.js\");\n/* harmony import */ var _db_models_Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/db/models/Review */ \"(api)/./db/models/Review.js\");\n\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log(\"request.method: \", request.method);\n    if (request.method === \"GET\") {\n        const product = await _db_models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        // const reviews = await Review.find();\n        response.status(200).json(product);\n        return;\n    }\n    response.status(405).json({\n        status: \"Method not allowed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNLO0FBQ0Y7QUFDekIsZUFBZUcsUUFBUUMsT0FBTyxFQUFFQyxRQUFRO0lBQ3JELE1BQU1MLHVEQUFTQTtJQUVmTSxRQUFRQyxJQUFJLG9CQUFvQkgsUUFBUUk7SUFFeEMsSUFBSUosUUFBUUksV0FBVyxPQUFPO1FBQzVCLE1BQU1DLFVBQVUsTUFBTVIsK0RBQVlTO1FBQ2xDLHVDQUF1QztRQUV2Q0wsU0FBU00sT0FBTyxLQUFLQyxLQUFLSDtRQUUxQjtJQUNGO0lBRUFKLFNBQVNNLE9BQU8sS0FBS0MsS0FBSztRQUFFRCxRQUFRO0lBQXFCO0FBQzNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzPzU5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9kYi9jb25uZWN0XCI7XG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiQC9kYi9tb2RlbHMvUHJvZHVjdFwiO1xuaW1wb3J0IFJldmlldyBmcm9tIFwiQC9kYi9tb2RlbHMvUmV2aWV3XCI7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gIGNvbnNvbGUubG9nKFwicmVxdWVzdC5tZXRob2Q6IFwiLCByZXF1ZXN0Lm1ldGhvZCk7XG5cbiAgaWYgKHJlcXVlc3QubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICAgIC8vIGNvbnN0IHJldmlld3MgPSBhd2FpdCBSZXZpZXcuZmluZCgpO1xuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlc3BvbnNlLnN0YXR1cyg0MDUpLmpzb24oeyBzdGF0dXM6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG59XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwiUHJvZHVjdCIsIlJldmlldyIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwicHJvZHVjdCIsImZpbmQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();