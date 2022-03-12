import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Record from '../details/Record';
import ErrorBoundary from '../error_boundary/Error_boundary';
import { PlanetDetails } from '../sw-components/details';
import { PlanetList } from '../sw-components/item-lists';

function PlanetPage() {
  let navigate = useNavigate();
  let params = useParams();

  const { id } = params;

  const onObjectSelected = (id: string) => {
    navigate(`/planets/${id}`, { replace: true });
  };

  return (
    <>
      <ErrorBoundary>
        <PlanetList onObjectSelected={onObjectSelected} />
        <PlanetDetails id={id}>
          <Record field='population' label='Population' />
          <Record field='rotation' label='Rotation' />
          <Record field='diameter' label='Diameter' />
        </PlanetDetails>
      </ErrorBoundary>
    </>
  );
}

export default PlanetPage;
