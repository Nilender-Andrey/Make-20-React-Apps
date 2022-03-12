export type PlanetTypeRaw = {
  id: string;
  name: string;
  diameter: string;
  orbital_period: string;
  rotation_period: string;
  population: string;
  terrain: string;
  url: string;
};

export type PlanetType = {
  id: string;
  name: string;
  population: string;
  rotation: string;
  diameter: string;
};

export type StarshipTypeRaw = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  url: string;
};

export type StarshipType = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
};

export type PersonTypeRaw = {
  id: string;
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
  url: string;
};

export type PersonType = {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
};

export type GeneralType = PersonType | PlanetType | StarshipType;

export type DisplayOptionsType = (item: GeneralType) => string;
