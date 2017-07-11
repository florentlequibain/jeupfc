var scorePc = 0;
var scorePlayer = 0;
var choixPc;
var buttons = document.querySelectorAll("button");


// fonction nombre random
function random() {
  return Math.floor(Math.random() * 3);
  }


// fonction comparaison pfc
function compare (x,y){
  if (x == y ){
    document.getElementById('resultat').innerHTML=" égalité";

  } else if((x == 'pierre' && y =='ciseaux') || (x == 'ciseaux' && y == 'feuille') || (x == 'feuille' && y == 'pierre') ){

    scorePlayer++;
    document.getElementById('playerscore').innerHTML= scorePlayer;
    document.getElementById('resultat').innerHTML="Gagné, le computer a choisi "+choixPc;

  } else{

    scorePc ++;
    document.getElementById('score').innerHTML= scorePc;
    document.getElementById('resultat').innerHTML="Perdu, le computer a choisi "+choixPc;
  }
}



// script
for (i=0; i<buttons.length; i++ ){
  buttons[i].addEventListener("click", function{
    choixPlayer = buttons[i].innerHTML;
  })
}

document.getElementById('start').onclick = function(){
  var name = prompt('Quel est ton nom ?');
  document.getElementById('playername').innerHTML =  name ;

  while(scorePlayer<3 && scorePc <3){
    var x = random();
    if (x === 0){
      choixPc = 'pierre';
    } else if (x === 1){
      choixPc = 'feuille';
    } else if (x === 2){
      choixPc = 'ciseaux';
    }
      compare(choixPlayer,choixPc);
  }

}
