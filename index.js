'use strict'

var State = require('dover')
var h = require('virtual-dom/h')
var Observ = require('observ')

module.exports = App

function App () {
  var state = State({
    totalCount: Observ(0),
    channels: {
      countUp: countUp,
      countDown: countDown
    }
  })

  return state
}

function countUp (state) {
  state.totalCount.set(state.totalCount() + 1)
}

function countDown (state) {
  state.totalCount.set(state.totalCount() - 1)
}

App.render = function render (state) {
  return h('div', {
    style: {
      textAlign: 'center',
      padding: '10px',
      fontFamily: 'Open Sans, sans-serif'
    }
  }, [
    h('span', {
      style: {
        margin: '10px'
      }
    }, [state.totalCount]),

    h('button', {
      'ev-click': state.channels.countUp
    }, '+'),

    h('button', {
      'ev-click': state.channels.countDown
    }, '-')
  ])
}
