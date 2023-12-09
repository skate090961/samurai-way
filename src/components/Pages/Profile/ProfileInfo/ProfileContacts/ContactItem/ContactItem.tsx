import React from 'react';
import s from './ContactItem.module.css'
import shortenLink from "../../../../../../utils/link/shortenLink";

type ContactItemPropsType = {
    title: string
    value: string
}

const ContactItem: React.FC<ContactItemPropsType> = ({title, value}) => {
    return (
        <li>
            <span className={s.header}>{title}: </span>
            <a href={value} className={s.contact_link}>{value ? shortenLink(value) :
                <span className={s.empty}>empty</span>}</a>
        </li>
    );
};

export default ContactItem;