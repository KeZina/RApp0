import React from 'react';
import SidebarButtons from './SidebarButtons.jsx';
import SidebarForm from './SidebarForm.jsx';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formTrigger: false,
            recipe: null,
        }
        this.handleFormTrigger = this.handleFormTrigger.bind(this);
        this.handleLoadRecipe = this.handleLoadRecipe.bind(this);
        this.handleChangeRecipe = this.handleChangeRecipe.bind(this);
        this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this);
    }



    handleFormTrigger(){
        this.setState({ 
            formTrigger: !this.state.formTrigger
        })
        setTimeout(() => {
            if(!this.state.formTrigger){
                this.setState({
                    recipe: null,
                })
            }
        })
    }

    handleLoadRecipe(e){
        this.props.handleRefreshRecipe("load", null, JSON.parse(localStorage.getItem(e.target.name)))
    }

    handleChangeRecipe(e){
        let parsedStorage = JSON.parse(localStorage.getItem(e.target.name));
        this.setState({
            recipe: parsedStorage,
        })
        this.props.handleRefreshRecipe("change")
        this.handleFormTrigger();
    }

    handleRemoveRecipe(e){
        localStorage.removeItem(e.target.name)
        this.props.handleRefreshRecipe("remove", e.target.name)
    }



    render(){
        return(
            <>
                <SidebarButtons
                    handleFormTrigger = {this.handleFormTrigger}
                    handleLoadRecipe = {this.handleLoadRecipe}
                    handleChangeRecipe = {this.handleChangeRecipe}
                    handleRemoveRecipe = {this.handleRemoveRecipe}
                />

                {(this.state.formTrigger &&
                <SidebarForm
                    handleFormTrigger = {this.handleFormTrigger}
                    recipe = {this.state.recipe}
                />)}
            </>
        )
    }
}

export default Sidebar;