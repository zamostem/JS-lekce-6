const width = prompt("Zadej šířku:")
const height = prompt("Zadej výšku:")

const ellipseArea = (width, height) => {
    return (width / 2) * (height / 2) * Math.PI
}

document.body.innerHTML += `
<p>${ellipseArea(1, 2)}</p>
<p>${ellipseArea(2, 2)}</p>
`


























































