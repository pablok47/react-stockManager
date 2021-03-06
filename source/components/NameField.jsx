var React = require('react');

var NameField = react.createClass({
      getInitialState: function() {
          return {value: ""}; 
      },

      onChange: function(e) {
          this.setState({value: e.target.value});
      },

      render: function() {
          return (
               <input
               className="form-control"
               placeholder={this.props.type + " Name"}
               onChange={this.onChange}
               value={this.state.value} />

          );
      }
});

module.exports = NameField;
