import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Nav from './Nav';
import Main from './Main';
import Recipe from './Recipe.jsx';
import './index.css';

const initialState = {   
    name: "",
    ingredients: [],
    direction: [],
    description: "",
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NAME":
            return Object.assign({}, state, {name: action.name})
        case "ADD_INGREDIENTS":
            return Object.assign({}, state, {ingredients: [...state.ingredients, ...action.ingredients]});
        case "ADD_DIRECTION":
            return Object.assign({}, state, {direction: [...state.direction, ...action.direction]});
        case "ADD_DESCRIPTION":
            return Object.assign({}, state, {description: action.description});
        case "REMOVE_INGREDIENTS":
            return Object.assign({}, state, {ingredients: state.ingredients.filter( item => item.id != action.id)});
        case "REMOVE_DIRECTION":
            return Object.assign({}, state, {direction: state.direction.filter( item => item.id != action.id)});
        case "ADD_RECIPE":
            return action.recipe;
        case "CLEAR_RECIPE":
            return initialState;
        default: return state;
    }
}

const store = createStore(formReducer); 

ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
            <Nav />
            <Switch>
                <Route exact path = '/' component = {Main} />
                <Route path = '/Recipe' component = {Recipe} />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root')
)