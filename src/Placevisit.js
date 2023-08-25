import React from 'react'
import place from './images/Place.jpeg'
import './Placevisit.css';
import placess from './Placecontent';

function Placevisit() {
    return (
        <div className='container' id='place' >
            <div className="row my-5">
                <div className="col-lg-6">
                    <h3 className='text-lg-start text-sm-center  fsizepara mb-4' >Tourist Places To Visit In Tamil Nadu</h3>
                    <p>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.</p>
                    <p>      Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.</p>
                    <p>
                        Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
                        Home Places To Visit Best Time To Visit Packages Destination Food</p>
                </div>
                <div className="col-lg-6 my-2">
                    <img src={place} alt="Taminadu Tourist places" className='w-100 h-100' />
                    <p className='imgpara'>Tourist Place To Visit In Tamil Nadu</p>
                </div>
            </div>
            <p>
                The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams- Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.</p>

            <div>
                {placess.map((place) => (

                    <div id={place.title} className='my-5'>
                        <h3 className='text-center fs-2'>{place.title}</h3>
                        <h3 className='text-center mb-5'>Tourist place Visits</h3>
                     <div className="row my-3">
                        <div className="col-lg-3 ">
                            <img src={require(`./images/${place.visit1image}`)} className='w-100 h-100' alt={place.visit1head} />
                        </div>
                        <div className="col-lg-9 content ">
                            <h6 className='text-lg-start text-sm-center my-3 fw-bold'>{place.visit1head}</h6>
                            <p className='my-3'>{place.visit1para1}</p>
                            <p className='my-1'>{place.visit1para2}</p>
                        </div>
                     </div>
                     <div className="row my-3">
                        
                        <div className="col-lg-9 mt-4">
                            <h6 className='text-lg-start text-sm-center my-3 fw-bold content'>{place.visit2head}</h6>
                            <p className='my-3'>{place.visit2para1}</p>
                            <p className='my-1'>{place.visit2para2}</p>
                        </div>
                        <div className="col-lg-3  col-sm-12">
                            <img src={require(`./images/${place.visit2image}`)} className='w-100 h-100' alt={place.visit2head} />
                        </div>
                     </div>
                     <div className="row my-4">
                        <div className="col-lg-3 ">
                            <img src={require(`./images/${place.visit3image}`)} className='w-100 h-100' alt={place.visit3head} />
                        </div>
                        <div className="col-lg-9 content ">
                            <h6 className='text-lg-start text-sm-center my-3 fw-bold'>{place.visit3head}</h6>
                            <p className='my-3'>{place.visit3para1}</p>
                            <p className='my-1'>{place.visit3para2}</p>
                        </div>
                     </div>

                     <div className="row my-3">
                        
                        <div className="col-lg-9 mt-4">
                            <h6 className='text-lg-start text-sm-center my-3 fw-bold content'>{place.visit4head}</h6>
                            <p className='my-3'>{place.visit4para1}</p>
                            <p className='my-1'>{place.visit4para2}</p>
                        </div>
                        <div className="col-lg-3  col-sm-12">
                            <img src={require(`./images/${place.visit4image}`)} className='w-100 h-100' alt={place.visit3head} />
                        </div>
                     </div>

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Placevisit