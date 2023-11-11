document.body.innerHTML = `${validator.isEmail("michal@michal.cz")}`

document.body.innerHTML = `
<p>michal@michal.cz - ${validator.isEmail("michal@michal.cz")}</p>
<p>@. - ${validator.isEmail("@.")}</p>
<p>qlqwkjeklqw - ${validator.isEmail("qlqwkjeklqw")}</p>
<p>@neco.neco - ${validator.isEmail("@neco.neco")}</p>
`

const email = prompt("Zadej e-mail")

document.body.innerHTML = `
<p>michal@michal.cz - ${validator.isEmail("michal@michal.cz")}</p>
<p>@. - ${validator.isEmail("@.")}</p>
<p>qlqwkjeklqw - ${validator.isEmail("qlqwkjeklqw")}</p>
<p>@neco.neco - ${validator.isEmail("@neco.neco")}</p>
<p>e@e.ee - ${validator.isEmail("e@e.ee")}</p>
<p>${email} - ${validator.isEmail(email)}</p>
`

const email2 = "michal.kucera@czechitas.cz"

document.body.innerHTML = `
<p>michal@michal.cz - ${validator.isEmail("michal@michal.cz")}</p>
<p>@. - ${validator.isEmail("@.")}</p>
<p>qlqwkjeklqw - ${validator.isEmail("qlqwkjeklqw")}</p>
<p>@neco.neco - ${validator.isEmail("@neco.neco")}</p>
<p>e@e.ee - ${validator.isEmail("e@e.ee")}</p>
<p>${email} - ${validator.isEmail(email)}</p>
<p>777656345 - ${validator.isMobilePhone("777656345", "cs-CZ")}</p>
`

const date = dayjs()

document.body.innerHTML = `
<p>dnes je - ${dayjs().format("DD.MM.")}</p>
<p>aktualni rok - ${dayjs().format("YYYY")}</p>
<p>celkove datum - ${date.format("MM.DD.YYYY")}</p>
`

const stedryDen = dayjs("2023-12-24")
const dnes = dayjs()

if(dnes.isAfter(stedryDen)) {
    document.body.innerHTML = "Musis pockat na pristi rok"
} else { 
    document.body.innerHTML = "Brzy prijde jeziseeeek"
}


// vlastní funkce

function mojePrvniFunkce(cislo) {
    document.body.innerHTML += `<p>${cislo * 2}</p>`
}

// prompt("Zprava", "Vychozi hodnota")

const vysledek = mojePrvniFunkce(10)
document.body.innerHTML = mojePrvniFunkce(20)

mojePrvniFunkce(10)
mojePrvniFunkce(20)
mojePrvniFunkce(2)
mojePrvniFunkce(3)
mojePrvniFunkce(5)

// 3 způsoby zápisu funkcí, dnes používáme hlavně třetí způsob - tzv. arrow funkce

function mojePrvniFunkce(cislo) {
    return cislo * 2
}

const mojeDruhaFunkce = function (cislo) {
    return cislo *2
}

/* const mojeTretiFunkce = (cislo) => {
    return cislo * 2
}
*/

// v případě jednoho parametru lze zjednodušit bez závorek: 
const mojeTretiFunkce = cislo => cislo * 2

const mojeCtvrtaFunkce = (cislo) => {
    return cislo *2
}

const validaceVeku = vek => {
    if (vek >= 18) {
        return true
    } else {
        return false
    }
}

document.body.innerHTML = `
    <p>${mojePrvniFunkce(10)}</p>
    <p>${mojeDruhaFunkce(10)}</p>
    <p>${mojeTretiFunkce(10)}</p>
`
