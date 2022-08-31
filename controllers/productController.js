const Product = require("../models/productModel");

// Add Products
app.post('/api/products', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})


// Read All Products & populate
app.get('/products', async (req, res) => {
    let products = await Product.find().populate({ path: "productId", select: ["name", "price"] }).lean().exec();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No products found" })
    }
})

// Read Product by :id
app.get('/products/:id', async (req, res) => {
    let products = await Product.findOne({ _id: req.params.id })
    if (products) {
        res.send(products)
    } else {
        res.send({ message: "No products found.." })
    }
})

// Update Product
app.put('/products/:id', async (req, res) => {
    let products = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(products)
})

// Delete Product
app.delete('/products/:id', async (req, res) => {
    const products = await Product.deleteOne({ _id: req.params.id })
    res.send(products)
})
