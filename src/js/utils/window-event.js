var CONSTANTS = require('./constants.js');
var AppAction = require('../actions/app-action.js');

var RESIZE = "resize";

window.addEventListener(RESIZE, function(){
		AppAction.windowResize();
});
