var React = require('react');
var KeyListener = require('../util/KeyListener');
var Keystore = require('../stores/keystore');
var Tones = require('../constants/Tones');
var Note = require ('../util/Note');

var Key = React.createClass({
	getInitialState: function(){
		return {playing: false};
	},

	componentDidMount: function() {
		this.keyStoreToken = Keystore.addListener(this.setStateFromStore);
		var freq = Tones.TONES[this.props.note];
		this.this_note = new Note(freq);
	},

	setStateFromStore: function() {
		var noteFound = Keystore.find(this.props.note);
		var isPlaying;
		if (noteFound){
			isPlaying = true;
		} else {
			isPlaying = false;
		}
		this.setState({playing: isPlaying});

		if (this.state.playing){
			this.playKey();
		} else {
			this.stopKey();
		}
	},

	playKey: function() {

		this.this_note.start();

	},

	stopKey: function() {

		this.this_note.stop();
	},

	render: function(){
		var klass = this.state.playing ? "organkey playing" : "organkey";
		return (

			<div className={klass}>{this.props.note}</div>
		);
	},

});

module.exports = Key;
