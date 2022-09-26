let gamer1 = document.getElementById("gamer1");
let gamer2 = document.getElementById("gamer2");
let go = document.getElementById("go");
let turn = document.getElementById("turn");
let gaming = document.getElementsByClassName(".gaming");
let resultBox = document.getElementById("resultBox");
let resultMsg = document.getElementById("resultMsg");
let symbole = "X";
let winnerIs = null;
let submitB = 0;

let cels = [];

let div = document.createElement("div");

function clear(){
    for (i = 1; i < 10; i++) {
        cels[i].innerHTML = "";
      } 
}

function reload(){
  location.reload();
}

function next() {
  resultBox.style.display = "none";
  clear();
  winnerIs = null;
  submitB = 0;
}

function sira() {
  if (winnerIs == null) {
    turn.innerHTML = "";
    let div = document.createElement("div");
    div.textContent = player + "  " + symbole;
    div.className = "turnOf";
    turn.append(div);
  }
}

function result(W) {
  let div = document.createElement("div");
  if (winnerIs == "noBody") {
    div.textContent = W;
    div.className = "result";
    resultBox.style.display = "block";
    resultMsg.append(div);
  } else {
    div.textContent = "winner is:" +" " + W;
    div.className = "result";
    resultBox.style.display = "block";
    resultMsg.append(div);
  }
 
}

function winner() {
  for (i = 1; i < 10; i++) {
    cels[i] = document.getElementById("c" + i);
  }


  if (
    cels[1].innerHTML === cels[2].innerHTML &&
    cels[2].innerHTML === cels[3].innerHTML &&
    cels[1].innerHTML != ""
  ) {
    winnerIs = cels[1].innerHTML;
    console.log(winnerIs);
  } else if (
    cels[4].innerHTML === cels[5].innerHTML &&
    cels[5].innerHTML === cels[6].innerHTML &&
    cels[5].innerHTML != ""
  ) {
    winnerIs = cels[5].innerHTML;
  } else if (
    cels[7].innerHTML === cels[8].innerHTML &&
    cels[8].innerHTML === cels[9].innerHTML &&
    cels[7].innerHTML != ""
  ) {
    winnerIs = cels[7].innerHTML;
  } else if (
    cels[1].innerHTML === cels[4].innerHTML &&
    cels[4].innerHTML === cels[7].innerHTML &&
    cels[1].innerHTML != ""
  ) {
    winnerIs = cels[7].innerHTML;
  } else if (
    cels[2].innerHTML === cels[5].innerHTML &&
    cels[5].innerHTML === cels[8].innerHTML &&
    cels[5].innerHTML != ""
  ) {
    winnerIs = cels[5].innerHTML;
  } else if (
    cels[3].innerHTML === cels[6].innerHTML &&
    cels[6].innerHTML === cels[9].innerHTML &&
    cels[9].innerHTML != ""
  ) {
    winnerIs = cels[9].innerHTML;
  } else if (
    cels[1].innerHTML === cels[5].innerHTML &&
    cels[5].innerHTML === cels[9].innerHTML &&
    cels[9].innerHTML != ""
  ) {
    winnerIs = cels[5].innerHTML;
  } else if (
    cels[7].innerHTML === cels[3].innerHTML &&
    cels[3].innerHTML === cels[5].innerHTML &&
    cels[7].innerHTML != ""
  ) {
    winnerIs = cels[7].innerHTML;
  }
  if ((submitB == 9) && (winnerIs == null) ){
     winnerIs = "noBody";
  } 
  //   console.log(winnerIs);
  return winnerIs;
}

function start() {
  if (
    (gamer1.value == "" && gamer2 == "") ||
    gamer1.value == "" ||
    gamer2.value == ""
  ) {
    e.preventDefault();
  } else {
    localStorage.setItem("G1", gamer1.value);

    localStorage.setItem("G2", gamer2.value);

    player = localStorage.getItem("G1");
  }

  sira();
}

function fill(id) {
  if (player != null) {
    submitB += 1;
    console.log(submitB);
    let cel = document.getElementById(id);
    if (symbole === "X" && cel.innerHTML == "") {
      cel.innerHTML = "X";
      symbole = "O";
      player = localStorage.getItem("G2");
      sira();
      winner();
      if (winnerIs == "noBody") {
        W = "No winner No loser";
        result(W);
      } else if (winnerIs == "X") {
        cel.innerHTML = "X";
        var W = window.localStorage.getItem("G1");
        result(W);
      } else if (winnerIs == "O") {
        var W = window.localStorage.getItem("G2");
        cel.innerHTML = "O";
        result(W);
      }
      
    } else if (symbole == "O" && cel.innerHTML == "") {
      cel.innerHTML = "O";
      symbole = "X";
      player = localStorage.getItem("G1");
      sira();
      winner();
      if (winnerIs == "noBody") {
        W = "No winner No loser";
        result(W);
      } else if (winnerIs == "X") {
        var W = window.localStorage.getItem("G1");
        cel.innerHTML = "X";
        result(W);
      } else if (winnerIs == "O") {
        var W = window.localStorage.getItem("G2");
        cel.innerHTML = "O";
        result(W);
      }
      
    }
  }
}
