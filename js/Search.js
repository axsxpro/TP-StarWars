class Character {
  constructor(name, imageLink) {
    this.name = name;
    this.imageLink = imageLink;
  }
}

const characters = [
  new Character("Adi Gallia", "adi.png"),
  new Character("Aks Moe", "aks.png"),
  new Character("Anakin Skywalker", "anakin.png"),
  new Character("Bib Fortuna", "bib.png"),
  new Character("Boss Nass", "boss.png"),
  new Character("C-3PO", "c3po.png"),
  new Character("Daultay Dofine", "daultay.png"),
  new Character("Conte Dooku", "dooku.png"),
  new Character("Fode Annodue", "fode.png"),
  new Character("Général Grievous", "grievous.png"),
  new Character("Jar Jar Binks", "jarjar.png"),
  new Character("Ki-Adi-Mundi", "ki.png"),
  new Character("Kitster", "kitster.png"),
  new Character("Luke Skywalker", "luke.png"),
  new Character("Maul", "maul.png"),
  new Character("Nute Gunray", "nute.png"),
  new Character("Obi-Wan Kenobi", "obiwan.png"),
  new Character("Orn Free Taa", "orn.png"),
  new Character("Padmé Amidala", "padme.png"),
  new Character("Palpatine - Darth Sidius", "palpatine.png"),
  new Character("Capitaine Panaka", "panaka.png"),
  new Character("Plo Koon", "plo.png"),
  new Character("Qui-Gon Jinn", "qui.png"),
  new Character("R2D2", "r2d2.png"),
  new Character("Rune Haako", "rune.png"),
  new Character("Sebulba", "sebulba.png"),
  new Character("Shmi Skywalker", "shmi.png"),
  new Character("Anakin Skywalker - Darth Vader", "vader.png"),
  new Character("Watto", "watto.png"),
  new Character("Mace Windu", "windu.png"),
  new Character("Yoda", "yoda.png"),
];

// creation container
let containerSearch = document.createElement("div");
containerSearch.classList.add("containerSearch");

let titre = document.createElement("h3");
titre.textContent = "RECHERCHEZ VOTRE PERSONNAGE STARS WARS";
titre.style.textAlign = "center";
titre.style.color = "gold";

// creation barre de recherche
let btn = document.createElement("button");
btn.textContent = "rechercher";
btn.type = "button";
btn.id = "button";

let input = document.createElement("input");
input.placeholder = "entrez votre recherche";
input.type = "search";
input.id = "inputStarWars";

// creation container pour les images

let containerIMG = document.createElement("div");
containerIMG.classList.add("containerIMG");

// creation paragraphe
let paragraphe = document.createElement("p");

// selection de la section par son nom de classe
var searchBarDiv = document.querySelector(".searchBar");

// apprenChild
searchBarDiv.appendChild(titre);
searchBarDiv.appendChild(containerSearch);
searchBarDiv.appendChild(containerIMG);
containerIMG.appendChild(paragraphe);
containerSearch.appendChild(input);
containerSearch.appendChild(btn);

// FUNCTION

button.addEventListener("click", () => {
  characters.map((perso) => {
    if (
      input.value.trim() == perso.name.trim() ||
      input.value.trim() == perso.name.toLowerCase() ||
      input.value.trim() == perso.name.toUpperCase()
    ) {
      containerIMG.innerHTML = "";

      // creation d'une div qui contiendra le nom et la photo du personnage
      let divPersonnage = document.createElement("div");
      divPersonnage.classList.add("divPersonnage");
      divPersonnage.style.height = "300px";
      divPersonnage.style.width = "300px";
      divPersonnage.style.backgroundColor = "white";

      // affichage image des persos
      let imagePersonnage = document.createElement("img");
      imagePersonnage.src = "./image/" + perso.imageLink;
      imagePersonnage.style.height = "300px";
      imagePersonnage.style.width = "300px";

      // affichage nom des personnages
      let personnage = document.createElement("p");
      personnage.textContent = perso.name;

      // apprenChild
      containerIMG.appendChild(divPersonnage);
      divPersonnage.appendChild(personnage);
      divPersonnage.appendChild(imagePersonnage);
    }

  });

});

// effacer les résultats de recherche
input.addEventListener("input", () => {
  characters.map((perso) => {
    const recherche = input.value.trim(); // Obtenez le texte de recherche sans les espaces

    // Vérifiez si la barre de recherche est vide
    if (recherche === "" || recherche !== perso.name) {
      containerIMG.innerHTML = "";
    }

  });
  
});
