import React, { Component } from 'react';
import './Dogs.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { addDog } from '../../../ducks/reducer';




class Dogs extends Component {

    componentDidMount() {

    }



    // make another function that adds dog to redux
    render() {
        let { dogs } = this.props;
        // console.log(dogs)
        // console.log(this.props)
        console.log(this.props.redux.myDogs)
        return (
            <div>
                <div className='dog-box'>
                    <div>Breed: {dogs.breed}</div>
                    <img src={dogs.image} alt='' className='dog-image' />
                    <div>Size: {dogs.size}</div>
                    {dogs.hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
                    <div>Add to the list: <button onClick={(e) => this.props.addDog(dogs.dogs_id, this.props.index)}>Add</button></div>
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
    addDog
}

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);