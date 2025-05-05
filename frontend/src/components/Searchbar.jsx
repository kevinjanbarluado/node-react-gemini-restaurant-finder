import React from 'react'
import search from '../assets/search.svg'

const Searchbar = ({ query, setQuery, handleSearch }) => {
    return (
        <div className="relative w-full">
            <textarea
                placeholder="Type your query..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows={3}
                className="w-full pr-12 px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
            />
            <button
                onClick={handleSearch}
                disabled={!query.trim()}
                className={`absolute bottom-3 right-3 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer transition duration-200 ease-in-out ${!query.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-sky-600 hover:bg-sky-700 text-white'
                    }`}
            >
                <img src={search} alt="search" className="w-5 h-5" />
            </button>
        </div>
    )
}

export default Searchbar
