import React, { useState, useEffect } from "react";
import "./AAGAMHome.css";

const AAGAMHome = () => {
    const AnimatedImages = [
        {
            image: "https://images.unsplash.com/photo-1545042746-ec9e5a59b359?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alternateImage: "https://images.unsplash.com/photo-1624505474108-7f8d43c248de?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image: "https://images.unsplash.com/photo-1698515129669-7af840870238?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alternateImage: "https://images.unsplash.com/photo-1655557937658-84bce850e087?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alternateImage: "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const [scrollY, setScrollY] = useState(0);
    const [isAlternate, setIsAlternate] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY); // Update scroll position
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setIsAlternate((prev) => !prev); // Toggle between the default and alternate images
        }, 2000); // Switch every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return (
        <section className="AnimatedImagesComponent">
            <div className="RowWiseImage">
                {AnimatedImages.map((item, index) => {
                    const parallaxOffset = scrollY * (0.2 + index * 0.2); // Adjust speed for each image
                    return (
                        <div
                            key={index}
                            className="ParallaxImage"

                        >
                            <img
                                src={isAlternate ? item.alternateImage : item.image}
                                alt={`Image ${index + 1}`}
                                style={{
                                    transform: `translateY(${parallaxOffset}px)`,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
            {/* <div className=""> */}
            <div className="headingContainer paddingTop">
                <h1>Elevate Your Brand with Elegant Corporate Gifts That Leave a Lasting Impression.</h1>
                <div className="FleXCoulumn">
                    {AnimatedImages.map((item, index) => (
                        <div className="HeadingImages">
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
                <div className="AnimatedbtnContainer">
                    <button>View Products </button>
                    <hr />
                </div>
            </div>


            {/* </div> */}
        </section>
    );
};

export default AAGAMHome;
