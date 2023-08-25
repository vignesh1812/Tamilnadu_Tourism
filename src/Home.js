import React from 'react'
import carousel1 from "./images/banner.1.jpg"
import carousel2 from "./images/pic1.jpeg"
import carousel3 from "./images/pic2.jpeg"
import carousel4 from "./images/pic3.jpeg"
import carousel5 from "./images/pic4.jpeg"
import chennai from "./images/Chennai.jpeg"
import chennaicard1 from "./images/chennai1.jpeg"
import chennaicard2 from "./images/chennai2.jpeg"
import chennaicard3 from "./images/chennai3...jpeg"
import chennaicard4 from "./images/chennai4.jpeg"
import rameswaram from "./images/rameswaram.jpeg"
import rameswaramcard1 from "./images/rameswaram1.jpeg"
import rameswaramcard2 from "./images/rameswaram2.jpeg"
import rameswaramcard3 from "./images/rameswaram3.jpeg"
import rameswaramcard4 from "./images/rameswaram4.jpeg"
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
import kanyakumari from "./images/Kanyakumari.jpeg"
import kanyakumaricard1 from "./images/kanyakumari1.jpeg"
import kanyakumaricard2 from "./images/kanyakumari2.jpeg"
import kanyakumaricard3 from "./images/kanyakumari3.jpeg"
import kanyakumaricard4 from "./images/kanyakumari4.jpeg"
import kumbakonam from "./images/Kumbakonam.jpeg"
import kumbakonamcard1 from "./images/kumbakonam1.jpeg"
import kumbakonamcard2 from "./images/kumbakonam2.jpeg"
import kumbakonamcard3 from "./images/Kumbakonam(3).jpeg"
import kumbakonamcard4 from "./images/kumbakonam4.jpeg"
import madurai from "./images/madurai.jpeg"
import maduraicard1 from "./images/madurai1.jpeg"
import maduraicard2 from "./images/madurai2.jpeg"
import maduraicard3 from "./images/madurai3.jpeg"
import maduraicard4 from "./images/madurai4.jpeg"
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
import { HashLink } from 'react-router-hash-link';
// import { BrowserRouter } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className='home container-md' id='homemain'>
            <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100 img-fluid" alt="Thanjavur Tourist" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100 img-fluid" alt="Ooty" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100 img-fluid" alt="Beach with old boat" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel4} className="d-block w-100 img-fluid" alt="cool hillstations" />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel5} className="d-block w-100 img-fluid " alt="old fort in tamilnadu" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />

            <p className='text-center fsizepara fs-4 m-0   text-capitalize' id='home'>tourist places to tamilnadu <br />here are the top places to visit in tamilnadu in 2023</p>
            <p className='text-lg-center   fsizepara fs-4  mb-5 text-capitalize'></p>

            
                <nav className='navlinks mb-4'>
                        
                    <ul className='list-unstyled row-cols flex-wrap fs-5  '>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to='/#chennai' className="text-decoration-none text-primary " >Chennai</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#kodaikanal" className="text-decoration-none text-primary " >Kodaikanal</HashLink>
                        </li>
                        <li className='mx-5 text-center  fsize'>
                            <HashLink smooth to="/#madurai" className="text-decoration-none text-primary" >Madurai</HashLink>

                        </li>
                        <li className='mx-5 text-center fsize'>

                            <HashLink smooth to="/#kumbakonam" className="text-decoration-none text-primary" >Kumbakonam</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#theni" className="text-decoration-none " >Theni</HashLink>
                        </li>
                        
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#rameswaram" className="text-decoration-none text-primary " >Rameswaram</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#ooty" className=" text-decoration-none text-primary" >Ooty</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#KanyaKumari" className="text-decoration-none text-primary"  >Kanyakumari</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#yercaud" className="text-decoration-none text-primary " >Yercaud</HashLink>
                        </li>
                        <li className='mx-5 text-center fsize'>
                            <HashLink smooth to="/#hogenakkal" className="text-decoration-none  text-primary" >Hogenakakal</HashLink>
                        </li>
                    </ul>
                </nav>
            
                <section id='chennai' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >01. Chennai</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={chennai} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>"the detroit of india"</h6>
                            <p className='contentpara mb-3' >
                                Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.

                            </p>
                            <p className='contentpara '> Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.</p>


                        </div>

                    </div>
                    <p className=' fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Chennai</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={chennaicard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Marina Beach
                                </h5>
                                <p className="card-text">Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the
                                    Bay of Bengal...</p>
                                    <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={chennaicard2} className="card-img-top" alt="MGR film city Chennai" />
                            <div className="card-body">
                                <h5 className="card-title ">MGR Flim City
                                </h5>
                                <p className="card-text">Having been established in the year 1994, a considerably new structure, the MGR Film city is managed..</p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={chennaicard3} className="card-img-top" alt="Marundeswarar" />
                            <div className="card-body">
                                <h5 className="card-title">Marundeeswarar Temple</h5>
                                <p className="card-text">The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...</p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={chennaicard4} className="card-img-top" alt="Breezy Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Breezy Beach
                                </h5>
                                <p className="card-text">Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...</p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='rameswaram' className=''>
                    <h3 className='text-start ' ><HashLink smooth to='/#home' className="text-decoration-none text-dark " >02. Rameswaram</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={rameswaram} className='col-lg-6 col-sm-12' alt="rameswaram" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>"The Bridge on the Indian Ocean"</h6>
                            <p className='contentpara mb-3' >Rameswaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.
                            </p>
                            <p className='contentpara '> Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameswaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.
                                Close</p>


                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Rameswaram</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={rameswaramcard1} className="card-img-top" alt="Dhanushkodi" />
                            <div className="card-body">
                                <h5 className="card-title">Dhanushkodi Temple</h5>
                                <p className="card-text"> Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a...</p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={rameswaramcard2} className="card-img-top" alt="Lakshanamana Temple" />
                            <div className="card-body">
                                <h5 className="card-title ">Lakshmana Temple
                                </h5>
                                <p className="card-text">Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In or...
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={rameswaramcard3} className="card-img-top" alt="Ramswaram temple" />
                            <div className="card-body">
                                <h5 className="card-title">Rameswaram Temple
                                </h5>
                                <p className="card-text">A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also...</p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={rameswaramcard4} className="card-img-top " alt="Villoondi tirtham" />
                            <div className="card-body">
                                <h5 className="card-title">Villoondi Tirtham
                                </h5>
                                <p className="card-text">Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...
                                </p>
                                  
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='kodaikanal' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >03. Kodaikanal</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={kodaikanal} className='col-lg-6 col-sm-12' alt="kodaikanal" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>“The Princess of Hill Stations”</h6>
                            <p className='contentpara mb-3' >
                                Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is
                                one of the most famous honeymoon destinations in India. A Lakeside resort
                                town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered
                                manicured cliffs and waterfall that come together to create the ideal setting
                                for a perfect getaway. Kodaikanal means 'the gift of the forests'.
                            </p>
                            <p className='contentpara '> Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal
                                stands at an altitude of 7200 feet above sea level, and once you visit this hill
                                station, you will find that every bit of what you have imagined it to be is real.
                                Kodaikanal is a place you can go to take a break from the rigours of daily city
                                life, and this hill station lets you sit back and connect with nature as you head
                                out on biking or trekking trails or take a stroll through the vast forests
                                surrounding the town.</p>


                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Kodaikanal</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kodaikanalcard1} className="card-img-top" alt="green Valley View" />
                            <div className="card-body">
                                <h5 className="card-title">Green Valley View
                                </h5>
                                <p className="card-text">Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kodaikanalcard2} className="card-img-top" alt="kodai lake" />
                            <div className="card-body">
                                <h5 className="card-title ">Kodai Lake
                                </h5>
                                <p className="card-text">Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera...
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kodaikanalcard3} className="card-img-top" alt="Bear shpow falls" />
                            <div className="card-body">
                                <h5 className="card-title">Bear Shola Falls </h5>
                                <p className="card-text">Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular..</p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={kodaikanalcard4} className="card-img-top" alt="Pillar Rocks" />
                            <div className="card-body">
                                <h5 className="card-title">Pillar Rocks
                                </h5>
                                <p className="card-text">
                                    Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic...</p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='ooty' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >04. Ooty</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={ooty} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>"Queen of the Nilgiris"”</h6>
                            <p className='contentpara mb-3' >
                                Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is
                                a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.

                            </p>
                            <p className='contentpara '> The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.</p>


                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Ooty</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={ootycard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Nilgiri Mountain Railway
                                </h5>
                                <p className="card-text">Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill...
                                </p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={ootycard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Ooty Botanical Garden
                                </h5>
                                <p className="card-text"> Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical Garden ...
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={ootycard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Emerald Lake
                                </h5>
                                <p className="card-text">Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...</p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={ootycard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Dolphin's Nose
                                </h5>
                                <p className="card-text">
                                    Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The...
                                </p>
                                <br />

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='KanyaKumari' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >05. KanyaKumari</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={kanyakumari} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>"Cape Comorin or The Land's End"</h6>
                            <p className='contentpara mb-3' >
                                Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
                            </p>
                            <p className='contentpara '>
                                Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields.</p>


                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Kanyakumari</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kanyakumaricard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Kanyakumari Beach
                                </h5>
                                <p className="card-text">Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches...
                                </p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kanyakumaricard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Vivekananda Memorial
                                </h5>
                                <p className="card-text"> The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari. It has the picturesque...
                                </p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kanyakumaricard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Thiruvalluvar Status
                                </h5>
                                <p className="card-text">Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself...</p>
                                <br />

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={kanyakumaricard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Thirparappu Falls
                                </h5>
                                <p className="card-text">
                                    Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...
                                </p>
                               <br />

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='kumbakonam' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >06. KumbaKonam</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={kumbakonam} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>"The Cambridge of India"</h6>
                            <p className='contentpara mb-3' >
                                Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.

                            </p>
                            <p className='contentpara '>
                                The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.</p>


                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Kumbakonam</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kumbakonamcard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Sarangapani Temple
                                </h5>
                                <p className="card-text">Sarangapani Temple, an ancient temple dedicated to Lord
                                    Vishnu, is located in the town of Kumbakonam...</p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kumbakonamcard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Nageswaran Temple
                                </h5>
                                <p className="card-text"> Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...</p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={kumbakonamcard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Adi Kumbeshwara Temple</h5>
                                <p className="card-text">
                                    Adi Kumbeshwara Temple Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...</p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={kumbakonamcard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Airavatesvara Temple
                                </h5>
                                <p className="card-text">
                                    Airavatesvara Temple Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...</p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='madurai' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >07. Madurai</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={madurai} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>“The Lotus City"</h6>
                            <p className='contentpara mb-3' >


                                Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one
                                of the oldest continuously inhabited cities of India. Ruled by Pandya kings for
                                the longest time in its history, it is called as the ‘Lotus City" as it was planned
                                and built in the shape of a lotus. Madurai is known for Meenakshi Amman
                                Temple, dedicated to the goddess Meenakshi with a sanctum for her consort,
                                Sundareshwarar

                            </p>
                            <p className='contentpara '>

                                There are many other ancient temples in Madurai, including
                                Thiruparankundram. It is one of the important old temples dedicated to Lord
                                Muruga(Karthikeya) and is located on a hillock approximately 8 km from the
                                city. Having trade ties with ancient Rome, the place holds a great cultural
                                heritage. With bustling bazaars and fantastic street food, Madurai has
                                heritage walks conducted throughout the day.
                            </p>

                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Madurai</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={maduraicard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Vaigai Dam
                                </h5>
                                <p className="card-text">Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Then....
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={maduraicard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Meghamalai
                                </h5>
                                <p className="card-text">Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
                                </p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={maduraicard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Samanar Hills</h5>
                                <p className="card-text">
                                    Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...
                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={maduraicard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Thirumalai Nayakar
                                </h5>
                                <p className="card-text">
                                    Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
                                </p>
                                   <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='yercaud' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >08. Yercaud</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={yercaud} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>
                                "The Land of Seven Forests"</h6>
                            <p className='contentpara mb-3' >


                                Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.


                            </p>
                            <p className='contentpara '>


                                YercaudYercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
                            </p>

                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Yercaud</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={yercaudcard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Pagoda Point
                                </h5>
                                <p className="card-text">
                                    Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated ...

                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={yercaudcard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Botanical Garden
                                </h5>
                                <p className="card-text">Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...                                </p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={yercaudcard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Emerald Lake</h5>
                                <p className="card-text">
                                    The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...

                                </p>
                                <br />
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={yercaudcard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Lady's Seat
                                </h5>
                                <p className="card-text">
                                    Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...

                                </p>
                                 
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='theni' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >09. Theni</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={theni} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>
                                "A little hamlet in Tamil Nadu"</h6>
                            <p className='contentpara mb-3' >


                                Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.



                            </p>
                            <p className='contentpara '>

                                There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
                            </p>

                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Theni</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={thenicard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">

                                    Chinna Suruli Falls
                                </h5>
                                <p className="card-text">
                                    Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...


                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={thenicard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Kumbakkarai Falls

                                </h5>
                                <p className="card-text">Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...

                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={thenicard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Meghamalai
                                </h5>
                                <p className="card-text">
                                    Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...


                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={thenicard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Suruli Falls

                                </h5>
                                <p className="card-text">Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions...


                                </p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='hogenakkal' className=''>
                    <h3 className='text-start ' > <HashLink smooth to='/#home' className="text-decoration-none text-dark " >10. Hogenkkal</HashLink></h3>
                    <div className="chennai-content row mb-5">

                        <img src={Hogenakal} className='col-lg-6 col-sm-12' alt="Chennai" />

                        <div className="col-lg-6  text-end m-0">
                            <h6 className='fw-bold text-start text-capitalize mt-3 mb-3'>
                                "The one that will take your breath away"
                            </h6>
                            <p className='contentpara mb-3' >


                                Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.



                            </p>
                            <p className='contentpara '>

                                Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
                            </p>

                        </div>

                    </div>
                    <p className='text-center fsizepara fs-4  mb-4 text-capitalize'>Must visit places in Hogenakkal</p>

                    <div className='row d-flex justify-content-evenly text-start mb-5'>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={Hogenakalcard1} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">

                                    Theerthamalai Temple
                                </h5>
                                <p className="card-text">Theerthamalai is a popular pilgrim centre close to
                                    Hogenakkal. One of its most popular destinations is the...


                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div >
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={Hogenakalcard2} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title ">Hogenakkal Falls


                                </h5>
                                <p className="card-text">Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...

                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 p-0 mb-4 card">
                            <img src={Hogenakalcard3} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Pennagram Village

                                </h5>
                                <p className="card-text">The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it hold..


                                </p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4 p-0 card">
                            <img src={Hogenakalcard4} className="card-img-top" alt="Marina Beach" />
                            <div className="card-body">
                                <h5 className="card-title">Mettur Dam


                                </h5>
                                <p className="card-text">Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...



                                </p>

                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Home
