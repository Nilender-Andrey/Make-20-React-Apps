import React from 'react';
import { userChoiceType } from '../App';

export default function renderComponent(choice:userChoiceType | null) {
  if (choice) {
    const Component = choice.component;
    return <Component />;
  }
  return null;
}
