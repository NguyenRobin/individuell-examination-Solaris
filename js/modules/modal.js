const headerEl = document.querySelector(".header");
const planetSectionEl = document.querySelector(".planet-section");
const btnCloseEl = document.querySelector(".btn-close");

function openModalWindow() {
  btnCloseEl.classList.add("active");
  planetSectionEl.classList.add("hide");
  headerEl.classList.add("hide");

  setTimeout(() => {
    document
      .querySelector(".planet-info-section")
      .classList.toggle("show-text");
  }, 200);
}

function closeModalWindow() {
  document.querySelector(".planet-info-section").classList.add("right");

  setTimeout(() => {
    headerEl.classList.remove("hide");
    btnCloseEl.classList.remove("active");
    headerEl.classList.remove("hide");
    btnCloseEl.classList.remove("active");
    planetSectionEl.classList.remove("hide");
    document.querySelector(".planet-info-section").remove();
  }, 500);
}

btnCloseEl.addEventListener("click", closeModalWindow);

function closeModalPressingEscape() {
  document.addEventListener("keydown", (event) => {
    const planetInfoSectionEl = document.querySelector(".planet-info-section");
    if (
      event.key === "Escape" &&
      planetInfoSectionEl?.classList.contains("show-text")
    ) {
      closeModalWindow();
    }
  });
}
closeModalPressingEscape();

export { openModalWindow };

/*

// KOMMENTAR 

Dessa tre funktioner arbetar på ett liknade sätt. Där vi manipulerar DOMEN med tex add och remove. openModalWindow() beskriver tydligt vad vi vill. Så istället för att ha alla dessa steg i vår main.js. Förstår man enkelt vad som sker. Även closeModalWindow() och closeModalPressingEscape(). Dessa kan därför ligga i denna module och inte ta plats i vår main.js. 

*/
