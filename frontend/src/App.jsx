import { useState } from 'react'
// Functions
import { convertToJson, fetchRestaurants } from './api/restaurantService'
// Components
import Spinner from './components/Spinner'
import Searchbar from './components/Searchbar'
import ResultCard from './components/ResultCard'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    setResults([])
    // const message = `Find me a cheap sushi restaurant in downtown Los Angeles that's open now and has at least a 4-star rating.`
    try {
      const data = await convertToJson(query)
      const { results } = await fetchRestaurants(data?.parameters)
      setResults(results)
    } catch (error) {
      console.error('Error fetching restaurants:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wider">Restaurant Finder</h1>

        {/* Search Form */}
        <div className="mb-8">
          <Searchbar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        </div>


        {/* Loading indicator */}
        {loading && <Spinner />}

        {/* Results Section */}
        <div>
          {results.length === 0 && !loading ? (
            <p className="text-gray-500 text-center">No results yet</p>
          ) : (
            <div className="space-y-6">
              {results.map((r, i) => <ResultCard key={i} result={r} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
