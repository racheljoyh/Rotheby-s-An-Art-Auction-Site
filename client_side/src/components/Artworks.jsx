import Artwork from "./Artwork";
import { Route, Switch } from "react-router-dom"

function Artworks({ allArtwork }) {

    console.log(allArtwork)

    const artworkArray = allArtwork.map((artwork) => (

                <Artwork
                    key={artwork.id}
                    artwork={artwork}
                />

    ))

return (
    <div>
        <ul>{artworkArray}</ul>
    </div>
)}

export default Artworks;