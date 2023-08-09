// Done By Omar Abu Snineh
let state = false;
let dash = document.querySelector(".dash");
let timeX = 0;
let timeO = 0;
let squAll = [];
function winnerCase(n1, n2, n3) {
  dash.innerHTML = `${state ? "x" : "o"} Winner`.toUpperCase();
  document.getElementById("item" + n1).style.backgroundColor = "black";
  document.getElementById("item" + n2).style.backgroundColor = "black";
  document.getElementById("item" + n3).style.backgroundColor = "black";
  setInterval(() => {
    dash.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3500);
}
function win() {
  for (let i = 1; i < 10; i++) {
    squAll[i] = document.getElementById("item" + i).innerHTML;
  }
  if (squAll[1] === squAll[2] && squAll[2] === squAll[3] && squAll[1] != "") {
    winnerCase(1, 2, 3);
  } else if (
    squAll[4] === squAll[5] &&
    squAll[5] === squAll[6] &&
    squAll[4] != ""
  ) {
    winnerCase(4, 5, 6);
  } else if (
    squAll[7] === squAll[8] &&
    squAll[8] === squAll[9] &&
    squAll[7] != ""
  ) {
    winnerCase(7, 8, 9);
  } else if (
    squAll[1] === squAll[4] &&
    squAll[4] === squAll[7] &&
    squAll[1] != ""
  ) {
    winnerCase(1, 4, 7);
  } else if (
    squAll[2] === squAll[5] &&
    squAll[5] === squAll[8] &&
    squAll[2] != ""
  ) {
    winnerCase(2, 5, 8);
  } else if (
    squAll[3] === squAll[6] &&
    squAll[6] === squAll[9] &&
    squAll[3] != ""
  ) {
    winnerCase(3, 6, 9);
  } else if (
    squAll[1] === squAll[5] &&
    squAll[5] === squAll[9] &&
    squAll[1] != ""
  ) {
    winnerCase(1, 5, 9);
  } else if (
    squAll[3] === squAll[5] &&
    squAll[5] === squAll[7] &&
    squAll[3] != ""
  ) {
    winnerCase(3, 5, 7);
  }
}
function clickin(ids) {
  let squ = document.getElementById(ids);
  if (state === false && squ.innerHTML === "") {
    squ.innerHTML = "x";
    state = true;
    dash.innerHTML = "The Round For [o]";
    timeX++;
  } else if (state === true && squ.innerHTML === "") {
    squ.innerHTML = "o";
    state = false;
    dash.innerHTML = "The Round For [x]";
    timeO++;
  }
  if (timeO + timeX === 9) {
    dash.innerHTML = "No Winner".toUpperCase();
  }
  win();
}
