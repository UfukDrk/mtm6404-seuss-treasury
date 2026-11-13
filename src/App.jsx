import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="header-content">
          <p className="site-title">Seuss Treasury</p>
          <nav aria-label="Main navigation">
            <NavLink to="/">Books</NavLink>
            <NavLink to="/quotes">Quotes</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Stories and words by Dr. Seuss.</footer>
    </>
  )
}

export default App
