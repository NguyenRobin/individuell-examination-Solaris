// "use strict";

// const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";
// const headerEl = document.querySelector(".header");
// const planetContainerEl = document.querySelector(".container");
// const planetSectionEl = document.querySelector(".planet-section");
// const mainEl = document.querySelector("main");
// const planetsEL = document.querySelectorAll(".planet-section article");
// const btnCloseEl = document.querySelector(".btn-close");

// async function getKey() {
//   try {
//     const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
//     if (!response.ok) throw new Error("Problem getting data! ⛔️");
//     const data = await response.json();
//     return data.key;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// }

// async function getPlanets() {
//   try {
//     const key = await getKey();
//     const response = await fetch(`${BASE_URL}/bodies`, {
//       headers: {
//         "x-zocom": key,
//       },
//     });

//     if (!response.ok) throw new Error("Problem getting data! ⛔️");
//     const data = await response.json();
//     console.log(data.bodies);

//     return data.bodies;
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// }

// function closeModalWindow() {
//   document.querySelector(".planet-info-section").remove();
//   planetSectionEl.classList.toggle("hide");
//   headerEl.classList.remove("hide");
//   btnCloseEl.classList.toggle("active");
// }

// function openModalWindow() {
//   btnCloseEl.classList.toggle("active");
//   planetSectionEl.classList.toggle("hide");
//   headerEl.classList.add("hide");
// }

// document.addEventListener("keydown", (event) => {
//   if (
//     event.key === "Escape" &&
//     document
//       .querySelector(".planet-info-section")
//       .classList.contains("show-text")
//   ) {
//     closeModalWindow();
//   }
// });

// // CSS transition did not work without setTimeout
// function showSmoothText() {
//   setTimeout(() => {
//     document
//       .querySelector(".planet-info-section")
//       .classList.toggle("show-text");
//   }, 200);
// }

// function renderPlanetInformation(data, className) {
//   const html = `
//   <section class="planet-info-section">
//     <header class="header-planet">
//       <h1>${data.name}</h1>
//       <h2>${data.latinName}</h2>
//     </header>

//     <article class="current-planet ${className.toLowerCase()}"></article>

//     <p class="planet-text-introduction">${data.desc}</p>
//     <section class="planet-subsection">
//       <article>
//         <h3 class="planet-heading">OMKRETS</h3>
//         <p class="planet-text">${data.circumference} KM</p>
//       </article>

//       <article>
//         <h3 class="planet-heading">KM FRÅN SOLEN</h3>
//         <p class="planet-text">${data.distance.toString()} KM</p>
//       </article>

//       <article>
//         <h3 class="planet-heading">MAX TEMPERATUR</h3>
//         <p class="planet-text">${data.temp.day} &#8451;</p>
//       </article>

//       <article>
//         <h3 class="planet-heading">MIN TEMPERATUR</h3>
//         <p class="planet-text">${data.temp.night} &#8451;</p>
//       </article>
//     </section>

//     <article>
//       <h3 class="planet-heading moons">MÅNAR</h3>
//       <p class="planet-text">${
//         data.moons.toString()
//           ? data.moons.toString().replaceAll(",", ", ")
//           : (data.moons.textContent = "0")
//       }</p>
//     </article>
//   </section>
//   `;

//   mainEl.insertAdjacentHTML("beforeend", html);
// }

// planetsEL.forEach((planet) => {
//   planet.addEventListener("click", async (event) => {
//     const clickedPlanetClassList = event.currentTarget.classList.value;
//     const planetData = await getPlanets();
//     for (const planet of planetData) {
//       const planetName = planet.name.toLowerCase();
//       if (planetName === clickedPlanetClassList) {
//         renderPlanetInformation(planet, planetName);
//         console.log(planet);
//         openModalWindow();
//         showSmoothText();
//       }
//     }
//   });
// });

// btnCloseEl.addEventListener("click", closeModalWindow);

