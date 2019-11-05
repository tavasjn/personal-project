import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FindDog.css';
import Header from '../Header/Header';

class Quiz extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='findDog-page'>
                    <div className='find-dog-page'>
                        Taking this survey will assist you in finding the just right dog for you.
                        There will be a couple questions and then we will out put the top 3 dogs chosen for you and your needs.
                    </div>
                    <div className='find-dog-buttons'>
                        <div>
                            <Link to='/quiz'><button className='quiz-button'>Take the Survey</button></Link>
                        </div>
                        <div>
                            <Link to='/home'><button className='quiz-button'>Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;