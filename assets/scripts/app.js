'use strict'

const authEvents = require('../Tictactoe/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('.container').on('click', authEvents.onUpdateGame)
  // $(".container")index.data("cell-index")
})
