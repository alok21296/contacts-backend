const express = require("express");
const router = express.Router();

// router.route("/").get((req,res)=>{
//     res.status(200).json({message:"get all contacts"})
// }); 
// router.route("/").post((req,res)=>{
//     res.status(200).json({message:"Create contacts"})
// }); 
// router.route("/:id").get((req,res)=>{
//     res.status(200).json({message:`get all contacts ${req.params.id}`})
// }); 
// router.route("/:id").put((req,res)=>{
//     res.status(200).json({message:`Update contacts ${req.params.id}`})
// }); 
// router.route("/:id").delete((req,res)=>{
//     res.status(200).json({message:`Delete contacts ${req.params.id}`})
// }); 


const {getContacts,createContact,getContact,updateContact,deleteContact}=require("../controllers/contactController")

//Transffered (req,res) logic to controller fields.

router.route("/").get(getContacts); 
router.route("/").post(createContact); 
router.route("/:id").get(getContact); 
router.route("/:id").put(updateContact); 
router.route("/:id").delete(deleteContact); 

module.exports = router;