// Set current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

// Toggle navigation menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const examples = [
    { imageUrl: "images/frontYard_sm.webp", type: "residential", alt: "Front Yard" },
    { imageUrl: "images/backYard_sm.webp", type: "residential", alt: "Back Yard" },
    { imageUrl: "images/topYard_sm.webp", type: "residential", alt: "Top Yard" },
    { imageUrl: "images/frontNeighborhood_sm.webp", type: "residential", alt: "Front Neighborhood" },
    { imageUrl: "images/sideNeighborhood_sm.webp", type: "residential", alt: "Side Neighborhood" },
    { imageUrl: "images/beachPool_sm.webp", type: "vacation", alt: "Beach Pool" },
    { imageUrl: "images/beachPoolTop_sm.webp", type: "vacation", alt: "Beach Pool Top" },
    { imageUrl: "images/beachHouse_sm.webp", type: "vacation", alt: "Beach House" },
    { imageUrl: "images/frontBeach_sm.webp", type: "vacation", alt: "Front Beach" },
    { imageUrl: "images/beachFar_sm.webp", type: "vacation", alt: "Beach Far" },
];

// Function to display portfolio items
function displayPortfolio(items) {
    const portfolioList = document.querySelector("#portfolio-list");
    portfolioList.innerHTML = ""; // Clear existing items

    items.forEach(item => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        img.src = item.imageUrl;
        img.alt = item.alt;
        img.loading = "lazy";
        figcaption.textContent = item.alt;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        portfolioList.appendChild(figure);
    });
}


const residentialLink = document.querySelector("#residential");
const vacationLink = document.querySelector("#vacation");
const allPicturesLink = document.querySelector("#all-pictures");

residentialLink.addEventListener("click", (e) => {
    e.preventDefault();
    const residentialExamples = examples.filter(example => example.type === "residential");
    displayPortfolio(residentialExamples);

    residentialLink.classList.add("active");
    vacationLink.classList.remove("active");
    allPicturesLink.classList.remove("active");
});

vacationLink.addEventListener("click", (e) => {
    e.preventDefault();
    const vacationExamples = examples.filter(example => example.type === "vacation");
    displayPortfolio(vacationExamples);

    vacationLink.classList.add("active");
    residentialLink.classList.remove("active");
    allPicturesLink.classList.remove("active");
});

allPicturesLink.addEventListener("click", (e) => {
    e.preventDefault();
    displayPortfolio(examples); 
    allPicturesLink.classList.add("active");
    residentialLink.classList.remove("active");
    vacationLink.classList.remove("active");
});

displayPortfolio(examples);
