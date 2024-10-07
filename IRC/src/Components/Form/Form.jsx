import axios from 'axios';
import React, { Fragment, useState } from 'react';
import './form.css';  // Import the CSS file
import Nav2 from '../Nav2/Nav2';
import app from "../firebase";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";


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
  const[uploadimage ,setUploadImage] = useState('');
  const [uploading ,setUploading] =useState(false);


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
    uploadimage,
    approve
  };



  const Handelchange = async (e) => {
    const image = e.target.files[0];
    if (image) {
      try {
        setUploading(true);
        const storage = getStorage(app);
        const storageRef = ref(storage, "Houses/" + image.name);
        
        // Upload the image to Firebase storage
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        const downloadUrl = await getDownloadURL(storageRef);
        
        // Set the image URL directly in the state
        setUploadImage(downloadUrl);
        setUploading(false)
      } catch (error) {
        console.log(error.message);
        
      }
    }
  };


  

  // Handler to capture form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit

    axios.post(`${url}newhousesregister`, formData)
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
       
      });
  };

  return (
    <Fragment>
      <div className="form-container">
        <Nav2 />
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Register Information</h2>
         
        
  <label for="file-upload" className="custom-file-upload">
Upload Image 
  </label>
  <input  id="file-upload" type="file" multiple onChange={Handelchange} />
 <center><p>{ uploading ? "Please wait Uploading Image " : ""} </p> </center>



      {/* Project Name */}
      <label>Project Name</label>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
        required
      />

      {/* Title */}
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
      />

      {/* Sale Type */}
      <label>Sale Type</label>
      <input
        type="text"
        value={saleType}
        onChange={(e) => setSaleType(e.target.value)}
        placeholder="Enter sale type"
        required
      />

      {/* Society */}
      <label>Society</label>
      <input
        type="text"
        value={society}
        onChange={(e) => setSociety(e.target.value)}
        placeholder="Enter society"
        required
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
        required
      />

      {/* House Type */}
      <label>House Type</label>
      <input
        type="text"
        value={houseType}
        onChange={(e) => setHouseType(e.target.value)}
        placeholder="Enter house type"
        required
      />

      {/* Budget */}
      <label>Budget</label>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        placeholder="Enter budget"
        required
      />

      {/* Build Up Area */}
      <label>Build Up Area</label>
      <input
        type="text"
        value={buildUpArea}
        onChange={(e) => setBuildUpArea(e.target.value)}
        placeholder="Enter build up area"
        required
      />

      {/* Carpet Area */}
      <label>Carpet Area</label>
      <input
        type="text"
        value={carpetArea}
        onChange={(e) => setCarpetArea(e.target.value)}
        placeholder="Enter carpet area"
        required
      />

      {/* Total Floors */}
      <label>Total Floors</label>
      <input
        type="number"
        value={totalFloors}
        onChange={(e) => setTotalFloors(e.target.value)}
        placeholder="Enter total floors"
        required
      />

      {/* Bedrooms */}
      <label>Bedrooms</label>
      <input
        type="number"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        placeholder="Enter number of bedrooms"
        required
      />

      {/* Bathrooms */}
      <label>Bathrooms</label>
      <input
        type="number"
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
        placeholder="Enter number of bathrooms"
        required
      />

      {/* Balcony */}
      <label>Balcony</label>
      <input
        type="text"
        value={balcony}
        onChange={(e) => setBalcony(e.target.value)}
        placeholder="Enter balcony details"
        required
      />

      {/* Furnishing */}
      <label>Furnishing</label>
      <input
        type="text"
        value={furnishing}
        onChange={(e) => setFurnishing(e.target.value)}
        placeholder="Enter furnishing details"
        required
      />

      {/* Car Parking */}
      <label>Car Parking</label>
      <input
        type="text"
        value={carParking}
        onChange={(e) => setCarParking(e.target.value)}
        placeholder="Enter car parking details"
        required
      />

      {/* Facing */}
      <label>Facing</label>
      <input
        type="text"
        value={facing}
        onChange={(e) => setFacing(e.target.value)}
        placeholder="Enter facing direction"
        required
      />

      {/* Description */}
      <label>Description</label>
      <input
      type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        rows="5"
      />
   

          <button type="submit" disabled={loading || submit || uploading}>{loading ? "Submitting..." : submit ? "Form Submitted" : "Submit"}</button>
          <div className="centered-text">{submit ? "Thank you for filling out the form!" : err}</div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
