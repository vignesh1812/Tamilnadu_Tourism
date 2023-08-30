import React from 'react'
import { BiMenu } from "react-icons/bi";
import './Navbar.css';

import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm" id='color' >
                <div className="container">
                    <a className="navbar-brand text-uppercase fw-bold text-white" href="/">Tamilnadu Tourism</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="display-5 pb-2 text-white" id='icons' ><BiMenu/></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item fw-bold ">
                                <Link className="nav-link text-white my-1 mx-2 " aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item fw-bold ">
                                <Link className="nav-link text-white my-1 mx-2 "to='/places'>Places to Visit</Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <Link className="nav-link text-white my-1 mx-2 text-capitalize" to='/time'>Best Times to Visit</Link>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link text-white my-1 mx-2 text-capitalize" href="/" tabIndex="-1" aria-disabled="true">packages</a>
                            </li>
                            <li className="nav-item fw-bold">
                                <a className="nav-link text-white my-1 mx-2 text-capitalize" href="/" tabIndex="-1" aria-disabled="true">destination</a>
                            </li>
                            <li className="nav-item fw-bold">
                            <Link className="nav-link text-white my-1 mx-2 text-capitalize" to='/food'>Food</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
