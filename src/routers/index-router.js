const indexRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const MainPage = require('../views/pages/MainPage');

indexRouter.get('/', async (req, res) => {
  try {
    renderTemplate(MainPage, {}, res);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = indexRouter;
