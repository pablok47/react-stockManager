var React = require('react');

var Clock = React.createClass({
    getInitialState: function() {
      return {hours: '', minutes: '', seconds: ''};
    },

    tick: function() {
      var now = new Date();
      var h = now.getHours();
      var m = ('0' + now.getMinutes()).slice(-2);
      var s = ('0' + now.getSeconds()).slice(-2);

      this.setState({hours: h, minutes: m, seconds: s});
    },

    componentDidMount: function() {
      this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
      clearInterval(this.interval);
    },

    render: function() {
      return (
          <div>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
      );
    }

});

module.exports = Clock;
