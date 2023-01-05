import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtworkDetails() {


    const [artwork, setArtwork] = useState(null);
    const [bid, setBid] = useState("");
    const { id } = useParams();

    // useEffect(() => {
    //     fetch(`http://localhost:9292/artworks/${id}`)
    //         .then((res) => res.json())
    //         .then(data => setArtwork(data[0]))
    // }, [id])

    useEffect(() => {
        fetch(`http://localhost:9292/artworks/${id}`)
            .then((res) => res.json())
            .then(data => {
                setBid(data[1])
                setArtwork(data[0])
            })
    }, [id])

    if (!artwork) return <h2> Loading... </h2>
    const { title, artist, year_created, category, estimated_value, sold_to, image_url } = artwork

    // if (!bid) return <h2> Loading... </h2>
    // const { bid_price } = bid


    function handleNewBid(e) {
        e.preventDefault();

        const newBid = {
            bid_price: bid,
            artwork_id: id
        };

        fetch(`http://localhost:9292/artworks/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBid),
        })
            .then((res) => res.json())
            .then((data) => setBid(data));

        setBid("");
        alert("Your bid has been submitted!");
    }

    return (
        <div>
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
            </div>
            <br></br>
            <div>
                { bid === null ? <h3> No Current Bids </h3> : <h3> Current Bid: {bid.bid_price} </h3>}
            </div>
            <div>
                <form onSubmit={handleNewBid}>
                            <input
                                className="input"
                                type="text"
                                value={bid}
                                onChange={(e) => setBid(e.target.value)}
                            ></input>
                            <button type= "submit" className="glow-on-hover">
                            Place Bid
                        </button>
                </form>
            </div>
        </div>

    );
}

export default ArtworkDetails;