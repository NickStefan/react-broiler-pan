var React = require('react/dist/react-with-addons.js');
var AppStore = require('../stores/app-store');

var MENU = require('./menu');
var THING = require('./thing');

function getExample(){
  return AppStore.getExample();
}

function getExampleState(){
  return AppStore.getExampleState();
}

var APP = React.createClass({
  getInitialState: function(){
    return {
      example: getExample(),
      exampleState: getExampleState()
    };
  },
  componentWillMount: function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeEventListener(this._onChange);
  },
  _onChange: function(){
    this.setState({
      example: getExample(),
      exampleState: getExampleState()
    });
  },
  render: function(){
    return (
      <div>
        <MENU example={this.state.example} exampleState={this.state.exampleState} />
        <THING thing={this.state.example.get('thing')} state={this.state.exampleState.get('thing')} />
      </div>
    )
  }
});

module.exports = APP;
