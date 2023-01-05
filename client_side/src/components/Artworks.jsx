import Artwork from "./Artwork";
import { Route, Switch } from "react-router-dom"

function Artworks({ allArtwork, currentBuyer }) {

    console.log(allArtwork)

    const artworkArray = allArtwork.map((artwork) => (
                <Artwork
                    key={artwork.id}
                    artwork={artwork}
                    currentBuyer={currentBuyer}
                />
    ))

return (
    <div className="allArtwork">
        <div className="artworkContainer">{artworkArray}</div>
    </div>
)}

export default Artworks;