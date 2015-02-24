var React = require('react/dist/react-with-addons.js');
var classSet = React.addons.classSet;

var AppActions = require('../actions/app-actions');

var THING = React.createClass({
  colorIt: function(e){
    e.stopPropagation();
    e.preventDefault();
    var bool = this.props.state.get('onOff') ? false : true;
    AppActions.otherAction(bool);
  },

  render: function(){
    var classState = classSet({
      'color': this.props.state.get('onOff')
    });

    return (
      <div>
        <h1 onClick={ this.colorIt } className={ classState }>
          { this.props.thing.get('count') }
        </h1>
      </div>
    )
  }
});

module.exports = THING;
