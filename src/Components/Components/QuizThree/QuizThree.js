import React, { Component } from 'react';
// This page is the layout for the quiz and will house all the questions //
// Depending on the sequence they choose the questions
// we will then project the top three choices for them using tensorFlow


// Style of Page below //
// import Header from '../Header/Header';
// import axios from 'axios';



class QuizThree extends Component {

    render(props) {
        console.log(this.props)
        return (
            <div>
                {/* <Header /> */}
                <div className='quiz-body-page'>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Playful?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.props.playfulDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.props.playfulDog(e.target.value)}>No!</button>
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
                            <button className='quiz-buttons-size' value={'small'} onClick={e => this.props.sizeDog(e.target.value)}>Small</button>
                            <button className='quiz-buttons-size' value={'small-medium'} onClick={e => this.props.sizeDog(e.target.value)}>Small-Medium</button>
                            <button className='quiz-buttons-size' value={'medium'} onClick={e => this.props.sizeDog(e.target.value)}>Medium</button>
                            <button className='quiz-buttons-size' value={'medium-large'} onClick={e => this.props.sizeDog(e.target.value)}>Medium-Large</button>
                            <button className='quiz-buttons-size' value={'large'} onClick={e => this.props.sizeDog(e.target.value)}>Large</button>
                        </div>
                    </div>
                    <div>
                        <button className='finish-quiz-button' onClick={this.props.runModel}>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizThree;