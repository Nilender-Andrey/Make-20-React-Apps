import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Record from '../details/Record';
import ErrorBoundary from '../error_boundary/Error_boundary';
import { StarshipDetails } from '../sw-components/details';
import { StarshipList } from '../sw-components/item-lists';

function StarshipsPage() {
  let navigate = useNavigate();
  let params = useParams();

  const { id } = params;

  const onObjectSelected = (id: string) => {
    navigate(`/starships/${id}`, { replace: true });
  };

  return (
    <>
      <ErrorBoundary>
        <StarshipList onObjectSelected={onObjectSelected} />
        <StarshipDetails id={id}>
          <Record field='model' label='Model' />
          <Record field='manufacturer' label='Manufacturer' />
          <Record field='costInCredits' label='Cost in credits' />
          <Record field='length' label='Length' />
          <Record field='crew' label='Crew' />
        </StarshipDetails>
      </ErrorBoundary>
    </>
  );
}

export default StarshipsPage;
