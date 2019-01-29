import React from 'react'

const Input = ({placeholder}) => (
    <input type="text" placeholder={placeholder} />
)

const Button = ({value}) => (
    <button type="submit">{value}</button>
)

export const SignIn = () => (
    <>
        <h1>Sign in</h1>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button value="Sign in" />
    </>
)