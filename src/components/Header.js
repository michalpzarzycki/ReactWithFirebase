import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import FirebaseContext from '../firebase/context'

const Header = () => {
const { user, firebase } = React.useContext(FirebaseContext)
    return (
        <div className="header">
            <div className="flex">
                <NavLink to="/" className="header-title">
                    Hooks News
                </NavLink>
                <NavLink to="/" className="header-link">
                    new
                </NavLink>
                <div className="divider">|</div>
                <NavLink to="/top" className="header-link">
                    top
                </NavLink>
                <div className="divider">|</div>
                <NavLink to="/search" className="header-link">
                    search
                </NavLink>
                <div className="divider">|</div>
                <NavLink to="/create" className="header-link">
                    submit
                </NavLink>
            </div>
            <div classname="flex">
               {user ?  <React.Fragment>
                        <div>{user.displayName}</div>
                        <div>|</div>
                        <div>logout</div>
                    </React.Fragment> : <NavLink to="/login" className="header-link">
                    login
                </NavLink>}
            </div>
        </div>
    )
}

export default withRouter(Header)