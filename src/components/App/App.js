import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as ROUTES from '../constants/Routes'
import Landing from '../Landing/Landing'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import PasswordForget from '../PasswordForget/PasswordForget'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Admin from '../Admin/Admin'
import Navigation from '../Navigation/Navigation'
import withAuthentication from '../Session/withAuthentication'
import AuthUserContext from '../Session/context'

class App extends React.Component {


    render() {
        return (
                <BrowserRouter>
                    <Navigation />

                    <hr />

                    <Route exact path={ROUTES.LANDING} component={Landing} />
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
                    <Route path={ROUTES.HOME} component={Home} />
                    <Route path={ROUTES.ACCOUNT} component={Account} />
                    <Route path={ROUTES.ADMIN} component={Admin} />
                </BrowserRouter>
        )
    }
}

export default withAuthentication(App)