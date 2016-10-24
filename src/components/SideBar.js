import React from 'react'
import { Link } from 'react-router'

export default class NavMenu extends React.Component {
    render() {
        return (<div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to='/'> Home</Link>
                </li>
                <li>
                    <Link to='/characters'> Marvel characters</Link>
                </li>
            </ul>
        </div>);
    }
}
