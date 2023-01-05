import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtworkDetails({currentBuyer}) {

    const [artwork, setArtwork] = useState(null);
    const [bid, setBid] = useState("");
    const [newBid, setNewBid] = useState("")
    const { id } = useParams();
    const [isSold, setIsSold] = useState(false)

    console.log(bid)

    useEffect(() => {
        fetch(`http://localhost:9292/artworks/${id}`)
            .then((res) => res.json())
            .then(data => {
                setBid(data[1])
                setArtwork(data[0])
            })
    }, [id])

    if (!artwork) return <h2> Loading... </h2>
    const { title, artist, year_created, category, estimated_value, image_url, sold } = artwork


    function handleNewBid(e) {
        e.preventDefault();

        const replaceBid = {
            bid_price: newBid,
            artwork_id: id,
            buyer_id: currentBuyer.id
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

        setBid("");
        alert("Your bid has been submitted!");

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

    // function handleSoldTo(e) {
    //     e.preventDefault();

    //     fetch(`http://localhost:9292/artworks/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             sold: isSold,
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then(setIsSold);

    //     alert("Congrats! This name has been updated!")
    // }

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
                {sold === true ? <h4> {currentBuyer.first_name} has won this artwork </h4> : null}
            </div>
            <br></br>
            <div>
                { sold === true ? <h3> Winning Bid: ${bid.bid_price} </h3> : <h3> Current Bid: ${bid.bid_price} </h3>}
            </div>
            <div>
                { sold === false ? (
                <form onSubmit={handleNewBid}>
                            <input
                                className="input"
                                type="text"
                                value={newBid}
                                onChange={(e) => setNewBid(e.target.value)}
                            ></input>
                            <button type= "submit" className="glow-on-hover">
                            Place Bid
                        </button>
                </form> ): ( "SOLD"
                )}
            </div>
        </div>

    );
}

export default ArtworkDetails;