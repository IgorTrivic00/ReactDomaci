import React from 'react'
import {FcBusinessman} from "react-icons/fc";
import {Link} from "react-router-dom";
import StatstikaPrikaz from './StatstikaPrikaz';

function Navigacija({zavrseni,ukupno,pretraga}) {
    return (

        <nav className="navbar navbar-expand-xl navbar-light bg-light ">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <FcBusinessman size={70}/>HR modul - Applications</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic"
                        aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link to="/novaB">
                                <button className="btn btn-outline-danger" type="button">Nova prijava</button>
                            </Link>
                        </li>
                    </ul>
                    <StatstikaPrikaz className="container" zavrseni={zavrseni} ukupno={ukupno}/>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Pretraga" aria-label="Pretraga" onInput={pretraga} />
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navigacija
