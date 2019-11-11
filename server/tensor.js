const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const training = require('./trainingData.json');
const trainingPractice = require('./trainingData.json');


module.exports = {
    runModel: async (req, res) => {
        let {
            results,
            dogs
        } = req.body
        // console.log(req.body.results)
        // Connect Data base //
        const db = req.app.get('db')
        // set the empty array to use //

        // now we build the run model for the tensorflow data //
        // we already have hard coded data in the iris.json file at the root of project //
        // at 20 tests for 20 objects we get 400 tests //
        // hopefully giving us the most accurate output //
        // convert/setup our data
        // console.log(training.indoorDog)
        const trainingData = tf.tensor2d(training.map(item => [
            item.indoorDog, item.size, item.hunting, item.playful, item.hypoallergenic, item.fur_type,
        ]))
        const outputData = tf.tensor2d(training.map(item => [
            item.breed === "Labrador" ? 1 : 0,
            item.breed === "Pomeranian" ? 1 : 0,
            item.breed === "Pug" ? 1 : 0,
            item.breed === "Siberian Husky" ? 1 : 0,
            item.breed === "Beagle" ? 1 : 0,
            item.breed === "Bulldog" ? 1 : 0,
            item.breed === "Poodle" ? 1 : 0,
            item.breed === "Chihuahua" ? 1 : 0,
            item.breed === "Rottweiler" ? 1 : 0,
            item.breed === "Boxer" ? 1 : 0,
            item.breed === "Golden Retriever" ? 1 : 0,
            item.breed === "Dobermann" ? 1 : 0,
            item.breed === "Shih Tzu" ? 1 : 0,
            item.breed === "Shiba Inu" ? 1 : 0,
            item.breed === "Great Dane" ? 1 : 0,
            item.breed === "Samoyed" ? 1 : 0,
            item.breed === "St. Bernard" ? 1 : 0,
            item.breed === "German Shepherd" ? 1 : 0,
            item.breed === "Border Collie" ? 1 : 0,
            item.breed === "Boston Terrier" ? 1 : 0,
        ]))
        // console.log(results)
        const testingData = tf.tensor2d(results.map(item => [
            item.indoorDog, item.size, item.hunting, item.playful, item.hypoallergenic, item.fur_type,
        ]))

        // build neural network
        const model = tf.sequential()

        model.add(tf.layers.dense({
            inputShape: [6],
            activation: "sigmoid",
            units: 6,
        }))
        model.add(tf.layers.dense({
            inputShape: [6],
            activation: "sigmoid",
            units: 20,
        }))
        model.compile({
            loss: "meanSquaredError",
            optimizer: tf.train.adam(.06),
        })
        // train/fit our network
        const startTime = Date.now()
        model.fit(trainingData, outputData, { epochs: 100 })
            .then(async(history) => {
                console.log("DONE!", Date.now() - startTime)
                model.predict(testingData).print()
                let dogResults = await model.predict(testingData).data()
                // console.log(dogResults)

                // Function here to sort and display 
                let sortedDogs = dogResults.sort(function (a, b) {
                    return b - a;
                });
                console.log(sortedDogs)
                let topThree = [];
                for (let i = 0; i < 3; i++) {
                    let index = dogResults.findIndex(dogs => dogs === sortedDogs[i])
                    console.log("sortedDogs[i]", sortedDogs[i])
                    console.log('dogs', dogs)
                    console.log('index', index)
                    topThree.push(index)
                }
                console.log(topThree)
                res.status(200).send(topThree)


                res.sendStatus(200);
            })
        // test network
    }
}