import api from '../../services/api/api';
import Details from '../details/Details';
import withDataDetails from '../hoc-helpers/with_data_details';

const {
  getPerson,
  getPersonImg,
  getPlanet,
  getPlanetImg,
  getShip,
  getStarshipImg,
} = api;

export const PersonDetails = withDataDetails(Details, getPerson, getPersonImg);
export const PlanetDetails = withDataDetails(Details, getPlanet, getPlanetImg);
export const StarshipDetails = withDataDetails(
  Details,
  getShip,
  getStarshipImg,
);
