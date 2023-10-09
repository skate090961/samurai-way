import React from 'react';
import s from './Navbar.module.css'
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = () => {
    return (
        <nav className={s.menu}>
            <ul className={s.menu__list}>
                <NavbarItem pathTo={'profile'} src={'https://www.svgrepo.com/show/522440/profile.svg'} title={'Profile'} />
                <NavbarItem pathTo={'dialogs'} src={'https://www.svgrepo.com/show/522369/chat.svg'} title={'Messages'} />
                <NavbarItem pathTo={'news'} src={'https://www.svgrepo.com/show/522410/globe.svg'} title={'News'} />
                <NavbarItem pathTo={'music'} src={'https://www.svgrepo.com/show/522428/music.svg'} title={'Music'} />
                <NavbarItem pathTo={'settings'} src={'https://www.svgrepo.com/show/522451/settings-cog.svg'} title={'Settings'} />
                <NavbarItem pathTo={'users'} src={'https://www.svgrepo.com/show/522443/search.svg'} title={'Find Users'} />
            </ul>
            <div className={s.horizontal_line}></div>
        </nav>
    );
};

export default Navbar;