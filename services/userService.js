const User = require('../models/user');

class UserService {

    async login(email, password) {
        return new Promise((resolve, reject) => {
            if (email === "test@gmail.com" && password === "test")
                resolve(new User(1, email, "test"));
            reject();
        });
    }
}

module.exports = UserService;


