'use strict'

const store = require('../scripts/store')

// const config = require('../scripts/templates/config')

const signUpSuccess = function () {
  $('#sign-up-message').html('Succesfully signed up!')
}

const signUpFailure = function () {
  $('#sign-up-message').html('email already in use')
}


// SIGN IN ---------
const signInSuccess = function (response) {
  $('#sign-in-message').text(console.log('Signed in!'))
  store.user = response.user

  $('authenticated').show()
  $('unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#sign-in-message').text('Failed to sign in')
}
// SIGN OUT ------------
const signOutSuccess = function (data) {
  $('#sign-out-message').text('Signed in!')
  store.user = null
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('form').trigger('reset')
}

const signOutFailure = function (data) {
  $('#sign-out-message').text('Something went wrong!')
}

const changePasswordSuccess = function (response) {
  $('#change-password-message').text(console.log('Password changed!'))
  // store.user = response.user
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

const createGameSuccess = function (response) {
  $('#create-game-message').text(console.log('New game!'))
  store.game = response.game
  $('.cell').text('It works')
}

const createGameFailure = function () {
  $('#create-game-message').text('no new game :/')
}

const updateGameSuccess = function (response) {
  $('#message').text('Choose your move')
  console.log(response)

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
  updateGameSuccess,
  updateGameFailure
}
