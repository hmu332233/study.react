'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var Account = new Schema({
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

// generates hash
Account.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function (password) {
    return bcrypt.compareSync(password, this.password);
};

exports.default = _mongoose2.default.model('account', Account);