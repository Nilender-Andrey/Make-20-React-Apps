import React from 'react';
import Record from '../details/Record';
import ErrorBoundary from '../error_boundary/Error_boundary';
import { PersonDetails } from '../sw-components/details';
import { PersonList } from '../sw-components/item-lists';
import { useNavigate, useParams } from 'react-router-dom';

function PeoplePage() {
  let navigate = useNavigate();
  let params = useParams();

  const { id } = params;

  const onObjectSelected = (id: string) => {
    navigate(`/people/${id}`, { replace: true });
  };

  return (
    <>
      <ErrorBoundary>
        <PersonList onObjectSelected={onObjectSelected} />
        <PersonDetails id={id}>
          <Record field='gender' label='Gender' />
          <Record field='eyeColor' label='Eye Color' />
        </PersonDetails>
      </ErrorBoundary>
    </>
  );
}

export default PeoplePage;
