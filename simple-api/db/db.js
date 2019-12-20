const {Schema, model} = require("mongoose");

const favouriteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = {Favourite: model("Favourite", favouriteSchema)};
