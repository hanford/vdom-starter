'use strict'

var State = require('dover')
var h = require('virtual-dom/h')
var Observ = require('observ')

module.exports = Counter

function Counter () {
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

Counter.render = function render (state) {
  return h('div', {}, [
    h('span', {
      style: {
        margin: '10px'
      }
    }, [(state && state.totalCount || '0')]),

    h('button', {
      'ev-click': state.channels.countUp
    }, '+'),

    h('button', {
      'ev-click': state.channels.countDown
    }, '-')
  ])
}
