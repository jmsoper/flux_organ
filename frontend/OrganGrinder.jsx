var Dispatcher = require('./dispatcher/Dispatcher');
var Note = require('./util/Note');
var KeyListener = require('./util/KeyListener');
var KeyStore = require('./stores/keystore');
var React = require('react');
var ReactDOM = require('react-dom');
var Key = require('./components/key');
var Organ = require('./components/organ');

$(document).ready(function(e){
	ReactDOM.render(<Organ />, $("div")[0]);
});
