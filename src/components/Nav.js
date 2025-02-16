import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { removeToken, removeUser } from '../api/apiService'
import { AuthContext } from '../context/authContextComponent'

function Nav() {
  const { isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = () => {
    removeToken()
    removeUser()
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="navbar">
      <ul className="hamburger">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-campaign">Create Campaign</Link>
        </li>
        <li>
          <Link to="/myaccount">My Account</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={handleSignOut}>Sign Out</button>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
