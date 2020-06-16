import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => {
    return(
        <header data-automation-id="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-automation-id="logoIMG" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;
