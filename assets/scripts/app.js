'use strict'

const authEvents = require('../Tictactoe/events')

//TTT board to reveal pic when played
// const box = $(event.target)
//
// box.text(currentPlayer)
// box.css('background', 'transparent')




// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', authEvents.onCreateGame)
})
