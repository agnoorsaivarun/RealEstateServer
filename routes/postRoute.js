const express = require("express");
const app = express();


const  PropertyDetailsModel=require("../models/newPropertyModel")


app.post('/addnewproperty', async (req, res) => {
        const data= await PropertyDetailsModel.find()
        let ppid=-1
        if(data.length===0) ppid=1
        else ppid=data[data.length-1]._id+1
        const newProperty = await PropertyDetailsModel({
        _id: ppid,
        property_type: req.body.property_type,
        price: Number(req.body.price),
        property_age: req.body.property_age,
        property_description: req.body.property_description,
        negotiable: req.body.negotiable,
        ownership: req.body.ownership,
        property_approved: req.body.property_approved,
        bank_loan: req.body.bank_loan,

        length: Number(req.body.length),
        breadth: Number(req.body.breadth),
        total_area: Number(req.body.total_area),
        area_unit: req.body.area_unit,
        no_of_bhk: req.body.no_of_bhk,
        no_of_floors: Number(req.body.no_of_floors),
        attached: req.body.attached,
        western_toilet: req.body.western_toilet,
        furnished: req.body.furnished,
        car_parking: req.body.car_parking,
        lift: req.body.lift,
        electricity: req.body.electricity,
        facing: req.body.facing,

        name: req.body.name,
        mobile: Number(req.body.mobile),
        posted_by: req.body.posted_by,
        sale_type: req.body.sale_type,
        featured_package: req.body.featured_package,
        ppd_package: req.body.ppd_package,
        email: req.body.email,
        city: req.body.city,
        area: req.body.area,
        pincode: Number(req.body.pincode),
        address: req.body.address,
        landmark: req.body.landmark,
        latitude: Number(req.body.latitude),
        longitude: Number(req.body.longitude),
    })
    newProperty.save().then((data) => {
        console.log('Property Added')
        res.json(data);
    }).catch(err => console.log(err.message));
});

module.exports = app