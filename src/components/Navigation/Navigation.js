import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut'
import * as ROUTES from '../constants/Routes';
import AuthUserContext from '../Session/context'

const Navigation = (props) => (

    <AuthUserContext.Consumer>
        {
            authUser => 
        <div>
            <ul>
                {authUser ?
                    <>
                        <li>
                            <Link to={ROUTES.LANDING}>Landing</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ACCOUNT}>Account</Link>
                        </li>
                        <li>
                            <SignOutButton />
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
                        </li>

                        <li>
                            <Link to={ROUTES.ADMIN}>Admin</Link>
                        </li>
                    </>
                }
            </ul>
        </div>
        }
    </AuthUserContext.Consumer>
);
export default Navigation;