const dnes = dayjs();
const stedryDen = dayjs('2023-12-24');
const nadpis = document.querySelector("h1");

if (dnes.isAfter(stedryDen)) {
  nadpis.textContent = 'Zase až za rok';
} else {
  nadpis.textContent += 'Brzy přijde Ježíšek!';
}