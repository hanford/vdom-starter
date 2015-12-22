'use strict'

var State = require('dover')
var h = require('virtual-dom/h')

var Counter = require('./src/components/counter')

module.exports = App

function App () {
  var state = State({
    counter: Counter()
  })

  return state
}

App.render = function render (state) {
  return h('div', {
    style: {
      textAlign: 'center',
      padding: '10px',
      fontFamily: 'sans-serif'
    }
  }, [
    Counter.render(state.counter)
  ])
}
