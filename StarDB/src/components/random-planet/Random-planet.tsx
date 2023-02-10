import React, { useEffect, useState } from 'react';
import api from '../../services/api/api';
import ErrorIndicator from '../error-indicator/Error-indicator';
import Spinner from '../spinner/Spinner';
import PlanetView from './Planet-view';

export interface IPlanet {
  id: null | string;
  name: null | string;
  population: null | string;
  rotation: null | string;
  diameter: null | string;
}

interface IRandomPlanet {
  updateInterval?: number;
}

const RandomPlanet = ({ updateInterval = 10000 }: IRandomPlanet) => {
  const [planet, setPlanet] = useState<IPlanet>({
    id: '1',
    name: null,
    population: null,
    rotation: null,
    diameter: null,
  });

  const [id, setId] = useState(Math.floor(Math.random() * 18 + 2));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onPlanetLoaded = (planet: IPlanet) => {
    setPlanet(planet);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setId((id) => (id = Math.floor(Math.random() * 18 + 2)));
    }, updateInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLoading(true);

    api
      .getPlanet(id.toString())
      .then((res) => {
        onPlanetLoaded(res);
        setLoading(false);
      })
      .catch(onError);
  }, [id]);

  const hasData = !(loading || error);

  const content = hasData ? <PlanetView planet={planet} /> : null;
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorIndicator /> : null;

  return (
    <div className='card random-planet border-dark'>
      {spinner}
      {content}
      {errorMessage}
    </div>
  );
};

export default RandomPlanet;
