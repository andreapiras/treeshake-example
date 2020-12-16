(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['@transferwise/animals'] = {}, global.React));
}(this, (function (exports, React) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

	const Salamander = () => /*#__PURE__*/React__default['default'].createElement("div", {
	  className: "salamander"
	}, "Hi I'm a Salamander");

	const Hippo = () => /*#__PURE__*/React__default['default'].createElement("div", {
	  className: "hippo"
	}, "Hi I'm a Hippo");

	exports.Hippo = Hippo;
	exports.Salamander = Salamander;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
