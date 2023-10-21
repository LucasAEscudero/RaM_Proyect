const { User } = require('../DB_connection');

const postUsers = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)

    if(!email || !password) return res.status(400).send('Faltan datos');

    try{
        const response = await User.create({ email: email, password: password });

        return res.status(200).send(response);
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
 postUsers
};