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

//Validálás
const form = document.getElementById("form");
const nev_error = document.getElementById("nev_error")
const ar_error = document.getElementById("ar_error")

const nev_input = document.getElementById("nev")
const ar_input = document.getElementById("ar")

nev_input.addEventListener("input", function() {
    const nev = document.getElementById("nev").value;
    console.log(this.value)
    if (nev != "") {
        nev_error.innerText = ""
        
    }
    
    
})

ar_input.addEventListener("input", function() {
    const ar = document.getElementById("ar").value;
    console.log(this.value)

    if (ar >= 0 && ar % 10 == 0) {
    }

    
})

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nev = document.getElementById("nev").value;
    const ar = document.getElementById("ar").value;

    if (nev == "") {
        nev_error.innerText = "Töltsd ki a név mezőt!"
        
    }
    if (ar == "") {
        ar_error.innerText = "Töltsd ki az ár mezőt!"
        
    }
    else if (ar < 0) {
        ar_error.innerText = "Az ár mező nem lehet negatív!"
    }
    else if (ar % 10 != 0) {
        ar_error.innerText = "Az ár mezőnek oszthatónak kell lennie tízzel (Kerek szám)!"
    }
    else {
        nev_error.innerText = "";
        ar_error.innerText = "";
        const row = document.createElement("tr");
        const name_td = document.createElement("td");
        const ar_td = document.createElement("td");


        name_td.innerText = nev;
        ar_td.innerText = ar;

        row.appendChild(name_td);
        row.appendChild(ar_td);
        tablazat.appendChild(row);
    }

    

});