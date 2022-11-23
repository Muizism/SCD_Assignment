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

test('Check integer price', () => {
  render(<Products/>);

  const inputEl = screen.getByTestId('price-test');
  expect(inputEl).toBeInTheDocument(Number);

});

test('Check integer stock', () => {
  render(<Products/>);

  const inputE2 = screen.getByTestId('stock_testID');
  expect(inputE2).toBeInTheDocument(Number);

});
