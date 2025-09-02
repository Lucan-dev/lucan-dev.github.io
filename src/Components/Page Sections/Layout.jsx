import Navbar  from "../Small Components/Navbar"
import Footer from "../Page Sections/Footer"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default Layout