import React, { Component } from 'react';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import { getDogs } from '../../../ducks/reducer';

class QuizResults extends Component {
    constructor() {
        super();

        this.state = {
            dogs: [],
            firstPlace: [{breed: '', size: '', hypoallergenic: false, image: ''}],
            secondPlace: [{breed: '', size: '', hypoallergenic: false, image: ''}],
            thirdPlace: [{breed: '', size: '', hypoallergenic: false, image: ''}]
        }
    }

    componentDidMount= async() => {
        await this.props.getDogs()
        let firstPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][0])
        // console.log(this.props.redux.dogs)
        // console.log(this.props.redux.results[0][1])
        // console.log(firstPlace)
        
        let secondPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][1])
        // console.log(secondPlace)

        let thirdPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][2])
        // console.log(thirdPlace)

        this.setState({
            firstPlace: firstPlace,
            secondPlace: secondPlace,
            thirdPlace: thirdPlace
        })
    }

    // topDogs = () => {
    //     let firstPlace = this.props.redux.dogs.filter(e => e.dogs_id === this.props.redux.results[0])

    //     let secondPlace = this.props.redux.dogs.filter(e => e.dogs_id === this.props.redux.results[1])

    //     let thirdPlace = this.props.redux.dogs.filter(e => e.dogs_id === this.props.redux.results[2])

    //     this.setState({
    //         firstPlace: firstPlace[0],
    //         secondPlace: secondPlace[0],
    //         thirdPlace: thirdPlace[0]
    //     })
    // }


    render() {
        // console.log(this.props.redux.dogs)
        // console.log(this.props.redux.results)
        // console.log(this.state.firstPlace)
        // console.log(this.state.firstPlace[0])
        // console.log(this.state.firstPlace[0].breed)
        let { firstPlace} = this.state;
        let { secondPlace} = this.state;
        let { thirdPlace} = this.state;
        return (
            <div>
                <Header />
                <div className='dog-page'>
                    <div className='dog-box'>
                        <div>Breed: {firstPlace[0].breed}</div>
                        <img src={firstPlace[0].image} alt='' className='dog-image' />
                        <div>Size: {firstPlace[0].size}</div>
                        {firstPlace[0].hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
                        <div>Add to the list: <button onClick={(e) => this.props.addDog(firstPlace[0].dogs_id, this.props.index)} className='add-button'>Add</button></div>
                    </div>
                    <div className='dog-box'>
                        <div>Breed: {secondPlace[0].breed}</div>
                        <img src={secondPlace[0].image} alt='' className='dog-image' />
                        <div>Size: {secondPlace[0].size}</div>
                        {secondPlace[0].hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
                        <div>Add to the list: <button onClick={(e) => this.props.addDog(secondPlace[0].dogs_id, this.props.index)} className='add-button'>Add</button></div>
                    </div>
                    <div className='dog-box'>
                        <div>Breed: {thirdPlace[0].breed}</div>
                        <img src={thirdPlace[0].image} alt='' className='dog-image' />
                        <div>Size: {thirdPlace[0].size}</div>
                        {thirdPlace[0].hypoallergenic ? (<div>Hypoallergenic: Yes</div>) : (<div>Hypoallergenic: No</div>)}
                        <div>Add to the list: <button onClick={(e) => this.props.addDog(thirdPlace[0].dogs_id, this.props.index)} className='add-button'>Add</button></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);