/* cvičení - vlastní funkce 1 - obsah elipsy
Zlovolní zahrádkáři nám chtějí ztížit výměru pozemků a proto si pořídíli pozemek ve tvaru elipsy.


Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π (tj. přibližně 3,14).

Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, která spočítá (vrátí) plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI.

Funkci ellipseArea otestujte (např. pomocí document.body.innerHTML += vypište výsledek volání pro různé hodnoty do stránky).

Pro šířku 1 a výšku 2 by mělo vyjít 1.5707963267948966.
Pro 2 a 2 pak 3.141592653589793.
*/

const width = prompt("Zadej šířku:")
const height = prompt("Zadej výšku:")

const ellipseArea = (width, height) => {
    return (width / 2) * (height / 2) * Math.PI
}

document.body.innerHTML += `
<p>${ellipseArea(1, 2)}</p>
<p>${ellipseArea(2, 2)}</p>
`


























































