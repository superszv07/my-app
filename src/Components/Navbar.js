import React from 'react' //imr
import PropTypes from 'prop-types'//impt

export default function Navbar(props) {
  return (
    <>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/App.js">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.Disabled}</a>
        </li> */}
         <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>

      </ul>
      <form className="d-flex  mx-2 " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
        <div className={`form-check form-switch mx-2 ${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
     </div>
    </div>
  </div>
</nav>
    </>
  );
}


Navbar.prototypes={title:PropTypes.string.isRequired};

