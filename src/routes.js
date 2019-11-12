// Required for Routing //
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// What we are routing // 
import Account from './Components/Components/Account/Account';
import FindDog from './Components/Components/FindDog/FindDog';
import Landing from './Components/Components/Landing/Landing';
import Login from './Components/Components/Login/Login';
import Quiz from './Components/Components/Quiz/Quiz';
import QuizResults from './Components/Components/QuizResults/QuizResults';
import Register from './Components/Components/Register/Register';
import AllDogs from './Components/Components/AllDogs/AllDogs';
import Dogs from './Components/Components/Dogs/Dogs';
import QuizTwo from './Components/Components/QuizTwo/QuizTwo';
import QuizThree from './Components/Components/QuizThree/QuizThree';
import QuizParent from './Components/Components/QuizParent/QuizParent';



// The Export Route of each Component //
export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Landing} />
        <Route path='/account' component={Account} />
        <Route path='/register' component={Register} />
        <Route path='/finddog' component={FindDog} />
        <Route path='/quizresults' component={QuizResults} />
        <Route path='/alldogs' component={AllDogs} />
        <Route path='/dogs' component={Dogs} />
        <Route path='/quiz' component={QuizParent} />
        <Switch>
            <Route path='/quiz' component={QuizParent} />
            <Route path='/quiz/step-one' component={Quiz} />
            <Route path='/quiz/step-two' component={QuizTwo} />
            <Route path='/quiz/step-three' component={QuizThree} />
        </Switch>
    </Switch>
)