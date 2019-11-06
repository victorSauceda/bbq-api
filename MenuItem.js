const mongoose = require('mongoose');
const MenuItem = new mongoose.Schema({
    name: String,
    description: String,
    imgSrc: String,
    alt: String,
    price: Number,
    inStock: Boolean
});
module.exports = mongoose.model('MenuItem', MenuItem);