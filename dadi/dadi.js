//dichiaro le varibili dadi per il player uno
var dadouno = Math.floor(Math.random() * 6) + 1;
var dadodue = Math.floor(Math.random() * 6) + 1;
var playeruno = dadouno + dadodue;

//dichiaro le varibili dadi per il player due
var dadotre = Math.floor(Math.random() * 6) + 1;
var dadoquattro = Math.floor(Math.random() * 6) + 1;
var playerdue = dadotre + dadoquattro;


//stampo i risultati dei lanci dei due player
document.writeln ("Il lancio uno è " + playeruno)
document.writeln ("</br>Il lancio due è " + playerdue)


//stampo gli esiti
if (playeruno < playerdue){
document.writeln ("</br>Ha vinto player due!")
}
else if (playeruno==playerdue) {
  document.writeln ("</br>Pareggio!")
}
else {
  document.writeln ("</br>Ha vinto player uno!")
}
