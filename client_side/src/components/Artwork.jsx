import {useState, useEffect} from "react";
import { NavLink, useHistory } from "react-router-dom"

function Artwork({artwork}) {

    const { id, title, artist, year_created, category, estimated_value, sold_to, image_url } = artwork

    const history = useHistory()

    function handleRedirect(){
        // redirect to /artworks/:id
        history.push(`/artworks/${id}`)
    }

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img className="artwork_img" src={image_url}/>
            </div>
            <h4>Artist: {artist}</h4>
            <h4>Year Created: {year_created}</h4>
            <h4>Category: {category}</h4>
            <h4>Estimated Value: ${estimated_value}</h4>
            <h4>{sold_to}</h4>
            <button onClick={handleRedirect}>
                Bid on this Artwork
            </button>
        </div>
    );
}

export default Artwork;