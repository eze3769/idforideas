import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { customContext } from '../../context/AppContext'
import logo from './logo.png'
import './navBar.css'

const NavBar = () => {
    const { auth } = useContext(customContext)
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-white">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {
        auth &&
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active pink-text" aria-current="page" href="#">View</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active pink-text" aria-current="page" href="#">Tags</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link pink-text" href="#">About Fashion Like</a>
                </li>
            </ul>
        </div>
    }
    
  </div>
</nav>
  )
}

export default NavBar