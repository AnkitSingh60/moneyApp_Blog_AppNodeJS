const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    description: { type: String, required: true }
},
    {
        versionKey: false, // removed __v
        timestamps: true, // createdAt, updatedAt
    }
)

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;