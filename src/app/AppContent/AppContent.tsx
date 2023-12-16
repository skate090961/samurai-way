import React from "react"
import Pages from "../../components/Pages/Pages"
import { GlobalError } from "../GlobalError/GlobalError"
import { Layout } from "../../components/Layout/Layout"

export const AppContent = () => {
  return (
    <>
      <Layout>
        <Pages />
      </Layout>
      <GlobalError />
    </>
  )
}
