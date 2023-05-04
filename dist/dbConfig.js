"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var dbConfig;
var _default = dbConfig = {
  server: process.env.SERVER || '18.228.185.185',
  port: process.env.PORT || 35863,
  user: process.env.USER || 'cubos',
  password: process.env.PASSWORD || 'cubos',
  database: process.env.DATABASE || 'Bamana',
  driver: 'msnodesqlv8',
  connectionTimeout: '15000',
  requestTimeout: '15000'
};
exports["default"] = _default;