var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/dispatcher');
var CONSTANTS = require('../utils/constants');

var _apps = {
    count : 0
};

var AppStore = assign({}, EventEmitter.prototype, {
    increment : function(){
        _apps.count++;

        this.emit(CONSTANTS.INCREMENT);
    },

    onWindowResize : function() {
      // console.log('onWindowResize');
        this.emit(CONSTANTS.WINDOW_RESIZE)
    }

});

AppStore.dispatchToken = AppDispatcher.register(function(action){
    switch (action.actionType){
        case CONSTANTS.INCREMENT:
            AppStore.increment();
            break;
        case CONSTANTS.WINDOW_RESIZE:
            AppStore.onWindowResize();
            break;
    }

});


module.exports = AppStore;
