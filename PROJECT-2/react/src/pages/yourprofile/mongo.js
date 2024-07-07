const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/projectex2")
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
}); 

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    regNo: {
        type: String,
        required: true
    },
    transactionID: {
        type: String,
        required: true
    }
});

const Collection = mongoose.model("newzcollection", Schema);

module.exports = Collection;