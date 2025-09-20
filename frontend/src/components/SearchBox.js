// src/components/SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="input-group">
                <span className="input-group-text">
                    <i className="fas fa-search"></i>
                </span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by ID or Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                    Search
                </button>
                {searchTerm && (
                    <button 
                        className="btn btn-secondary" 
                        type="button"
                        onClick={handleClear}
                    >
                        Clear
                    </button>
                )}
            </div>
        </form>
    );
};

export default SearchBox;