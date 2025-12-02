class Country {
  constructor(name, continent, flag, population, language, currency) {
    this.name = name;
    this.language = language;
    this.currency = currency;
    this.flag = flag;
    this.continent = continent;
    this.population = population;
    this.card = this.#createCard();
  }
  #createCard() {
    const card = document.createElement("div");
    const body = document.createElement("div");
    const flag = document.createElement("img");
    const countryName = document.createElement("div");
    const continent = document.createElement("div");
    const population = document.createElement("div");
    const language = document.createElement("div");
    const currency = document.createElement("div");

    card.classList.add("card");
    body.classList.add("card-body");
    flag.classList.add("card-flag");
    countryName.classList.add("country-name");
    continent.classList.add("country-continent");
    population.classList.add("info-row");
    language.classList.add("info-row");
    currency.classList.add("info-row");

    countryName.textContent = this.name;
    flag.src = this.flag;
    continent.textContent = this.continent;
    population.innerHTML = `
    <span class="info-icon">👫</span>
    <p class="info-text">${this.population} People</p>
`;
    language.innerHTML = `
    <span class="info-icon">🗣️</span>
    <p class="info-text">${this.language}</p>
`;
    currency.innerHTML = `
    <span class="info-icon">💸</span>
    <p class="info-text">${this.currency}</p>
`;

    card.append(body);
    body.append(flag);
    body.append(countryName);
    body.append(continent);
    body.append(population);
    body.append(language);
    body.append(currency);
    return card;
  }
}
const container = document.getElementById("countries-container");

const form = document.getElementById("countryForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = document.getElementById("countryName");

  handleCountrySubmit(inputValue.value);
  inputValue.value = "";
});

async function handleCountrySubmit(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    if (response.status !== 200) {
      throw Error("Error while fetching the data");
    }
    const countryDetails = await response.json();
    const country = new Country(
      countryDetails[0].name,
      countryDetails[0].region,
      countryDetails[0].flags.svg,
      countryDetails[0].population,
      countryDetails[0].languages[0].name,
      countryDetails[0].currencies[0].name
    );
    container.append(country.card);

    // const response2 = await fetch(
    //   `https://restcountries.com/v2/alpha/${countryDetails[0].alpha3Code}`
    // );
    // if (response2.status !== 200) {
    //   throw Error("Error while fetching the data");
    // }

    // const intermediate = await response2.json();

    const response2 = await fetch(
      `https://restcountries.com/v2/alpha/${countryDetails[0].borders[1]}`
    );

    const neighbourDetails = await response2.json();

    const neighbour = new Country(
      neighbourDetails.name,
      neighbourDetails.region,
      neighbourDetails.flags.svg,
      neighbourDetails.population,
      neighbourDetails.languages[0].name,
      neighbourDetails.currencies[0].name
    );
    container.append(country.card);
    container.append(neighbour.card);
  } catch (err) {
    console.log(err);
  }
}
