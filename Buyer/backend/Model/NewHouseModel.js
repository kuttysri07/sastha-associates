const mongoose = require("mongoose");

const NewHouseSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    saleType: {
        type: String,
        required: true
    },
    society: {
        type: String,
        required: true
    },
    status: {
        dtcp: {
            type: Boolean,
            default: false
        },
        rera: {
            type: Boolean,
            default: false
        }
    },
    constructionStatus: {
        type: String,
        required: true
    },
    houseType: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    buildUpArea: {
        type: Number,
        required: true
    },
    carpetArea: {
        type: Number,
        required: true
    },
    totalFloors: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    balcony: {
        type: Number,
        required: false // Balcony may be optional
    },
    furnishing: {
        type: String,
        required: true
    },
    carParking: {
        type: String,
        required: true
    },
    facing: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    approve: {
        type: Boolean,
        default: false // Assume approval status is false by default
    }
});

const NewHouseModel = mongoose.model("NewHouse", NewHouseSchema);

module.exports = NewHouseModel;
