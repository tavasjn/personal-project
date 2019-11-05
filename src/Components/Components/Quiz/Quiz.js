import React, { Component } from 'react';
// This page is the layout for the quiz and will house all the questions //
// Depending on the sequence they choose the questions
// we will then project the top three choices for them using tensorFlow


// Style of Page below //
import './Quiz.css';
import Header from '../Header/Header';



class FindDog extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='quiz-body-page'>
                    <div className='question-box'>
                        <div className='question'>A Dog that is good for hunting?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons'>Yes!</button>
                            <button className='quiz-buttons'>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        <div className='question'>A Dog that is good for hunting?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons'>Yes!</button>
                            <button className='quiz-buttons'>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        <div className='question'>Soft fur?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons'>Yes!</button>
                            <button className='quiz-buttons'>No!</button>
                        </div>
                    </div>
                    <div className='question-box'>
                        <div className='question'>Hyoallergenic?</div>
                        <div className='quiz-page-spreading'>
                            <button className='quiz-buttons'>Yes!</button>
                            <button className='quiz-buttons'>No!</button>
                        </div>
                    </div>
                    <div className='question-box-size'>
                        <div className='question-size'>What size dog are you looking for?</div>
                        <div className='quiz-page-spreading-size'>
                            <button className='quiz-buttons-size'>Small</button>
                            <button className='quiz-buttons-size'>Small-Medium</button>
                            <button className='quiz-buttons-size'>Medium</button>
                            <button className='quiz-buttons-size'>Medium-Large</button>
                            <button className='quiz-buttons-size'>Large</button>
                        </div>
                    </div>
                    <div>
                        <button className='finish-quiz-button'>Complete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindDog;