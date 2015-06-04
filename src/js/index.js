var React = require('react');
window.React = React;

var AppStore = require('./stores/app-store');
var AppAction = require('./actions/app-action');
var App = require('./views/app.jsx');
var CONSTANTS = require('./utils/constants');

require('./utils/window-event.js');

require('domready')(() => {
    React.render(<App />, document.body);
});
