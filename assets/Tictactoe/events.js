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
  store.player = 'X'
  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  // index is then stored in store.location
  const index = event.target.id
  store.location = index
  // rotating between x and o and checking for empty spaces
  if (index !== 'X' || index !== 'O') {
    // const clickedCell = event.target
    $(index).text(store.player)
    console.log(store.player)
  }

// $('.container').click(function () {
//   // If container is clicked give value of x or o depending on turn and not a blank spot and then print to corresponding currentBox
//   // then check weather gameOver is true or false and either procced or end game
let over
  // could try having same inputs as api?
  console.log(index)
  api.updateGame(index, over)
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
