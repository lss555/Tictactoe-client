'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const store = require('../scripts/store')
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

  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const index = event.target.id

  // trying to get value to be equal to x or o depending on turn -> ui
  // and over to be true if there is a winner or all space taken up, else false
  // could try having same inputs as api?
  store.location = index
  console.log(index)
  api.updateGame(index)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
// store.currentBox = event.target
// const onGameWon = function (event) {
//   event.preventDefault()
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
