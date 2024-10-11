const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contacts.find();
    res.status(200).json(contacts)   
});


//@desc  Create a contact
//@route POST /api/contacts
//@access public
const createContact=asyncHandler(async(req,res)=>{
    //Whenever we need to accept data from a client to a server we use body parser and middleware app.use in server .js.
    console.log("The request body is:",req.body)
    const {name,email}=req.body
    if(!name||!email)
    {
        res.status(400)
        throw new Error("All fields are mandatory");
        
    }
    res.status(200).json({message:"Create contact"})
});


//@desc Get individual contact
//@route GET /api/contacts/:id
//@access public
const getContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get all contacts ${req.params.id}  is all`})
});


//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update contacts ${req.params.id}`})
});


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contacts ${req.params.id}`})
});



module.exports={getContacts,createContact,getContact,updateContact,deleteContact}; 