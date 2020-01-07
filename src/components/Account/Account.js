import React from 'react'
import PasswordChangeForm from '../PasswordChange/PasswordChange'
import { PasswordForgetForm } from '../PasswordForget/PasswordForget'

const Account = () => {
    return (
        <div>
            Account
            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    )
}

export default Account