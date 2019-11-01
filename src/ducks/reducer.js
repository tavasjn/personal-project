const initialState = {
    user: {
        username: '',
        userId: 0,
        signedIn: false
    },
    dogs: [],
    myDogs: []
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';
const ADDDOG = 'ADDDOG';

export function addDog(dogsId){

    return {
        type: ADDDOG,
        payload: dogsId
    }
}


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
            return {...state, user: {payload, signedIn: true}}
        case LOGOUT:
            return {...state, user: {signedIn: false}}
        case LOGIN:
            return {...state, user: {signedIn: true}}
        default:
            return state;
    }
}