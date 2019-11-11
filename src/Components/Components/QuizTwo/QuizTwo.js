import React, { Component } from 'react';
// This page is the layout for the quiz and will house all the questions //
// Depending on the sequence they choose the questions
// we will then project the top three choices for them using tensorFlow
import {Link} from 'react-router-dom';

// Style of Page below //
// import Header from '../Header/Header';
// import axios from 'axios';



class QuizTwo extends Component {

    render(props) {
        // console.log(this.state)
        return (
            <div>
                {/* <Header /> */}
                <div className='quiz-body-page'>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Soft fur?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.props.furType(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.props.furType(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        {/* // if yes change to 1 else return 0 */}
                        <div className='question'>Hypoallergenic?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons' value={'yes'} onClick={e => this.props.hypoallergenicDog(e.target.value)}>Yes!</button>
                            <button className='quiz-buttons' value={'no'} onClick={e => this.props.hypoallergenicDog(e.target.value)}>No!</button>
                        </div>
                    </div>
                    <div>
                        <button className='finish-quiz-button'><Link to='/quiz/step-three'>Next</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizTwo;