'use strict'

const store = require('../scripts/store')

// const config = require('../scripts/templates/config')

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
  $('.container').show()
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

const changePasswordSuccess = function (response) {
  $('#change-password-message').text('Password changed!')
  // store.user = response.user
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

const createGameSuccess = function (response) {
  $('#create-game-message').text(console.log('New game!'))
  store.game = response.game
  // $('.cell').text('It works')
}

const createGameFailure = function () {
  $('#create-game-message').text('no new game')
}

// const updateGameSuccess = function (response) {
//   $('#message').text('Choose your move')
//   console.log(response)
// }

// store.player = player
// let i
// for (i = 0; i < 9; i++) {
//   const clickedCell = event.target
//   if (clickedCell !== '') {
//     $('#message').text('Please choose an empty space')
//   } else if (i % 2 === 0) {
//     $(event.target).text('x')
//   } else {
//     $(event.target).text('o')
//   }

// const updateGameFailure = function () {
//   $('#message').text('Please choose an empty square')
// }

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
  createGameFailure
}
