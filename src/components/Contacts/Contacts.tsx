import React from "react"
import { useSelector } from "react-redux"
import styles from "./Contacts.module.css"
import { selectProfile } from "../../store/profile/profile-selectors"
import ContactItem from "./ContactItem/ContactItem"

export const Contacts = () => {
  const profile = useSelector(selectProfile)
  const contactsListRender =
    profile &&
    Object.entries(profile.contacts).map(([title, value]) => <ContactItem value={value} title={title} key={title} />)

  return (
    <ul className={styles.contacts}>
      <div className={styles.header}>Contacts:</div>
      {contactsListRender}
    </ul>
  )
}
