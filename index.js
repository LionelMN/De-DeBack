const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
//mongo atlas
mongoose.connect('mongodb+srv://Lionel:1pSMMp2En20vO28s@cluster0.tcmq6.mongodb.net/eoi-de-de?retryWrites=true&w=majority')

app.use(cors({ origin : true}  ));
app.use(express.json())

const usersRouter = require('./api/users/users.router')
app.use('/users', usersRouter)

const postsRouter = require('./api/posts/posts.router')
app.use('/posts', postsRouter)

const specialtiesRouter = require('./api/specialties/specialties.router');
app.use('/specialties', specialtiesRouter)

const auth = require("./api/auth/auth.router")
app.use('/', auth)


app.listen(5000)