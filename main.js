let gamer1 = document.getElementById('gamer1');
let gamer2 = document.getElementById('gamer2');
let go = document.getElementById('go');
let turn = document.getElementById('turn');
let gaming = document.getElementsByClassName('gaming');
let symbole = "X";
var game = false;


let div = document.createElement('div');

function sira() {

    turn.innerHTML = "";
    let div = document.createElement('div');
    div.textContent = player + '  ' + symbole;
    div.className = 'turnOf';
    turn.append(div);
}

function winner() {

    

}

function start() {

 if ((gamer1.value == '' && gamer2 == '') || (gamer1.value == '' || gamer2.value == '')) {
        e.preventDefault();
    } else {
        
        localStorage.setItem("G1", gamer1.value);
        
        localStorage.setItem("G2", gamer2.value);
        
        player = localStorage.getItem("G1");
    }
    
        game = true;
        sira();


}

function fill(id) {

if (player != null) {
       
        let cel = document.getElementById(id);
        if (symbole === "X" && cel.innerHTML == "") {
            
            cel.innerHTML = 'X';
            symbole = 'O';
            player = localStorage.getItem('G2');
            sira();
            
        } else if (symbole === "O" && cel.innerHTML == "") {
            
            cel.innerHTML = 'O';
            symbole = 'X';
            player = localStorage.getItem('G1');
            sira();
        }
    
    }
    
    
}
