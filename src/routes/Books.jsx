import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => {
        if (!response.ok) {
          throw Error('The books could not be loaded.')
        }
        return response.json()
      })
      .then(json => {
        setBooks(json)
        setLoading(false)
      })
      .catch(() => {
        setError('The books could not be loaded. Please try again later.')
        setLoading(false)
      })
  }, [])

  return (
    <>
      <h1>Books</h1>
      <p className="intro">Explore the world of Dr. Seuss. Choose a cover to read about the book.</p>
      {loading && <p>Loading books...</p>}
      {error && <p role="alert">{error}</p>}
      <ul className="book-list">
        {books.map(book => (
          <li className="book-card" key={book.id}>
            <Link to={'/books/' + book.id}>
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Books
