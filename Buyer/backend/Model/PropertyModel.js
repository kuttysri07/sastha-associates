const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
    uploadimage:String,
    state :String ,
    district:String ,
    propertytype:String ,
    propertyId:String, 
    companyName:String, 
    aboutCompany:String, 
    propertyName:String, 
    propertyDetails:String,
    features:String,
    amenities:String,
    noOfPlots:Number, 
    plotSizeMin:Number, 
    plotSizeMax:Number,
    location:String,
    nearbySpots:String,
    legalities:String,
    address:String,
    place:String,
    googleMap:String, 
    launchDate:Date,
    plotPrice:Number,
    approve:Boolean,
    
    plot: {  // Update role to accept an object with "dealer" and "franchise"
        one: { type: Boolean, default: true },
        two: { type: Boolean, default: true },
        three: { type: Boolean, default: true },
        four: { type: Boolean, default: true },
        five: { type: Boolean, default: true },
        six: { type: Boolean, default: true },
        seven: { type: Boolean, default: true },
        eight: { type: Boolean, default: true },
        nine: { type: Boolean, default: true },
        ten: { type: Boolean, default: true }
    },
   
});

const PropertyModel = mongoose.model("propertyregister", PropertySchema);

module.exports = PropertyModel;
