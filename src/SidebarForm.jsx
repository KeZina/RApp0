import React from 'react';
import { connect } from 'react-redux';
import { ADD_INGREDIENTS, ADD_DIRECTION } from './actions';
import IngredientsDirection from './IngredientsDirection';

class SidebarForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trigger: false,
        }
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(e){
        console.log(this.props.state)
        let eValue = e.target.children[0].value;
        let eName = e.target.children[0].name;
        e.preventDefault();
        if(eValue === '' || eValue === ' '){
            eValue = null;
            return;
        }
        if(eName === "ingredients"){
            this.props.addIngredients(eValue);
            e.target.children[0].value = null;
            return;
        }else if(eName === "direction"){
            this.props.addDirection(eValue);
            e.target.children[0].value = null;
            return;
        }

    }

    render(){
        return(
            <div id = "sidebarFormContainer">
                <div id = "sidebarFormSubContainer">
                    <h1 style = {{borderBottom: '2px solid black'}}>
                        Please add a new recipe
                        <button id = "sidebarFormButton" onClick = {this.props.handleClick}>X</button>
                    </h1>
                    <div style = {{display: "flex", justifyContent: "space-around"}}>
                        <div style = {{display: "flex", flexDirection: "column"}}>
                            <form onSubmit = {this.handleAddItem}>
                                <input name = "ingredients" className = "sidebarFormInput" type = "text" maxLength = "20" placeholder = "Please add another Ingredient" />
                                <input className = "sidebarFormInputButton" type = "submit" value = "ADD" />
                            </form>
                            <h2 style = {{margin: "1vh 0"}}>Ingredients:</h2>
                            <ul>
                                <IngredientsDirection ingredients />
                            </ul>
                        </div>
                        <div style = {{display: "flex", flexDirection: "column"}}>
                            <form onSubmit = {this.handleAddItem}>
                                <input name = "direction" className = "sidebarFormInput" type = "text" maxLength = "20" placeholder = "Please add another Direction" />
                                <input className = "sidebarFormInputButton" type = "submit"  value = "ADD" />
                            </form>
                            <h2 style = {{margin: "1vh 0"}}>Direction:</h2>
                            <ol>
                                <IngredientsDirection direction />
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredients: ingredient => {dispatch(ADD_INGREDIENTS(ingredient))},
        addDirection: step => {dispatch(ADD_DIRECTION(step))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarForm);