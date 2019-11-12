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
const ADDDOG = 'ADDDOG';
const GETDOGS = 'GETDOGS';
const RUN_MODEL = 'RUN_MODEL';
const GETACCOUNTDOGS = 'GETACCOUNTDOGS';



export function runModel(
    // pass in dogs this.props.dogs
    results,
    dogs
) {
    let data = axios.post('/api/run', {
        results,
        dogs
    }).then(res => {
        // console.log(res)
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

export function getAccountDogs(userId) {
    // console.log('userid', userId)
    // let myDogs = null;
    const myDogs = axios.get(`/api/getaccountdogs/${userId}`).then(res => {
        // await console.log(res.data)
        return res.data
        // console.log(myDogs)
    })
    .catch(err => console.log(err))
    // console.log(myDogs)

    return {
        type: GETACCOUNTDOGS,
        payload: myDogs
    }
}


export function addDog(dogs_id, userId) {
    // console.log(userId, dogs_id)
    // map over dogs to find matching dog id //
    // console.log('hit')
    let myDogs = axios.post('/api/addtoaccount', {userId, dogs_id}).then(async res => await res.data)
    // send dog on payload //
    // use payload to push to myDogs []; //
    // console.log(myDogs)
    return {
        type: ADDDOG,
        payload: { myDogs }
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


export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return { ...state, user: { ...payload, signedIn: true } }
        case LOGOUT:
            return { ...state, user: { signedIn: false } }
        case ADDDOG:
            return { ...state, myDogs: [...state.myDogs, payload] }
        case GETDOGS + '_FULFILLED':
            return { ...state, dogs: payload }
        case RUN_MODEL + '_FULFILLED':
            return { ...state, results: [payload] }
        case GETACCOUNTDOGS + '_PENDING':
            return { ...state}
        case GETACCOUNTDOGS + '_FULFILLED':
            return { ...state, myDogs: payload}
        default:
            return state;
    }
}