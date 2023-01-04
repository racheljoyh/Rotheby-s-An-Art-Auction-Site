import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom"


function Artwork({artwork}) {

    const { id, title, artist, year_created, category, estimated_value, sold_to, image_url } = artwork

    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img className="artwork_img" src={image_url}/>
            </div>
            <h4>{artist}</h4>
            <h4>{year_created}</h4>
            <h4>{category}</h4>
            <h4>${estimated_value}</h4>
            <h4>{sold_to}</h4>
            <button onClick={handleArtworkRoute}>
                Click Here to bid on this artwork
            </button>
        </div>
    );
}

export default Artwork;