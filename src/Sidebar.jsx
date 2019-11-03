import React from 'react';
import { connect } from 'react-redux';
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
    }

    render(){
        return(
            <div id = "sidebarContainer">
                {this.props.state.map((item, index) => {
                    if(index === 0) {
                        return;
                    }
                    return(
                        <button key = {item.id} className = "sidebarButton">{item.name}</button>
                    )
                })}

                {this.state.trigger && <SidebarForm handleClick = {this.handleClick} />}
                <button className = "sidebarButton" onClick = {this.handleClick}>Add a New One</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Sidebar);