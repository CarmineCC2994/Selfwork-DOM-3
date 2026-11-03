
const articles = [
    { id: 1, title: "Articolo 1", description: "Descrizione breve dell'articolo 1." },
    { id: 2, title: "Articolo 2", description: "Descrizione breve dell'articolo 2." },
    { id: 3, title: "Articolo 3", description: "Descrizione breve dell'articolo 3." },
    { id: 4, title: "Articolo 4", description: "Descrizione breve dell'articolo 4." },
    { id: 5, title: "Articolo 5", description: "Descrizione breve dell'articolo 5." },
    { id: 6, title: "Articolo 6", description: "Descrizione breve dell'articolo 6." },
    { id: 7, title: "Articolo 7", description: "Descrizione breve dell'articolo 7." },
    { id: 8, title: "Articolo 8", description: "Descrizione breve dell'articolo 8." },
    { id: 9, title: "Articolo 9", description: "Descrizione breve dell'articolo 9." }
];

// Elementi HTML
const generateBtn = document.querySelector("#generateBtn");
const resetBtn = document.querySelector("#resetBtn");
const articlesContainer = document.querySelector("#articlesContainer");
const alertBox = document.querySelector("#alert");

// Variabili
let currentIndex = 0;
let articlesPerPage = 3;

// Generazione delle card
generateBtn.addEventListener("click", function () {

    // Seleziono i prossimi 3 articoli
    let nextArticles = articles.slice(
        currentIndex,
        currentIndex + articlesPerPage
    );

    // Creo una card per ogni articolo
    nextArticles.forEach(article => {

        const card = document.createElement("div");

        card.classList.add("col-12", "col-md-4");

        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                </div>
            </div>
        `;

        articlesContainer.appendChild(card);

    });

    // Aggiorno l'indice
    currentIndex += articlesPerPage;

    // Controllo se tutti gli articoli sono stati mostrati
    if (currentIndex >= articles.length) {

        generateBtn.classList.add("d-none");

        alertBox.classList.remove("d-none");

    }

});


// Reset
resetBtn.addEventListener("click", function () {

    // Elimino tutte le card
    articlesContainer.innerHTML = "";

    // Nascondo l'alert
    alertBox.classList.add("d-none");

    // Faccio riapparire il pulsante Genera Card
    generateBtn.classList.remove("d-none");

    // Riporto l'indice a zero
    currentIndex = 0;

});
