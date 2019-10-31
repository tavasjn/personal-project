module.exports = {
    getDogs: (req, res) => {
        const db = req.app.get('db');

        // Grab all the dogs so we can display them and then use //
        // the ai to get what we need //
        db.get_dogs()
            .then(dbResponse => res.status(200).send(dbResponse))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Get_dogs not working' })
            })
    },

    newDog: (req, res) => {
        const db = req.app.get('db');
        const { breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image } = req.body;

        db.new_dog([breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image]).then(data => res.status(200).send(data))
    },

    addToAccount: (req, res) => {
        const db = req.app.get('db');
        const { breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image } = req.body;

        db.add_to_account([breed, size, indoor_outdoor, hunting, playful, hypoallergenic, fur_type, description, image]).then(data => res.status(200).send(data))

    }
}