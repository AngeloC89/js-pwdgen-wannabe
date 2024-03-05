/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23*/


 let yourname = prompt('come ti chiami?');
 console.log(yourname);
 let yourlastname = prompt('qual\'è il tuo cognome?');
 console.log(yourlastname);
 let color = prompt('e il tuo colore preferito?');
 console.log(color);
 const n = '23';

 let result = `${yourname}${yourlastname}${color}${n}`;

 document.getElementById("theresult").innerHTML = result;

