import React from 'react'
import './Time.css';
import imagethree from "./Gallery/image2.jpeg";
import imagetwo from "./Gallery/image1.jpeg";
import imageone from "./Gallery/image.jpeg";
import climate from "./Gallery/Climate.jpeg"
import times from './Timecontent';


function Time() {
    return (
        <div className='container' >

            <div className="text-center text-lg-start my-5">
                <h4 className=''>TAMILNADU TOURISM</h4>
                <h3 className=''>Best Time To Visit Packages </h3>
            </div>
            <div className="row">
                <div className="col-sm-12 col-lg-6">


                    <img src={climate} class='img-fluid w-100' alt="Time to visit" />
                    <p className='text-center text-capitalize'>best time to visit</p>
                </div>
                <div className="col-lg-6">

                    <p className='text-center text-capitalize fs-5 fw-bold mb-5 '>More about best time to travel to tamilnadu</p>

                    <div className="accordion" id="accordionBasic">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Tamil Nadu in Summer (March-May)
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionBasic">
                                <div className="accordion-body">
                                    <p className='tindent'>This season begins in March and lasts until May. The temperatures are high, ranging between 35°C and 40°C and so is the humidity especially in the coastal regions. Sightseeing during this time is not very convenient because of the improper temperature. The season, however, is visited to witness the festival of Chithirai held in the Madurai temple in the month of March- April. Puthandu, another important festival that marks the Tamil New year falls in mid-April and Mahamahan Festival is celebrated in March (celebrated once in 12 years). If visiting during summer, it is a good idea to visit the attractions on higher attitudes. Hill stations like Ooty, Kodaikanal and Yelagiri hills are the best where the temperature is pleasant and has scenic views that tourists can witness.</  p>
                                    <div className="">
                                        <img src={imageone} className='w-100 h-100' alt="march-to june" />
                                        <p className='text-center'>Pillar Rocks Kodaikanal Source</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Tamil Nadu in Monsoon (June - September)
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionBasic" >
                                <div className="accordion-body">
                                    <p className='tindent'>This southern state sees monsoon two times a year - once between June to September and the retreating monsoon in November and December. The temperature is slightly less than what it is in the summer season. It ranges between 25°C and 30°C. The rains often occur in long spells and the humidity during this time is high especially in coastal regions. Some of the hilly areas see massive rainfall and venturing out during this time around is not a great idea. The Eastern seaboard of Tamil Nadu sometimes experiences cyclones during the late monsoon, making it an unsafe placetovisit.</p>
                                    <div className="">
                                        <img src={imagetwo} className='w-100 h-100' alt="march-to june" />
                                        <p className='text-center'>A Rainy Day in Chennai Source</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Tamil Nadu in Winter (October-February)
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionBasic" >
                                <div className="accordion-body">
                                    <p className='tindent' >Winter in Tamil Nadu begins in October and lasts until February. November and December have intermittent rainfall because of the retreating monsoon, but otherwise, the temperature remains between 10°C and 15°C. The humidity is low, and it is the best climate for sightseeing and touring the cities. Most of the tourist attractions are bustling with activities during this season. The beaches call the beach lovers, and adventure seekers for bathing in the sun, swimming and water sports as the temperature remains moderate all through the day.</p>
                                    <div className="">
                                        <img src={imagethree} className='w-100 h-100' alt="march-to june" />
                                        <p className='text-center'>Pechiparai Resorvoir in Kanyakumari District</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tindent my-4">
                The best time to visit Tamil Nadu is during the winter season, i.e. from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.
            </div>
            <div className="text-center my-5">
                <h3 className='text-uppercase'>tamilnadu tourism</h3>
                <h6 className='text-capitalize fw-bold'>best time to visit</h6>
            </div>
            <div className='content'>
                {times.map((time,i) => (

                    time.id % 2 === 1 ? (


                        <div className='contanier odd mb-4' key={i} id={time.title}>

                            <h3 className='my-4 text-center text-lg-start'>{time.heading}</h3>

                            <div className="row mb-5">


                                <div className="col-sm-12  col-lg-6">
                                    <h4 className='text-center mb-4 text-sm-start'>{time.visitparahead}</h4>
                                    <p className="tindent my-3">
                                        {time.visitpara1}
                                    </p>
                                    <p className="tindent">
                                        {time.visitpara2}
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="" >

                                        <div className="card w-100 h-100 cardz" >
                                            <div className="card-header bg-white d-flex justify-content-between align-items-center my-3">
                                                <h4 className='text-capitalize text-center fs-sm-4 fw-bold me-4'>
                                                    more about best time to travel {time.title}
                                                </h4>
                                                <button className='btn btn-close me-auto'></button>

                                            </div>
                                            <div className="card-body d-flex justify-content-center w-100 h-100 my-5">
                                                <div className="row">

                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img1}`)} className='img-fluid ' alt={time.img1name} />
                                                        <p className='text-center'>{time.img1name}</p>
                                                    </div>

                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img2}`)} className='img-fluid ' alt={time.img2name} />
                                                        <p className='text-center'>{time.img2name}</p>

                                                    </div>
                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img3}`)} className='img-fluid ' alt={time.img3name} />
                                                        <p className='text-center'>{time.img3name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer h-100 bg-white d-flex justify-content-end my-2">
                                                <button className="btn btn-secondary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasLeft${time.title}`} aria-controls="offcanvasExample">
                                                    close
                                                </button>
                                                <button className="btn btn-primary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasLeft${time.title}`} aria-controls="offcanvasExample">
                                                    save changes
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="modalz">
                                        <div className="offcanvas offcanvas-start" tabIndex="-1" id={`offcanvasLeft${time.title}`} aria-labelledby={`offcanvasLeftLabel${time.title}`}>
                                            <div className="offcanvas-header">
                                                <h4 className="offcanvas-title text-center mx-auto" id="offcanvasExampleLabel">Best time to Visit in {time.sidemain}</h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <h6 className='my-3  fw-bold text-center'>{time.sidehead1}</h6>
                                                <p className="tindent my-3">{time.sidepara1}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead2}</h6>
                                                <p className="tindent my-3">{time.sidepara2}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead3}</h6>
                                                <p className="tindent my-3">{time.sidepara3}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    ) : (
                        <div className='container even' key={time.i} id={time.title} >
                            <div className="modalz">
                                        <div className="offcanvas offcanvas-end" tabIndex="-1" id={`offcanvasRight${time.title}`} aria-labelledby="offcanvasRightLabel">
                                            <div className="offcanvas-header">
                                                <h4 id="offcanvasRightLabel" className='text-center mx-auto'>Best Time to visit in {time.sidemain}</h4>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <h6 className='my-3  fw-bold text-center'>{time.sidehead1}</h6>
                                                <p className="tindent  my-3">{time.sidepara1}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead2}</h6>
                                                <p className="tindent  my-3">{time.sidepara2}</p>
                                                <h6 className='my-3 fw-bold text-center'>{time.sidehead3}</h6>
                                                <p className="tindent my-3">{time.sidepara3}</p>
                                            </div>
                                        </div>
                                    </div>

                            <h3 className='text-center mt-5 text-lg-start'>{time.heading}</h3>

                            <div className="row mb-5 " >

                                <div className="col-lg-6 col-sm-12 h-100 mb-5 ">
                                    <div className="" >

                                        <div className="card w-100 cardz" >
                                            <div className="card-header bg-white d-flex justify-content-between align-items-center my-3">
                                                <h4 className='text-capitalize text-center fs-sm-4 fw-bold me-4'>
                                                    more about best time to travel {time.title}
                                                </h4>
                                                <button className='btn btn-close me-auto'></button>

                                            </div>
                                            <div className="card-body d-flex justify-content-evenly align-items-center my-5 p-4">
                                                <div className="row">

                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img1}`)} className='img-fluid ' alt={time.img1name} />
                                                        <p className='text-center'>{time.img1name}</p>
                                                    </div>

                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img2}`)} className='img-fluid ' alt={time.img2name} />
                                                        <p className='text-center'>{time.img2name}</p>

                                                    </div>
                                                    <div className="col-4">
                                                        <img src={require(`./Gallery/${time.img3}`)} className='img-fluid ' alt={time.img3name} />
                                                        <p className='text-center'>{time.img3name}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-footer bg-white d-flex justify-content-end my-2">
                                                <button className="btn btn-secondary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasRight${time.title}`} aria-controls="offcanvasRight">Close</button>
                                                <button className="btn btn-primary m-1" type="button" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasRight${time.title}`} aria-controls={`offcanvasRight${time.title}`}>Save changes</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className=" col-lg-6">
                                    <h4 className='text-center mb-4 text-sm-start'>{time.visitparahead}</h4>
                                    <p className="tindent my-3">
                                        {time.visitpara1}
                                    </p>
                                    <p className="tindent">
                                        {time.visitpara2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )))}
            </div>

        </div>
    )
}

export default Time;