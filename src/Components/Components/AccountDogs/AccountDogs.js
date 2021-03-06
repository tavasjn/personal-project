import React, { Component } from 'react';

// styling below
import './AccountDogs.css';
// import axios from 'axios';

// redux import below
import { connect } from 'react-redux';
import { getAccountDogs } from '../../../ducks/reducer';




class AccountDogs extends Component {
    

    // make another function that adds dog to redux
    render() {
        let { myDogs } = this.props;
        // console.log(getAccountDogs)
        // console.log(this.props)
        // console.log(this.props.redux.myDogs)
        return (
            <div>
                <div className='dog-box'>
                    <div>Breed: {myDogs.breed}</div>
                    <img src={myDogs.image} alt='' className='dog-image' />
                    <div>Size: {myDogs.size}</div>
                    {myDogs.hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
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
    getAccountDogs
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDogs);