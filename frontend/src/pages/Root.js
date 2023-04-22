import { Fragment } from "react"
import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
    // const navigate = useNavigation()
    
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {/* {navigate.state === "loading" && <p>Loading...</p>} */}
            <Outlet />
            </main>
        </Fragment>
    )
}

export default RootLayout