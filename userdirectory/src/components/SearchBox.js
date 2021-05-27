import React, {useContext} from "react";
import "../styles/SearchBox.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchBox = () => {
    const context =useContext(DataAreaContext);


    return (
        <form className="SearchBox">
            <label htmlfor="Search">
                <input
                type="text"
                placeholder="Search Here.."
                onChange={(e) => {
                    context.handleSearchChange(e)}} />
            </label>
        </form>
    );
}

export default SearchBox;