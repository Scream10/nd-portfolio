import Link from 'next/link';
import React, { useEffect, useState } from "react";

export default function Navbar() {

    useEffect(function openMenu() {
        const nav = document.querySelector('nav');
        const menu = document.querySelector('.menu');
        const title = document.querySelector('.title p');
        const hamburgerOne = document.querySelector('.nav__hamburger--1'); 
        const hamburgerTwo = document.querySelector('.nav__hamburger--2'); 
        const hamburgerThree = document.querySelector('.nav__hamburger--3');  

        nav.addEventListener('click', () => {
            menu.classList.toggle('active');
            nav.classList.toggle('nav-black');
            title.classList.toggle('white');
            hamburgerOne.classList.toggle('bg-white');
            hamburgerTwo.classList.toggle('bg-white');
            hamburgerThree.classList.toggle('bg-white');
        })
    });

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <>
            <Link href="/">
                <a>
                    <nav>
                        <div className="title">
                            <p>nd</p>
                        </div>
                        <div id="nav-hamburger">
                            <div className="nav__hamburger--1"></div>
                            <div className="nav__hamburger--2"></div>
                            <div className="nav__hamburger--3"></div>
                        </div>
                    </nav>
                </a>
            </Link>
            <div className="menu">
                <div className="menu__section">
                    <Link href="/" className="menu__info background-black" onClick={closeMenu}>
                        <a>
                            <h3 className="menu__title">Accueil</h3>
                        </a>
                    </Link>
                </div>
                <div className="menu__section">
                    <Link href="/services" className="menu__info background-black" onClick={closeMenu}>
                        <a>
                            <h3 className="menu__title">Services</h3>
                        </a>
                    </Link>
                </div>
                <div className="menu__section">
                    <Link href="/portfolio" className="menu__info background-black" onClick={closeMenu}>
                        <a>
                            <h3 className="menu__title">Portfolio</h3>
                        </a>
                    </Link>
                </div>
                <div className="menu__section">
                    <Link href="/apropos" className="menu__info background-black" onClick={closeMenu}>
                        <a>
                            <h3 className="menu__title">À propos</h3>
                        </a>
                    </Link>
                </div>
                <div className="menu__section">
                    <Link href="/contact" className="menu__info background-black" onClick={closeMenu}>
                        <a>
                            <h3 className="menu__title">Contact</h3>
                        </a>
                    </Link>
                </div>
                <div className="menu__section">
                    <div className="menu__info background-black">
                        {/* <a href="/" className="hamburger hamburger--closed">Contenttochange</a> */}
                        <p className="menu__menu">Menu</p>
                    </div>
                </div>
            </div>
        </>
    )
}