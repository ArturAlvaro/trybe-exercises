import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it("fetch joke", async () => {
  const joke = {
    id: "7h3oGtr0fxc",
    joke: "How the turntables... turn",
    status: 200,
  };

  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  const { findByText } = render(<App />);
  await findByText("How the turntables... turn");
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
});

describe("Testa resposta da API dadJoke", () => {
  it('Testa se retorna a resposta: "How the turntables... turn"', async () => {
    const joke = {
      id: "7h3oGtr0fxc",
      joke: "How the turntables... turn",
      status: 200,
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    const { findByText } = render(<App />);
    await findByText("How the turntables... turn");
  });
});
