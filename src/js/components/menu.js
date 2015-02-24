var React = require('react/dist/react-with-addons.js');

var AppActions = require('../actions/app-actions');

var MENU = React.createClass({
  up: function(e){
    e.stopPropagation();
    e.preventDefault();
    AppActions.addToThing(1);
  },
  down: function(e){
    e.stopPropagation();
    e.preventDefault();
    AppActions.removeFromThing(1);
  },

  undo: function(e){
    e.stopPropagation();
    e.preventDefault();
    AppActions.undo();
  },
  redo: function(e){
    e.stopPropagation();
    e.preventDefault();
    AppActions.redo();
  },

  render: function(){
    return (
      <div>
        <button onClick={this.up}> Up </button>
        <button onClick={this.down}> Down </button>
        <button onClick={this.undo}> undo </button>
        <button onClick={this.redo}> redo </button>
      </div>
    )
  }
});

module.exports = MENU;
