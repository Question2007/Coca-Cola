let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];

const tablazat = document.getElementById("tablazat");

for (const drink of drinksList) {
    const tr = document.createElement("tr");
    const nev = document.createElement("td");
    const ar = document.createElement("td");

    nev.innerText = drink.name;
    ar.innerText = drink.price;

    console.log(drink.name)
    tr.appendChild(nev);
    tr.appendChild(ar);
    tablazat.appendChild(tr);
}

