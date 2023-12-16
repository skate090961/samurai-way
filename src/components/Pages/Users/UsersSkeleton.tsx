import React from "react"
import ContentLoader from "react-content-loader"
import { Grid } from "@mui/material"

const UserSkeleton = (props: any) => (
  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
    <ContentLoader
      speed={2}
      width={222}
      height={323}
      viewBox="0 0 280 388"
      backgroundColor="#dde1e9"
      foregroundColor="#ffffff"
      {...props}
    >
      <rect x="125" y="203" rx="0" ry="0" width="0" height="1" />
      <rect x="0" y="0" rx="10" ry="10" width="280" height="388" />
    </ContentLoader>
  </Grid>
)

export const UsersSkeleton = ({ pageSize }: { pageSize: number }) => {
  const usersSkeletonRenderList = Array.from({ length: pageSize }, (_, index) => <UserSkeleton key={index} />)

  return <>{usersSkeletonRenderList}</>
}
