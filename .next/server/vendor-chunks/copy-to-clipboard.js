"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/copy-to-clipboard";
exports.ids = ["vendor-chunks/copy-to-clipboard"];
exports.modules = {

/***/ "(ssr)/./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar deselectCurrent = __webpack_require__(/*! toggle-selection */ \"(ssr)/./node_modules/toggle-selection/index.js\");\n\nvar clipboardToIE11Formatting = {\n  \"text/plain\": \"Text\",\n  \"text/html\": \"Url\",\n  \"default\": \"Text\"\n}\n\nvar defaultMessage = \"Copy to clipboard: #{key}, Enter\";\n\nfunction format(message) {\n  var copyKey = (/mac os x/i.test(navigator.userAgent) ? \"⌘\" : \"Ctrl\") + \"+C\";\n  return message.replace(/#{\\s*key\\s*}/g, copyKey);\n}\n\nfunction copy(text, options) {\n  var debug,\n    message,\n    reselectPrevious,\n    range,\n    selection,\n    mark,\n    success = false;\n  if (!options) {\n    options = {};\n  }\n  debug = options.debug || false;\n  try {\n    reselectPrevious = deselectCurrent();\n\n    range = document.createRange();\n    selection = document.getSelection();\n\n    mark = document.createElement(\"span\");\n    mark.textContent = text;\n    // avoid screen readers from reading out loud the text\n    mark.ariaHidden = \"true\"\n    // reset user styles for span element\n    mark.style.all = \"unset\";\n    // prevents scrolling to the end of the page\n    mark.style.position = \"fixed\";\n    mark.style.top = 0;\n    mark.style.clip = \"rect(0, 0, 0, 0)\";\n    // used to preserve spaces and line breaks\n    mark.style.whiteSpace = \"pre\";\n    // do not inherit user-select (it may be `none`)\n    mark.style.webkitUserSelect = \"text\";\n    mark.style.MozUserSelect = \"text\";\n    mark.style.msUserSelect = \"text\";\n    mark.style.userSelect = \"text\";\n    mark.addEventListener(\"copy\", function(e) {\n      e.stopPropagation();\n      if (options.format) {\n        e.preventDefault();\n        if (typeof e.clipboardData === \"undefined\") { // IE 11\n          debug && console.warn(\"unable to use e.clipboardData\");\n          debug && console.warn(\"trying IE specific stuff\");\n          window.clipboardData.clearData();\n          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting[\"default\"]\n          window.clipboardData.setData(format, text);\n        } else { // all other browsers\n          e.clipboardData.clearData();\n          e.clipboardData.setData(options.format, text);\n        }\n      }\n      if (options.onCopy) {\n        e.preventDefault();\n        options.onCopy(e.clipboardData);\n      }\n    });\n\n    document.body.appendChild(mark);\n\n    range.selectNodeContents(mark);\n    selection.addRange(range);\n\n    var successful = document.execCommand(\"copy\");\n    if (!successful) {\n      throw new Error(\"copy command was unsuccessful\");\n    }\n    success = true;\n  } catch (err) {\n    debug && console.error(\"unable to copy using execCommand: \", err);\n    debug && console.warn(\"trying IE specific stuff\");\n    try {\n      window.clipboardData.setData(options.format || \"text\", text);\n      options.onCopy && options.onCopy(window.clipboardData);\n      success = true;\n    } catch (err) {\n      debug && console.error(\"unable to copy using clipboardData: \", err);\n      debug && console.error(\"falling back to prompt\");\n      message = format(\"message\" in options ? options.message : defaultMessage);\n      window.prompt(message, text);\n    }\n  } finally {\n    if (selection) {\n      if (typeof selection.removeRange == \"function\") {\n        selection.removeRange(range);\n      } else {\n        selection.removeAllRanges();\n      }\n    }\n\n    if (mark) {\n      document.body.removeChild(mark);\n    }\n    reselectPrevious();\n  }\n\n  return success;\n}\n\nmodule.exports = copy;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29weS10by1jbGlwYm9hcmQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMsd0VBQWtCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxJQUFJOztBQUUvQztBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGVsLXBhbGFjZS8uL25vZGVfbW9kdWxlcy9jb3B5LXRvLWNsaXBib2FyZC9pbmRleC5qcz8wNDQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVzZWxlY3RDdXJyZW50ID0gcmVxdWlyZShcInRvZ2dsZS1zZWxlY3Rpb25cIik7XG5cbnZhciBjbGlwYm9hcmRUb0lFMTFGb3JtYXR0aW5nID0ge1xuICBcInRleHQvcGxhaW5cIjogXCJUZXh0XCIsXG4gIFwidGV4dC9odG1sXCI6IFwiVXJsXCIsXG4gIFwiZGVmYXVsdFwiOiBcIlRleHRcIlxufVxuXG52YXIgZGVmYXVsdE1lc3NhZ2UgPSBcIkNvcHkgdG8gY2xpcGJvYXJkOiAje2tleX0sIEVudGVyXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdChtZXNzYWdlKSB7XG4gIHZhciBjb3B5S2V5ID0gKC9tYWMgb3MgeC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyBcIuKMmFwiIDogXCJDdHJsXCIpICsgXCIrQ1wiO1xuICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKC8je1xccyprZXlcXHMqfS9nLCBjb3B5S2V5KTtcbn1cblxuZnVuY3Rpb24gY29weSh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBkZWJ1ZyxcbiAgICBtZXNzYWdlLFxuICAgIHJlc2VsZWN0UHJldmlvdXMsXG4gICAgcmFuZ2UsXG4gICAgc2VsZWN0aW9uLFxuICAgIG1hcmssXG4gICAgc3VjY2VzcyA9IGZhbHNlO1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgZGVidWcgPSBvcHRpb25zLmRlYnVnIHx8IGZhbHNlO1xuICB0cnkge1xuICAgIHJlc2VsZWN0UHJldmlvdXMgPSBkZXNlbGVjdEN1cnJlbnQoKTtcblxuICAgIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblxuICAgIG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtYXJrLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAvLyBhdm9pZCBzY3JlZW4gcmVhZGVycyBmcm9tIHJlYWRpbmcgb3V0IGxvdWQgdGhlIHRleHRcbiAgICBtYXJrLmFyaWFIaWRkZW4gPSBcInRydWVcIlxuICAgIC8vIHJlc2V0IHVzZXIgc3R5bGVzIGZvciBzcGFuIGVsZW1lbnRcbiAgICBtYXJrLnN0eWxlLmFsbCA9IFwidW5zZXRcIjtcbiAgICAvLyBwcmV2ZW50cyBzY3JvbGxpbmcgdG8gdGhlIGVuZCBvZiB0aGUgcGFnZVxuICAgIG1hcmsuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgbWFyay5zdHlsZS50b3AgPSAwO1xuICAgIG1hcmsuc3R5bGUuY2xpcCA9IFwicmVjdCgwLCAwLCAwLCAwKVwiO1xuICAgIC8vIHVzZWQgdG8gcHJlc2VydmUgc3BhY2VzIGFuZCBsaW5lIGJyZWFrc1xuICAgIG1hcmsuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlXCI7XG4gICAgLy8gZG8gbm90IGluaGVyaXQgdXNlci1zZWxlY3QgKGl0IG1heSBiZSBgbm9uZWApXG4gICAgbWFyay5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXCJ0ZXh0XCI7XG4gICAgbWFyay5zdHlsZS5tc1VzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLnN0eWxlLnVzZXJTZWxlY3QgPSBcInRleHRcIjtcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjb3B5XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAob3B0aW9ucy5mb3JtYXQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodHlwZW9mIGUuY2xpcGJvYXJkRGF0YSA9PT0gXCJ1bmRlZmluZWRcIikgeyAvLyBJRSAxMVxuICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInVuYWJsZSB0byB1c2UgZS5jbGlwYm9hcmREYXRhXCIpO1xuICAgICAgICAgIGRlYnVnICYmIGNvbnNvbGUud2FybihcInRyeWluZyBJRSBzcGVjaWZpYyBzdHVmZlwiKTtcbiAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5jbGVhckRhdGEoKTtcbiAgICAgICAgICB2YXIgZm9ybWF0ID0gY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZ1tvcHRpb25zLmZvcm1hdF0gfHwgY2xpcGJvYXJkVG9JRTExRm9ybWF0dGluZ1tcImRlZmF1bHRcIl1cbiAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKGZvcm1hdCwgdGV4dCk7XG4gICAgICAgIH0gZWxzZSB7IC8vIGFsbCBvdGhlciBicm93c2Vyc1xuICAgICAgICAgIGUuY2xpcGJvYXJkRGF0YS5jbGVhckRhdGEoKTtcbiAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YShvcHRpb25zLmZvcm1hdCwgdGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLm9uQ29weSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9wdGlvbnMub25Db3B5KGUuY2xpcGJvYXJkRGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcmspO1xuXG4gICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKG1hcmspO1xuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG5cbiAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICBpZiAoIXN1Y2Nlc3NmdWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNvcHkgY29tbWFuZCB3YXMgdW5zdWNjZXNzZnVsXCIpO1xuICAgIH1cbiAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVidWcgJiYgY29uc29sZS5lcnJvcihcInVuYWJsZSB0byBjb3B5IHVzaW5nIGV4ZWNDb21tYW5kOiBcIiwgZXJyKTtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLndhcm4oXCJ0cnlpbmcgSUUgc3BlY2lmaWMgc3R1ZmZcIik7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5jbGlwYm9hcmREYXRhLnNldERhdGEob3B0aW9ucy5mb3JtYXQgfHwgXCJ0ZXh0XCIsIHRleHQpO1xuICAgICAgb3B0aW9ucy5vbkNvcHkgJiYgb3B0aW9ucy5vbkNvcHkod2luZG93LmNsaXBib2FyZERhdGEpO1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwidW5hYmxlIHRvIGNvcHkgdXNpbmcgY2xpcGJvYXJkRGF0YTogXCIsIGVycik7XG4gICAgICBkZWJ1ZyAmJiBjb25zb2xlLmVycm9yKFwiZmFsbGluZyBiYWNrIHRvIHByb21wdFwiKTtcbiAgICAgIG1lc3NhZ2UgPSBmb3JtYXQoXCJtZXNzYWdlXCIgaW4gb3B0aW9ucyA/IG9wdGlvbnMubWVzc2FnZSA6IGRlZmF1bHRNZXNzYWdlKTtcbiAgICAgIHdpbmRvdy5wcm9tcHQobWVzc2FnZSwgdGV4dCk7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZWN0aW9uLnJlbW92ZVJhbmdlID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlUmFuZ2UocmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXJrKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1hcmspO1xuICAgIH1cbiAgICByZXNlbGVjdFByZXZpb3VzKCk7XG4gIH1cblxuICByZXR1cm4gc3VjY2Vzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/copy-to-clipboard/index.js\n");

/***/ })

};
;