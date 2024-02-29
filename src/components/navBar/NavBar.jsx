import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (

        <nav className="navBar">
            <Link to="/">Home</Link>

            <Link to="/Bourbons">All Bourbons</Link>

            <Link to="/NewBourbon">Add a New Bourbon</Link>
        </nav>
    )
}

export default NavBar;