import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FindDog.css';
import Header from '../Header/Header';

class Quiz extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='dog-page'>
                    <div className='find-dog-page'>
                        Taking this survey will assist you in finding the just right dog for you.
                        There will be a couple questions and then we will out put the top 3 dogs chosen for you and your needs.
                    </div>
                    <div className='find-dog-buttons'>
                        <div>
                            <Link to='/quiz'>Take the Survey</Link>
                        </div>
                        <div>
                            <Link to='/home'>Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;