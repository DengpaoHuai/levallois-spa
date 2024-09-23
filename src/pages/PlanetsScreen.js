import Card from "../components/Card";

export const Link = "/";

const PlanetsScreen = () => {
  let planetResponse = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  setTimeout(() => {
    const nextButton = document.getElementById("nextButton");
    const previousButton = document.getElementById("backButton");
    const loader = document.getElementById("loader");

    const container = document.querySelector("#planets");

    const getData = async (url) => {
      loader.style.display = "block";
      container.innerHTML = "";
      try {
        const response = await fetch(url);
        const data = await response.json();
        loader.style.display = "none";
        planetResponse = data;
        data.results.forEach((planet) => {
          const planetCard = Card({
            title: planet.name,
            description: `Climate: ${planet.climate} - Population: ${planet.population}`,
            footer: `Terrain: ${planet.terrain}`,
          });
          console.log(planet.name);
          const div = document.createElement("div");
          div.innerHTML = planetCard;
          container.appendChild(div);
        });
      } catch (error) {}
    };

    getData("https://swapi.dev/api/planets");
  }, 500);

  return `
  <div><h1>PlanetsScreen</h1>
   <div id="loader" class="loader"></div>
  <div id="planets"></div>
  </div>
  `;
};

export default PlanetsScreen;
