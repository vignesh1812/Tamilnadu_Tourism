import React from 'react'
// import thenicard2 from "./images/theni2.jpeg"
import { FaHotel, FaCarOn, FaPersonWalking } from "react-icons/fa6";
// import { BiWalk } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import rameswaram from "./images/rameswaram.jpeg"
import rameswaramcard1 from "./images/rameswaram1.jpeg"
import rameswaramcard2 from "./images/rameswaram2.jpeg"
import rameswaramcard3 from "./images/rameswaram3.jpeg"
import rameswaramcard4 from "./images/rameswaram4.jpeg"
import madurai from "./images/madurai.jpeg"
import maduraicard1 from "./images/madurai12.jpeg"
import maduraicard2 from "./images/madurai2.jpeg"
import maduraicard3 from "./images/madurai3.jpeg"
import maduraicard4 from "./images/madurai4.jpeg"
import kanyakumari from "./images/Kanyakumari.jpeg"
import kanyakumaricard1 from "./images/kanyakumari1.jpeg"
import kanyakumaricard2 from "./images/kanyakumari2.jpeg"
import kanyakumaricard3 from "./images/kanyakumari3.jpeg"
import kanyakumaricard4 from "./images/kanyakumari4.jpeg"
import yercaud from "./images/Yarcaud.jpeg"
import yercaudcard1 from "./images/yercaud1.jpeg"
import yercaudcard2 from "./images/yercaud2.jpeg"
import yercaudcard3 from "./images/yercaud3.jpeg"
import yercaudcard4 from "./images/yercaud4.jpeg"
import theni from "./images/Theni.jpeg"
import thenicard1 from "./images/theni1.jpeg"
import thenicard2 from "./images/theni2.jpeg"
import thenicard3 from "./images/theni3.jpeg"
import thenicard4 from "./images/theni4.jpeg"
import Hogenakal from "./images/Hogenakkal.jpeg"
import Hogenakalcard1 from "./images/hogenakkal1.jpeg"
import Hogenakalcard2 from "./images/hogenakkal2..jpeg"
import Hogenakalcard3 from "./images/hogenakkal3.jpeg"
import Hogenakalcard4 from "./images/hokenakkal4..jpeg"
import kodaikanal from "./images/Kodaikanal.jpeg"
import kodaikanalcard1 from "./images/kodaikanal1....jpeg"
import kodaikanalcard2 from "./images/kodaikanal2.jpeg"
import kodaikanalcard3 from "./images/kodaikanal3..jpeg"
import kodaikanalcard4 from "./images/kodaikanal4.jpeg"
import ooty from "./images/ooty.jpeg"
import ootycard1 from "./images/ooty1.jpeg"
import ootycard2 from "./images/ooty2.jpeg"
import ootycard3 from "./images/ooty3.jpeg"
import ootycard4 from "./images/ooty4.jpeg"
import kumbakonam from "./images/Kumbakonam.jpeg"
import kumbakonamcard1 from "./images/kumbakonam1.jpeg"
import kumbakonamcard2 from "./images/kumbakonam2.jpeg"
import kumbakonamcard3 from "./images/Kumbakonam(3).jpeg"
import kumbakonamcard4 from "./images/kumbakonam4.jpeg"
import chennai from "./images/Chennai.jpeg"
import chennaicard1 from "./images/chennai1.jpeg"
import chennaicard2 from "./images/chennai2.jpeg"
import chennaicard3 from "./images/chennai3...jpeg"
import chennaicard4 from "./images/chennai4.jpeg"
import './Packages.css';
import { HashLink } from 'react-router-hash-link';



