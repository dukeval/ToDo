require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const todos = require('./routes/ToDo');
const user = require('./routes/User');
const app = express();

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_KEY = process.env.MONGODB_PWD;
const MONGODB_ClusterAddress = process.env.MONGODB_ClusterAddress;

const mongoose = require('mongoose');
const dev_url = `mongodb+srv://${MONGODB_USER}:${MONGODB_KEY}@${MONGODB_ClusterAddress}?retryWrites=true&w=majority`;

mongoose.connect(dev_url);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console,'MongoDB connection error::'));

app.use(bodyParser.json());
app.use('/ToDo',todos);
app.use('/User',user);

app.listen(3000,()=>{console.log('Sever is running::');
})