import React from 'react';
import SidebarForm from './SidebarForm.jsx';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trigger: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            trigger: !this.state.trigger
        })
        console.log(this.state.trigger)
    }

    render(){
        return(
            <div id = "sidebarContainer">
                {this.state.trigger && <SidebarForm handleClick = {this.handleClick} />}
                <button id = "sidebarButton" onClick = {this.handleClick}>Add a New One</button>
            </div>
        )
    }
}

export default Sidebar;