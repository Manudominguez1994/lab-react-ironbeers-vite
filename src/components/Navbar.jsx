import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav style={{backgroundColor: "#3dc4fc", padding:20}}>
            <Link to="/">
                
                <img src="src/assets/home-icon.png"   alt="" />
            </Link>
        </nav>
    )
}

export default Navbar;
