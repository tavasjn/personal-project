module.exports = {
    deleteDog: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        // console.log(id)

        db.delete_dog(+id)
            .then(data => res.status(200).send(data))
            .catch(err => {
                res.sendStatus(500)
            })
    }
}