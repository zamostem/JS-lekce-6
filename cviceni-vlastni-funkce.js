const h = prompt("Zadej výšku:")
const w = prompt("Zadej šířku:")

const ellipseArea = (h, w) => {
    return h * w * Math.PI / 2
}

document.body.innerHTML += `
<p>${ellipseArea(2, 1)}</p>
`


























































