import React, {useState, useEffect} from 'react'

import {HiChevronLeft, HiChevronRight} from "react-icons/hi"
import {RxDotFilled} from "react-icons/rx" 

function Slide() {
    const sliders = [
        {url: "./images/001.jpg"},
        {url: "./images/002.jpg"},
        {url: "./images/003.jpg"}
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // 이전 슬라이드
    function prevSlider(){
        const isFirstSlide = (currentIndex === 0);
        const newIndex = ( isFirstSlide ? sliders.length - 1 : currentIndex - 1);
        setCurrentIndex(newIndex);
    }

    // 다음 슬라이드
    function nextSlider(){
        const isLastSlide = (currentIndex === sliders.length - 1);
        const newIndex = (isLastSlide ? 0 : currentIndex + 1);
        setCurrentIndex(newIndex);
    }

    function moveSlider(slideIndex){
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlider();
        }, 4000);
    });

    return (
        <>
        <div className="max-2-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-300" style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>    
            
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
                <HiChevronLeft onClick={prevSlider} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
                <HiChevronRight onClick={nextSlider} />
            </div>
        </div>
        </>
    )
}

export default Slide