import { NavLink } from "react-router"

function TestPage() {
    return (
        <>
            <div>
                <h1>HELLO WORLD</h1>
            </div>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
            </nav>
        </>
    )
}

export default TestPage