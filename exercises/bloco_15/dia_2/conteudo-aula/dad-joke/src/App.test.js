import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Testa resposta da API dadJoke', () => {
  it('Testa se retorna a resposta: "How the turntables... turn"', async () => {
    const joke = {
      id: '7h3oGtr0fxc',
      joke: 'How the turntables... turn',
      status: 200,
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke),
    });

    const { findByText } = render(<App />);
    await findByText('How the turntables... turn');
  })
});

