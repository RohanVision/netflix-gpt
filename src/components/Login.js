import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/ed3169bc-bae8-4c49-80ed-bab82d071166/CA-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background' />
            </div>

            <div className='absolute w-1/3 top-1/3 left-1/3 bg-black p-8 text-white bg-opacity-80 rounded'>
                <form>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                        {!isSignInForm && (
                            <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />
                        )}
                        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />
                        <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />
                        <button className='py-4 my-4 bg-red-700 font-bold border border-red-700 rounded'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                        <p className='my-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}</p>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login
