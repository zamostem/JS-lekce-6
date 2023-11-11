const email = prompt("Zadej e-mail")

document.body.innerHTML = `
<p>kristyna@seznam.cz - ${validator.isEmail("kristyna@seznam.cz")}</p>
<p>4125010001000208 - ${validator.isCreditCard("4125010001000208")}</p>
<p id="msg" class="msg"></p>
`

if(validator.isEmail(email)) {
    document.body.innerHTML += "E-mail v pořádku"
    email.classList.add("msg--valid")
} else { 
    document.body.innerHTML += "Neplatný e-mail"
    email.classList.add("msg--invalid")
}

const message = document.querySelector("#msg")
message.innerHTML = email

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