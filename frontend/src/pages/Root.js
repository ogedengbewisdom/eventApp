import { Fragment } from "react"
import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout