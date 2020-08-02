'use strict'
/* eslint-env jquery */
const store = require('../scripts/store')

// sign up functions

const signUpSuccess = function () {
  $('#sign-up-message').html('Succesfully signed up!')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#sign-up-message').html('email already in use')
}

// SIGN IN ---------
const signInSuccess = function (response) {
  $('#sign-in-message').text(console.log('Signed in!'))
  store.user = response.user
  $('form').trigger('reset')

  // hide and show for sign in
  $('#sign-in').hide()

  $('#create-game').show()
  $('#sign-out').show()
  $('#change-password').show()
}

const signInFailure = function (data) {
  $('#sign-in-message').text('Failed to sign in')
}

// SIGN OUT ------------

const signOutSuccess = function (data) {
  $('#sign-out-message').text('Signed out!')
  store.user = null
  $('#sign-out').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#create-game').hide()
  $('.container').hide()
  $('#sign-out').hide()
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('Something went wrong!')
}

// change password functions

const changePasswordSuccess = function (response) {
  $('#change-password-message').text('Password changed!')

  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

const createGameSuccess = function (response) {
  $('#create-game-message').text(console.log('New game!'))
  $('.container').show()
  // trying to reset gameboard not api array
  store.game = response.game
  store.player = 0
}

const createGameFailure = function () {
  $('#create-game-message').text('no new game')
}

const updateGameSuccess = function (response) {
  // console.log('response ', response.game)
  const zeArray = response.game.cells
  store.response = response
  $('#' + store.location).text(store.value)
  // win function ------------->
  const gameWon = function (response) {
    // determining if there is a winner/tie
    if (zeArray[0] && zeArray[0] === zeArray[1] && zeArray[0] === zeArray[2]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      console.log($('.box'))
      $('.box').text('')
      // getting board to reset when game won
    } else if (zeArray[3] && zeArray[3] === zeArray[4] && zeArray[3] === zeArray[5]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[6] && zeArray[6] === zeArray[7] && zeArray[6] === zeArray[8]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[0] && zeArray[0] === zeArray[3] && zeArray[0] === zeArray[6]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[1] && zeArray[1] === zeArray[4] && zeArray[1] === zeArray[7]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[2] && zeArray[2] === zeArray[5] && zeArray[2] === zeArray[8]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[0] && zeArray[0] === zeArray[4] && zeArray[0] === zeArray[8]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[2] && zeArray[2] === zeArray[4] && zeArray[2] === zeArray[6]) {
      $('#message').text('gz kid ' + store.value + ' wins')
      $('.container').hide()
      $('.box').text('')
    } else if (zeArray[0] && zeArray[1] && zeArray[2] && zeArray[3] && zeArray[4] && zeArray[5] && zeArray[6] && zeArray[7] && zeArray[8]) {
      $('#message').text('Can\'t win everything I suppose')
      $('.container').hide()
      $('.box').text('')
    }
  }
  gameWon()
}
const updateGameFailure = function () {
  $('#message').text('Please choose an empty square')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameFailure,
  updateGameSuccess
}
