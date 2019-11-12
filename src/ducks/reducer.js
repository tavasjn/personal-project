import axios from 'axios';


const initialState = {
    user: {
        username: '',
        userId: 0,
        signedIn: false
    },
    dogs: [],
    myDogs: [],
    quizResults: [],
    results: []
}

// console.log(initialState.user)

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';
const LOGIN = 'LOGIN';
const ADDDOG = 'ADDDOG';
const GETDOGS = 'GETDOGS';
const ACCOUNTDOGS = 'ACCOUNTDOGS';
const RUN_MODEL = 'RUN_MODEL';


export function runModel(
    // pass in dogs this.props.dogs
    results,
    dogs
) {
    let data = axios.post('/api/run', {
        results,
        dogs
    }).then(res => {
        console.log(res)
        return res.data
})
return {
    type: RUN_MODEL,
    payload: data
}
}



export function getDogs() {
    // console.log('hit')
    let dogs = axios.get('/api/dogs').then(res => res.data)

    return {
        type: GETDOGS,
        payload: dogs
    }
}

export function accountDogs() {
    // console.log('hit')
    let myDogs = axios.get('/api/dogs').then(res => res.data)

    return {
        type: ACCOUNTDOGS,
        payload: myDogs
    }
}

export function addDog(myDogs, index) {
    // map over dogs to find matching dog id //
    // console.log(myDogs)
    // console.log('hit')

    // send dog on payload //
    // use payload to push to myDogs []; //
    return {
        type: ADDDOG,
        payload: { myDogs, index }
    }
}


export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function logout() {
    return {
        type: LOGOUT,
        payload: null
    }
}

export function login() {
    return {
        type: LOGIN,
        payload: null
    }
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return { ...state, user: { payload, signedIn: true } }
        case LOGOUT:
            return { ...state, user: { signedIn: false } }
        case LOGIN:
            return { ...state, user: { signedIn: true } }
        case ADDDOG:
            // console.log(payload)
            let dog = state.dogs.map((element) => {
                if (element.dogs_id === +payload.myDogs) {
                    return element
                }
            })
            // console.log(dog[payload.index])
            return { ...state, myDogs: [...state.myDogs, dog[payload.index]] }
        case GETDOGS + '_FULFILLED':
            return { ...state, dogs: payload }
        case ACCOUNTDOGS:
            return { ...state, myDogs: payload }
        case RUN_MODEL + '_FULFILLED':
            return { ...state, results: [payload] }
        default:
            return state;
    }
}