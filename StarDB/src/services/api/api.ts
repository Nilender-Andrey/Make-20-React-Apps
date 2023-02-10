import {
  GeneralType,
  PersonType,
  PersonTypeRaw,
  PlanetType,
  PlanetTypeRaw,
  StarshipType,
  StarshipTypeRaw,
} from '../../Types/types';

class ApiService {
  private urlBase = 'https://swapi.dev/api';
  private ImgUrlBase = 'https://starwars-visualguide.com/assets/img';

  private getResource = async (url: string) => {
    const res = await fetch(this.urlBase + url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch response, ${res.status}`);
    }

    const body = await res.json();

    return body;
  };

  getAllPeople = async () => {
    const result = await this.getResource(`/people/`);
    return result.results.map(this.transformPerson);
  };

  getPerson = async (id: string) => {
    const result = await this.getResource(`/people/${id}`);
    return this.transformPerson(result);
  };

  getPersonImg = ({ id }: GeneralType) =>
    `${this.ImgUrlBase}/characters/${id}.jpg`;

  getAllPlanets = async (): Promise<PlanetType[]> => {
    const result = await this.getResource(`/planets/`);
    return result.results.map(this.transformPlanet);
  };

  getPlanet = async (id: string) => {
    const result = await this.getResource(`/planets/${id}`);
    return this.transformPlanet(result);
  };

  getPlanetImg = ({ id }: GeneralType) =>
    `${this.ImgUrlBase}/planets/${id}.jpg`;

  getAllShips = async () => {
    const result = await this.getResource(`/starships/`);
    return result.results.map(this.transformStarship);
  };

  getShip = async (id: string) => {
    const result = await this.getResource(`/starships/${id}`);
    return this.transformStarship(result);
  };

  getStarshipImg = ({ id }: GeneralType) =>
    `${this.ImgUrlBase}/starships/${id}.jpg`;

  private transformPlanet = (planet: PlanetTypeRaw): PlanetType => {
    return {
      id: this.extractId(planet.url),

      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  private transformStarship = (starship: StarshipTypeRaw): StarshipType => {
    return {
      id: this.extractId(starship.url),

      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  private transformPerson = (person: PersonTypeRaw): PersonType => {
    return {
      id: this.extractId(person.url),

      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  private extractId = (url: string) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const res = url.match(idRegExp);
    return res ? res[1] : '';
  };
}

export default new ApiService();
