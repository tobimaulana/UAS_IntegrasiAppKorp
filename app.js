var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var angkatanRouter = require('./routes/angkatan');
var biayalainRouter = require('./routes/biaya_lain');
var biayapmbRouter = require('./routes/biaya_pmb');
var biayatetapRouter = require('./routes/biaya_tetap');
var dosenRouter = require('./routes/dosen');
var fakultasRouter = require('./routes/fakultas');
var jadwalRouter = require('./routes/jadwal');
var mahasiswaaRouter = require('./routes/mahasiswaa');
var matkulRouter = require('./routes/matkul');
var prodiRouter = require('./routes/prodi');
var ruangkelasRouter = require('./routes/ruang_kelas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/angkatan', angkatanRouter);
app.use('/biaya_lain', biayalainRouter);
app.use('/biaya_pmb', biayapmbRouter);
app.use('/biaya_tetap', biayatetapRouter);
app.use('/dosen', dosenRouter);
app.use('/fakultas', fakultasRouter);
app.use('/jadwal', jadwalRouter);
app.use('/mahasiswaa', mahasiswaaRouter);
app.use('/matkul', matkulRouter);
app.use('/prodi', prodiRouter);
app.use('/ruang_kelas', ruangkelasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
