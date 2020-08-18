const db = require('../models/database');
// const { query } = require('express');
const dataObj = {};

// Query database to receive all entries. Then organize entries and store each 'name' as a key on object with the properties of
// 'name' being the other columns. Send organized data to the frontend.
dataObj.getAll = (req, res, next) => {
  const queryTest = 'SELECT * FROM "public"."webpack" LIMIT 100';
  db.query(queryTest).then((data) => {
    const obj = {};
    data.rows.forEach((el) => {
      obj[el.name] = {
        npm: el.npm,
        code: el.code,
        description: el.description,
        require: el.require,
      };
    });

    res.locals.data = obj;

    next();
  });
};

module.exports = dataObj;
