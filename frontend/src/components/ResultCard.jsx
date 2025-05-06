const ResultCard = ({ result }) => {
    return (
        <div className="p-6 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800">{result?.name}</h2>
            <p className="text-sm text-gray-500">{result?.address}</p>
            <p className="text-sm text-gray-600">Cuisine: <span className="font-medium">{result?.cuisine}</span></p>
            {result?.contact && <p className="text-sm text-gray-600">Contact: <span className="font-medium">{result?.contact}</span></p>}
            <p className="text-sm text-gray-600">Rating: <span className="font-medium">{result?.rating} ⭐</span></p>
            {result?.hours && (
                <div className="text-sm text-gray-600">
                    <p className="font-medium">Hours:</p>
                    {Array.isArray(result.hours) ? (
                        <ul className="ml-4 list-disc">
                            {result.hours.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : typeof result.hours === 'object' ? (
                        <ul className="ml-4 list-disc">
                            {Object.entries(result.hours).map(([day, hrs]) => (
                                <li key={day}>
                                    <span className="font-medium">{day}:</span> {hrs}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{result.hours}</p>
                    )}
                </div>
            )}
            {result?.notes && <p className="text-sm text-gray-600">Notes: <span className="font-medium">{result?.notes}</span></p>}
        </div>
    )
}

export default ResultCard
