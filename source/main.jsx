var React = require('react');
var ReactDOM = require('react-dom'); //react-dom renders items to the screen
var ListManager = require('./components/ListManager.jsx');

//copy and pasted the top line below to create more lists
ReactDOM.render(<ListManager title="Stock Manager" />, document.getElementById('stocks'));
ReactDOM.render(<ListManager title="ETF Manager" />, document.getElementById('etfs'));
ReactDOM.render(<ListManager title="Fund Manager" />, document.getElementById('funds'));
