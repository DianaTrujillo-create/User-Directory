import React from "react";
import SearchBox from "../components/SearchBox";
import "../styles/SearchBox.css";


const Nav = () => {
    return (
        <nav className="navbar navbar-exand-lg navbar-light bg-white">
            <div className="search-box">
                <SearchBox />
            </div>
        </nav>
    );
}

export default Nav;