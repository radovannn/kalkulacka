function scitanie() {
  let hodnota1 = Number(document.getElementById("hodnota1").value);
  let hodnota2 = Number(document.getElementById("hodnota2").value);

  let vysledok = hodnota1 + hodnota2;
  document.getElementById("vysledok").textContent = vysledok;
}

function odcitanie() {
  let hodnota1 = Number(document.getElementById("hodnota1").value);
  let hodnota2 = Number(document.getElementById("hodnota2").value);

  let vysledok = hodnota1 - hodnota2;
  document.getElementById("vysledok").textContent = vysledok;
}

function nasobenie() {
  let hodnota1 = Number(document.getElementById("hodnota1").value);
  let hodnota2 = Number(document.getElementById("hodnota2").value);

  let vysledok = hodnota1 * hodnota2;
  document.getElementById("vysledok").textContent = vysledok;
}

function delenie() {
  let hodnota1 = Number(document.getElementById("hodnota1").value);
  let hodnota2 = Number(document.getElementById("hodnota2").value);

  let vysledok = hodnota1 / hodnota2;
  let zaokruhlene_vysledok = Number(vysledok.toFixed(2)); // use vysledok here
  document.getElementById("vysledok").textContent = zaokruhlene_vysledok;
}
