var React = require('react');
window.React = React;

var AppStore = require('./stores/app-store');
var AppAction = require('./actions/app-action');
var CanvasApp = require('./views/canvas-app.jsx');
var CONSTANTS = require('./utils/constants');

require('./utils/window-event.js');

require('domready')(() => {
    React.render(<CanvasApp />, document.body);
});
