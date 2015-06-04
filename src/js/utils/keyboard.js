var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CONSTANTS = require('./constants');

var keybord = assign({}, EventEmitter.prototype, {
    start : function(){
				this.onKeydownHandler = this.onKeydownHandler.bind(this);

        document.addEventListener('keydown', this.onKeydownHandler);
    },

    onKeydownHandler : function(ev){
        this.emit(CONSTANTS.KEYBOARD_DOWN, ev.keyCode);
    }
});

keybord.start();

module.exports = keybord;
