import React, { useState, useEffect } from 'react';

export default function Category() {
    const imgList = ["category1", "category2", "category3", "category4"];
    const itemsPerPage = 2;
    const [imgIndex, setImgIndex] = useState(0);

    // Function to go to the next group of images
    const next = () => {
        setImgIndex((prevIndex) => {
            let newIndex = prevIndex + itemsPerPage;
            return newIndex < imgList.length ? newIndex : 0; // Wrap around if overflows
        });
    };

    // Function to go to the previous group of images
    const previous = () => {
        setImgIndex((prevIndex) => {
            let newIndex = prevIndex - itemsPerPage;
            return newIndex >= 0 ? newIndex : imgList.length - itemsPerPage; // Wrap around if negative
        });
    };

    // Autoplay setup using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            next(); // Move to the next set of items automatically
        }, 3000); // Changes every 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Get a sublist of the images to display
    const getVisibleImages = () => {
        return imgList.slice(imgIndex, imgIndex + itemsPerPage);
    };

    return (
        <section className="product__category pb-20">
            <div className="container">
                <div className="flex flex-wrap justify-center md:gap-x-16 gap-x-7 gap-y-6">
                    {
                        getVisibleImages().map((img, index) => (
                            <div className="flex flex-col" key={index}>
                                <a href="#">
                                    <img src={`./images/categories/${img}.png`} alt="" />
                                </a>
                                <span className="text-zinc-700 dark:text-white text-sm md:leading-7 text-center font-semibold">
                                    لوازم جانبی و تجهیزات
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center mt-10 gap-4">
                    <button onClick={previous} className="mr-4 bg-brown-900 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded">
                        قبلی
                    </button>
                    <button onClick={next} className="bg-brown-900 hover:bg-brown-600 text-white font-bold py-2 px-4 rounded">
                        بعدی
                    </button>
                </div>
            </div>
        </section>
    );
}
