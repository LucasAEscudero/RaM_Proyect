let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.query;

    myFavorites = myFavorites.filter((character) => {
        return Number(character.id) !== Number(id);
    });

    return res.status(200).json(myFavorites);
}

const logOutFav = (req, res) => {
    myFavorites = [];

    return res.status(200).send('logOut succesfully');
}

module.exports = {
    myFavorites,
    postFav,
    deleteFav,
    logOutFav
}