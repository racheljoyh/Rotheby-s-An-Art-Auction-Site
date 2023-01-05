import { NavLink } from "react-router-dom"

function NavBar({ isLoggedIn, currentBuyer}) {

    const{first_name } = currentBuyer

    // console.log(currentBuyer)

    return (
        <div className="navBar">
            <h3 className="navTitle"> Rotheby's | An Auction House </h3>
        {isLoggedIn ? (
        <nav>
            <NavLink exact to ="/">
                Home
            </NavLink>
            <NavLink exact to ="/Artworks">
                Artworks
            </NavLink>
            <NavLink exact to ="/myProfile">
                My Profile
            </NavLink>
            <h1> Hello, {first_name}! </h1>
        </nav>
        ) : (
        <nav className="navBar">
            <NavLink exact to ="/">
                Home
            </NavLink>
        </nav>
        )}
        </div>
    );
}

export default NavBar;