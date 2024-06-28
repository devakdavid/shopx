import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { cartReducer, productFilterReducer } from './Reducers';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';

const Cart = createContext();


const CartContext = ({ children }) => {

    const products = [
        {
            id: '1',
            name: 'Product 1',
            price: 18.99,
            image: image1, // Use the imported image
            inStock: 5,
            fastDelivery: true,
            ratings: 4,
        },
        {
            id: '2',
            name: 'Product 2',
            price: 29.80,
            image: image2, // Use the imported image
            inStock: 3,
            fastDelivery: false,
            ratings: 5,
        },
        {
            id: '3',
            name: 'Product 3',
            price: 19.99,
            image: image3, // Use the imported image
            inStock: 2,
            fastDelivery: false,
            ratings: 5,
        },
        {
            id: '4',
            name: 'Product 4',
            price: 29.00,
            image: image4, // Use the imported image
            inStock: 1,
            fastDelivery: false,
            ratings: 3,
        },
        {
            id: '5',
            name: 'Product 5',
            price: 19.99,
            image: image5, // Use the imported image
            inStock: 5,
            fastDelivery: true,
            ratings: 4,
        },
        {
            id: '6',
            name: 'Product 6',
            price: 9.22,
            image: image6, // Use the imported image
            inStock: 6,
            fastDelivery: false,
            ratings: 5,
        },
        {
            id: '7',
            name: 'Product 77',
            price: 29.90,
            image: image7, // Use the imported image
            inStock: 2,
            fastDelivery: false,
            ratings: 2,
        },
        {
            id: '8',
            name: 'Product 8',
            price: 29.99,
            image: image8, // Use the imported image
            inStock: 8,
            fastDelivery: false,
            ratings: 1,
        },
    ];

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
        currency: 'GBP', // The base currency
        exchangeRates: {},
    });

    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/9cb58cc77090a6c62505a3c8/latest/GBP')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_EXCHANGE_RATES', payload: data.conversion_rates });
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }, []);

    const convertPrice = (price, currency) => {
        return (price * state.exchangeRates[currency]).toFixed(2);
    };

    const [productFilterState, productFilterDispatch] = useReducer(productFilterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state, dispatch, convertPrice, productFilterState, productFilterDispatch }}>
            {children}
        </Cart.Provider>
    );
};

export default CartContext;

export const CartState = () => {
    return useContext(Cart);
};