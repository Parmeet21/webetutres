import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import logo from './img-label/logo.png'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div className="container-fluid">
    <img src={logo} style={{width:"30px"}} alt="logo" srcset="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link fw-bold" aria-current="page" to="/">Homee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to='/sug'>Suggestion</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
    </div>
  )
}
