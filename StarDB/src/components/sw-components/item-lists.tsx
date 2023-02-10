import ItemList from '../item-list/Item-list';
import api from '../../services/api/api';
import withDataList from '../hoc-helpers/with_data_list';
import { GeneralType } from '../../Types/types';

const { getAllPeople, getAllPlanets, getAllShips } = api;

const PersonShowOptions = (item: GeneralType) => item.name;
const PlanetShowOptions = (item: GeneralType) => item.name;
const StarshipOptions = (item: GeneralType) => item.name;

export const PersonList = withDataList(
  ItemList,
  getAllPeople,
)(PersonShowOptions);

export const PlanetList = withDataList(
  ItemList,
  getAllPlanets,
)(PlanetShowOptions);

export const StarshipList = withDataList(
  ItemList,
  getAllShips,
)(StarshipOptions);
