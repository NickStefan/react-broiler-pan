var Immutable = require('immutable');
var _ = {
  mapValues: require('lodash/object/mapValues')
};

/////////////////////////////
// State Model

var defaultState = function() {
  return Immutable.Map({
    'thing': Immutable.Map({
      'onOff': false
    })
  });
};

var state = defaultState();

/////////////////////////////
// Private State Methods
var stateMethods = {
  _otherMethod: function(state, otherArg) {
    return state.updateIn(['thing'],function(thing){
      return thing.set('onOff', otherArg );
    });
  }

}

// map the invoked arguments to the expected arguments defined above.
// this is a convenience to keep actions, dispatchers, etc generic
// up until actually invoking the store methods above
// example: 
// invoked in the dispatcher as:
//   store.Method(store1, args); 
// invokes the methods defined above as
//   store.Method(store1, args[0], args[1] ... etc )
stateMethods = _.mapValues(stateMethods, function(fn,fnName,classObj) {
  return function(){
    var store = arguments[0];
    arguments[1] = arguments[1] || [];
    var dispatchedArgs = arguments[1].length ? arguments[1] : undefined;
    var args = [ store ].concat(dispatchedArgs);
    return fn.apply(classObj, args);
  }
});

module.exports = {
  stateMethods: stateMethods,
  state: state
}