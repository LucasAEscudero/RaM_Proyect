const { User } = require('../DB_connection');

const login = async (req, res) => {
    const {email, password} = req.query;

    if(!email || !password) return res.status(400).send('Faltan datos');

    try{
        const response = await User.findOne({ where: { email: email } });

        //if(!response) return res.status(404).send('Usuario no encontrado');

        if(response.password != password) return res.status(403).send("Contrasenia incorrecta");

        return res.status(200).json({ userId: response.id, access: true });
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = login;