import React from 'react';

class IngredientsDirection extends React.Component{

    render(){
        return(
            <>
                {this.props.ingredients && this.props.state.ingredients.map(item => {
                    return(
                        <li key = {item.id} className = "ingredientsDirectionLi">
                            <p style = {{width: "80%", height: "95%", padding: "0.2vw"}}>{item.ingredient}</p>
                            <input id = {item.id}
                                className = "ingredientsDirectionInput"
                                name = "ingredients"
                                type = "submit"
                                value = "X"
                                onClick = {this.props.handleRemoveItem} />
                        </li>
                    )
                })}
                {this.props.direction && this.props.state.direction.map(item => {
                    return(
                        <li key = {item.id} className = "ingredientsDirectionLi">
                            <p style = {{width: "85%", height: "95%", padding: "0.2vw"}}>{item.step}</p>
                            <input id = {item.id}
                                className = "ingredientsDirectionInput"
                                name = "direction"
                                type = "submit"
                                value = "X"
                                onClick = {this.props.handleRemoveItem} />
                        </li>
                    )   
                })}
            </>
        )
    }
}

export default IngredientsDirection;