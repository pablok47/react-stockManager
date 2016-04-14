var React = require('react');

var NameField = react.createClass({

      onChange: function(e) {

      },

      render: function() {
          return (
               <input className="form-control" placeholder={this.props.type + " Name"} onChange={this.onChange} />
          );
      }
});

module.exports = NameField;
