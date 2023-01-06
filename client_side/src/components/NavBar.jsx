import { NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, currentBuyer }) {
  const { first_name } = currentBuyer;

  // console.log(currentBuyer)

  return (
    <div className="navBar">
      <h3>
        <span className="navFancy">Rotheby's</span> | An Auction House
      </h3>
      {isLoggedIn ? (
        <div className="navLinks-name">
          <nav>
            <div className="linksContainer">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/Artworks">
                Artworks
              </NavLink>
              <NavLink exact to="/myProfile">
                My Profile
              </NavLink>
            </div>
          </nav>
          <h1 className="greeting"> Hello, {first_name}! </h1>
        </div>
      ) : (
        <nav className="linksContainer">
          <NavLink exact to="/">
            Log In
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default NavBar;
