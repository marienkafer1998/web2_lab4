const {Favourite} = require("../db/db");

async function getAllFavourites() {
    return await Favourite.find();
}

async function createFavourite(name) {
    return await Favourite.findOneAndUpdate(
        {name},
        {name},
        {upsert: true, new: true}
    );
}

async function deleteFavourite(name) {
    return await Favourite.findOneAndDelete({name});
}


module.exports = {
    getAllFavourites,
    createFavourite,
    deleteFavourite,
};
