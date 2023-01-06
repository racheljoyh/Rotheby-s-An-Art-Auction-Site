import Artwork from "./Artwork";
import Search from "./Search";

function Artworks({ allArtwork, currentBuyer, searchQuery, setSearchQuery, filterBy, setFilterBy }) {
  console.log(allArtwork);

  const artworkArray = allArtwork.map((artwork) => (
    <Artwork
      key={artwork.id}
      artwork={artwork}
      currentBuyer={currentBuyer}
    />
  ));

  return (
    <div>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        // sortBy={sortBy}
        // setSortBy={setSortBy}
      />
      <div className="artworkContainer">{artworkArray}</div>
    </div>
  );
}

export default Artworks;
