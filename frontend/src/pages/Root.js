import { Fragment, useEffect } from "react"
import MainNavigation from "../components/MainNavigation"
import { Outlet, useLoaderData, useSubmit } from "react-router-dom"
import { getTokenDuration } from "../util/auth"


const RootLayout = () => {
    // const navigate = useNavigation()
    const submit = useSubmit()
    const token = useLoaderData()
    useEffect( () => {
        if (!token) {
            return
        }
        if (token === "EXPIRED") {
            submit(null, {action: "/logout", method: "post"});
            return
        }
        const tokenDuration = getTokenDuration()
        console.log(tokenDuration)
        
        setTimeout( () => {
            submit(null, {action: "/logout", method: "post"})
        }, tokenDuration)
    },[token, submit])
    
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