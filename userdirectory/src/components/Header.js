import React from 'react';
import "../styles/Header.css";

const Header = () => {
    return (
        <div className = "container"> 
        <h1>Employee Directory</h1>
        <h4>Click on header filter or use the search box to narrow your results</h4>
        </div>
    );
}

export default Header;