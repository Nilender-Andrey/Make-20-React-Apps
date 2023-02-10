import React from 'react';
import { IPlanet } from './Random-planet';

interface IProps {
  planet: IPlanet;
}

function PlanetView({ planet }: IProps) {
  const { name, population, rotation, diameter, id } = planet;
  return (
    <>
      <div className='card-header'>{name}</div>
      <div className='card-body d-flex align-items-center'>
        <div
          className='card-body__img'
          style={{ width: '200px', height: '200px' }}
        >
          <img
            className='img-fluid rounded'
            src={
              id === '1'
                ? 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
            }
            alt={`Planet name ${name}`}
          />
        </div>
        <div className='card-body__info'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Population {population}</li>
            <li className='list-group-item'>Rotation Period {rotation}</li>
            <li className='list-group-item'>Diameter {diameter}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PlanetView;
