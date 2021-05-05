import React from 'react';

const Search = ({ value, onChange }) => {

    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input type="search" value={value} onChange={handleChange} placeholder="Buscar" />
    )

}

export default Search;