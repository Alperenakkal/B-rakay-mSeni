var express = require('express');
var path = require('path');
var cors=require("cors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("dotenv").config();
require("./api/models/db");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var apiRouter =require("./api/routes/route")
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api",apiRouter);
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;