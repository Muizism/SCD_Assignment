import { render, screen } from '@testing-library/react';
import Products from "./components/products.js"

test('Check render product_id input', () => {
  render(<Products/>);

  const inputEl = screen.getByTestId('product-test');
  expect(inputEl).toBeInTheDocument();

});

test('Check render name input', () => {
  render(<Products/>);

  const inputEl = screen.getByTestId('name_id');
  expect(inputEl).toBeInTheDocument();

});