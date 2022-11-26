import axios from 'axios';
import React, { Component } from 'react';
import { useEffect, useState } from 'react';

export const BestSellers = () => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        let promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        promise.then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className='bestSeller'>
            <h2>BestSellers</h2>
            <div className='cards'>

                {
                    products.map((product) => { 
                        return (
                            <div className="card">
                                <img src={product.image} alt="img" />
                                <h4>{product.title}</h4>
                                <p className="price">${product.price}</p>
                                <button>Show more</button>
                            </div>
                        )
                    }


                    )}
            </div>
        </div>
    )
}