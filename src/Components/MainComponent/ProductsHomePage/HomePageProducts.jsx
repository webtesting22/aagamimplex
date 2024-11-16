import React, { useState, useEffect } from "react";
import "./HomePageProducts.css"
import Marquee from "react-fast-marquee";
import { Row, Col } from "antd";
import ProductData from "./ProductData";
const HomePageProducts = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CarousalImages.length);
        }, 2000); // 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);
    const productItems = [
        "Diary", "Oxidized Articles", "Calendar", "Household Item", "Keychain",
        "Home Appliances", "Pen/Pen Stand", "Crockery", "ZA Handicraft Items (Rangoli, Toran)",
        "Wrist Watch", "Wall Clock", "Shirt / T-Shirt / Cap", "Visiting Card Holder",
        "Table Top Articles", "Traveling Bags / Bags", "Money Purse / Belt (Set)", "Plastic Novelty",
        "Steel Item", "Copper Item", "Wooden Articles", "Bed Sheet / Blanket",
        "Shield / Awards / Dealer Shirt", "Gift Set", "Mobile Accessories", "Important Novelties",
        "Diwali Gifting", "Diwali Worship Set", "And Other Varieties"
    ];

    const CarousalImages = [
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1509291832281-6323f499fc80?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1536045300881-24eb577c5868?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return (
        <>
            <section id="HomePageProducts " className="paddingTop">

                <div className="BackImageAnimation ">
                    <div className="blackoverlay">

                    </div>
                    <div className="AnimatedPhotosBlink">
                        <div className="carousel-images-container">
                            {CarousalImages.map((item, index) => (
                                <div
                                    key={index}
                                    className={`carousel-image ${currentImageIndex === index ? "active" : ""}`}
                                >
                                    <img src={item} alt="aagam implex" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Marquee>
                        {productItems.map((item, index) => (
                            <span key={index}>{item}{index < productItems.length - 1 ? " - " : ""}</span>
                        ))}
                    </Marquee>
                </div>
                <div className="paddingTop">
                    <div className="productsHeading">
                        <h1> Tabs Container</h1>
                    </div>
                    <div className="BestSellingProducts">
                        <div className="ProductData">
                            <Row>
                                {ProductData.map((item, index) => (
                                    <Col lg={6} md={8} key={index}>
                                        <div className="ProductCard" onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <div className="ImageContainer">
                                                <img
                                                    src={hoveredIndex === index ? item.image[1] : item.image[0]}
                                                    alt="aagam implex"
                                                    className="ProductImage"
                                                    style={{transition:".5s"}}
                                                />
                                            </div>
                                            <div className="ContentContainer">
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default HomePageProducts