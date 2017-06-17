"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stressRefresher = require("./stressRefresher");

var _stressRefresher2 = _interopRequireDefault(_stressRefresher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dialogues(bot, builder) {
    (0, _stressRefresher2.default)(bot, builder);
}

exports.default = dialogues;