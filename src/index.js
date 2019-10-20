import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Nav from './Nav';
import Main from './Main';
import Recipes from './Recipes';
import './index.css'

const initialState = {
    ingredients: [
        {
            ingredient: "potato",
            id: Math.round(Math.random() * 1e16)
        }
    ],
    direction: [
        {
            step: "cook",
            id: Math.round(Math.random() * 1e16)
        }

    ],
}

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_INGREDIENTS":
            return {...state, ingredients:[...state.ingredients, ...action.ingredients]};
        case "ADD_DIRECTION":
            return {...state, direction:[...state.direction, ...action.direction]};
        case "REMOVE_INGREDIENTS":
            return {...state, ingredients: state.ingredients.filter(item => item.id != action.id)}
        case "REMOVE_DIRECTION":
            return {...state, direction: state.direction.filter(item => item.id != action.id)}
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
                <Route path = '/recipes' component = {Recipes} />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'))