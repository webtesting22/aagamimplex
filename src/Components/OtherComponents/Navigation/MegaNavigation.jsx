import React from "react";
import AAGAMLogo from "../../../../public/Images/AAGAMLogo.png";
import "./MegaNavigation.css";

const MegaNavigation = () => {
    const NavigationLinks = [
        { link: "Home" },
        { link: "About" },
        { link: "Services" },
        { link: "Contact" },
    ];

    return (
        <>
            <div id="MegaNavigationContainer">
                {/* First Container - First 2 Links */}
                <div className="NavigationContainer">
                    {NavigationLinks.slice(0, 2).map((item, index) => (
                        <a key={index} href={`#${item.link.toLowerCase()}`} className="NavigationLink">
                            {item.link}
                        </a>
                    ))}
                </div>

                {/* Logo Container */}
                <div className="LogoContainer">
                    <img src={AAGAMLogo} alt="Logo" />
                </div>

                {/* Second Container - Last 2 Links */}
                <div className="NavigationContainer">
                    {NavigationLinks.slice(2).map((item, index) => (
                        <a key={index} href={`#${item.link.toLowerCase()}`} className="NavigationLink">
                            {item.link}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MegaNavigation;
