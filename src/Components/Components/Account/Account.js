import React, { Component } from 'react';

// these are for styling purposes
import './Account.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// importing redux and our reducer
import { connect } from 'react-redux';
import { getAccountDogs, updateUsername } from '../../../ducks/reducer';

// import our component to display each dog you have saved 
import AccountDogs from '../AccountDogs/AccountDogs';



class Account extends Component {

    constructor() {
        super();

        this.state = {
            myDogs: {},
            newUsername: '',
            changeUsername: false
        }
    }



    componentDidMount() {
        let userId = this.props.redux.user.user_id
        // console.log(this.props.redux.user.user_id)
        if (this.props.redux.user.user_id && this.props.redux.myDogs !== []) {
            this.props.getAccountDogs(userId)
        }
        // console.log(this.props)
    }

    // us a axios.get to get my dogs from redux
    // need to get myDogs [] to map over and display those dogs

    // i will want to use the same styling for this page as my other dog pages
    // the more i can keep it the same the better when i add media queries




    render() {
        // console.log(this.props.redux.user.user_id)
        const userId = this.props.redux.user.user_id;
        let { username } = this.props.redux.user;
        let { myDogs } = this.props.redux;
        return (
            <div>
                <Header />
                <div className='account-page'>
                    <div className='edit-username'>
                        <div>Username: {username}</div>
                        <button className='edit' onClick={() => this.setState({ changeUsername: true })}>Change Username</button>
                    </div>
                    <div className={this.state.changeUsername ? '' : 'hidden'}>
                        <input name='newUsername' onChange={(e) => this.setState({ [e.target.name]: e.target.value })} />
                        <button onClick={() => {
                            this.props.updateUsername(userId, this.state.newUsername)
                            this.setState({newUsername: ''})
                            this.setState({changeUsername: false})
                        }}>Save</button>
                    </div>
                    <div>
                        Your Saved Dogs Below
                    </div>
                    <div>
                        <div>
                            {myDogs.map((myDogs, index) => (
                                <AccountDogs
                                    myDogs={myDogs}
                                    // index={index}
                                    key={`dogs: ${index}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
                <Footer />
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
    getAccountDogs,
    updateUsername
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);