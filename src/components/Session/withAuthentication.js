
import React, { useState, useEffect, Component } from 'react'
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    const WithAuthentication = props => {
        const [authUser, setAuthUser] = useState(null);
        let listener = null

        useEffect(() => {
          listener =  props.firebase.auth.onAuthStateChanged(authUser => {
                authUser ? setAuthUser(authUser) : setAuthUser(null)
            })
        })

        useEffect(() => {
            return () => {
                listener()
            }
        })

        return (
            <AuthUserContext.Provider value={authUser}>
                <Component {...props} />
            </AuthUserContext.Provider>
        )
    }
    return withFirebase(WithAuthentication)
}

export default withAuthentication


// import React from 'react';
// import AuthUserContext from './context';
// import { withFirebase } from '../Firebase';
// const withAuthentication = Component => {

//     class WithAuthentication extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 authUser: null,
//             };
//         }
//         componentDidMount() {
//             this.listener = this.props.firebase.auth.onAuthStateChanged(
//                 authUser => {
//                     console.log(authUser)
//                     authUser
//                         ? this.setState({ authUser })
//                         : this.setState({ authUser: null });
//                 },
//             );
//         }
//         componentWillUnmount() {
//             this.listener();
//         }
//         render() {
//             return (
//                 <AuthUserContext.Provider value={this.state.authUser}>
//                     <Component {...this.props} />
//                 </AuthUserContext.Provider>
//             );
//         }
//     }
//     return withFirebase(WithAuthentication);
// };
// export default withAuthentication;