'use strict'

const store = require('../scripts/store')

// const config = require('../scripts/templates/config')

const signUpSuccess = function () {
  $('#sign-up-message').html('Succesfully signed up!')
}

const signUpFailure = function () {
  $('#sign-up-message').html('email already in use')
}

// const signInSuccess = function () {
//   $('#sign-in-message').html('Succesfully signed in!')
// }
// SIGN IN ---------
const signInSuccess = function (response) {
  $('#sign-in-message').addClass('Success!')
  $('#sign-in-message').removeClass('Failure')
  $('#sign-in-message').text('Signed in!')
  store.user = response.user

  $('authenticated').show()
  $('unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#sign-in-message').addClass('Success')
  $('#sign-in-message').removeClass('Failure')
  $('#sign-in-message').text('Failed to sign in')
}
// SIGN OUT ------------
const signOutSuccess = function (data) {
  $('#sign-out-message').addClass('Success')
  $('#sign-out-message').removeClass('Failure')
  $('#sign-out-message').text('Failed to sign in')
  store.user = null
  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('form').trigger('reset')
}

const signOutFailure = function (data) {
  $('#sign-out-message').addClass('Success')
  $('#sign-out-message').removeClass('Failure')
  $('#sign-out-message').text('Something went wrong!')
}

// const changePasswordSuccess = function () {
//   $('#change-password-message').html('Password successfully changed')
// }

const changePasswordSuccess = function (response) {
  $('#change-password-message').text(console.log('Password changed!'))
  // console.log(store)
  // store.user = response.user
  // console.log('store: ', store)
  // console.log('token: ', store.user.token)
}

const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
