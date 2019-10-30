const initialState = {
    user: {
        username: '',
        userId: 0,
        signedIn: false
    }
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';


export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logout(){
    return {
        type: LOGOUT,
        payload: null
    }
}

export function login(){
    return {
        type: LOGIN,
        payload: null 
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case UPDATE_USER:
            return {...state, user: payload, user: {signedIn: true}}
        case LOGOUT:
            return {...state, user: {signedIn: false}}
        case LOGIN:
            return {...state, user: {signedIn: true}}
        default:
            return state;
    }
}