import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <div id = "navContainer">
                <Link className = "navLink" to = '/'>
                    Main
                </Link>

                <Link className = "navLink" to = '/Recipe'>
                    Recipes
                </Link>
            </div>
        )
    }
}

export default Nav;