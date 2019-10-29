import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return(
            <div className='login-page'>
                <div className='about-box'>
                    This is TITLEHERE and we want to help you find the right dog for you and your needs!
                </div>
                <div className='auth-box'>
                    <div>
                        UserName:
                        <input />
                    </div>
                    <div>
                        Password:
                        <input />
                    </div>
                </div>
                <div className='buttons'>
                    <div>
                        <button>Login</button>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;