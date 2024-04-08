// FilterButtons.tsx
import React, { useState } from 'react';

interface FilterButtonsProps {
    filters: string[];
    handleFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filters, handleFilter }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('');

    const handleClick = (filter: string) => {
        handleFilter(filter);
        setSelectedFilter(filter);
    };

    return (
        <div className="filter-container">
            {filters.map((filter, index) => (
                <button
                    key={index}
                    className={`filter-button ${filter === selectedFilter ? 'active' : ''}`}
                    onClick={() => handleClick(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
