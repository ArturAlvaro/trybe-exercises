import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it("Altera valor dos campos e testa valor guardado", () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId("input-nome");
  expect(inputNome).toHaveValue("");
  fireEvent.change(inputNome, {
    target: { value: "Estudando o dobro na Trybe" },
  });
  expect(inputNome).toHaveValue("Estudando o dobro na Trybe");

  const inputEmail = getByTestId("input-email");
  expect(inputEmail).toHaveValue("");
  fireEvent.change(inputEmail, { target: { value: "estudante@trybe.com" } });
  expect(inputEmail).toHaveValue("estudante@trybe.com");
});
