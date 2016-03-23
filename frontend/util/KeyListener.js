var AppDispatcher = require('../dispatcher/Dispatcher');
var KeyActions = require('../actions/KeyActions');

var KeyListener = {
	pressKey: function(){
		$(document).on("keydown", function(e){
			KeyActions.keyReceived(e.keyCode, e.type);
		});
	},

	releaseKey: function(){
		$(document).on("keyup", function(e){
			KeyActions.keyReceived(e.keyCode, e.type);
		});
	}


};

module.exports = KeyListener;
