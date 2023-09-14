import React from 'react';
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <nav className={s.menu}>
                <ul className={s.menu__list}>
                    <li className={s.menu__item}>
                        <NavLink className={s.menu__link} to="/profile">
                            <img className={s.menu__icon} src="https://www.svgrepo.com/show/522440/profile.svg"
                                 alt="Profile"/>
                            <span className={s.menu__text}>Profile</span>
                        </NavLink>
                    </li>
                    <li className={s.menu__item}>
                        <NavLink className={s.menu__link} to="/dialogs">
                            <img className={s.menu__icon} src="https://www.svgrepo.com/show/522369/chat.svg"
                                 alt="Messages"/>
                            <span className={s.menu__text}>Messages</span>
                        </NavLink>
                    </li>
                    <li className={s.menu__item}>
                        <NavLink className={s.menu__link} to="/news">
                            <img className={s.menu__icon} src="https://www.svgrepo.com/show/522410/globe.svg"
                                 alt="News"/>
                            <span className={s.menu__text}>News</span>
                        </NavLink>
                    </li>
                    <li className={s.menu__item}>
                        <NavLink className={s.menu__link} to="/music">
                            <img className={s.menu__icon} src="https://www.svgrepo.com/show/522428/music.svg"
                                 alt="Music"/>
                            <span className={s.menu__text}>Music</span>
                        </NavLink>
                    </li>
                    <li className={s.menu__item}>
                        <NavLink className={s.menu__link} to="/settings">
                            <img className={s.menu__icon} src="https://www.svgrepo.com/show/522451/settings-cog.svg"
                                 alt="Settings"/>
                            <span className={s.menu__text}>Settings</span>
                        </NavLink>
                    </li>
                </ul>
                <div className={s.horizontal_line}></div>
            </nav>
        </div>
    );
};

export default Sidebar;