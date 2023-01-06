import Artwork from "./Artwork";

function Artworks({ allArtwork, currentBuyer }) {
  const artworkArray = allArtwork.map((artwork) => (
    <Artwork key={artwork.id} artwork={artwork} currentBuyer={currentBuyer} />
  ));

  return (
    <div>
      <div className="artworkContainer">{artworkArray}</div>
    </div>
  );
}

export default Artworks;
