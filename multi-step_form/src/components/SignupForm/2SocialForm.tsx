import { Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Animator from './Animator';
import { useSignupForm } from './SignupFormContext';

type DataFormType = {
  twitter: string;
  facebook: string;
};

export default function SocialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const { social, setSocial } = useSignupForm();

  function onSubmit(data: DataFormType) {
    setSocial(data);
    history.push('/review');
  }
  function clickHandle() {
    history.push('/');
  }

  return (
    <Animator>
      <form className="wrap" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>

        <input
          {...register('twitter', { required: true })}
          type="text"
          placeholder="What's your Twitter?"
          defaultValue={social.twitter}
        />
        <p className="errorsValidate">
          {errors.twitter && 'Twitter is required'}
        </p>

        <input
          {...register('facebook', {
            required: true,
          })}
          type="text"
          placeholder="What's your Facebook?"
          defaultValue={social.facebook}
        />
        <p className="errorsValidate">
          {errors.facebook ? 'Facebook is required' : ''}
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
            type="submit"
            fontSize="4xl"
            w="150px"
          >
            Next
          </Button>
        </Flex>
      </form>
    </Animator>
  );
}
