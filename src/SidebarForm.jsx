import React from 'react';
import { connect } from 'react-redux';
import { ADD_NAME, ADD_INGREDIENTS, ADD_DIRECTION, ADD_DESCRIPTION, ADD_RECIPE, REMOVE_INGREDIENTS, REMOVE_DIRECTION, CLEAR_RECIPE} from './actions';
import IngredientsDirection from './IngredientsDirection';

class SidebarForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trigger: false,
        }
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleAddName = this.handleAddName.bind(this)
        this.handleAddRecipe = this.handleAddRecipe.bind(this);
        this.shouldUpdate = {};
    }

    componentDidMount(){
        if(this.props.recipe !== null){ 
            this.props.addRecipe(this.props.recipe);
        }
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

    handleAddName(e){
        this.props.addName(e.target.value);
    }
    
    handleAddRecipe(e){
        e.preventDefault();
        let eValue = e.target.children[0].value;
        let jsonRecipe = (() => {
            return JSON.stringify(this.props.state);
        })()
        if(this.props.recipe !== null){
            localStorage.removeItem(this.props.recipe.name);
        }
        localStorage.setItem(eValue, jsonRecipe);
        this.props.handleFormTrigger();
    }

    componentWillUnmount(){
        this.props.clearRecipe();
    }



    render(){
        return(
            <div id = "sidebarFormContainer">
                <div id = "sidebarFormSubContainer">
                    <h1 style = {{borderBottom: '2px solid black'}}>
                        Please add a new recipe
                        <button id = "sidebarFormButton" onClick = {this.props.handleFormTrigger}>X</button>
                    </h1>
                    <div style = {{display: "flex", justifyContent: "space-between"}}>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Ingredients:</h2>
                            <form className = "sidebarFormForm" onSubmit = {this.handleAddItem}>
                                <input name = "ingredients" className = "sidebarFormInput" type = "text" maxLength = "20" placeholder = "Please add another Ingredient" />
                                <input className = "sidebarFormInputIngredientsButton" type = "submit" value = "Add" />
                            </form>
                            <ul className = "sidebarFormUlOl">
                                {(this.props.state.ingredients.length > 0) && 
                                <IngredientsDirection
                                    ingredients
                                    state = {this.props.state.ingredients}
                                    handleRemoveItem = {this.handleRemoveItem}
                                />}
                            </ul>
                        </div>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Direction:</h2>
                            <form className = "sidebarFormRecipeForm" onSubmit = {this.handleAddItem}>
                                <textarea name = "direction" className = "sidebarFormTextarea" type = "text" maxLength = "200" />
                                <input className = "sidebarFormInputButton sidebarFormTextareaButton" type = "submit"  value = "Add" />
                            </form>
                            <ul className = "sidebarFormUlOl">
                                {(this.props.state.direction.length > 0) &&
                                <IngredientsDirection
                                    direction
                                    state = {this.props.state.direction}
                                    handleRemoveItem = {this.handleRemoveItem}
                                />}
                            </ul>
                        </div>
                        <div className = "sidebarFormColumnFlex">
                            <h2 style = {{margin: "2.5vh 0 1vh 0"}}>Description:</h2>
                            <form className = "sidebarFormRecipeForm" onSubmit = {this.handleAddItem}>
                                <textarea name = "description" className = "sidebarFormTextarea" maxLength = "300" />
                                <input className = "sidebarFormInputButton sidebarFormTextareaButton" type = "submit"  value = "Add" />
                            </form>
                                {(this.props.state.description.length != 0) &&
                                <IngredientsDirection
                                    description
                                    state = {this.props.state.description}
                                />}
                        </div>
                    </div>
                </div>
                <form id = "sidebarFormSubmitForm" onSubmit = {this.handleAddRecipe}>
                    <input  id = "recipeFormInput"
                            name = "name"
                            className = "sidebarFormInput"
                            type = "text" maxLength = "30"
                            placeholder = "Recipe's name"
                            onBlur = {this.handleAddName}
                            required
                    />
                    <input id = "recipeFormSubmit" className = "sidebarFormInputButton" type = "submit" value = "Add Recipe" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch(ADD_NAME(name)),
        addIngredients: ingredient => dispatch(ADD_INGREDIENTS(ingredient)),
        addDirection: step => dispatch(ADD_DIRECTION(step)),
        addDescription: description => dispatch(ADD_DESCRIPTION(description)),
        addRecipe: recipe => dispatch(ADD_RECIPE(recipe)),
        removeIngredient: id => dispatch(REMOVE_INGREDIENTS(id)),
        removeDirection: id => dispatch(REMOVE_DIRECTION(id)),
        clearRecipe: () => dispatch(CLEAR_RECIPE()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarForm);