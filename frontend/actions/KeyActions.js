var AppDispatcher = require ('../dispatcher/Dispatcher');
var Tones = require ('../constants/Tones');

var KeyActions = {
	keyReceived: function (keyCode, key_state, shiftKey) {
		// debugger;
		var action = {
			actionType: Tones.MAPPED_KEYS[keyCode],
			key: keyCode,
			keyed: key_state,
			shift: shiftKey
		};
		AppDispatcher.dispatch(action);
	}
};

module.exports = KeyActions;
