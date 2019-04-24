
//dichiaro gli utenti che hanno il permesso di accedere
var list = ["luca@gmail.com", "marco@gmail.com", "donato@gmail.com"];

//chiedo la mail utente
var mail = prompt("Inserisci mail");

//dichiaro la variabile di risposta su false
var resp = "Non puoi accedere";

//controllo che utente sia nella lista
for (var n = 0; n < list.length; n++) {

  //se la mail inserita è presente nella lista cambio la variabile di risp su true
  if (list[n] == mail) {
    resp = "Puoi accedere";
  }
}

//stampo la variabile di risposta
document.writeln (resp);
