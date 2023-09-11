const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

personSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.__v;
    return {
        id: obj._id,
        name: obj.name,
    };
};

const Person = mongoose.model('Person', personSchema);
module.exports = Person;