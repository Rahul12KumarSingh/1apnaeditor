import { Link } from 'react-router-dom'

import React from 'react'

// import PropTypes from 'prop-types'

// var colorchange = {
//   backgroundColor: "#5A5656",
//   color: "white"
// }



export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#" onClick={handleClick}></a> */}
        <h5 className="navbar-brand" >{props.title}</h5>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
          <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About us</Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" href="#">Link</a> */}
              <h6 className="nav-link">Link</h6>
            </li>

          </ul>


          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" for="flexSwitchCheckDefault" >Dark Mode</label>
          </div>

        </div>



      </div>
    </nav>
  )
}


