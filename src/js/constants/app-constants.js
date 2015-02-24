module.exports = {
  ActionTypes: {
    undo: 'undo',
    redo: 'redo',
    
    addToThing: 'addToThing',
    removeFromThing: 'removeFromThing',
    otherAction: 'otherAction'
  },

  reverse: {
    addToThing: 'removeFromThing',
    removeFromThing: 'addToThing'
  },

  notForCommandManager: {
    otherAction: 'otherAction'
  }

};