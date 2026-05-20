import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard identity context verification string', () => {
  render(<App/>);
  const identityElement = screen.getByText(/My KP Schedule login Ecosystem/i);
  expect(identityElement).toBeInTheDocument();
});
