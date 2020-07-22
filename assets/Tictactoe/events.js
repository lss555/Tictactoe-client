'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame
}
