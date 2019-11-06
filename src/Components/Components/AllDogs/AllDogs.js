import React, { Component } from 'react';

import Dogs from '../Dogs/Dogs';
import './AllDogs.css';

// need axios and will need store as well //
// import axios from 'axios';
// Going to place all functions on the reducer instead //

import { connect } from 'react-redux';
import { getDogs } from '../../../ducks/reducer';


import Header from '../Header/Header';


class AllDogs extends Component {
    // move function to redux and delete state

    
    componentDidMount() {
        this.props.getDogs()
    }


    render() {
        // console.log(this.props.redux.dogs)
        // We have to do this to store everything on redux //
        // If we use hooks in the future we dont have to worry about store and reducer//
        // Much prefer Hooks but would like to demonstrate the use of redux //
        let { dogs } = this.props.redux;
        // console.log(this.props.dogs)
        return (
            <div>
                <Header />
                <div className='dog-page'>
                    <div>
                        All the good bois
                    </div>
                    <div>
                        {dogs.map((dogs, index) => (
                            <Dogs dogs={dogs}
                                index={index} 
                                key={`dogs ${index}`}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        redux: state
    }
}

const mapDispatchToProps = {
    getDogs
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDogs);