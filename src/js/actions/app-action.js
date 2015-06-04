
var AppDispatcher = require('../dispatcher/dispatcher');
var CONSTANTS     = require('../utils/constants');

var AppAction = {

    windowResize : function() {
        AppDispatcher.dispatch({
              actionType : CONSTANTS.WINDOW_RESIZE
        })
    }
};

module.exports = AppAction;
