var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
          <div>
              <h3>$tock Manager</h3>
              {this.props.children}
          </div>
        );
    }
});

module.exports = Base;
