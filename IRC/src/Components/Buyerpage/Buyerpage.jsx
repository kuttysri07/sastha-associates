import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import "./buyerpage.css"; // Import your CSS file
import Nav2 from '../Nav2/Nav2';
import { useSearchParams } from 'react-router-dom';
import Search from '../Search/Search';

const url = process.env.REACT_APP_API_URL;

const Buyerpage = () => {
    const [buyerdata, setBuyerData] = useState([]);
    const [activeBuyerId, setActiveBuyerId] = useState(null); // State to track which buyer's "More" section is open
    const [searchparams] = useSearchParams();
    const [err, setErr] = useState(null); // To store error messages
    const [loading, setLoading] = useState(true); 

    

    useEffect(() => {
      const getbuyerdata = () => {
        axios.get(`${url}getnewhouses?` + searchparams.toString())
            .then(res => {
                if (res.data.length === 0) {
                  setErr("No user found"); // Set the message if no users are found
                  setLoading(false); // Set loading false once data is fetched
                } else {
                  setErr(null); // Clear error if data is found
                  setBuyerData(res.data);
                  setLoading(false); // Set loading false once data is fetched
                  console.log(res.data);
                }
               
            })
            .catch(err =>  { 
              console.log(err);
              setLoading(false); // Set loading false once data is fetche
              setErr("Server Error"); // Set the message if no users are found
            } );           
    };
        getbuyerdata();
       
    }, [searchparams]);

    const toggleBtnMore = (buyerId) => {
        // Toggle the activeBuyerId; if the same ID is clicked again, close it
        setActiveBuyerId(activeBuyerId === buyerId ? null : buyerId);
    };

    if (loading) {
      return <div className='loader'></div>; // Show loading indicator while data is being fetched
    }


    return (
        <Fragment>

            <Nav2 />

            <h1 className="buyer-title">New Houses</h1>
              <Search />

            {err ? (
        <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
          <h2>{err}</h2>
        </div>
      ):(
        <div className="buyer-container">

{buyerdata.map((data) => (
  <div className="buyer-card" key={data._id}>
      <center><img className='img'  src={data.uploadimage} alt="" /></center>
                      <table className="details-table">  
                        <tbody>  
                          <tr>
                            <th>Project Name</th>
                            <td>{data.projectName}</td>
                          </tr>
                          <tr>
                            <th>Title</th>
                            <td>{data.title}</td>
                          </tr>
                          <tr>
                            <th>Sale Type</th>
                            <td>{data.saleType}</td>
                          </tr>
                          <tr>
                            <th>Society</th>
                            <td>{data.society}</td>
                          </tr>
                          </tbody>
                          </table>

                          <button className={activeBuyerId === data._id ?"morehide":'more'} onClick={() => toggleBtnMore(data._id)}>
                             More
                          </button>
                          {activeBuyerId === data._id && (
                          <table className="details-table">
                          <tbody>
                          <tr>
                            <th>Approved Status</th>
                            <td> {data.status.rera && data.status.dtcp? "DTCP AND RERA" : data.status.dtcp ? 'DTCP' : data.status.rera ? 'RERA':" NO DTCP AND RERA"}</td>
                          </tr>
                          <tr>
                            <th>Construction Status</th>
                            <td>{data.constructionStatus}</td>
                          </tr>
                          <tr>
                            <th>House Type</th>
                            <td>{data.houseType}</td>
                          </tr>
                          <tr>
                            <th>Budget</th>
                            <td>{data.budget}</td>
                          </tr>
                          <tr>
                            <th>Build Up Area</th>
                            <td>{data.buildUpArea}</td>
                          </tr>
                          <tr>
                            <th>Carpet Area</th>
                            <td>{data.carpetArea}</td>
                          </tr>
                          <tr>
                            <th>Total Floors</th>
                            <td>{data.totalFloors}</td>
                          </tr>
                          <tr>
                            <th>Bedrooms</th>
                            <td>{data.bedrooms}</td>
                          </tr>
                          <tr>
                            <th>Bathrooms</th>
                            <td>{data.bathrooms}</td>
                          </tr>
                          <tr>
                            <th>Balcony</th>
                            <td>{data.balcony}</td>
                          </tr>
                          <tr>
                            <th>Furnishing</th>
                            <td>{data.furnishing}</td>
                          </tr>
                          <tr>
                            <th>Car Parking</th>
                            <td>{data.carParking}</td>
                          </tr>
                          <tr>
                            <th>Facing</th>
                            <td>{data.facing}</td>
                          </tr>
                          <tr>
                            <th>Description</th>
                            <td>{data.description}</td>
                          </tr>
                          <tr>
                            <th>Approved</th>
                            <td>{data.approve ? 'Yes' : 'No'}</td>
                          </tr>
                        </tbody>
                      </table>)}

                    </div>
                  ))}

                
            </div>
      )}

              
        </Fragment>
    );
}

export default Buyerpage;
