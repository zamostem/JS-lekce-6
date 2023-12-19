/* cvičení knihovny 1 - základní validace
Vytvořte prázdnou stránku, do které vložte knihovnu validator.js a svůj JavaScript index.js.

Ověřte pomocí metody validator.isEmail platnost vaší e-mailovou adresu.

Pokud máte po ruce platební kartu, ověřte, že má platné číslo pomocí metody isCreditCard. Případně můžete otestovat kartu 4125010001000208.

Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.

<p id="msg" class="msg"></p>
Napojte do stránky váš vlastní javascriptový soubor index.js.

Pomocí funkce prompt požádejte uživatele o jeho e-mail. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „E-mail v pořádku“. V opačném případě zobrazte „Neplatný e-mail“.

Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu msg--valid. V opačném případě použijte třídu msg--invalid. Přidejte do stránky soubor style.css a třídy nastylujte například tak, že msg--valid bude mít zelené pozadí a msg--invalid naopak červené.

<!-- index.html -->
<link rel="stylesheet" href="style.css" />
/* style.css */
/* .msg {
  color: white;
  padding: 10px;
}
.msg--valid {
  background-color: green;
}
.msg--invalid {
  background-color: red;
}
Stránku postupně otestujte zadáním platné i neplatné adresy.
*/

document.body.innerHTML = `
<h2>Validace emailu</h2>
<p id="msg" class="msg"></p>
`;

const email = prompt('Zadejte váš e-mail');

const isEmail = validator.isEmail(email);
const messageElement = document.querySelector('#msg');

if (isEmail) {
  messageElement.textContent = 'E-mail v pořádku';
  messageElement.classList.add('msg--valid');
} else {
  messageElement.textContent = 'Neplatný e-mail';
  messageElement.classList.add('msg--invalid');
}

/* document.body.innerHTML = `
<p>kristyna@seznam.cz - ${validator.isEmail("kristyna@seznam.cz")}</p>
<p>4125010001000208 - ${validator.isCreditCard("4125010001000208")}</p>
<p id="msg" class="msg">Není zadán žádný email</p>
`
*/

/* 
document.body.innerHTML = `
<h2>Validace emailu</h2>
<p id="msg" class="msg">není zadán žádný email</p>
`;

const email = prompt("Zadej e-mail")
const message = document.querySelector("#msg")

if(validator.isEmail(email)) {
    document.body.innerHTML += "E-mail v pořádku"
    message.classList.add("msg--valid")
} else { 
    document.body.innerHTML += "Neplatný e-mail"
    message.classList.add("msg--invalid")
}
*/

/*
document.body.innerHTML = `
<h2 >Validace emailu</h2>
<p id="msg" class="msg">není zadán žádný email</p>
`;
const message = document.querySelector("#msg")
const email = prompt("Zadej email:")

if (validator.isEmail(email)) {
    message.innerHTML = `Email ${email} je OK`
    message.classList.add("msg--valid")
} else {
    message.innerHTML = `Email ${email} je neplatný`
    message.classList.add("msg--invalid")
}
*/