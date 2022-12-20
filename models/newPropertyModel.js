const mongoose = require("mongoose");

const status=["sold","unsold"]
const propertySchema = new mongoose.Schema({
  // BASIC INFO
  //-----------------------------------------------
  _id: Number,
  property_type: {
    type: String,
    required: true,
  },
  negotiable: {
    type: String,
    required: true,
  },
  ownership: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  property_age: {
    type: String,
    required: true,
  },
  property_approved: {
    type: String,
    required: true,
  },
  property_description: {
    type: String,
    required: true,
  },
  bank_loan: {
    type: String,
    required: true,
  },
  //PROPERTY DETAILS
  //-----------------------------------
  length: {
    type: Number,
    required: true,
  },
  breadth: {
    type: Number,
    required: true,
  },
  total_area: {
    type: Number,
    required: true,
  },
  area_unit: {
    type: String,
    required: true,
  },
  no_of_bhk: {
    type: String,
    required: true,
  },
  no_of_floors: {
    type: Number,
    required: true,
  },
  attached: {
    type: String,
    required: true,
  },
  western_toilet: {
    type: String,
    required: true,
  },
  furnished: {
    type: String,
    required: true,
  },
  car_parking: {
    type: String,
    required: true,
  },
  lift: {
    type: String,
    required: true,
  },
  electricity: {
    type: String,
    required: true,
  },
  facing: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    min: 2,
  },
  mobile: {
    type: Number,
    required: true,
    min: 10,
  },
  posted_by: {
    type: String,
    required: true,
  },
  sale_type: {
    type: String,
    required: true,
  },
  featured_package: {
    type: String,
    required: true,
  },
  ppd_package: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    min: 6,
  },
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: Math.floor(Math.random()*100)
  },
  status: {
    type: String,
    default: status[Math.floor(Math.random()*2)]
  },
  days_left: {
    type: Number,
    default: Math.floor(Math.random()*10)
  },
});

const propertyModel = new mongoose.model("propertydetails", propertySchema);
module.exports = propertyModel;