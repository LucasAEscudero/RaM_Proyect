const users = require('../utils/users.js');

const login = (res, { email, password }) => {
    let access = false;

    users.forEach((user) => {
        if(user.email == email && user.password == password){
            access = true;
        }
    });

    if(access) return res.status(200).json({ access: true });
    return res.status(200).json({ access: false });
}

module.exports = login;