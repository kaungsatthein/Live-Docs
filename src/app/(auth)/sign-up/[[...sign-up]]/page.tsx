import React from 'react'
import {SignedOut} from "@clerk/nextjs";

const SignOutPage = () => {
    return (
        <main className={"auth-page"}><SignedOut/></main>
    )
}
export default SignOutPage
