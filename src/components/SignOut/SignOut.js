import React from 'react';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import * as ROUTES from '../constants/Routes'

const SignOutButton = (props) => {

    const handleClick = () => {
        props.firebase.doSignOut()
            .then(() => {
                props.history.push(ROUTES.LANDING)
            })
    }

    return (
        <button type="button" onClick={handleClick}>
            Sign Out
      </button>
    )
};

export default compose(withRouter, withFirebase)(SignOutButton);