import { useEffect, useState } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => {
        if (!response.ok) {
          throw Error('The quotes could not be loaded.')
        }
        return response.json()
      })
      .then(json => {
        setQuotes(json)
        setLoading(false)
      })
      .catch(() => {
        setError('The quotes could not be loaded. Please try again later.')
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1>Quotes</h1>
      <p className="intro">Ten random quotes from Dr. Seuss, with a new selection each time you visit.</p>
      {loading && <p>Loading quotes...</p>}
      {error && <p role="alert">{error}</p>}
      <ol className="quote-list">
        {quotes.map(quote => (
          <li key={quote.id}>
            <blockquote>
              <p>{quote.text}</p>
              <cite>{quote.book ? quote.book.title : 'Dr. Seuss'}</cite>
            </blockquote>
          </li>
        ))}
      </ol>
    </>
  )
}

export default Quotes
