const Mongoose = require('mongoose')

const EventSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,   
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isVirtual: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const EventModel = Mongoose.model('Event', EventSchema);

module.exports = EventModel