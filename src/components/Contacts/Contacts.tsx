import React from "react"
import { FieldErrors } from "react-hook-form"
import { useSelector } from "react-redux"
import styles from "./Contacts.module.css"
import { selectProfile } from "../../store/profile/profile-selectors"
import ContactItem from "./ContactItem/ContactItem"
import { UpdateProfileModelDataType } from "../../store/profile/profile-thunk"

type ProfileContactsType = {
  isOwner: boolean
  register?: any
  errors?: FieldErrors<UpdateProfileModelDataType>
}

export const Contacts: React.FC<ProfileContactsType> = ({ isOwner, register, errors }) => {
  const profile = useSelector(selectProfile)
  const contactsListRender =
    profile &&
    Object.entries(profile.contacts).map(([title, value]) => (
      <ContactItem value={value} title={title} key={title} isOwner={isOwner} register={register} errors={errors} />
    ))

  return (
    <ul className={styles.contacts}>
      <div className={styles.header}>Contacts:</div>
      {contactsListRender}
    </ul>
  )
}
