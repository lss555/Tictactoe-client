'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
// const index = require('../../index.html')

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

const onUpdateGame = function (event) {
  // event.preventDefault()
  // const b0 = index('#0')
  // const b1 = index('#1')
  // const b2 = index('#2')
  //
  // if ((b0 === b1) && (b1 === b2) && (b1 !== "")) {
  //   if (b1 === 'x') {
  //     console.log('WINNER')
  //   }
  // }

  // let i
  // for (i = 0; i < 9; i++) {
  // }
  let i
  for (i = 0; i < 9; i++) {
    if (i % 2 === 0) {
      $(event.target).text('x')
    } else {
      $(event.target).text('o')
    }
  }
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

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
