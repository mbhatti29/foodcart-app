const  express = require('express')
const  bodyParser = require('body-parser')
const  bcrypt = require('bcryptjs')
const  cors = require('cors')
const  knex = require('knex')
// const  createError = require('http-errors');
// const  path = require('path');
// const  cookieParser = require('cookie-parser');
// const  logger = require('morgan');
// const  bcrypt = require('bcryptjs')

// const  indexRouter = require('./routes/index');
// const  usersRouter = require('./routes/users');

const app = express();
const server = 3001 || process.env.PORT
const jsonParser = bodyParser.json()

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '3002', //5432 for desktop
    user: 'postgres',
    password: 'Hello.9123',
    database: 'foodcart'
  }
})


//! get recipes from the login user
app.get('/', (req, res) => {
  
  // return db.select('*').from('recipes')
  db.select('recipe', 'rating').from('recipes').where('email', '=', 'bryant9123@yahoo.com')
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    console.log("Problem connecting to db and retreving data")
  })
})


//! login User
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || password) {
    return res.status(400).json('Error processing credentials')
  }

  db.select('email', 'hash').from('login').where('email', '=', email)

    .then(data => {
      bcrypt.compare(password, data[0].hash)
        .then(response => {
          response 
            ? db.select('*').from('users').where('email', '=', email)
                .then(user => {
                  res.json(user[0])
                })
                .catch(err => {
                  res.status(400).json('Error logging in')
                })
            : res.status(400).json('Wrong Credentials')
        })
        .catch(err => {
          res.status(400).json('Wrong Credentials')
        })
    })
})

//! register User
app.post('/register', (req, res) => {
  const { email, name, password } = req.body

  if (!email || !name || !password) {
    return res.status(400).json('Error processing request')
  }

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
          })
          .into('login')
          .returning('email')
          .then(loginEmail => {
            return trx('users')
              .returning('*')
              .insert({
                name: name,
                email: loginEmail[0],
              })
              .then(user => {
                res.json(user[0])
              })
              .catch(err => {
                res.json('Error registering User')
              })
          })
          .then(trx.commit)
          .catch(trx.rollback)
      })
    })
  })
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
