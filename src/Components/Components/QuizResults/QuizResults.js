import React, { Component } from 'react';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import { getDogs } from '../../../ducks/reducer';
import { addDog } from '../../../ducks/reducer';
import Dogs from '../Dogs/Dogs';

class QuizResults extends Component {
    constructor() {
        super();

        this.state = {
            dogs: []
        }
    }

    componentDidMount = async () => {
        await this.props.getDogs()
        let firstPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][0])
        firstPlace = firstPlace[0]

        let secondPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][1])
        secondPlace = secondPlace[0]

        let thirdPlace = this.props.redux.dogs.filter((e, i) => i === this.props.redux.results[0][2])
        thirdPlace = thirdPlace[0]

        this.setState({
            dogs: [firstPlace, secondPlace, thirdPlace]
        })
        // console.log(this.props.redux.dogs)
        // console.log(this.props.redux.results[0][1])
        // console.log(firstPlace)

        // console.log(secondPlace)

        // console.log(thirdPlace)
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
        console.log(this.props.redux.myDogs)
        console.log(this.state.dogs)
        // console.log(this.props.redux.results)
        console.log(this.state)
        return (
            <div>
                <Header />
                <div className='dog-page'>
                    {this.state.dogs.map((dogs, index) => {
                        return <Dogs 
                            dogs={dogs}
                            key={`topDogs ${index}`}
                        />
                    })}
                    {/* <Dogs dogs={} /> */}
                    {/* <div className='dog-box'>
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
                    </div> */}
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
    getDogs,
    addDog
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizResults);