
const mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    name: { type: String },
    ebook: { type: String },
    redemptioncode: { type: Number },
    grade: { type: Number },
});

module.exports = { Student };