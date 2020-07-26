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

  const form = event.target
  const formData = getFormFields(form)

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

// Update game with game winning and alternating x and o logic
//
//
//
// const onUpdateGame = function (event) {
//   event.preventDefault()
  // const b0 = index.board.b0
  // const b1 = index.board.b1
  // const b2 = index.board.b2
  // const b3 = index.board.b3
  // const b4 = index.board.b4
  // const b5 = index.board.b5
  // const b6 = index.board.b6
  // const b7 = index.board.b7
  // const b8 = index.board.b8
  //
  // // switches betweeen x and o, doesnt work yet
  //
  // let i
  // for (i = 0; i < 9; i++) {
  //   if (i % 2 === 0) {
  //     $(event.target).text('x')
  //   } else {
  //     $(event.target).text('o')
  //   }
  // }
  //
  // if ((b0 === b1) && (b1 === b2) && (b1 !== ' ')) {
  //   if (b1 === 'x') {
  //     console.log('X wins!')
  //   } else {
  //     console.log('O wins!')
  //   }
  //   if ((b3 === b4) && (b4 === b5) && (b3 !== ' ')) {
  //     if (b3 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b6 === b7) && (b7 === b8) && (b6 !== ' ')) {
  //     if (b6 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b0 === b4) && (b4 === b8) && (b4 !== ' ')) {
  //     if (b4 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b6 === b4) && (b4 === b2) && (b4 !== ' ')) {
  //     if (b4 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b1 === b4) && (b4 === b7) && (b4 !== ' ')) {
  //     if (b4 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b2 === b5) && (b5 === b8) && (b5 !== ' ')) {
  //     if (b5 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  //   if ((b0 === b3) && (b3 === b6) && (b3 !== ' ')) {
  //     if (b3 === 'x') {
  //       console.log('X wins!')
  //     } else {
  //       console.log('O wins!')
  //     }
  //   }
  // }

//   api.updateGame()
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

// const onGameWon = function (event) {
//   event.preventDefault()
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame
}
