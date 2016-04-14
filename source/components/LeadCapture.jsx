var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({

    onSubmit: function(e) {
          
    },

    render: function() {
          return (
              <div className="col-sm-3">
                  <div className="panel panel-default">
                      <div className="panel-body">
                          <NameField type="First" />
                          <EmailField />
                          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                      </div>
                  </div>
              </div>
          );
    }
});

module.exports = LeadCapture;
