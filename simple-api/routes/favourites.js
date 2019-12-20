const {Router} = require("express");
const router = Router();

const {getAllFavourites, createFavourite, deleteFavourite} = require("../services/favourites");


router.get("/", async (req, res) => {
    try {
        res.status(200).json(await getAllFavourites());
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message ? error.message : error});
    }
});

router.post("/", async (req, res) => {
    try {
        const favourite = await createFavourite(req.body.name.toLowerCase());
        res.status(200).json({favourite});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message ? error.message : error});
    }
});

router.delete("/", async (req, res) => {
    try {
        res.status(200).json(await deleteFavourite(req.body.name));
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message ? error.message : error});
    }
});


module.exports = router;
