import React from 'react'
import '../style-componets/Slider.css'
// import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
// import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? data.length-1 : (prev) => prev-1);
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide === data.length-1 ? 0 : (prev) => prev+1);
    }

    return (
        <div className="slider">
            <div className="container-slider" style={{transform:  `translateX(-${currentSlide*100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}
