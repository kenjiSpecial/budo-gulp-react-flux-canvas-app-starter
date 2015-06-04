var EventEmitter = require('events').EventEmitter;
const raf = require('raf');

var assign = require('object-assign');
var keyboard = require('./keyboard.js');

var CONSTANTS = require('./constants');
// var AppStore = require('../stores/app-store.js');

var ticker = assign({}, EventEmitter.prototype, {
    isStart : false,
    init : function(){
        this.render = this.render.bind(this);

        this.onKeyboardDownHandler = this.onKeyboardDownHandler.bind(this);

				keyboard.on(CONSTANTS.KEYBOARD_DOWN, this.onKeyboardDownHandler );
    },

    start : function() {
        this.isStart = true;
        this.id = raf(this.render);
    },

    render : function() {
        this.emit(CONSTANTS.TICK);
        this.id = raf(this.render);
    },

    cancel : function() {
        this.isStart = false;
        raf.cancel(this.id);
    },

    onKeyboardDownHandler : function(keycode) {
        switch(keycode){
            case 27:
                if(this.isStart) this.cancel();
                else             this.start();
                break;
        }

    }
});

ticker.init();
ticker.start();

module.exports = ticker;
