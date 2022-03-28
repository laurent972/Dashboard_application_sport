import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header>
             <nav className="navbar navbar-expand-lg navbar-dark p-2">
                <div className="container-fluid">
                    <div className=" collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <a className="navbar-brand" href="#"><img src={logo} width={150} alt="logo" /></a>
                    <ul className=" navbar-nav d-flex justify-content-around">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Profil</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Réglage</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Communauté</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Header;