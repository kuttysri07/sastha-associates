import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import Nav2 from '../Nav2/Nav2';
import Search from '../Search/Search';
import { useSearchParams } from 'react-router-dom';


const url = process.env.REACT_APP_API_URL;

const Sellerpage = () => {
    const [propertydata, setPropertyData] = useState([]);
    const [activeSellerId, setActiveSellerId] = useState(null); // Track which seller's "More" section is open
    const [loading, setLoading] = useState(true);
    const [searchparams] = useSearchParams();
    const [err, setErr] = useState(null); // To store error messages 

    const getPropertyData = () => {
        axios.get(`${url}getproperty?`+searchparams.toString())
            .then(res => {
                if (res.data.length === 0) {
                    setErr("No user found"); // Set the message if no users are found
                    setLoading(false); // Set loading false once data is fetched
                  } else {
                    setErr(null); // Clear error if data is found
                    setPropertyData(res.data);
                    setLoading(false); // Set loading false once data is fetched
                    console.log(res.data);
                  }
            })
            .catch(err =>  { 
                console.log(err);
                setErr(err.response.data.message || "An error occurred")
              } ); 
                     
    }

    useEffect(() => {
        
        getPropertyData();
    }, [searchparams]);

    const toggleBtnMore = (id) => {
        setActiveSellerId(activeSellerId === id ? null : id);
    }

    if (loading) {
        return <div className='loader'></div>; // Show loading indicator while data is being fetched
      }
  

    return (
        <Fragment>
            <Nav2 />

            

            <h1 className="buyer-title">Properties</h1>

                <Search />

        {err ? (
                <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
                <h2>{err}</h2>
                </div>
        ):(
            <div className="buyer-container">
            {propertydata.map((data, index) => (
                <div className="buyer-card" key={index}>
                    <center><img className='img'  src={data.uploadimage} alt="" /></center>
                    
                    <table className="details-table">
                    <tbody>  
                                    <tr>
                                        <th>State</th>
                                        <td>{data.state}</td>
                                    </tr>
                                    <tr>
                                        <th>District</th>
                                        <td>{data.district}</td>
                                    </tr>
                                    <tr>
                                        <th>Property Type</th>
                                        <td>{data.propertytype}</td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Company Name</th>
                                        <td>{data.companyName}</td>
                                    </tr>

                        </tbody>

                </table>
                <button className={activeSellerId === data._id ?"morehide":'more'} onClick={() => toggleBtnMore(data._id)}>
                             More
                        </button>
                        {activeSellerId === data._id && (
                        <table className="details-table">
                            <tbody>
                                    <tr>
                                        <th>About Company</th>
                                        <td>{data.aboutCompany}</td>
                                    </tr>
                                    <tr>
                                        <th>Property Name</th>
                                        <td>{data.propertyName}</td>
                                    </tr>
                                    <tr>
                                        <th>Property Details</th>
                                        <td>{data.propertyDetails}</td>
                                    </tr>
                                    <tr>
                                        <th>Features</th>
                                        <td>{data.features}</td>
                                    </tr>
                                    <tr>
                                        <th>Amenities</th>
                                        <td>{data.amenities}</td>
                                    </tr>
                                    <tr>
                                        <th>No. of Plots</th>
                                        <td>{data.noOfPlots}</td>
                                    </tr>
                                    <tr>
                                        <th>Plot Size (Min)</th>
                                        <td>{data.plotSizeMin}</td>
                                    </tr>
                                    <tr>
                                        <th>Plot Size (Max)</th>
                                        <td>{data.plotSizeMax}</td>
                                    </tr>
                                    <tr>
                                        <th>Location</th>
                                        <td>{data.location}</td>
                                    </tr>
                                    <tr>
                                        <th>Nearby Spots</th>
                                        <td>{data.nearbySpots}</td>
                                    </tr>
                                    <tr>
                                        <th>Legalities</th>
                                        <td>{data.legalities}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{data.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Place</th>
                                        <td>{data.place}</td>
                                    </tr>
                                    <tr>
                                        <th>Google Map</th>
                                        <td>{data.googleMap}</td>
                                    </tr>
                                    <tr>
                                        <th>Launch Date</th>
                                        <td>{data.launchDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Plot Price</th>
                                        <td>{data.plotPrice}</td>
                                    </tr>
                        <tr>
                        <th>Closed Plots / Remaining Plot</th>
                              <td>
                                1
                                <input type="checkbox" checked={data.plot.one} />
                                2
                                <input type="checkbox" checked={data.plot.two} />
                                3
                                <input type="checkbox" checked={data.plot.three} />
                                4
                                <input type="checkbox" checked={data.plot.four} />
                                5
                                <input type="checkbox" checked={data.plot.five} />
                                6
                                <input type="checkbox" checked={data.plot.six} />
                                7
                                <input type="checkbox" checked={data.plot.seven} />
                                8
                                <input type="checkbox" checked={data.plot.eight} />
                                9
                                <input type="checkbox" checked={data.plot.nine} />
                                10
                                <input type="checkbox" checked={data.plot.ten} />
                              </td>
                        </tr>

                            

                        
                    </tbody>
                </table>
                        )}

              
            </div>
        ))}
    </div>
      )}

           
        </Fragment>
    )
}

export default Sellerpage;
