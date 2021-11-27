console.log("Welcome to Tic Tac Toe");
let music = new Audio("1 Second Tone.mp3");
let audioTurn = new Audio("Page Turn.mp3");
let gameover = new Audio("Game Over.mp3");
let turn = "X";
let over = false;
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 0, 2, 5],
    [3, 4, 5, 0, 2, 15],
    [6, 7, 8, 0, 2, 25],
    [0, 3, 6, 90, 15, 8],
    [1, 4, 7, 90, 15, -2],
    [2, 5, 8, 90, 15, -12],
    [0, 4, 8, 45, 12, 9],
    [2, 4, 6, -45, -9, 12],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
        gameover.play();
      over = true;
            document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "160px";
      document.querySelector(".line").style.width = "26vw";
      document.querySelector(
        ".line"
      ).style.transform = `rotate(${e[3]}deg) translate(${e[4]}vw, ${e[5]}vw)`;
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!over) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  over = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
