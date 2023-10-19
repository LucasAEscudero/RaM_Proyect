const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const {id, name, origin, status, image, species, gender} = req.body;

    if(!id || !name || !origin || !status || !image || !species || !gender) 
    return res.status(401).send('Faltan datos');

    try{
        await Favorite.create({
            id: id,
            name: name, 
            origin: origin, 
            status: status, 
            image: image, 
            species: species, 
            gender: gender
        });

        const myFavorites = await Favorite.findAll();

        return res.status(200).json(myFavorites);
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }

}

module.exports = {
    postFav
};