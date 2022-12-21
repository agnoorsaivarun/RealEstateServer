const express  =require("express");
const router = express.Router();



router.get('/property', async (req, res) => {
    res.status(200).send("property GET route")
    console.log(`This is cookie from backend ${req.headers.authorization}`);
    // console.log("get route of property")

    try{
        const token = req.headers.authorization;
        const verifyToken = jwt.verify(token, process.env.SC_KEY);
        console.log(verifyToken);
        if (verifyToken) {
          console.log(verifyToken);
          const userDetail = await signupModal.find({ email: verifyToken });
          //   console.log(userDetail);
    
          if (userDetail.length) {
            const propertyData = await userModal.find();
            res.status(200).send({ property: propertyData, userData: userDetail });
            console.log(userDetail);
          } else {
            res.status(409).send("Unauthorized user");
          }
          console.log(userDetail);
        } else {
          res.status(409).send("Unauthorized user");
        }
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
        console.log(err);
      }
});


module.exports = router;