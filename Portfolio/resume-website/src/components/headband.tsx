import { NavLink } from "react-router"

function Headband() {
    return (
        <nav>
            <h5>
                <NavLink to="/">
                    Home
                </NavLink>
            </h5>
            <h5>
                <NavLink to="test">
                    Test Page
                </NavLink>
            </h5>
            <h5>
                <NavLink to="nested">
                    Nested Page
                </NavLink>
            </h5>
            <h5>
                <NavLink to="stories">
                    Stories
                </NavLink>
            </h5>
            <h5>
                <NavLink to="projects">
                    Projects
                </NavLink>
            </h5>
        </nav>
    )
}

export default Headband