import React from 'react';
import s from './Menu.module.css'
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {
    return (
        <nav className={s.menu}>
            <ul className={s.menu__list}>
                <MenuItem pathTo={'/profile'} src={'https://www.svgrepo.com/show/522440/profile.svg'} title={'Profile'} />
                <MenuItem pathTo={'/dialogs'} src={'https://www.svgrepo.com/show/522369/chat.svg'} title={'Messages'} />
                <MenuItem pathTo={'/news'} src={'https://www.svgrepo.com/show/522410/globe.svg'} title={'News'} />
                <MenuItem pathTo={'/music'} src={'https://www.svgrepo.com/show/522428/music.svg'} title={'Music'} />
                <MenuItem pathTo={'/settings'} src={'https://www.svgrepo.com/show/522451/settings-cog.svg'} title={'Settings'} />
            </ul>
            <div className={s.horizontal_line}></div>
        </nav>
    );
};

export default Menu;