import React, { createContext, useContext, useState } from 'react';

type SignupFormProviderType = {
  children: React.ReactNode;
};

type ProfileType = {
  name: string;
  email: string;
}

type SocialType = {
  twitter: string;
  facebook: string;
}

export interface SignupFormContextInterface {
  profile: ProfileType;
  social: SocialType;

  setProfile: React.Dispatch<
    React.SetStateAction<{ name: string; email: string }>
  >;
  setSocial: React.Dispatch<
    React.SetStateAction<{ twitter: string; facebook: string }>
  >;
}

export const SignupFormContext = createContext<
  SignupFormContextInterface | undefined
>(undefined);

export function SignupFormProvider({ children }: SignupFormProviderType) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });
  const [social, setSocial] = useState({
    twitter: '',
    facebook: '',
  });

  return (
    <SignupFormContext.Provider
      value={{
        profile,
        social,
        setProfile,
        setSocial,
      }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}

export function useSignupForm() {
  const context = useContext(SignupFormContext);
  if (context === undefined) {
    throw new Error('useSignupForm must be within SignupFormProvider');
  }
  return context;
}
