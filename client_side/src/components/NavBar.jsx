import { NavLink } from "react-router-dom"

function NavBar({ isLoggedIn, currentBuyer}) {

    const{first_name } = currentBuyer

    // console.log(currentBuyer)

    return (
        <div>
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
        <nav>
            <NavLink exact to ="/">
                Home
            </NavLink>
        </nav>
        )}
        </div>
    );
}

export default NavBar;