"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

const Salamander = () =>
  /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "salamander",
    },
    "Hi I'm a Salamander"
  );

const MegaChonker = () =>
  /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "mega-chonker",
    },
    "MegaChonker"
  );

exports.Hippo = MegaChonker;
exports.Salamander = Salamander;
