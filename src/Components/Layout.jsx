import Navbar  from "./Navbar"
import { Outlet } from "react-router-dom"
import './Style Sheets/navbar.css'

function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default Layout