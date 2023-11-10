import React from "react"
import ContentLoader from "react-content-loader"

const UserSkeleton = (props: any) => (
    <ContentLoader
        speed={2}
        width={291}
        height={415}
        viewBox="0 0 291 415"
        backgroundColor="#d4d4d4"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="8" y="439" rx="10" ry="10" width="90" height="27" />
        <rect x="157" y="446" rx="0" ry="0" width="0" height="1" />
        <rect x="164" y="431" rx="27" ry="27" width="150" height="45" />
        <rect x="20" y="18" rx="0" ry="0" width="250" height="247" />
        <rect x="20" y="278" rx="0" ry="0" width="250" height="21" />
        <rect x="23" y="312" rx="0" ry="0" width="250" height="21" />
        <rect x="88" y="350" rx="13" ry="13" width="112" height="43" />
    </ContentLoader>
)

export default UserSkeleton