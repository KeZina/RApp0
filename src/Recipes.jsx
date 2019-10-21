import React from 'react';
import Sidebar from './Sidebar';
import RecipesLists from './RecipesLists';

class Recipes extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // localStorage.setItem("user", "artyom")
        // console.log(localStorage)
    }
    render(){
        return(
            <div className = "MContainer recipesContainer">
                <Sidebar />
                <div id = "recipesTitle">
                    <h2>
                        Recipes
                    </h2>
                </div>
                <div id = "recipesCurrently">
                    <div id = "recipesCurrentlyTop">
                        <h1>
                            #Recipe
                        </h1>
                    </div>
                    <div id = "ingredientsDirection">
                        <div id = "ingredients">
                            <h2 style = {{marginBottom: "1vh"}}>
                                Ingredients:
                            </h2>
                            <ul>
                                {/* <RecipesLists>

                                </RecipesLists> */}
                            </ul>
                        </div>
                        <div id = "direction">
                            <h2 style = {{marginBottom: "1vh"}}>
                                Direction:
                            </h2>
                            <ol>
                                {/* <RecipesLists>
                                    
                                </RecipesLists> */}
                            </ol>
                        </div>
                    </div>
                    <div id = "recipesCurrentlyBottom" />
                </div>
                
            </div>
        )
    }
}

export default Recipes