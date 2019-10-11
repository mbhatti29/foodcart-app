const  express = require('express');
const  bodyParser = require('body-parser')
const  cors = require('cors')
const  knex = require('knex')
// const  createError = require('http-errors');
// const  path = require('path');
// const  cookieParser = require('cookie-parser');
// const  logger = require('morgan');
// const  bcrypt = require('bcryptjs')

// const  indexRouter = require('./routes/index');
// const  usersRouter = require('./routes/users');


const  app = express();
const server = 3001 || process.env.PORT
const jsonParser = bodyParser.json()

app.use(cors())
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req, res) => {
  console.log("Clocked In")
})

app.get('/login', (req, res) => {
  res.send("<h1>Welcome</h1>")
})


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(server, () => {
  console.log("Server Started", server)
})

module.exports = app;
