
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtworkDetails({ currentBuyer }) {
  const [artwork, setArtwork] = useState(null);
  const [bid, setBid] = useState("");
  const [newBid, setNewBid] = useState("");
  const { id } = useParams();
  const [isSold, setIsSold] = useState(false);
  let [winningBuyer, setWinningBuyer] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/artworks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBid(data[1]);
        setArtwork(data[0]);
      });
  }, [id]);

  if (!artwork) return <h2> Loading... </h2>;
  const {
    title,
    artist,
    year_created,
    category,
    estimated_value,
    image_url,
    sold,
  } = artwork;

  let number = estimated_value.toLocaleString();

  function handleNewBid(e) {
    e.preventDefault();
    // functions to optimistically render page?

    const replaceBid = {
      bid_price: newBid,
      artwork_id: id,
      buyer_id: currentBuyer.id,
    };

    fetch(`http://localhost:9292/artworks/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(replaceBid),
    })
      .then((res) => res.json())
      .then((data) => setBid(data));

    if (newBid > bid.bid_price) {
      alert("Your bid has been submitted!");
    } else if (newBid <= bid.bid_price) {
      alert("Your bid must be higher than current bid amount!");
    }

    fetch(`http://localhost:9292/artworks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sold: true,
      }),
    })
      .then((res) => res.json())
      .then(setIsSold);
  }

  function handleSetNewBid(e) {
    setNewBid(e.target.value);
  }

  return (
    <div className="artworkSingleContainer">
      <div className="title-img-container">
        <img className="artwork_img" src={image_url} />
      </div>
      <div className="details-bidform-container">
        <h4 className="artworkArtist">{artist}</h4>
        <h2 className="artworkName">{title}</h2>
        <h4 className="artwortYearCreated">{year_created}</h4>
        <h4 className="artworkCategory">Category: {category}</h4>
        <h4 className="artworkEstimatedValue">Estimate: ${number} USD</h4>
        {/* {sold === true ? (
          <h4> {currentBuyer.first_name} has won this artwork </h4>
        ) : null} */}
        <br></br>
        <div className="artworkBid">
          {sold === true ? (
            <h3> Winning Bid: ${bid.bid_price} </h3>
          ) : (
            <h3> Current Bid: ${bid.bid_price} </h3>
          )}
        </div>
        <div className="bidForm">
          {sold === false ? (
            <form onSubmit={handleNewBid}>
              <input
                className="bidInput"
                type="number"
                value={newBid}
                onChange={handleSetNewBid}
              ></input>
              <button type="submit" className="bid-btn">
                Place Bid
              </button>
            </form>
          ) : (
            "SOLD"
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtworkDetails;
