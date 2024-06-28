import reactLogo from './assets/Chocolicious_Logo_180x.avif'
import './App.css'
import products from '../products.json';
import React from 'react';
import Sidebar from './Sidebar';

const App: React.FC = () => {
    return (
        <>
            <div className="app">
                <Sidebar />
                <div>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </div>
                <h1>Chocolicious</h1>
                <div className="grid">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="card">
                                <img src={product.image} alt={`Preview of ${product.title}`} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>&pound;{product.price}</p>
                                <p>
                                    <button
                                        className="snipcart-add-item"
                                        data-item-id={product.id}
                                        data-item-price={product.price}
                                        data-item-url="/"
                                        data-item-description={product.description}
                                        data-item-image={product.image}
                                        data-item-name={product.title ? product.title.toString() : 'No title'}>
                                        Add to Cart
                                    </button>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default App
