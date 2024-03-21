const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('@babel/register');

module.exports = function renderTemplate(reactElement, properties, response) {
  const reactEl = React.createElement(reactElement, properties);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.send(`<!DOCTYPE html>${html}`);
  response.end();
};
