const Mongoose = require('mongoose')

const CategorySchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,

    }
}, {
    timestamps: true
})

const CategoryModel = Mongoose.model('Category', CategorySchema);
module.exports = CategoryModel