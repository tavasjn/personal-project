import React, { Component } from 'react';
import './Dogs.css';

class Dogs extends Component {

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