function Packages() {
    return (
        <div className="container mt-4 packsss">

            <div className="package-content">
                <h3 className='text-center text-lg-start my-3 text-uppercase'>Tamilnadu Tourism Packages </h3>
                <p>
                    Embark on a remarkable journey through South India with our all-inclusive tour package. Discover the vibrant cityscape of Chennai, the tranquil hills of Yercaud and Kodaikanal, and the spiritual aura of Rameswaram and Kumbakonam. Witness the captivating meeting point of three oceans in Kanyakumari. Indulge in delectable regional cuisine and enjoy comfortable accommodations throughout the trip. Traverse the scenic beauty of Ooty, relish the serenity of Theni's countryside, and witness the awe-inspiring waterfalls of Hogenakkal. Immerse yourself in a seamless blend of cultural exploration, natural beauty, and culinary delights, making unforgettable memories across Tamil Nadu's finest destinations.
                </p>
                <nav className='mt-5'>
                    <h3 className="text-center my-5">Select Your Location</h3>

                    <ul className='list-unstyled d-flex justify-content-center flex-wrap fs-5'>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to='#chennaipackss' className="text-decoration-none text-primary " >Chennai</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#kodaikanalpack" className="text-decoration-none text-primary " >Kodaikanal</HashLink>
                        </li>
                        <li className='mx-5 text-center  fsize'>
                            <HashLink smooth to="#maduraipackage" className="text-decoration-none text-primary" >Madurai</HashLink>

                        </li>
                        <li className='mx-5 text-center fsize'>

                            <HashLink smooth to="#kumbakonampack" className="text-decoration-none text-primary" >Kumbakonam</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#thenipack" className="text-decoration-none " >Theni</HashLink>
                        </li>

                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#rameswarampack" className="text-decoration-none text-primary " >Rameswaram</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#ootypack" className=" text-decoration-none text-primary" >Ooty</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#kanyakumaripack" className="text-decoration-none text-primary"  >Kanyakumari</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#yercaudpack" className="text-decoration-none text-primary " >Yercaud</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="#hogenakkalpacks" className="text-decoration-none  text-primary" >Hogenakakal</HashLink>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="my-5  chennaipackages">

                <h2 className='text-center my-5 text-uppercase' id='chennaipackss'>Tour packages From Chennai</h2>
                <div className='row  mx-sm-auto packs' id='chennaick'>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="caroying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#caroying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#caroying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="package2leolcu" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package2leolcu" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package2leolcu" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="pppackkspackage3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#pppackkspackage3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#pppackkspackage3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹8,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs4alapara" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs4alapara" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs4alapara" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="package5heyram" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package5heyram" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package5heyram" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="lolo" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#lolo" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#lolo" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="pack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#pack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#pack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Chennai <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>qNights / 2Days</span>
                                </div>
                                <div id="packs9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹8,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="my-5  rameswarampackages">

                <h2 className='text-center my-5 text-uppercase' id='rameswarampack'>Tour packages From Rameswaram</h2>
                <div className='row  mx-sm-auto packs' id='Rameswaram'>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="rammad" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rammad" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rammad" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="rampack2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="rampack3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}


                </div>

                <div className='row  mx-sm-auto mt-5 packs' id=''>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="pack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#pack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#pack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="packs9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}
                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Rameswaram <span className=''><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="rampack9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  maduraipackages">

                <h2 className='text-center my-5 text-uppercase' id='maduraipackage'>Tour packages From Madurai</h2>
                <div className='row  mx-sm-auto packs ' id='Madurai'>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carouselExampleAutoplaying2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="maduvu898" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduvu898" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduvu898" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="maduraipack3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}

                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="maduraipack77" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack77" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack77" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="maduraipacks66" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipacks66" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipacks66" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="maduraipack55" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack55" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack55" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="maduvus" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduvus" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduvus" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="maddys7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maddys7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maddys7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Madurai <span><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="madurais567" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#madurais567" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#madurais567" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  ootypackages">

                <h2 className='text-center my-5 text-uppercase' id='ootypack'>Tour packages From Ooty</h2>
                <div className='row  mx-sm-auto packs' id='Rameswaram'>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="rammad" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rammad" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rammad" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="rampack2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="rampack3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}


                </div>

                <div className='row  mx-sm-auto mt-5 packs' id=''>



                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="packs9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}
                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Ooty <span className=''><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="rampack9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  Kodaikanalpackages">

                <h2 className='text-center my-5 text-uppercase' id='kodaikanalpack'>Tour packages From Kodaikanal</h2>
                <div className='row  mx-sm-auto packs' id='kodaikanalpacks'>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="hvb" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#hvb" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#hvb" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="package3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹8,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs4" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs4" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="package5" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package5" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package5" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="package6" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package6" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package6" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="wer" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#wer" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#wer" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="ghg" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#ghg" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#ghg" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kodaikanal <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="maduvu898" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduvu898" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduvu898" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}



                </div>
            </div>
            <div className="my-5  kumbakonampackages">

                <h2 className='text-center my-5 text-uppercase' id='kumbakonampack'>Tour packages From Kumbakonam</h2>
                <div className='row  mx-sm-auto packs ' id='Madurai'>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Rameswarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="tyry" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#tyry" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#tyry" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="tmaduvu898" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#tmaduvu898" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#tmaduvu898" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="maduraipack3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}

                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="maduraipack77" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack77" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack77" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="ijs" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#ijs" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#ijs" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="maduraipack55" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack55" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack55" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="maduvus" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduvus" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduvus" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="maddys7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maddys7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maddys7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kumbakonam <span><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="madurais567" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#madurais567" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#madurais567" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  kanyakumaripackages">

                <h2 className='text-center my-5 text-uppercase' id='kanyakumaripack'>Tour packages From Kanyakumari</h2>
                <div className='row  mx-sm-auto packs' id='kanyakumari'>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="mxcg" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#mxcg" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#mxcg" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="qpd" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#qpd" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#qpd" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Rameswarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carousvdvdelExampleAutoplaying2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carousvdvdelExampleAutoplaying2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carousvdvdelExampleAutoplaying2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}

                </div>

                <div className='row  mx-sm-auto mt-5 packs' id=''>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="llkk" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#llkk" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#llkk" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="ppooii" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#ppooii" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#ppooii" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="asdf" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#asdf" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#asdf" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}
                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rampack8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Kanyakumari <span className=''><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="rampack9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rampack9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rampack9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  yercaudpackages">

                <h2 className='text-center my-5 text-uppercase' id='yercaudpack'>Tour packages From Yercaud</h2>
                <div className='row  mx-sm-auto packs ' id='yercaud'>


                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carouselExampmcghdleAutoplaying2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampmcghdleAutoplaying2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampmcghdleAutoplaying2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="knukuti" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#knukuti" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#knukuti" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="korangu" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#korangu" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#korangu" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}

                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="karupu" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#karupu" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#karupu" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="choclatemittai" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#choclatemittai" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#choclatemittai" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="vijay" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#maduraipack55" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#maduraipack55" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>


                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="rammad" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rammad" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rammad" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud<span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="singarsingh" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#singarsingh" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#singarsingh" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Yercaud <span><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="geetha" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#geetha" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#geetha" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  thenipackages">

                <h2 className='text-center my-5 text-uppercase' id='thenipack'>Tour packages From Theni</h2>
                <div className='row  mx-sm-auto packs' id='theni'>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="jairam" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#jairam" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#jairam" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="karupuss" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#karupuss" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#karupuss" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* ooty */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="victordd" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#victordd" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#victordd" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}


                </div>

                <div className='row  mx-sm-auto mt-5 packs' id=''>



                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Rameswarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="vowel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#vowel" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#vowel" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span className=''><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="rrrr" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#rrrr" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#rrrr" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹3,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kumbakonam */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="senchola" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#senchola" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#senchola" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}
                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="sasdrampack7" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#sasdrampack7" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#sasdrampack7" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="mnmnmrampack8" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#mnmnmrampack8" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#mnmnmrampack8" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Theni <span className=''><BsArrowLeftRight /></span> Hogenakkal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="lklkoprampack9" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={Hogenakal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={Hogenakalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={Hogenakalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={Hogenakalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#lklkoprampack9" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#lklkoprampack9" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Theerthamalai Temple</li>
                                        <li>Hogenakkal Falls</li>
                                        <li>Pennagram Village</li>
                                        <li>Mettur Dam</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* hogenakkal */}
                </div>
            </div>
            <div className="my-5  Hogenakkalpackages">

                <h2 className='text-center my-5 text-uppercase' id='hogenakkalpacks'>Tour packages From Hogenakkal</h2>
                <div className='row  mx-sm-auto packs' id='hogenakkals'>

                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3 " style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Rameshwarm
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={rameswaram} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={rameswaramcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={rameswaramcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Rameswaram Temple</li>
                                        <li>Lakshmana Temple</li>
                                        <li>Villoondi Tirtham</li>
                                        <li>Dhanushkodi Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* rameswaram */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Madurai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Days</span>
                                </div>
                                <div id="package2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={madurai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={maduraicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={maduraicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Meenakshiamman Temple</li>
                                        <li>Vaigai Dam</li>
                                        <li>Meghamalai</li>
                                        <li>Thirumalai Nayakkar</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* madurai */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Kanyakumari
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Nights / 3Days</span>
                                </div>
                                <div id="package3" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kanyakumari} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kanyakumaricard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kanyakumaricard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package3" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package3" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Kanyakumari Beach</li>
                                        <li>Vivekananda Memorial</li>
                                        <li>Thiruvalluvar Status</li>
                                        <li>Thirparappu Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹8,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* Kanyakumari */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Yercaud
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="packs4" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={yercaud} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={yercaudcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={yercaudcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#packs4" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#packs4" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>1 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Pagoda Point</li>
                                        <li>Botanical Garden</li>
                                        <li>Lady's Seat</li>
                                        <li>Emerald Lake</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹2,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>
                    {/* yercaud */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Theni
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>2Night / 2Days</span>
                                </div>
                                <div id="package5heyram" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item">
                                            <img src={theni} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={thenicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={thenicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={thenicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#package5heyram" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#package5heyram" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Chinna Suruli Falls</li>
                                        <li>Kumbakkarai Falls</li>
                                        <li>Meghamalai</li>
                                        <li>Suruli Falls</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹5,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* theni */}
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Kodaikanal
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Nights / 2Days</span>
                                </div>
                                <div id="sencholasdsdds" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kodaikanal} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kodaikanalcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kodaikanalcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#sencholasdsdds" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#sencholasdsdds" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>2 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>4 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Green Valley View</li>
                                        <li>Kodai Lake</li>
                                        <li>Bear Shola Falls</li>
                                        <li>Pillar Rocks</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* kodaikanal */}



                </div>
                <div className='row  mx-sm-auto mt-5 packs' id=''>
                    <div className="col-lg-4 col-sm-12 col-md-6">

                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }} >
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Ooty
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-1 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 2Day</span>
                                </div>
                                <div id="sdswer" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item ">
                                            <img src={ooty} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item active">
                                            <img src={ootycard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={ootycard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#sdswer" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#sdswer" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Ooty Lake</li>
                                        <li>Dolphin's Nose</li>
                                        <li>Nilgiri Mountain Railway</li>
                                        <li>Ooty Botanical Garden</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,999</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Kumbakonam
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="ghgsdsdsdsdsdsd" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={kumbakonam} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={kumbakonamcard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={kumbakonamcard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#ghgsdsdsdsdsdsd" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#ghgsdsdsdsdsdsd" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>2 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>3 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Sarangapani Temple</li>
                                        <li>Nageswaran Temple</li>
                                        <li>Adi Kumbeshwara Temple</li>
                                        <li>Airavatesvara Temple</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹4,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div class="card rounded-3" style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                            <h5 class="card-header bg-white border-0 mt-1 mx-auto">
                                Hogenakkal <span><BsArrowLeftRight /></span> Chennai
                            </h5>
                            <div class="card-body px-2 p-0" style={{ position: 'relative' }}>
                                <div className="">
                                    <span style={{ position: 'absolute', top: "76%", right: "0%" }} className='px-2 py-1 me-2 badge border-white opacity-75 border border-1 rounded-pill  z-3 bg-dark'>1Night / 1Day</span>
                                </div>
                                <div id="mamananamaduvu898" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded-3">
                                        <div class="carousel-item active">
                                            <img src={chennai} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard1} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={chennaicard2} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard3} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={chennaicard4} style={{ height: "213px" }} class="d-block img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev " type="button" data-bs-target="#mamananamaduvu898" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next " type="button" data-bs-target="#mamananamaduvu898" data-bs-slide="next">
                                        <span class="carousel-control-next-icon opacity-0" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-evenly align-items-center mt-1">
                                    <div className="text-center">
                                        <span><FaHotel /></span><br />
                                        <span>3 Hotel</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaCarOn /></span><br />
                                        <span>4 Transfer</span>
                                    </div>
                                    <div className="text-center">
                                        <span><FaPersonWalking /></span><br />
                                        <span>5 Activites</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-1 mb-0 mx-1">
                                    <ul className='text-dark'>
                                        <li>Marina Beach</li>
                                        <li>MGR Flim City</li>
                                        <li>Marundeeswarar Temple</li>
                                        <li>Breezy Beach</li>
                                    </ul>
                                    <div className="text-center p-0">
                                        <h3 className='fw-bold mt-4 mb-0 p-0'>₹6,499</h3>
                                        <small className='mx-auto text-muted m-0 p-0'>per person</small>
                                    </div>
                                </div>
                                <small className="text-capitalize float-end text-muted ms-3 p-0">with food &amp; accomodation</small>
                                <button className='btn my-1 fw-bold w-100 btn-warning'>Book Your Seats</button>

                            </div>
                        </div>
                    </div>
                    {/* chennai */}



                </div>
            </div>

        </div>
    )
}

export default Packages