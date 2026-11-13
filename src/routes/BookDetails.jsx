import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookDetails() {
  const params = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    setError('')
    setBook(null)

    fetch('https://seussology.info/api/books/' + params.id)
      .then(response => {
        if (!response.ok) {
          throw Error('This book could not be loaded.')
        }
        return response.json()
      })
      .then(json => {
        setBook(json)
        setLoading(false)
      })
      .catch(() => {
        setError('This book could not be loaded. Please choose a book from the books page.')
        setLoading(false)
      })
  }, [params.id])

  return (
    <>
      <Link className="back-link" to="/">&larr; Back to books</Link>
      {loading && <p>Loading book...</p>}
      {error && <p role="alert">{error}</p>}
      {book && (
        <article>
          <h1>{book.title}</h1>
          <div className="book-details">
            <img src={book.image} alt={book.title} />
            <div className="book-description">
              <h2>About this book</h2>
              <p>{book.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  )
}

export default BookDetails
