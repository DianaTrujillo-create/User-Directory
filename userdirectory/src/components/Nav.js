import React, {useContext} from "react";
import "../styles/SearchBox.css";

const SearchBox = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="SearchBox">
            <form className= "form-inline">
                <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
        </div>
    );
}

export default SearchBox;