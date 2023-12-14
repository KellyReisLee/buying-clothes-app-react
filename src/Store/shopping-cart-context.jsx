import { createContext } from 'react';

export const CartContext = createContext({
  // Esse array vai receber dados atualizados com as modificações do usuário. Array usada para prover dados para o projeto.
  items: [],
  addItemToCart: () => { },
  updateQtdCart: () => { }
});