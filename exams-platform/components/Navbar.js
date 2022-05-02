const Navbar = (props) => {
  if(props.login == "true"){
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">Home</a>
          </div>
        </div>
    </nav>
    )
  }else{
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">Home</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/users/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar;