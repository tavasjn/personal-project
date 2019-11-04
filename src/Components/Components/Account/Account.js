import React, {Component} from 'react';
import './Account.css';
import Header from '../Header/Header';

class Account extends Component {

    componentDidMount() {

    }

    // us a axios.get to get my dogs from redux

    render(){
        return(
            <div>
                <Header />
                <div>
                    Your Saved Dogs Below
                </div>
                <div className='account-page'>
                    Saved Dogs Here...
                    <div className='dog-box'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Account;