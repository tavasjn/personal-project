import React, { Component } from 'react';

import Dogs from '../Dogs/Dogs';
import './AllDogs.css';

// need axios and will need store as well //
import axios from 'axios';
import Header from '../Header/Header';


class AllDogs extends Component {

    constructor() {
        super();

        this.state = {
            dogs: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/dogs').then(res => this.setState({
            dogs: res.data
        }))
            .catch(err => console.log('Get dogs is not working', err))
    }


    render() {
        let { dogs } = this.state;
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
                                index={index} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllDogs;