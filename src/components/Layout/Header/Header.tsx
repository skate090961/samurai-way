import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/6/2/f/62f64963b3b8eda573996bdfb646729e818ef77b.png"
                alt="header-logo"
                className={s.header__logo}
            />
        </header>
    );
};

export default Header;