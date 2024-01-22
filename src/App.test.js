
import React from "react";
import App from './App';
import { render, screen } from '@testing-library/react';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/To Do/i);
  expect(linkElement).toBeInTheDocument();
});
