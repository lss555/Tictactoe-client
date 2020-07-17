'use strict'

const signUpSuccess = function () {
  $('#sign-up-message').html('Succesfully signed up!')
}

const signUpFailure = function () {
  $('#sign-up-message').html('email already in use')
}

const signInSuccess = function () {
  $('#sign-in-message').html(console.log('Succesfully signed in!'))
}

const signInFailure = function () {
  $('#sign-in-message').html(console.log('sucks2suck'))
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
