var React = require('react');
var ReactDOM = require('react-dom'); //react-dom renders items to the screen
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Stock Manager" />, document.getElementById('stocks'));
