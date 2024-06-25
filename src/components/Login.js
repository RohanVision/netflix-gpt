import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data

        // console.log(email.current.value);
        // console.log(password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        // SignIn and Sign Up
        // Will check wheather the form is signin or signup
        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else {

            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }

    };

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
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                        {!isSignInForm && (
                            <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />
                        )}

                        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />

                        <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />

                        <p className='text-red-700 font-bold py-2'>{errorMessage}</p>

                        <button onClick={handleButtonClick} className='py-4 my-4 bg-red-700 font-bold border border-red-700 rounded'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                        <p className='my-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}</p>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Login
