import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';
import reducer from './reducers';

const dbProducts = fetch('https://platiz-store-jc.herokuapp.com/api/products', {
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
});

dbProducts
  .then(data => data.json())
  .then((products) => {
    const initialState = {
      cart: [],
      products: products.data,
    };
    return initialState;
  })
  .then((data) => {
    console.log(data);
    const store = createStore(reducer, data);
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('app'),
    );
  });

// const initialState = {
//   cart: [],
//   products: [
//     {
//       id: '1',
//       image: 'https://arepa.s3.amazonaws.com/camiseta.png',
//       title: 'Camiseta',
//       price: 25,
//       description: 'bla bla bla bla bla',
//     },
//     {
//       id: '3',
//       image: 'https://arepa.s3.amazonaws.com/mug.png',
//       title: 'Mug',
//       price: 10,
//       description: 'bla bla bla bla bla',
//     },
//     {
//       id: '4',
//       image: 'https://arepa.s3.amazonaws.com/pin.png',
//       title: 'Pin',
//       price: 4,
//       description: 'bla bla bla bla bla',
//     },
//     {
//       id: '5',
//       image: 'https://arepa.s3.amazonaws.com/stickers1.png',
//       title: 'Stickers',
//       price: 2,
//       description: 'bla bla bla bla bla',
//     },
//     {
//       id: '6',
//       image: 'https://arepa.s3.amazonaws.com/stickers2.png',
//       title: 'Stickers',
//       price: 2,
//       description: 'bla bla bla bla bla',
//     },
//     {
//       id: '7',
//       image: 'https://arepa.s3.amazonaws.com/hoodie.png',
//       title: 'Hoodie',
//       price: 35,
//       description: 'bla bla bla bla bla',
//     },
//   ],
// };
