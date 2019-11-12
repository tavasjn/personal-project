module.exports = {
    getDogs: async (req, res) => {
        const db = req.app.get('db');

        // Grab all the dogs so we can display them and then use //
        // the ai to get what we need //
        let dogs = await db.get_dogs()
        
             res.status(200).send(dogs)
            //  req.session.myDogs = myDogs;
            // .catch(err => {
            //     res.status(500).send({ errorMessage: 'Get_dogs not working' })
            // })
    },

    newDog: (req, res) => {
        const db = req.app.get('db');
        const { breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image } = req.body;

        db.new_dog([breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image]).then(data => res.status(200).send(data))
    },

    addToAccount: (req, res) => {
        const db = req.app.get('db');
        const { userId, dogs_id} = req.body;

        db.add_to_account(userId, dogs_id).then(data => res.status(200).send(data))
    },

    getAccountDogs: async (req, res) => {
        const db = req.app.get('db');
        const {userId} = req.body;

        let myDogs = await db.get_account_dogs(userId)
            res.status(200).send(myDogs)
    }

}