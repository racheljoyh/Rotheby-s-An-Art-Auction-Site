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
            {" "}
            <span className="sold-label">SOLD TO : </span>{" "}
            {currentBuyer.first_name}{" "}
          </div>
        )}
        <h4 className="artwortYearCreated">Year Created: {year_created}</h4>
        <h4 className="artworkCategory">Category: {category}</h4>
        <h4 className="artworkEstimatedValue">
          Estimated Value: ${estimated_value}
        </h4>
      </div>
    </div>
  );
}

export default Artwork;
