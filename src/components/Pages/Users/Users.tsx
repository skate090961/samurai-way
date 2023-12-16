import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { setCurrentPageAC, setUsersAC } from "../../../store/users/users-reducer"
import User from "./User/User"
import Pagination from "../../Pagination/Pagination"
import { useAppDispatch } from "../../../store/store"
import {
  selectTotalUsersCount,
  selectUsersCurrentPage,
  selectUsersLoading,
  selectUsersPageSize,
} from "../../../store/users/users-selectors"
import { useFetchUsers } from "./useFetchUsers"
import { UsersSkeleton } from "./UsersSkeleton"
import { Grid } from "@mui/material"

const Users = () => {
  const dispatch = useAppDispatch()
  const pageSize = useSelector(selectUsersPageSize)
  const currentPage = useSelector(selectUsersCurrentPage)
  const { users, isShowPagination } = useFetchUsers(currentPage)
  const totalUsersCount = useSelector(selectTotalUsersCount)
  const isLoading = useSelector(selectUsersLoading)

  useEffect(() => {
    return () => {
      dispatch(setUsersAC([]))
    }
  }, [])

  const setCurrentPage = (currentPage: number) => dispatch(setCurrentPageAC(currentPage))
  const usersList = users.map((u) => <User key={u.id} user={u} />)
  const totalPagesCount = Math.ceil(totalUsersCount / pageSize)
  const isShowSkeleton = isLoading ? <UsersSkeleton pageSize={pageSize} /> : usersList

  return (
    <div>
      <ul>
        <Grid container spacing={2}>
          {isShowSkeleton}
        </Grid>
      </ul>
      {isShowPagination ? (
        <Pagination
          totalPagesCount={totalPagesCount}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          isLoading={isLoading}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default Users
