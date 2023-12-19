/* cvičení vlastní funkce 2 - maximum ze dvou čísel
Napište funkci max2, která vrátí větší ze dvou zadaných čísel. V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.
*/

const a = prompt("Číslo 1:")
const b = prompt("Číslo 2:")

/* const max2 = (a, b) => {
    if (a > b) {
        return a;
    } else if (a > b) {
        return b;
    } else {
        return false;
    }
}
*/

const max2 = (a, b) => {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };
