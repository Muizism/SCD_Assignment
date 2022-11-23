import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './components/navbar.js';
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



test("CheckNavbar button 'Add products'", () => {
  render(
    <MemoryRouter><Navbar /></MemoryRouter>
  );
  const linkElement = screen.getByTestId("Nav");
  expect(linkElement).toHaveTextContent("Add products");
});



test("CheckNavbar button 'View products'", () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const linkElement = screen.getByTestId("Nav");
  expect(linkElement).toHaveTextContent("View products");
});

