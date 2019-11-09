import React from 'react';

class SidebarButtons extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let keys = Object.keys(localStorage);
        let elems = keys.map(item => {
            return(
                <div className = "sidebarDiv">
                    <button
                        name = {item}
                        key = {`change${item}`}
                        className = "sidebarButton sidebarSupSubButton sidebarSupButton"
                        onClick = {this.props.handleChangeRecipe}
                    >
                        Change
                    </button>
                    <button
                        name = {item}
                        key = {item}
                        className = "sidebarButton"
                        onClick = {this.props.handleLoadRecipe}
                    >
                        {item}
                    </button>
                    <button
                        name = {item}
                        key = {`remove${item}`}
                        className = "sidebarButton sidebarSupSubButton sidebarSubButton"
                        onClick = {this.props.handleRemoveRecipe}
                    >
                        Remove
                    </button>
                </div>
            )
        })
        return(
            <div id = "sidebarContainer">
                {elems}
                <button
                    id = "addRecipeButton"
                    onClick = {this.props.handleFormTrigger}
                >
                        Add a New One
                </button>
            </div>
        )
    }
}

export default SidebarButtons;