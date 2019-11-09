import React from 'react';
import Sidebar from './Sidebar'; 
import Description from './Description'

class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            ingredients: [],
            direction: [],
        }

        this.handleRefreshRecipe = this.handleRefreshRecipe.bind(this);
    }

    handleRefreshRecipe(type, name, obj){
        if(type === "remove"){
            if(this.state.name === name){
                this.setState({
                    name: "",
                    ingredients: [],
                    direction: [],
                })
            }
        }else if(type === "load"){
            this.setState({
                name: obj.name,
                ingredients: obj.ingredients,
                direction: obj.direction,
            })
        }else if(type === "change"){
            this.setState({
                name: "",
                ingredients: [],
                direction: [],
            })
        }

        this.forceUpdate();
    }

    render(){
        return(
            <>
            <Sidebar
                handleLoadRecipe = {this.handleLoadRecipe}
                handleChangeRecipe = {this.handleChangeRecipe}
                handleRefreshRecipe = {this.handleRefreshRecipe}
            />
            <div id = "recipesContainer" >
                <div id = "recipesCurrently">
                    <div id = "recipesCurrentlyTop">
                        <h3>
                            {this.state.name}
                        </h3>
                    </div>
                    <div id = "ingredientsDirection">
                        <div className = "subIngDir" style = {{borderRight: "2px solid black"}}>
                            <h2 className = "ingDirH">
                                Ingredients:
                            </h2>
                            <ul>
                                {this.state.ingredients.map(item => <li key = {item.id} style = {{textTransform: "capitalize"}}>{item.ingredient}</li>)}
                            </ul>
                        </div>
                        <div className = "subIngDir" style = {{borderLeft: "2px solid black"}}>
                            <h2 className = "ingDirH">
                                Direction:
                            </h2>
                            <ol>
                                {this.state.direction.map(item => <li key = {item.id} style = {{textTransform: "capitalize"}}>{item.step}</li>)}
                            </ol>
                        </div>
                    </div>
                    <div id = "recipesCurrentlyBottom" />
                </div>
            </div>
            </>
        )
    }
}

export default Recipe;