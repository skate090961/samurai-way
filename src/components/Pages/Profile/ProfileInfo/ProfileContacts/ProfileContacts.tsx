import React from "react"
import s from "./ProfileContacts.module.css"
import { useSelector } from "react-redux"
import { selectProfile } from "../../../../../store/profile/profile-selectors"
import ContactItem from "./ContactItem/ContactItem"

const ProfileContacts = ({ isOwner }: { isOwner: boolean }) => {
  const profile = useSelector(selectProfile)
  const contactsListRender =
    profile &&
    Object.entries(profile.contacts).map(([title, value]) => (
      <ContactItem value={value} title={title} key={title} isOwner={isOwner} />
    ))

  return (
    <ul className={s.contacts}>
      <div className={s.header}>Contacts:</div>
      {contactsListRender}
    </ul>
  )
}

export default ProfileContacts
