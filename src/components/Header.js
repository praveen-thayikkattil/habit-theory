import {useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleOnClick = () => {
        setNavOpen(!navOpen);
        console.log(navOpen);
    }

    return (
        <>
            <nav className="main-nav">
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#who-we-are">who we are</a>
                    </li>

                    <li className="menu-item">
                        <a href="#our-services">our services</a>
                    </li>

                    <li className="menu-item">
                        <a href="#founders">founders</a>
                    </li>

                    <li className="menu-item">
                        <a href="#what-we-live-by">what-we-live-by</a>
                    </li>

                    <li className="menu-item">
                        <a href="#why-choose-us">why choose us</a>
                    </li>
                </ul>
            </nav>
            <header className="app-header">
                <h1 className="app-logo" title="Habit Theory">Habit Theory</h1>

                <button className="nav-open" onClick={handleOnClick}>
                    <FaBars />
                </button>
            </header>
        </>
    )
}

export default Header
