const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:7TJaFOLSF1g9GjIO@cluster0.sduruc7.mongodb.net/userME")


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model("User", userSchema);


module.exports = {
    User
}