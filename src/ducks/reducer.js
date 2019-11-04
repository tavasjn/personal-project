import axios from 'axios';
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
const GETDOGS = 'GETDOGS';



export function getDogs(){
    // console.log('hit')
    let dogs= axios.get('/api/dogs').then(res =>  res.data)

    return{
        type: GETDOGS,
        payload: dogs
    }
}

export function addDog(myDogs){
    // map over dogs to find matching dog id //
    console.log(myDogs)
    let dog = this.state.dogs.map((element, index) => {
        if(element.id === +myDogs){
            return element
        }
    })
    // send dog on payload //
    // use payload to push to myDogs []; //
    return {
        type: ADDDOG,
        payload: dog
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
        case ADDDOG:
            return {...state, myDogs: [...state.myDogs, payload]}
        case GETDOGS + '_FULFILLED':
            return {...state, dogs: payload}
        default:
            return state;
    }
}