mongoose = require "mongoose"
Base = require "./Base"
_ = require "underscore"
crypto = require 'crypto'

schema = new mongoose.Schema
  username: String
  password: String
  role: String

module.exports = Base.db.model "User", schema