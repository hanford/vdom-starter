'use strict'

var Loop = require('main-loop')
var vdom = require('virtual-dom')
var Delegator = require('dom-delegator')

var App = require('./')

var state = App()

module.exports = state

Delegator()

var loop = Loop(state(), App.render, vdom)

state(loop.update)

document.body.appendChild(loop.target)
