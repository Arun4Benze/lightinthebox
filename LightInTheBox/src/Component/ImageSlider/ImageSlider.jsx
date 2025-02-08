import React from 'react'
import "../ImageSlider/ImageSlider.css";
import slide1 from "../../assets/curosel 1.webp";
import slide2 from "../../assets/curosel 2.webp";
import slide3 from "../../assets/curosel 3.avif";
import slide4 from "../../assets/curosel 4.webp";
import slide5 from "../../assets/curosel 5.avif";
import slide6 from "../../assets/curosel 6.avif"

const ImageSlider = () => {
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
    return (
        <>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    {slides.map((slide,index) => {
                        return (
                            <div class={`carousel-item ${index===0?"active":""} image-div`} key={index}>
                                <img src={slide} className="d-block w-100 img-fluid" alt="..." />
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default ImageSlider