// const planetSection = document.createElement("section");
// planetSection.setAttribute("class", "planet-section");
// data.bodies.forEach((planet) => {
//   const planetArticle = document.createElement("article");
//   planetArticle.setAttribute("class", planet.name.toLowerCase());
//   planetSection.append(planetArticle);
// });
// console.log(planetSection);

// mainEl.append(planetSection);
// console.log(planetSection);
// createPlanet(data);

"use strict";

const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";
const headerEl = document.querySelector(".header");
const planetContainerEl = document.querySelector(".container");
const planetSectionEl = document.querySelector(".planet-section");
const mainEl = document.querySelector("main");
const planetsEL = document.querySelectorAll(".planet-section article");
const btnCloseEl = document.querySelector(".btn-close");

let storedFetchRequest;

async function getKey() {
  try {
    const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
    if (!response.ok) throw new Error("Problem getting data! ⛔️");
    const data = await response.json();
    return data.key;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

async function getPlanets() {
  try {
    const key = await getKey();
    const response = await fetch(`${BASE_URL}/bodies`, {
      headers: {
        "x-zocom": key,
      },
    });

    if (!response.ok) throw new Error("Problem getting data! ⛔️");
    const data = await response.json();
    console.log(data.bodies);

    storedFetchRequest = data.bodies;
    return storedFetchRequest;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function closeModalWindow() {
  document.querySelector(".planet-info-section").remove();
  planetSectionEl.classList.toggle("hide");
  headerEl.classList.remove("hide");
  btnCloseEl.classList.toggle("active");
}

function openModalWindow() {
  btnCloseEl.classList.toggle("active");
  planetSectionEl.classList.toggle("hide");
  headerEl.classList.add("hide");
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    document
      .querySelector(".planet-info-section")
      .classList.contains("show-text")
  ) {
    closeModalWindow();
  }
});

// CSS transition did not work without setTimeout
function showSmoothText() {
  setTimeout(() => {
    document
      .querySelector(".planet-info-section")
      .classList.toggle("show-text");
  }, 200);
}

function renderPlanetInformation(data, className) {
  const html = `
  <section class="planet-info-section">
    <header class="header-planet">
      <h1>${data.name}</h1>
      <h2>${data.latinName}</h2>
    </header>

    <article class="current-planet ${className.toLowerCase()}"></article>

    <p class="planet-text-introduction">${data.desc}</p>
    <section class="planet-subsection">
      <article>
        <h3 class="planet-heading">OMKRETS</h3>
        <p class="planet-text">${data.circumference} KM</p>
      </article>

      <article>
        <h3 class="planet-heading">KM FRÅN SOLEN</h3>
        <p class="planet-text">${data.distance.toString()} KM</p>
      </article>

      <article>
        <h3 class="planet-heading">MAX TEMPERATUR</h3>
        <p class="planet-text">${data.temp.day} &#8451;</p>
      </article>

      <article>
        <h3 class="planet-heading">MIN TEMPERATUR</h3>
        <p class="planet-text">${data.temp.night} &#8451;</p>
      </article>
    </section>

    <article>
      <h3 class="planet-heading moons">MÅNAR</h3>
      <p class="planet-text">${
        data.moons.toString()
          ? data.moons.toString().replaceAll(",", ", ")
          : (data.moons.textContent = "0")
      }</p>
    </article>
  </section>
  `;

  mainEl.insertAdjacentHTML("beforeend", html);
}

planetsEL.forEach((planet) => {
  planet.addEventListener("click", async (event) => {
    const clickedPlanetClassList = event.currentTarget.classList.value;
    storedFetchRequest = await getPlanets();
    for (const planet of storedFetchRequest) {
      const planetName = planet.name.toLowerCase();
      if (planetName === clickedPlanetClassList) {
        renderPlanetInformation(planet, planetName);
        console.log(planet);
        openModalWindow();
        showSmoothText();
      }
    }
  });
});

btnCloseEl.addEventListener("click", closeModalWindow);
