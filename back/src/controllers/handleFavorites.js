let myFavorites = [];

const postFav = (res, character) => {
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

const deleteFav = (res, id) => {
    myFavorites = myFavorites.filter((character) => {
        return Number(character.id) !== Number(id);
    });

    return res.status(200).json(myFavorites);
}

module.exports = {
    myFavorites,
    postFav,
    deleteFav
}