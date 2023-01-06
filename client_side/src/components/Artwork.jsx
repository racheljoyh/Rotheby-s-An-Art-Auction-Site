import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Artwork({ artwork, currentBuyer }) {
  const {
    id,
    title,
    artist,
    year_created,
    category,
    estimated_value,
    sold,
    image_url,
  } = artwork;

  const history = useHistory();

  function handleRedirect() {
    // redirect to /artworks/:id
    history.push(`/artworks/${id}`);
  }

  let num = estimated_value.toLocaleString()

  return (
    <div className="artworkCard">
      <h2 className="artworkName">{title}</h2>
      <img className="artwork_img" src={image_url} />

      <div className="artworkInfo">
        <h4 className="artworkArtist">{artist}</h4>
        {sold === false ? (
          <button className="bidButton" onClick={handleRedirect}>
            Place Bid
          </button>
        ) : (
          <div classname="sold">
          <button className="bidButton" onClick={handleRedirect}>
            SOLD
          </button>
            {/* <span className="sold-label">SOLD </span> */}
            {/* {artwork.sold_to} */}
          </div>
        )}
        <h4 className="artwortYearCreated">{year_created}</h4>
        <h4 className="artworkCategory">Category: {category}</h4>
        <h4 className="artworkEstimatedValue">
          Estimate: ${num}
        </h4>
      </div>
    </div>
  );
}

export default Artwork;
