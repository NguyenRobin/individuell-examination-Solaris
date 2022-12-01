"use strict";

import { getPlanets } from "./modules/api.js";
import { openModalWindow } from "./modules/modal.js";
import { renderPlanetInformation } from "./modules/display.js";

const planetsAllEL = document.querySelectorAll(".planet-section article");

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
