import React from 'react'
import { BiMenu } from "react-icons/bi";
import './Navbar.css';

// import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg shadow-sm" id='color' >
                <div class="container">
                    <a class="navbar-brand text-uppercase fw-bold text-white" href="/">Tamilnadu Tourism</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon display-5 p-0 text-white"><BiMenu/></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item fw-bold ">
                                <a class="nav-link text-white my-1 mx-2 " aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item fw-bold ">
                                <a class="nav-link text-white my-1 mx-2 " href="/">Places to Visit</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link text-white my-1 mx-2 text-capitalize" href="/">Best Time to Visit</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link text-white my-1 mx-2 text-capitalize" href="/" tabindex="-1" aria-disabled="true">packages</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link text-white my-1 mx-2 text-capitalize" href="/" tabindex="-1" aria-disabled="true">destination</a>
                            </li>
                            <li class="nav-item fw-bold">
                                <a class="nav-link my-1 mx-2 text-white text-capitalize" href="/" tabindex="-1" aria-disabled="true">food</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar