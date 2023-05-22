import React from 'react'
import "./Style.css"
import image1 from "../Assets/slider1.jpg"
import image2 from "../Assets/slider8.jpg"
import image3 from "../Assets/slider6.jpg"
import image4 from "../Assets/slider4.jpg"
import image5 from "../Assets/slider9.jpg"
import image6 from "../Assets/slider5.jpg"
import image7 from "../Assets/slider6.jpg"
import image8 from "../Assets/slider2.jpg"
import Carousel from "react-elastic-carousel"

const Slider = () => {
    const breakPoints=[
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4},
    ]
    return (
        <>
            <section>


                <div className="row">
                    <Carousel breakPoints={breakPoints}>

                  
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image1} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Shoes</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image2} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Harbal Oil</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image3} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Iphone</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image4} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Smart Watch</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image5} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Febrez</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image6} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Iphone</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image7} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Iphone </h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    <div className="product">
                        <div className="product-thumb">
                            <a href="/"><img src={image8} alt="" /></a>
                        </div>
                        <div className="product-body">
                            <div className="title">
                                <h5>Nike Shoes</h5>
                            </div>

                            <div className="rating">
                                <div className="star">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            
                    </div>
                    </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Slider
