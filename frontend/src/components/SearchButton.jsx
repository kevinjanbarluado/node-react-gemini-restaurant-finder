const SearchButton = ({ handleSearch }) => {
    return (
        <button
            onClick={handleSearch}
            className="bg-sky-600 text-white px-6 py-2 rounded-md ml-4 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
            Search
        </button>
    )
}

export default SearchButton
