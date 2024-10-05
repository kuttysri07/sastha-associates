import axios from 'axios';
import React, { Fragment, useState } from 'react';
import './form.css';  // Import the CSS file
import Nav2 from '../Nav2/Nav2';
import { useNavigate } from 'react-router-dom';


const url = process.env.REACT_APP_API_URL;

const Form = () => {
  const [projectName, setProjectName] = useState('');
  const [title, setTitle] = useState('');
  const [saleType, setSaleType] = useState(''); // dropdown or select option
  const [society, setSociety] = useState('');
  
  // For checkboxes (DTCP, RERA)
  const [status, setStatus] = useState({
    dtcp: false,
    rera: false,
  });

  const [constructionStatus, setConstructionStatus] = useState(''); // dropdown or select option
  const [houseType, setHouseType] = useState('');
  const [budget, setBudget] = useState('');
  const [buildUpArea, setBuildUpArea] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [totalFloors, setTotalFloors] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [balcony, setBalcony] = useState('');
  const [furnishing, setFurnishing] = useState(''); // dropdown or select option
  const [carParking, setCarParking] = useState('');
  const [facing, setFacing] = useState(''); // dropdown or select option
  const [description, setDescription] = useState('');

  const [approve] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state


  const [submit ,setSubmit] = useState(false);
  const [err , setErr] = useState('');


  const navigate = useNavigate();

  // Handler to capture form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit
    const formData = {
      projectName,
      title,
      saleType,
      society,
      status,
      constructionStatus,
      houseType,
      budget,
      buildUpArea,
      carpetArea,
      totalFloors,
      bedrooms,
      bathrooms,
      balcony,
      furnishing,
      carParking,
      facing,
      description,
      approve
    };
    
    axios.post(`${url}getnewhouses`, formData)
      .then(res => {
        console.log(res);
        setSubmit(!submit);
       
      })
      .catch(err => {
        console.log(err);
        setErr(err);
      })
      .finally(() => {
        setLoading(false); // Stop loading after request completes
        navigate("/newhouses");
      });
  };

  return (
    <Fragment>
      <div className="form-container">
        <Nav2 />
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Register Information</h2>

      {/* Project Name */}
      <label>Project Name</label>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
      />

      {/* Title */}
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      {/* Sale Type */}
      <label>Sale Type</label>
      <input
        type="text"
        value={saleType}
        onChange={(e) => setSaleType(e.target.value)}
        placeholder="Enter sale type"
      />

      {/* Society */}
      <label>Society</label>
      <input
        type="text"
        value={society}
        onChange={(e) => setSociety(e.target.value)}
        placeholder="Enter society"
      />

      {/* Approved Status */}
      <label>Approved Status</label>
        <label>DTCP</label>
                      <input
                        type="checkbox"
                        checked={status.dtcp}
                        onChange={(e) =>
                          setStatus((prevstatus) => ({
                            ...prevstatus,
                            dtcp: e.target.checked,
                          }))
                        } />

        <label>RERA</label>
       
                      <input
                        type="checkbox"
                        checked={status.rera}
                        onChange={(e) =>
                          setStatus((prevstatus) => ({
                            ...prevstatus,
                            rera: e.target.checked,
                          }))
                        }
                      />
      

      {/* Construction Status */}
      <label>Construction Status</label>
      <input
        type="text"
        value={constructionStatus}
        onChange={(e) => setConstructionStatus(e.target.value)}
        placeholder="Enter construction status"
      />

      {/* House Type */}
      <label>House Type</label>
      <input
        type="text"
        value={houseType}
        onChange={(e) => setHouseType(e.target.value)}
        placeholder="Enter house type"
      />

      {/* Budget */}
      <label>Budget</label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Enter budget"
      />

      {/* Build Up Area */}
      <label>Build Up Area</label>
      <input
        type="text"
        value={buildUpArea}
        onChange={(e) => setBuildUpArea(e.target.value)}
        placeholder="Enter build up area"
      />

      {/* Carpet Area */}
      <label>Carpet Area</label>
      <input
        type="text"
        value={carpetArea}
        onChange={(e) => setCarpetArea(e.target.value)}
        placeholder="Enter carpet area"
      />

      {/* Total Floors */}
      <label>Total Floors</label>
      <input
        type="number"
        value={totalFloors}
        onChange={(e) => setTotalFloors(e.target.value)}
        placeholder="Enter total floors"
      />

      {/* Bedrooms */}
      <label>Bedrooms</label>
      <input
        type="number"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        placeholder="Enter number of bedrooms"
      />

      {/* Bathrooms */}
      <label>Bathrooms</label>
      <input
        type="number"
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
        placeholder="Enter number of bathrooms"
      />

      {/* Balcony */}
      <label>Balcony</label>
      <input
        type="text"
        value={balcony}
        onChange={(e) => setBalcony(e.target.value)}
        placeholder="Enter balcony details"
      />

      {/* Furnishing */}
      <label>Furnishing</label>
      <input
        type="text"
        value={furnishing}
        onChange={(e) => setFurnishing(e.target.value)}
        placeholder="Enter furnishing details"
      />

      {/* Car Parking */}
      <label>Car Parking</label>
      <input
        type="text"
        value={carParking}
        onChange={(e) => setCarParking(e.target.value)}
        placeholder="Enter car parking details"
      />

      {/* Facing */}
      <label>Facing</label>
      <input
        type="text"
        value={facing}
        onChange={(e) => setFacing(e.target.value)}
        placeholder="Enter facing direction"
      />

      {/* Description */}
      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        rows="5"
      ></textarea>
   

          <button type="submit" disabled={loading || submit}>{loading ? "Submitting..." : submit ? "Form Submitted" : "Submit"}</button>
          <div className="centered-text">{submit ? "Thank you for filling out the form!" : err}</div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
