import React, { Component } from 'react';
// This page is the layout for the quiz and will house all the questions //
// Depending on the sequence they choose the questions
// we will then project the top three choices for them using tensorFlow
// import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// Components
import Quiz from '../Quiz/Quiz';
import QuizTwo from '../QuizTwo/QuizTwo';
import QuizThree from '../QuizThree/QuizThree';


// Style of Page below //
// import './Quiz.css';
import Header from '../Header/Header';
import axios from 'axios';
// import QuizThree from '../QuizThree/QuizThree';



class QuizParent extends Component {
    constructor() {
        super();

        this.state = {
            results:
                [
                    {
                        indoorDog: 0,
                        size: 0,
                        hunting: 0,
                        playful: 0,
                        hypoallergenic: 0,
                        fur_type: 0
                    }
                ]
        }
    }

    runModel = () => {
        let { results } = this.state
        axios.post('/api/run', { results }).then(res => console.log('worked'))
    }

    huntingDog = (value) => {
        // console.log(value)
        let obj = this.state.results[0]
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...obj,
                    hunting: 1
                    // indoorDog: obj.indoorDog
                    // size: obj.size,

                    // playful: obj.playful,
                    // hypoallergenic: obj.hypoallergenic,
                    // fur_type: obj.fur_type
                }]
            })
            // console.log(this.state)
        } else {
            this.setState({
                results: [{
                    ...obj,
                    hunting: 0
                }]
            })
        }
    }

    indoorDog = (value) => {
        let obj = this.state.results[0]
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...obj,
                    indoorDog: 1,
                    // size: obj.size,
                    // hunting: obj.hunting,
                    // playful: obj.playful,
                    // hypoallergenic: obj.hypoallergenic,
                    // fur_type: obj.fur_type
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...obj,
                    indoorDog: 0
                    // size: this.state.size,
                    // hunting: this.state.hunting,
                    // playful: this.state.playful,
                    // hypoallergenic: this.state.hypoallergenic,
                    // fur_type: this.state.fur_type
                }]
            })
        }
    }


    furType = (value) => {
        let obj = this.state.results[0]
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...obj,
                    fur_type: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...obj,
                    fur_type: 0
                }]
            })
        }
    }


    hypoallergenicDog = (value) => {
        let obj = this.state.results[0]
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...obj,
                    hypoallergenic: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...obj,
                    hypoallergenic: 0
                }]
            })
        }
    }



    playfulDog = (value) => {
        let obj = this.state.results[0]
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...obj,
                    playful: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...obj,
                    playful: 0
                }]
            })
        }
    }




    sizeDog = (value) => {
        let obj = this.state.results[0]
        // console.log(value)
        if (value === 'small') {
            // console.log('small hit')
            this.setState({
                results: [{
                    ...obj,
                    size: 0
                }]
            })
        } else if (value === 'small-medium') {
            // console.log('small-medium hit')
            this.setState({
                results: [{
                    ...obj,
                    size: 1
                }]
            })
        } else if (value === 'medium') {
            // console.log('medium hit')
            this.setState({
                results: [{
                    ...obj,
                    size: 2
                }]
            })
        } else if (value === 'medium-large') {
            // console.log('medium-large hit')
            this.setState({
                results: [{
                    ...obj,
                    size: 3
                }]
            })
        } else if (value === 'large') {
            // console.log('large hit')
            this.setState({
                results: [{
                    ...obj,
                    size: 4
                }]
            })
        }
    }



    render() {
        // console.log(this.state)
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/quiz/step-one'
                        render={props => {
                            return (
                                <Quiz {...props} 
                                    results={this.state.results}
                                    huntingDog={this.huntingDog}
                                    indoorDog={this.indoorDog}
                                />
                            );
                        }}
                    />
                    <Route path='/quiz/step-two'
                        render={props => {
                            return (
                                <QuizTwo {...props} 
                                    results={this.state.results}
                                    furType={this.furType}
                                    hypoallergenicDog={this.hypoallergenicDog}

                                />
                            );
                        }}
                    />
                    <Route path='/quiz/step-three'
                        render={props => {
                            return (
                                <QuizThree {...props} 
                                    results={this.state.results}
                                    runModel={this.runModel}
                                    playfulDog={this.playfulDog}
                                    sizeDog={this.sizeDog}
                                />
                            );
                        }}
                    />
                    {/* <Route path='/quiz/step-two' component={QuizTwo} />
                    <Route path='/quiz/step-three' component={QuizThree} /> */}
                </Switch>
            </div >
        )
    }
}

export default QuizParent;