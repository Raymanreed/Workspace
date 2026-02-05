import { NavLink, Outlet } from "react-router"
import HomeLink from "../components/homeLink"

function TestPage() {
    return (
        <>
            <div>
                <h3>Choose a page:</h3>
            </div>
            <nav>
                <h5>
                    <NavLink to="nested">
                        Nested Page
                    </NavLink>
                </h5>
                <h5>
                    <NavLink to="anotherNested">
                        Another Nested Page
                    </NavLink>
                </h5>
            </nav>
            <Outlet />
            <HomeLink />
        </>
    )
}

export default TestPage