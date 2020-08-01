'use strict'

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
  // store.user = response.user
  $('form').trigger('reset')
}
const changePasswordFailure = function () {
  $('#change-password-message').text('Failed to change password')
}

const createGameSuccess = function (response) {
  $('#create-game-message').text(console.log('New game!'))
  $('.container').show()
  store.game = response.game
  console.log(store.game)
  // $('.cell').text('It works')
}

const createGameFailure = function () {
  $('#create-game-message').text('no new game')
}
// -------------------->
// update game attempts, ideas, and x/o without ajax

// const updateGameSuccess = function (event) {
//   document.getElementById('gameboard').addEventListener('click', (event) => {
//     const currentBox = event.target.innerText
//     if (!store.player) {
//       store.player = 0
//     }
//     if (store.player % 2 === 0 && currentBox.length !== 1) {
//       event.target.innerText = 'X'
//       store.player += 1
//     } else if ((store.player % 2 === 1 && currentBox.length !== 1)) {
//       event.target.innerText = 'O'
//       store.player += 1
//     } else {
//       console.log('not a valid move')
//     }
//   })
// }
// ------------------->
const updateGameSuccess = function (event) {
  // $('.container').click(function () {
  //   // If container is clicked give value of x or o depending on turn and not a blank spot and then print to corresponding currentBox
  //   // then check weather gameOver is true or false and either procced or end game
  // const location = store.location
  //   let value
  //   if (store.player % 2 === 0) {
  //     value = 'X'
  //   } else {
  //     value = 'O'
  //   }
  // })
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
