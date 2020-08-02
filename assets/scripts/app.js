'use strict'

const authEvents = require('../Tictactoe/events')

$(() => {
  // your JS code goes here
// hiding form fields and new game before login
  $('#games-played').on('click', authEvents.onGamesPlayed)
  $('.container').hide()
  $('#change-password').hide()
  $('#create-game').hide()
  $('#games-played').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', authEvents.onCreateGame)
  // $('.container').on('click', authEvents.onUpdateGame)
  // $(".container")index.data("cell-index")
  $('#sign-out').hide()
  $('#gameboard').on('click', authEvents.onUpdateGame)
})
