import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Category() {
    const imgList = ["category1", "category2", "category3", "category4"];

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,          // Infinite looping
        speed: 500,              // Transition speed
        slidesToShow: 3,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll
        autoplay: true,          // Enables autoplay mode
        autoplaySpeed: 3000,     // Delay between each auto scroll
        cssEase: "linear",       // CSS easing function to use
        pauseOnHover: true,       // Pauses the autoplay on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="product__category pb-20">
            <div className="container">
                <Slider {...settings}>
                    {imgList.map((img, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <div className='flex flex-col items-center justify-center'>
                                <img className='w-40 h-40' src={`./images/categories/${img}.png`} alt="" />

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
