import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_INGREDIENTS, REMOVE_DIRECTION } from './actions.js';

class IngredientsDirection extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleRemoveItem(e){
        let eId = e.target.id;
        let eName = e.target.name;
        if(eName === "ingredients"){
            this.props.removeIngredient(eId);
        }else if(eName === "direction"){
            this.props.removeDirection(eId);
        }
    }

    render(){
        return(
            <>
                {this.props.ingredients && this.props.state.ingredients.map(item => {
                    return(
                        <li key = {item.id}>
                            {item.ingredient}
                            <input id = {item.id} name = "ingredients" type = "submit" value = "remove" onClick = {this.handleRemoveItem} />
                        </li>
                    )
                })}
                {this.props.direction && this.props.state.direction.map(item => {
                    return(
                        <li key = {item.id}>
                            {item.step}
                            <input id = {item.id} name = "direction" type = "submit" value = "remove" onClick = {this.handleRemoveItem} />
                        </li>
                    )   
                })}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        removeIngredient: (id) => dispatch(REMOVE_INGREDIENTS(id)),
        removeDirection: (id) => dispatch(REMOVE_DIRECTION(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsDirection);