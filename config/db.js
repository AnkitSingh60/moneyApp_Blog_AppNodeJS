const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://ankit:ankit@chatappcluster.fsmp5ry.mongodb.net/?retryWrites=true&w=majority")
}
module.exports = connect;