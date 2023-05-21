import React, { createContext, useState } from 'react'
import Pic01 from "../Assets/slider8.jpg"
import Pic02 from "../Assets/slider6.jpg"
import Pic03 from "../Assets/slider1.jpg"
import Pic04 from "../Assets/slider2.jpg"
import Pic05 from "../Assets/slider3.jpg"
import Pic06 from "../Assets/slider4.jpg"
import Pic07 from "../Assets/slider5.jpg"
import Six from "../Assets/slider6.jpg"

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: 'Sun Care', price: 120, image: Pic01, status: 'hot' },
        { id: 2, name: 'Ponds ', price: 290, image: Pic02, status: 'new' },
        { id: 3, name: 'Harbar Loation', price: 500, image: Pic03, status: 'hot' },
        { id: 4, name: 'Laptop', price: 300, image: Pic04, status: 'new' },
        { id: 5, name: 'Charger ', price: 500, image: Pic05, status: 'hot' },
        { id: 6, name: 'Coming Soon ', price: 0, image: Six, status: 'new' },
        { id: 7, name: 'Dslr', price: 300, image: Pic06, status: 'hot' },
        { id: 8, name: 'Shoes', price: 230, image: Pic07, status: 'new' },
        { id: 1, name: 'Headphone', price: 240, image: Pic03, status: 'hot' },
      
    ])
    return (
        <ProductContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
