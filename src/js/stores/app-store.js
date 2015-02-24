var EventEmitter = require('events').EventEmitter;
var _ = {
  extend: require('lodash/object/extend')
};

var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var exampleDataStore = require('../stores/exampleDataStore');
var exampleDataMethods = exampleDataStore.storeMethods;
var exampleData = exampleDataStore.data;

var exampleStateStore = require('../stores/exampleStateStore');
var exampleStateMethods = exampleStateStore.stateMethods;
var exampleState = exampleStateStore.state;

/////////////////////////////
// Store Public Methods
var AppStore = _.extend(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeEventListener: function(callback){
    this.removeEventListener(CHANGE_EVENT, callback);
  },
  getExample: function(){
    return exampleData;
  },
  getExampleState: function(){
    return exampleState;
  }
});

/////////////////////////////
// from dispatcher to store methods
AppStore.dispatchToken = AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.type) {

    // state and data changes
    case ActionTypes.addToThing:
      exampleData = exampleDataMethods._someMethod(exampleData, payload.action.args);
      break;

    case ActionTypes.removeFromThing:
      exampleData = exampleDataMethods._someOtherMethod(exampleData, payload.action.args);
      break;

    case ActionTypes.otherAction:
      exampleState = exampleStateMethods._otherMethod(exampleState, payload.action.args);
      break;
    
    default:
      // do nothing
  }
  AppStore.emitChange();
  return true;
});

module.exports = AppStore;