import React, { useState, useEffect } from 'react';
import { IoMdRocket } from "react-icons/io";
import './ScrollToTop.css'; // Don't forget to create this CSS file!

const ScrollToTop = () => {
    // State to manage the visibility of the button
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll the window smoothly to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This creates the smooth scroll animation
        });
    };

    // Effect to add/remove the scroll event listener
    useEffect(() => {
        // Handler function to check scroll position
        const toggleVisibility = () => {
            // Show button if page is scrolled down more than 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup: remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div 
            className={`scroll-to-top-button ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <IoMdRocket />
        </div>
    );
};

export default ScrollToTop;