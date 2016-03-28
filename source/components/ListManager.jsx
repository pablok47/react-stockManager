var React = require('react');
var List = require('./List.jsx');

//this.state is used when data could change (immutable)
var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText: ''};
    },
    onChange: function(e) {
        //update the state property every time a keystroke is typed
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        //stop the button from getting clicks since we are using onSubmit
        e.preventDefault();

        //grabs the current list of items
        var currentItems = this.state.items;

        //adds new item to the list
        currentItems.push(this.state.newItemText);

        //updates the main item list with the new list and clears the newItemText
        this.setState({items: currentItems, newItemText: ''});

    },

    render: function() {
        //onChange is called with every keystroke so we can store the most recent data entered
        //value is what he user sees on the input-box...we point this to newItemText so it updates on every keystroke
        //below use className instead of just class because react confused it with createClass
        return (
          <div className="col-sm-4">
              <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3>{this.props.title}</h3>
                  </div>
                  <div className="panel-body">
                      <form onSubmit={this.handleSubmit}>
                          <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                          <button className="btn btn-primary">Add</button>
                      </form>
                      <List items={this.state.items} />
                  </div>
              </div>
          </div>
        );
    }

});

module.exports = ListManager;
