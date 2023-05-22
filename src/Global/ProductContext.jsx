import React, { createContext, useState } from 'react'
import Pic01 from "../Assets/slider7.jpg"
import Pic02 from "../Assets/slider9.jpg"
import Pic03 from "../Assets/slider10.jpg"
import Pic04 from "../Assets/slider2.jpg"
import Pic05 from "../Assets/watch4.jpg"
import Pic06 from "../Assets/slider3.jpg"
import Pic07 from "../Assets/watch1.jpg"
import Pic08 from "../Assets/watch2.jpg"
import Pic09 from "../Assets/watch3.jpg"
import Pic10 from "../Assets/watch5.jpg"
import Six from "../Assets/slider6.jpg"

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: 'Dial', price: 120, image: Pic01, status: 'hot' },
        { id: 2, name: 'Febrez ', price: 290, image: Pic02, status: 'new' },
        { id: 3, name: 'Curology', price: 500, image: Pic03, status: 'hot' },
        { id: 4, name: 'Nike X', price: 300, image: Pic04, status: 'new' },
        { id: 5, name: 'Watch Z98 ', price: 500, image: Pic05, status: 'hot' },
        { id: 6, name: 'Headphone ', price: 290, image: Pic06, status: 'new' },
        { id: 7, name: 'Watch X12', price: 300, image: Pic07, status: 'hot' },
        { id: 8, name: 'Watch G78', price: 230, image: Pic08, status: 'new' },
        { id: 9, name: 'Watch S28', price: 240, image: Pic09, status: 'hot' },
      
    ])
    return (
        <ProductContext.Provider value={{ products: [...products] }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
