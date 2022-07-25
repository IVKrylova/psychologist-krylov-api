require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000, MONGODB_URL, NODE_ENV } = process.env;
const MONGODB_URL_DEV = require('./utils/constants');

const app = express();

async function main() {
  await mongoose.connect(NODE_ENV === 'production' ? MONGODB_URL : MONGODB_URL_DEV);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

main();
