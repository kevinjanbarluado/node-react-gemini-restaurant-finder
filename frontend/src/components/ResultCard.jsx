const ResultCard = ({ result }) => {
    return (
        <div className="p-6 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800">{result?.name}</h2>
            <p className="text-sm text-gray-500">{result?.address}</p>
            <p className="text-sm text-gray-600">Cuisine: <span className="font-medium">{result?.cuisine}</span></p>
            {result?.contact && <p className="text-sm text-gray-600">Contact: <span className="font-medium">{result?.contact}</span></p>}
            <p className="text-sm text-gray-600">Rating: <span className="font-medium">{result?.rating} ⭐</span></p>
            <p className="text-sm text-gray-600">Hours: <span className="font-medium">{result?.hours}</span></p>
            {result?.notes && <p className="text-sm text-gray-600">Notes: <span className="font-medium">{result?.notes}</span></p>}
        </div>
    )
}

export default ResultCard
