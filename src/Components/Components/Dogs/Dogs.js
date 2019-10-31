import React, { Component } from 'react';
import './Dogs.css';
import axios from 'axios';

class Dogs extends Component {
    
    constructor(){
        super();

        this.state = {
            myDogs: []
        }
    }

    componentDidMount() {

    }


    addToAccount = () => {
        let {breed, image, size, hypoallergenic} = this.props;
        axios.post('/api/addtoaccount', {breed, image, size, hypoallergenic}).then(res => this.setState({
            myDogs: res.data
        }))
            .catch(err => console.log('add to account broke', err));
    }



    render() {
        let { dogs } = this.props;
        return (
            <div>
                <div className='dog-box'>
                    <div>Breed: {dogs.breed}</div>
                    <img src={dogs.image} alt='' className='dog-image' />
                    <div>Size: {dogs.size}</div>
                    {dogs.hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
                    <div>Add to the list: <button>Add</button></div>
                </div>
            </div>
        )
    }
}

export default Dogs;