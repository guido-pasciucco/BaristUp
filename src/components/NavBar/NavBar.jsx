import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%", display: "flex"}} >
        <div className="container-fluid" style={{justifyContent: "space-evenly"}} >
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "space-evenly"}} >
                <a className="navbar-brand" href="/#" style={{paddingLeft: "50"}}>
                    <strong>BaristUP</strong>
                    <br/>
                    <p>Fanáticos del café</p></a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/#">Café y Té</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Accesorios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/#">Vajilla</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">Cafeteras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <CartWidget />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;
