let gamer1 = document.getElementById('gamer1');
let gamer2 = document.getElementById('gamer2');
let go = document.getElementById('go');
let turn = document.getElementById('turn');
let gaming = document.getElementsByClassName('gaming');
let symbole = "X";
let winnerIs = null;
const cels = [];


let div = document.createElement('div');

function sira() {

    turn.innerHTML = "";
    let div = document.createElement('div');
    div.textContent = player + '  ' + symbole;
    div.className = 'turnOf';
    turn.append(div);
    
}

function winner() {
    turn.innerHTML

    for (i = 1; i < 10; i++) {
        cels[i] = document.getElementById('c' + i);
    }

    console.log(cels);

    if ((cels[1] === cels[2]) && (cels[2] === cels[3]) && (cels[1] != "")) {
        if (cels[1] == 'O') {
            winnerIs = localStorage.getItem("G2")
        } else if (cels[1] == 'X') {
            winnerIs = localStorage.getItem("G1")
        }
    }
        else if ((cels[4] === cels[5]) && (cels[5] === cels[6]) && (cels[5] != "")) {
        

        if (cels[5] == 'O') {
            winnerIs = localStorage.getItem("G2");
        } else if (cels[5] == 'X') {
            winnerIs = localStorage.getItem("G1");
        }
    }

    else if ((cels[7] === cels[8]) && (cels[8] === cels[9]) && (cels[7] != "")) {
        

        if (cels[7] == 'O') {
            winnerIs = localStorage.getItem("G2");
        } else if (cels[7] == 'X') {
            winnerIs = localStorage.getItem("G1");
        }
    }

    else if ((cels[1] === cels[4]) && (cels[4] === cels[7]) && (cels[1] != "")) {
        

        if (cels[1] == 'O') {
            winnerIs = localStorage.getItem("G2");

        } else if (cels[1] == 'X') {
            winnerIs = localStorage.getItem("G1");

        }

    }

    else if ((cels[2] === cels[5]) && (cels[5] === cels[8]) && (cels[5] != "")) {
        

        if (cels[5] == 'O')  {
            winnerIs = localStorage.getItem("G2");

        } else if (cels[5] == 'X') {
            winnerIs = localStorage.getItem("G1");

        }

    }

    else if ((cels[3] === cels[6]) && (cels[6] === cels[9]) && (cels[9] != "")) {
        

        if (cels[3] == 'O')  {
            winnerIs = localStorage.getItem("G2");
  
        } else if (cels[3] == 'X') {
            winnerIs = localStorage.getItem("G1");

        }

    }

    else if ((cels[1] === cels[5]) && (cels[5] === cels[9]) && (cels[9] != "")) {
        

        if (cels[1] == 'O') {
            winnerIs = localStorage.getItem("G2");

        } else if (cels[1] == 'X') {
            winnerIs = localStorage.getItem("G1");

        }

    }

    else if ((cels[7] === cels[3]) && (cels[3] === cels[5]) && (cels[7] != "")) {
        

        if (cels[7] == 'O') {
            winnerIs = localStorage.getItem("G2");

        } else if (cels[7] == 'X') {
            winnerIs = localStorage.getItem("G1");

        }

        div.textContent = 'winner is: ' + winnerIs;
        turn.append(div);


    } else {
        sira();
    }


}

function start() {

    if ((gamer1.value == '' && gamer2 == '') || (gamer1.value == '' || gamer2.value == '')) {
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

        let cel = document.getElementById(id);
        if (symbole === "X" && cel.innerHTML == "") {

            cel.innerHTML = 'X';
            symbole = 'O';
            player = localStorage.getItem('G2');
            winner();
            
            

        } else if (symbole === "O" && cel.innerHTML == "") {

            cel.innerHTML = 'O';
            symbole = 'X';
            player = localStorage.getItem('G1');
            winner();
            
            
        }

    }


}
