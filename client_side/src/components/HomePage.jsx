import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Artworks from "./Artworks";
import BuyerProfile from "./BuyerProfile";

function HomePage({
  onLoginClick,
  setCurrentBuyer,
  isLoggedIn,
  currentBuyer,
  onChangeBuyers,
  allBuyers,
  setAllBuyers,
}) {
  const [buyerName, setBuyername] = useState("");
  // const [allBuyers, setAllBuyers] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // POSTing new buyer profile
  function createBuyer(e) {
    e.preventDefault();

    const newBuyer = {
      first_name: buyerName,
    };

    fetch("http://localhost:9292/buyers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBuyer),
    })
      .then((res) => res.json())
      .then((data) => setCurrentBuyer(data));

    setBuyername("");
    alert("New buyer has been created!");
  }

  // // GETing buyer profiles
  //     useEffect(() => {
  //         fetch("http://localhost:9292/buyers")
  //         .then((res) => res.json())
  //         .then(setAllBuyers);
  //     }, []);

  // // finding current buyer
  //     function handleChangeBuyers(e){
  //         // let fullName = `${buyer.first_name} + ${buyer.last_name}`
  //         let foundBuyer = allBuyers.find((buyer) => buyer.first_name === e.target.value);
  //         setCurrentBuyer(foundBuyer);
  //     }

  return (
    <div>
      <div>
        <div className="about">
          <h1>
            Welcome to <span className="title">Rotheby's</span>
          </h1>
        </div>
        <div className="returningBuyer">
          <h3> Returning Buyer? </h3>
          <h4> Find your Name </h4>
          <div className="selectName">
            <select onChange={(e) => onChangeBuyers(e)}>
              <option></option>
              {allBuyers.map((buyer) => (
                <option key={buyer.id}>{buyer.first_name}</option>
              ))}
            </select>
            <div className="selectArrow"></div>
          </div>
        </div>
        <div className="newBuyer">
          <h3> New Buyer? </h3>
          <h4> Enter Your Name </h4>
          <form onSubmit={(e) => createBuyer(e)}>
            <input
              value={buyerName}
              onChange={(e) => setBuyername(e.target.value)}
              type="text"
              placeholder="Enter your name..."
            ></input>
            <br></br>
            <button
              className="submitNewNameBtn"
              type="sumbit"
              // onClick={handleLoginClick}
            >
              Create Buyer
            </button>
          </form>
          <br></br>
          <br></br>
        </div>
        <div className="Submit Profile">
          {isLoggedIn ? (
            <button className="glow-on-hover" onClick={onLoginClick}>
              Logout
            </button>
          ) : (
            <button className="glow-on-hover" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
