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
  store.game = response.game
  console.log(store.game)
  // $('.cell').text('It works')
}

const createGameFailure = function () {
  $('#create-game-message').text('no new game')
}

// update game attempts, ideas, and x/o without ajax

// const updateGameSuccess = function (event) {
//   document.getElementById('gameboard').addEventListener('click', (event) => {
//     let currentBox = event.target.innerText
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
const updateGameSuccess = function (event) {
  $('.container').click(function () {
    // const currentBox = event.target
    // store.currentBox = store.event
    // const b0 = $('.b0')
    // console.log(b0)
    console.log(store.currentBox)

    // make store.player = null after game won/tie is reached
    if (!store.player) {
      store.player = 0
    }
    if (store.player % 2 === 0 && store.currentBox.length !== 1) {
      $(event.target).text('X')
      store.player++
    } else if (store.player % 2 === 1 && store.currentBox.length !== 1) {
      // event.target.text() = 'O'
      $(event.target).text('O')

      store.player++
    } else {
      console.log('please choose a open space')
    }
  })
}
// x to o guessing game doesnt work yet
// const player = ['X', 'O']
//
//   const clickedCell = function (cell) {
//     if (cell === 'X') {
//       store.player = 'O'
//     } else {
//       store.player = 'X'
//     }
//   }
// const cellContents = clickedCell(store.player)
// console.log(cellContents)
// const clickedCell = event.target
// for (i = 0; i < 9; i++) {
//   if (i % 2 === 0) {
//     $(event.target).text('x')
//   } else {
//     $(event.target).text('o')
//   }
// }

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

// store.player = player
// let i
// for (i = 0; i < 9; i++) {
//   const clickedCell = event.target
//   if (clickedCell !== '') {
//     $('#message').text('Please choose an empty space')
//   } else if (i % 2 === 0) {
//     $(event.target).text('X')
//   } else {
//     $(event.target).text('O')

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
