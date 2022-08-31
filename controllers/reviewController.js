const Review = require("../models/reviewModel");

// Create review
app.post('/api/review', async (req, res) => {
    let review = new Review (req.body);
    let newReview = await review.save();
    res.send(newReview);
})

// Delete review
app.delete('/review/:id', async (req, res) => {
    const review = await Review.deleteOne({ _id: req.params.id })
    res.send(review)
})


