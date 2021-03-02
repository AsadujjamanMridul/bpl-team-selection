import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {

    return (
        <header className='bg-light bg-gradient'>
            <div className="c-container">
                <nav className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={logo} alt="" />
                        <h3 className='header-title mx-5'>BPL Team Selection</h3>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Players</a></li>
                        <li><a href="#">Cart</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;