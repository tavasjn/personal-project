const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {username, password} = req.body;
        // connnects Data Base //
        const db = req.app.get('db');
        // Declare let to find user to login //
        let existingUser = await db.check_username(username);
        existingUser = existingUser[0];

        // If Statement to grab that user //
        if(!existingUser) {
            return res.status(409).send('Username does not exist');
        }
        const authenticated = bcrypt.compareSync(password, existingUser.password);

        if(authenticated){
            delete existingUser.password;
            req.session.user = existingUser;
            return res.status(202).send(req.session.user);
        } else {
            return res.status(401).send('Password is incorrect')
        }
    },

    register: async(req, res) => {
        const {username, password} = req.body;
        // Conneted to DB //
        const db = req.app.get('db');

        //Declare Let here // 
        let existingUser = await db.check_username(username);
        existingUser = existingUser[0];

        // If to see if user is taken or not //
        if(existingUser){
            return res.status(409).send('Username is taken!');
        }
        // Using Hash we will encrypt passwords //
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Declaring a new Let to add a user //
        let newUser = await db.register({
            username,
            password: hash
        });
        newUser = newUser[0];
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200);
    }
}