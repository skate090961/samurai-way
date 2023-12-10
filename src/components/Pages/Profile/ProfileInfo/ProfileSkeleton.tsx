import React from "react"
import ContentLoader from "react-content-loader"

const ProfileSkeleton = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={939}
      height={446}
      viewBox="0 0 939 446"
      backgroundColor="#dde1e9"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="125" y="203" rx="0" ry="0" width="0" height="1" />
      <rect x="2" y="1" rx="10" ry="10" width="939" height="155" />
      <rect x="293" y="174" rx="10" ry="10" width="646" height="266" />
      <rect x="2" y="174" rx="10" ry="10" width="277" height="266" />
    </ContentLoader>
  )
}

export default ProfileSkeleton
