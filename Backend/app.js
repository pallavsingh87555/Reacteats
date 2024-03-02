const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cartRoute = require('./routes/cartRoute.js');
const historyRoute = require('./routes/historyRoute.js');
const reviewRoute = require('./routes/reviewRoute.js');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', "*");
  next();
})

app.use('/Cart', cartRoute);
app.use('/History', historyRoute);
app.use('/Main', reviewRoute);

mongoose.connect('mongodb+srv://pallavsingh07:pallavsingh07@cluster0.sf3fvsx.mongodb.net/Cluster0').then(() => { app.listen(5000) }).catch(err => { console.log(err) })