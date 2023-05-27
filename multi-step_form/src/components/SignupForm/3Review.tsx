import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';
import Animator from './Animator';

export default function Review() {
  const { profile, social } = useSignupForm();
  const history = useHistory();

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    alert('you are submitting! congrats!');
  }

  function clickHandle() {
    history.push('/social');
  }

  return (
    <Animator>
      <form className="wrap" onSubmit={handleSubmit}>
        <h2>Review all your info</h2>
        <p className="review__text">
          <strong>Name: </strong>
          {profile.name}
        </p>
        <p className="review__text">
          <strong>Email: </strong>
          {profile.email}
        </p>
        <p className="review__text">
          <strong>Twitter: </strong>
          {social.twitter}
        </p>
        <p className="review__text">
          <strong>Facebook: </strong>
          {social.facebook}
        </p>
        <Flex w="100%" justifyContent="flex-end">
          <Button
            colorScheme="teal"
            marginRight="20px"
            onClick={() => clickHandle()}
            fontSize="4xl"
            w="150px"
          >
            Back
          </Button>
          <Button
            colorScheme="teal"
            className="submit"
            type="submit"
            fontSize="3xl"
            w="150px"
          >
            Submit All Info
          </Button>
        </Flex>
      </form>
    </Animator>
  );
}
