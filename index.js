import express from "express"

import cors from 'cors'

import mongoose from "mongoose"

const databaseURI = 'mongodb://localhost:27017/learnwithfun'

await mongoose.connect(databaseURI)

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    mail: {type: String},
    number: {type: String},
})

const UserModel = mongoose.model("User", userSchema)


const app = express()

app.use(cors())
app.use(express.json())

app.post("/", async (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;

    const user = await UserModel.create({firstName: fname, lastName: lname,mail: email,number: phone})

    console.log("user", user)


    return res.json({success: true, user})
})

app.get("/get-all-movies", (req, res) => {
    // data base bata sab movies get garni 
    // ani resturn use garera client lai dini
})

app.post("/login", (req, res) => {
    // email ra password,
    // ani email hamro database ma xa ki xaina ? bhaye password check garinxa nabhaye register gar bhanera message send garinxa
    // email bhaye password pani check garinxa// yedi mile user lai site bhitra jani dinxam natra password failed bhanera msg send garxam
})


app.listen(3000, () => {
    console.log("Server is running in PORT 3000")
})