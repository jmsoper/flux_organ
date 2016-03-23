var React = require('react');
var Key = require('./key');
var ToneConstants = require('../constants/Tones');
var KeyListener = require('../util/KeyListener');

var Organ = React.createClass({

	componentDidMount: function() {
		KeyListener.pressKey();
		KeyListener.releaseKey();
	},

	render: function() {
		var keyArray = [];

		for (var key in ToneConstants.TONES) {
			keyArray.push(key);
		}

		return (

			<ul className="group">
				{
					keyArray.map(function(el, index) {
						return <li key={index}><Key note={el} /></li>;

					})
				}
			</ul>
		);
	}
});

module.exports = Organ;
