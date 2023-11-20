import React from "react"
import ContentLoader from "react-content-loader"

const UserSkeleton = (props: any) => (
    <ContentLoader
        speed={2}
        width={280}
        height={405}
        viewBox="0 0 280 405"
        backgroundColor="#dde1e9"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="125" y="203" rx="0" ry="0" width="0" height="1"/>
        <rect x="0" y="0" rx="10" ry="10" width="280" height="405"/>
    </ContentLoader>
)

export default UserSkeleton