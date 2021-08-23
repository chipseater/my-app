import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink exact to="/" activeClassName="nav-link" >Accueil</NavLink>
            <NavLink exact to="/news" activeClassName="nav-link">News</NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-link">À propos</NavLink>
        </div>
    )
}
export default Navigation