import { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom';
import cartWhite from './assets/img/cartWhite.svg';
import rating from './assets/img/rating.svg';

export const Product = () => {

    const [product, setProduct] = useState(null)
    let { productId } = useParams();
    debugger

    useEffect(() => {
        let promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
        promise.then((res) => {
            setProduct(res.data)
        })
    }, [])

    return (
        <div>
            <div>Заглушка. Понадобится чуть позже. Не удаляейте :)</div>

            {
                product === null
                    ? <h1> Loading... </h1>
                    : <div className="product">
                        <img src={product.image} alt="" />
                        <div className="info">
                            <p className="title">{product.title}</p>
                            <p className="price">$ {product.price}</p>
                            <div className="rating">
                                <p>Rating: {product.rating.rate}</p>
                                <img src={rating} alt="" />
                            </div>
                            <div className="category">
                                <span>Category:</span>
                                <p>{product.category}</p>
                            </div>
                            <p className="description">{product.description}</p>
                            <button>
                                <img src={cartWhite} alt="" />
                                Add to cart
                            </button>
                        </div>
                    </div>
            }
        </div>

    )
}