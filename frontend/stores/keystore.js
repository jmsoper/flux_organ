var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');
var NoteConstants = require('../constants/Tones');
var KeyStore = new Store(AppDispatcher);

var _keys = [];

var _callbacks = [];

var setKeys = function (key) {
	_keys.push(key);

};

KeyStore.addCallback = function (callback) {
	_callbacks.push(callback);
};

var removeKeys = function (key) {
	_keys.pop();

	};

KeyStore.all = function() {
	return _keys.slice();
};

KeyStore.find = function(key) {
	for ( var i = 0; i < _keys.length; i++){
		if (NoteConstants.MAPPED_KEYS[_keys[i]] === key){
			return key;
		}
	}
};


KeyStore.__onDispatch = function (payload){
		switch (payload.actionType) {
			case NoteConstants.MAPPED_KEYS[payload.key]:
			if (payload.keyed === "keydown"){
				setKeys(payload.key);
			} else {
				removeKeys(payload.key);
			}
			KeyStore.__emitChange();
			break;
		}

};

module.exports = KeyStore;
