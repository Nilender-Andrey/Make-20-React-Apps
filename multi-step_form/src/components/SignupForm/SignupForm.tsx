import React, { useEffect } from 'react';

import {
  useHistory, useLocation, BrowserRouter as Switch, Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProfileForm from './1ProfileForm';
import SocialForm from './2SocialForm';
import Review from './3Review';
import { SignupFormProvider } from './SignupFormContext';
import StepLinks from './StepLinks';

export default function SignupForm() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, []);
  return (
    <SignupFormProvider>
      <StepLinks />
      <div className="signup-form">
        <AnimatePresence>
          <Switch key={location.pathname}>
            <Route exact path="/" render={() => <ProfileForm />} />
            <Route path="/social" render={() => <SocialForm />} />
            <Route path="/review" render={() => <Review />} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
