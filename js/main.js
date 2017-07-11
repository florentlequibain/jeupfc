var scorePc = 0;
var scorePlayer = 0;
var choixPc;
var choixPlayer;


// fonction nombre random
function random() {
  return Math.floor(Math.random() * 3);
  }



// fonction comparaison pfc
function compare (x,y){
  if (x == y ){
    // alert('égalité, le pc a choisi ' + y + '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');

  } else if((x == 'pierre' && y =='ciseaux') || (x == 'ciseaux' && y == 'feuille') || (x == 'feuille' && y == 'pierre') ){

    scorePlayer++;
    document.getElementById('playerscore').innerHTML=" scorePlayer";
    // alert('gagné, le pc a choisi ' + y+ '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');

  } else{

    scorePc ++;
    document.getElementById('score').innerHTML=" scorePc";
    // alert('perdu, le pc a choisi ' + y + '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');

  }
}




// script




document.getElementById('pierre').onclick = {
choixPlayer = 'pierre';

document.getElementById('feuille').onclick ={
choixPlayer = 'feuille';

document.getElementById('ciseaux').onclick ={
choixPlayer = 'ciseaux';
}


document.getElementById('start').onclick = function(){
  var name = prompt('Quel est ton nom ?');
  console.log('hello');
  document.getElementById('playername').innerHTML = " name ";

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
