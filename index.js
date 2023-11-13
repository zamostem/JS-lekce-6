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