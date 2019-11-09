import React from 'react';

class IngredientsDirection extends React.Component{

    render(){
        return(
            <>
            {this.props.ingredients && this.props.state.map(item => {
                return(
                    <li key = {item.id} className = "ingredientsDirectionLi">
                        <p className = "ingredientsDirectionP">{item.ingredient}</p>
                        <input id = {item.id}
                            className = "ingredientsDirectionInput"
                            name = "ingredients"
                            type = "submit"
                            value = "X"
                            onClick = {this.props.handleRemoveItem} />
                    </li>
                )
            })}
            {this.props.direction && this.props.state.map(item => {
                return(
                    <li key = {item.id} className = "ingredientsDirectionLi">
                        <p className = "ingredientsDirectionP">{item.step}</p>
                        <input id = {item.id}
                            className = "ingredientsDirectionInput"
                            name = "direction"
                            type = "submit"
                            value = "X"
                            onClick = {this.props.handleRemoveItem} />
                    </li>
                )   
            })}
            {this.props.description &&
                    <p className = "ingredientsDirectionLi">
                        <p className = "ingredientsDirectionP">{this.props.state}</p>
                        {/* <input
                            className = "ingredientsDirectionInput"
                            name = "description"
                            type = "submit"
                            value = "X"
                            onClick = {this.props.handleRemoveItem}
                        /> */}
                    </p>
                    
            }
        </>
        )
    }
}

export default IngredientsDirection;