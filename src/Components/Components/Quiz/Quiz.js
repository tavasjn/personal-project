import React, { Component } from 'react';
// This page is the layout for the quiz and will house all the questions //
// Depending on the sequence they choose the questions
// we will then project the top three choices for them using tensorFlow


// Style of Page below //
import './Quiz.css';
import Header from '../Header/Header';
import axios from 'axios';



class FindDog extends Component {
    constructor() {
        super();

        this.state = {
            results:
            [
                // {
                //     // indoorDog: 0,
                //     // size: 0,
                //     // hunting: 0,
                //     // playful: 0,
                //     // hypoallergenic: 0,
                //     // fur_type: 0
                // }
            ]
        }
    }

    runModel = () => {
        let {results} = this.state
        axios.post('/api/run', {results}).then(res => console.log('worked'))
    }

    huntingDog = (value) => {
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    hunting: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...this.state.results,
                    hunting: 0
                }]
            })
        }
    }

    indoorDog = (value) => {
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    indoorDog: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...this.state.results,
                    indoorDog: 0
                }]
            })
        }
    }


    furType = (value) => {
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    fur_type: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...this.state.results,
                    fur_type: 0
                }]
            })
        }
    }


    hypoallergenicDog = (value) => {
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    hypoallergenic: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...this.state.results,
                    hypoallergenic: 0
                }]
            })
        }
    }



    playfulDog = (value) => {
        // console.log(value)
        if (value === 'yes') {
            // console.log('yes hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    playful: 1
                }]
            })
        } else {
            this.setState({
                results: [{
                    ...this.state.results,
                    playful: 0
                }]
            })
        }
    }




    sizeDog = (value) => {
        // console.log(value)
        if (value === 'small') {
            // console.log('small hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    size: 0
                }]
            })
        } else if (value === 'small-medium') {
            // console.log('small-medium hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    size: 1
                }]
            })
        } else if (value === 'medium') {
            // console.log('medium hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    size: 2
                }]
            })
        } else if (value === 'medium-large') {
            // console.log('medium-large hit')
            this.setState({
                results: [{
                    ...this.state.results,
                    size: 3
                }]
            })
        } else if (value === 'large') {
            // console.log('large hit')
            this.setState({
                results: [{
                    ...this.state.results,
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
                <div className='quiz-body-page'>
                    <div className='question-box'>
                        {/* // this needs to go through and update state for hunting 
                        // if yes change to 1 else return 0 */}
                        <div className='question'>A Dog that is good for hunting?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.huntingDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.huntingDog(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Indoor dog?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.indoorDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.indoorDog(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Soft fur?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.furType(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.furType(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Hypoallergenic?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.hypoallergenicDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.hypoallergenicDog(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Playful?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.playfulDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.playfulDog(e.target.value)}>No!</button>
                        </div>
                    </div>
                    {/* // add playful quiz question //
                    // added playful // 
                    // need to link up each question with its own set state // */}

                    <div className='question-box-size'>

                        {/* // this question is different 
                        // for small we set to 0 
                        // for small-medium we want 1
                        // for medium we want 2
                        // for medium-large we want 3
                        // for large we want 4
                        // that way we can get the perfect dog for the user */}

                        <div className='question-size'>What size dog are you looking for?</div>
                        <div className='quiz-page-spreading-size'>
                            <button className='quiz-buttons-size' value={'small'} onClick={e => this.sizeDog(e.target.value)}>Small</button>
                            <button className='quiz-buttons-size' value={'small-medium'} onClick={e => this.sizeDog(e.target.value)}>Small-Medium</button>
                            <button className='quiz-buttons-size' value={'medium'} onClick={e => this.sizeDog(e.target.value)}>Medium</button>
                            <button className='quiz-buttons-size' value={'medium-large'} onClick={e => this.sizeDog(e.target.value)}>Medium-Large</button>
                            <button className='quiz-buttons-size' value={'large'} onClick={e => this.sizeDog(e.target.value)}>Large</button>
                        </div>
                    </div>
                    <div>
                        <button className='finish-quiz-button' onClick={this.runModel}>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindDog;