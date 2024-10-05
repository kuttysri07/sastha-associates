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
        axios.get(`${url}getproperty?` + searchparams.toString())
            .then(res => {
                if (res.data.length === 0) {
                  setErr("No user found"); // Set the message if no users are found
                } else {
                  setErr(null); // Clear error if data is found
                  setBuyerData(res.data);
                  setLoading(false); // Set loading false once data is fetched
                  console.log(res.data);
                }
               
            })
            .catch(err =>  { 
              console.log(err);
              setErr(err.response.data.message || "An error occurred")
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

            <h1 className="buyer-title">Buyers</h1>
              <Search />

            {err ? (
        <div style={{ textAlign: 'center', color: 'red', marginTop: '20px' }}>
          <h2>{err}</h2>
        </div>
      ):(
        <div className="buyer-container">

                {buyerdata.map((data) => (
                    <div className="buyer-card" key={data._id}>
                        
                            <table className="details-table">
                                <tbody>
                                <tr>
                                    <th>Title</th>
                                    <td>{data.title}</td>
                                </tr>
                                
                                <tr>
                                    <th>Industry/Category</th>
                                    <td>{data.industry} / {data.category}</td>
                                </tr>
                                <tr>
                                <th>Role Looking for</th>
                                      <td>
                                        {(() => {
                                          const roles = [];

                                          if (data.role.dealer) roles.push("Dealer");
                                          if (data.role.franchise) roles.push("Franchise");
                                          if (data.role.wholesaler) roles.push("Wholesaler");
                                          if (data.role.stockist) roles.push("Stockist");
                                          if (data.role.distributor) roles.push("Distributor");
                                          if (data.role.agency) roles.push("Agency");
                                          if (data.role.retailer) roles.push("Retailer");

                                          return roles.length > 0 ? roles.join(", ") : "No Roles Selected";
                                        })()}
                                      </td>

                                </tr>
                                <tr>
                                    <th>Investment</th>
                                    <td>{data.investmentrange.min}</td>
                                </tr>
                               
                                </tbody>
                            </table>
                       


                        <button className={activeBuyerId === data._id ?"morehide":'more'} onClick={() => toggleBtnMore(data._id)}>
                             More
                        </button>

                        {/* Conditionally show more details if this buyer's ID matches the activeBuyerId */}
                        {activeBuyerId === data._id && (
                            <table className="details-table">
                              <tbody>
                                <tr>
                                  <th>Description:</th>
                                  <td>{data.description}</td>
                                </tr>
                                <tr>
                                  <th>Investment Minimum:</th>
                                  <td>{data.investmentrange.min}</td>
                                </tr>
                                <tr>
                                  <th>Investment Maximum:</th>
                                  <td>{data.investmentrange.max}</td>
                                </tr>
                                <tr>
                                  <th>Space Have:</th>
                                  <td>{data.space}</td>
                                </tr>
                                <tr>
                                  <th>State:</th>
                                  <td>{data.state}</td>
                                </tr>
                                <tr>
                                  <th>District:</th>
                                  <td>{data.district}</td>
                                </tr>
                                <tr>
                                  <th>Revenue:</th>
                                  <td>{data.revenue}</td>
                                </tr>
                                <tr>
                                  <th>Start Duration:</th>
                                  <td>{data.duration}</td>
                                </tr>
                                <tr>
                                  <th>Phone:</th>
                                  <td>{data.numberhide ? "You need to pay" : data.phone}</td>
                                </tr>
                              </tbody>
                            </table>
                        )}
                    </div>
                ))}
            </div>
      )}

              
        </Fragment>
    );
}

export default Buyerpage;
