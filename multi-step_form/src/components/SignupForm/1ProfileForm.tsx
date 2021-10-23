import { Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Animator from './Animator';
import { useSignupForm } from './SignupFormContext';

type DataFormType = {
  name: string;
  email: string;
};

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const { profile, setProfile } = useSignupForm();

  function onSubmit(data: DataFormType) {
    setProfile(data);

    history.push('/social');
  }

  return (
    <Animator>
      <form className="wrap" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us about yourself</h2>

        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="What's your name?"
          defaultValue={profile.name}
        />
        <p className="errorsValidate">{errors.name && 'Name is required'}</p>

        <input
          {...register('email', {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          })}
          type="email"
          placeholder="What's your email?"
          defaultValue={profile.email}
        />
        <p className="errorsValidate">
          {errors.email ? 'Email is required' : ''}
        </p>

        <Button
          colorScheme="teal"
          className="submit"
          type="submit"
          fontSize="4xl"
          w="150px"
        >
          Next
        </Button>
      </form>
    </Animator>
  );
}
