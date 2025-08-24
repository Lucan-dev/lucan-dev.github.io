import NavLinks  from "./Navlinks"
import { Outlet } from "react-router-dom"

function NavBar() {
    return (
        <>
            <NavLinks/>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default NavBar