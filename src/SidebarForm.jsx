import React from 'react';
import { connect } from 'react-redux';
import { ADD_NAME, ADD_INGREDIENTS, ADD_DIRECTION, ADD_DESCRIPTION, REMOVE_INGREDIENTS, REMOVE_DIRECTION, ADD_RECIPE } from './actions';
import IngredientsDirection from './IngredientsDirection';

class SidebarForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trigger: false,
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleAddRecipe = this.handleAddRecipe.bind(this);
        this.shouldUpdate = {};
    }

    handleAddItem(e){
        e.preventDefault();
        let eValue = e.target.children[0].value;
        let eName = e.target.children[0].name;
        this.shouldUpdate = {...this.props.state};
        

        if(eValue === '' || eValue === ' '){
            eValue = null;
            return;
        }

        if(eName === "ingredients"){
            this.props.addIngredients(eValue);
            e.target.children[0].value = null;
        } else if(eName === "direction"){
            this.props.addDirection(eValue);
            e.target.children[0].value = null;
        } else if(eName === "description"){
            this.props.addDescription(eValue);
            e.target.children[0].value = null;
        }

        if(this.shouldUpdate != this.props.state){
            this.forceUpdate();
        }
    }

    handleRemoveItem(e){
        let eName = e.target.name;
        let eId = e.target.id;
        this.shouldUpdate = {...this.props.state};

        if(eName === "ingredients"){
            this.props.removeIngredient(eId);
        }else if(eName === "direction"){
            this.props.removeDirection(eId);
        }

        if(this.shouldUpdate != this.props.state){
            this.forceUpdate();
        }
    }

    handleAddRecipe(e){
        e.preventDefault()
        this.props.addName(e.target.children[0].value);
        this.props.addRecipe();
    }

    render(){
        return(
            <div id = "sidebarFormContainer">
                <div id = "sidebarFormSubContainer">
                    <h1 style = {{borderBottom: '2px solid black'}}>
                        Please add a new recipe
                        <button id = "sidebarFormButton" onClick = {this.props.handleClick}>X</button>
                    </h1>
                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Ingredients:</h2>
                            <form className = "sidebarFormForm" onSubmit = {this.handleAddItem}>
                                <input name = "ingredients" className = "sidebarFormInput" type = "text" maxLength = "20" placeholder = "Please add another Ingredient" />
                                <input className = "sidebarFormInputIngredientsButton" type = "submit" value = "Add" />
                            </form>
                            <ul className = "sidebarFormUlOl">
                                <IngredientsDirection ingredients state = {this.props.state} handleRemoveItem = {this.handleRemoveItem} />
                            </ul>
                        </div>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Direction:</h2>
                            <form className = "sidebarFormRecipeForm" onSubmit = {this.handleAddItem}>
                                <textarea name = "direction" className = "sidebarFormTextarea" type = "text" maxLength = "200" />
                                <input className = "sidebarFormInputButton sidebarFormTextareaButton" type = "submit"  value = "Add" />
                            </form>
                            <ul className = "sidebarFormUlOl">
                                <IngredientsDirection direction state = {this.props.state} handleRemoveItem = {this.handleRemoveItem} />
                            </ul>
                        </div>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Description:</h2>
                            <form className = "sidebarFormRecipeForm" onSubmit = {this.handleAddItem}>
                                <textarea name = "description" className = "sidebarFormTextarea" maxLength = "300" />
                                <input className = "sidebarFormInputButton sidebarFormTextareaButton" type = "submit"  value = "Add" />
                            </form>
                        </div>
                    </div>
                </div>
                <form id = "sidebarFormSubmitForm" onSubmit = {this.handleAddRecipe}>
                            <input id = "recipeFormInput" name = "name" className = "sidebarFormInput" type = "text" maxLength = "30" placeholder = "Recipe's name" />
                            <input id = "recipeFormSubmit" className = "sidebarFormInputButton" type = "submit" value = "Add Recipe" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addName: name => {dispatch(ADD_NAME(name))},
        addIngredients: ingredient => {dispatch(ADD_INGREDIENTS(ingredient))},
        addDirection: step => {dispatch(ADD_DIRECTION(step))},
        addDescription: description => {dispatch(ADD_DESCRIPTION(description))},
        removeIngredient: id => dispatch(REMOVE_INGREDIENTS(id)),
        removeDirection: id => dispatch(REMOVE_DIRECTION(id)),
        addRecipe: () => dispatch(ADD_RECIPE()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarForm);