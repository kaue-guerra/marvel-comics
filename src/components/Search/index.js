import React from 'react';
import './index.css'

const Search = ({ value, onChange }) => {

    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input className="search-comic" type="search" value={value} onChange={handleChange} placeholder="Buscar" />
    )

}

export default Search;