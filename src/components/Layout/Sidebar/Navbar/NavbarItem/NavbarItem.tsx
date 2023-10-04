import React from 'react';
import s from "./NavbarItem.module.css";
import {NavLink} from "react-router-dom";

type IsActiveType = {
    [key: string]: boolean
}

type MenuItemPropsType = {
    pathTo: string
    src: string
    title: string
}

const NavbarItem: React.FC<MenuItemPropsType> = ({
                                                   pathTo,
                                                   src,
                                                   title
                                               }) => {
    const setActive = ({isActive}: IsActiveType) => isActive ? `${s.menuItem__link} ${s.menuItem__link_active}` : s.menuItem__link

    return (
        <li className={s.menuItem__item}>
            <NavLink className={setActive} to={pathTo}>
                <img className={s.menuItem__icon} src={src}
                     alt={title}/>
                <span className={s.menuItem__text}>{title}</span>
            </NavLink>
        </li>
    );
};

export default NavbarItem;