mongoose = require "mongoose"
Base = require "./Base"
_ = require "underscore"

schema = new mongoose.Schema
  username: String
  password: String
  role: String
  bla: mongoose.Schema.Types.Mixed

module.exports = Base.db.model "TestModel", schema