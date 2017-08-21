document.addEventListener('DOMContentLoaded', function() {

var singleSquare = document.querySelectorAll('.square');
var row = document.querySelectorAll('.row');
var turn = 0;
console.log(singleSquare);

for (var i = 0; i < singleSquare.length; i++) {
  singleSquare[i].addEventListener('click', function(e) {
    if (turn % 2 === 0) {
      this.innerText = 'X';
      turn += 1;
    } else {
      this.innerText = 'O';
      turn += 1;
    }
    if (singleSquare[0].innerText === 'X' && singleSquare[1].innerText === 'X' && singleSquare[2].innerText === 'X') {
      alert("Player One Wins!")
    } else if (singleSquare[0].innerText === 'O' && singleSquare[1].innerText === 'O' && singleSquare[2].innerText === 'O') {
      alert("Player Two Wins!")
    }  else if (singleSquare[3].innerText === 'X' && singleSquare[4].innerText === 'X' && singleSquare[5].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[3].innerText === 'O' && singleSquare[4].innerText === 'O' && singleSquare[5].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[6].innerText === 'X' && singleSquare[7].innerText === 'X' && singleSquare[8].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[6].innerText === 'O' && singleSquare[7].innerText === 'O' && singleSquare[8].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[0].innerText === 'X' && singleSquare[3].innerText === 'X' && singleSquare[6].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[0].innerText === 'O' && singleSquare[3].innerText === 'O' && singleSquare[6].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[1].innerText === 'X' && singleSquare[4].innerText === 'X' && singleSquare[7].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[1].innerText === 'O' && singleSquare[4].innerText === 'O' && singleSquare[7].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[2].innerText === 'X' && singleSquare[5].innerText === 'X' && singleSquare[8].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[2].innerText === 'O' && singleSquare[5].innerText === 'O' && singleSquare[8].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[0].innerText === 'X' && singleSquare[4].innerText === 'X' && singleSquare[8].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[0].innerText === 'O' && singleSquare[4].innerText === 'O' && singleSquare[8].innerText === 'O') {
        alert("Player Two Wins!")
    } else if (singleSquare[2].innerText === 'X' && singleSquare[4].innerText === 'X' && singleSquare[6].innerText === 'X') {
        alert("Player One Wins!")
    } else if (singleSquare[2].innerText === 'O' && singleSquare[4].innerText === 'O' && singleSquare[6].innerText === 'O') {
        alert("Player Two Wins!")
    }
    if (turn === 9) {
      alert('Draw!');
    }
})
};

});
