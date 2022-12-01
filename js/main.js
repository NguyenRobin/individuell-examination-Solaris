"use strict";

import { getPlanets } from "./modules/api.js";
import { openModalWindow, closeModalWindow } from "./modules/modal.js";

const mainEl = document.querySelector("main");
const planetsAllEL = document.querySelectorAll(".planet-section article");

function renderPlanetInformation(data, className) {
  const html = `
  <section class="planet-info-section">
    <header class="header-planet">
      <h1>${data.name}</h1>
      <h2>${data.latinName}</h2>
    </header>

    <article class="current-planet-three"></article>
    <article class="current-planet-two"></article>
    <article class="current-planet-one ${className.toLowerCase()}"></article>
    
    <section>
    <p class="planet-text-introduction">${data.desc}</p>
    <section class="planet-subsection">
      <article>
        <h3 class="planet-heading">OMKRETS</h3>
        <p class="planet-text">${data.circumference.toLocaleString(
          "sv-SE"
        )} KM</p>
      </article>

      <article>
        <h3 class="planet-heading">KM FRÅN SOLEN</h3>
        <p class="planet-text">${data.distance.toLocaleString("sv-SE")} KM</p>
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
      <h3 class="planet-heading separate-line">MÅNAR</h3>
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

async function displayClickedData() {
  const planetData = await getPlanets();

  planetsAllEL.forEach((planet) => {
    planet.addEventListener("click", async (event) => {
      const clickedPlanetClassList = event.currentTarget.classList.value;
      for (const planet of planetData) {
        const planetName = planet.name.toLowerCase();

        if (planetName === clickedPlanetClassList) {
          renderPlanetInformation(planet, planetName);
          openModalWindow();
        }
      }
    });
  });
}
displayClickedData();
