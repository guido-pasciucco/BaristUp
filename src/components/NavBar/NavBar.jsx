import React from 'react'

const navBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{width: "100%", display: "flex"}} >
        <div class="container-fluid" style={{justifyContent: "space-evenly"}} >
            
            
            <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "space-evenly"}} >
                    
                <a class="navbar-brand" href="#" style={{paddingLeft: "50"}}>
                    <strong>BaristUP</strong>
                    <br/>
                    <p>Fanáticos del café</p>
                </a>    
                
                
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Café y Té</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Accesorios</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Vajilla</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link">Cafeteras</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}

export default navBar
