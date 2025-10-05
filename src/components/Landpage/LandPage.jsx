import React, { useState, useEffect } from 'react'

import './LandPage.css';
import space from "../../assets/img/space.png";
import CV from "../../assets/img/CV.pdf"
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { RiUserShared2Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import Nav from '../nav/Nav';


const LandPage = ({ active, setActive }) => {
    // 1. State to track if the page has been scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // 2. useEffect hook to handle side effects (scroll listener)
    useEffect(() => {
        const handleScroll = () => {
            // Check if the vertical scroll position is greater than 50 pixels
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this runs only on mount and unmount

    return (
        
        

        <div className='body' id="home">
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <a className='logo' href="">Personal Portfolio.</a>
                <Nav active={active} setActive={setActive} />
                {/* <nav className='navbar'>
                    <a href="#home" className='active'><IoHomeOutline /></a>
                    <a href="#about" ><RiUserShared2Line /></a>
                    <a href="#experience"><BsPersonGear /></a>
                    <a href="#contact"><MdOutlineContactPage /></a>
                </nav> */}

            </header>


            <div className='devider'>
                <section className='home'>
                    <div className='home-content'>
                        <h1>Hi, i am Debashish Jena</h1>
                        <h3>Full Stack developer</h3>
                        <p>I'm a passionate full stack developer crafting seamless digital experiences from front-end finesse to back-end power. I build scalable, user-centric web applications that solve real-world problems with clean code, modern frameworks, and relentless curiosity.</p>
                        <div className='button-box'>
                            <a href="">Let's talk</a>
                            <a href={CV} download >Download CV</a>
                        </div>
                    </div>

                    <div className='home-sci'>
                        <a href=""><AiFillLinkedin color="#b21717ff" /></a>
                        <a href=""><AiFillGithub /></a>
                        <a href=""><AiFillInstagram /></a>

                    </div>
                </section>
                <section className='side-image'>
                    <img src={space} alt="Space image" />
                </section>


            </div>

        </div>
         
    )
}

export default LandPage