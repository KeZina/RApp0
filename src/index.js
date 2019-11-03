import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch, withRouter} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Nav from './Nav';
import Main from './Main';
import Recipes from './Recipes';
import './index.css';

const initialState = [
    {   
        name: "recipe's name",
        ingredients: [
            {
                ingredient: "potato",
                id: Math.round(Math.random() * 1e16),
            }
        ],
        direction: [
            {
                step: "cook",
                id: Math.round(Math.random() * 1e16),
            }

        ],
        description: "simple description about recipe",
    }
]

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NAME":
            let addName = [...state];
            addName[0].name = action.name;
            return addName;
        case "ADD_INGREDIENTS":
            let addIng = [...state];
            addIng[0].ingredients = [...addIng[0].ingredients, ...action.ingredients];
            return addIng;
        case "ADD_DIRECTION":
            let addDir = [...state];
            addDir[0].direction = [...addDir[0].direction, ...action.direction];
            return addDir;
        case "ADD_DESCRIPTION":
            let addDes = [...state];
            addDes[0].description = action.description;
            return addDes;
        case "REMOVE_INGREDIENTS":
            let removeIng = [...state];
            removeIng[0].ingredients = removeIng[0].ingredients.filter(item => item.id != action.id);
            return removeIng;
        case "REMOVE_DIRECTION":
            let removeDir = [...state];
            removeDir[0].direction = removeDir[0].direction.filter(item => item.id != action.id);
            return removeDir;
        case "ADD_RECIPE":
            let addRec = [...state, state[0]];
            console.log(state, addRec);
            return addRec;
        default: return state;
    }
}

const store = createStore(formReducer);
store.dispatch({type: "ADD_INGREDIENTS", ingredients: [
    {
        ingredient: "marmelato",
        id: Math.round(Math.random() * 1e16),
    }
],})
store.dispatch({type: "ADD_INGREDIENTS", ingredients: [
    {
        ingredient: "chocolato",
        id: Math.round(Math.random() * 1e16),
    }
],})
console.log(store.getState())

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
    , document.getElementById('root')
)