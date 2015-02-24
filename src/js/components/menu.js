var React = require('react/dist/react-with-addons.js');

var AppActions = require('../actions/app-actions');
var _r = React.createElement;

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
      _r('div',null,
        _r('button',{onClick: this.up},'Up'),
        _r('button',{onClick: this.down},'Down'),
        _r('button',{onClick: this.undo},'undo'),
        _r('button',{onClick: this.redo},'redo')
      )
    )
  }
});

module.exports = MENU;
