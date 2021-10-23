import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

export default function StepLinks() {
  const { profile, social } = useSignupForm();

  const isProfileDone = !!profile.name.length && !!profile.email.length;
  const isSocialDone = !!social.twitter.length && !!social.facebook.length;

  console.log(isProfileDone, isSocialDone);

  return (
    <div className="step-links">
      <span className="step-links__link active">
        {isProfileDone ? '💗 ' : '❤ '}
        Profile
      </span>

      <span
        className={
            isProfileDone
              ? 'step-links__link active'
              : 'step-links__link'
          }
      >
        {isSocialDone ? '💗' : '❤'}
        Social
      </span>

      {isProfileDone && isSocialDone ? (
        <span
          className={
            isProfileDone
              ? 'step-links__link active'
              : 'step-links__link'
          }
        >
          Review
        </span>

      ) : (
        <span className="step-links__link">Review</span>
      )}
    </div>
  );
}
