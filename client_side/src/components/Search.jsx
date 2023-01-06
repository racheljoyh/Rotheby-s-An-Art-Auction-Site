import React from "react";

function Search({searchQuery, setSearchQuery, filterBy, setFilterBy}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleFilterChange(event) {
        setFilterBy(event.target.value)
    }

    return (
        <div className="find-container">
            <div className="search-container">
                <div>
                    <strong> Search for Artwork by Title or Artist : </strong>
                            <input
                                id="searchbar"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Artwork or Artist Name..."
                            />
                </div>
            </div>
            <div className="filter-container">
                <label>
                    <strong> Filter by Category : </strong>
                    <select onChange={handleFilterChange} value={filterBy} id="filterbar">
                    <option>All</option>
                        <option value="American">American</option>
                        <option value="Asian">Asian</option>
                        <option value="Egyptian">Egyptian</option>
                        <option value="European Paintings">European Paintings</option>
                    </select>
                </label>
            </div>
        </div>
    );
}

export default Search;