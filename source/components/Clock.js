var React = require('react');

var Clock = React.createClass({
    getInitialState: function() {
      return {hour: 0, minutes: 0, seconds: 0};
    },

    tick: function() {
      var now = new Date();
      var h = now.getHours();
      var m = ('0' + now.getMinutes()).slice(-2);
      var s = ('0' + now.getSeconds()).slice(-2);

      this.setState({hours: h, minutes: m, seconds: s});
    },

});
