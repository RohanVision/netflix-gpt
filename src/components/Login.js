import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_IMG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()

    const name = useRef(null);
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
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid, email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            })
                        );
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

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
                })
                .catch((error) => {
                    const errorCode = error.code;
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
                <img src={BACK_IMG_URL} alt='background' />
            </div>

            <div className='absolute w-1/3 top-1/3 left-1/3 bg-black p-8 text-white bg-opacity-80 rounded'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <div className='flex flex-col justify-center'>
                        <h2 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>
                        {!isSignInForm && (
                            <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-transparent border rounded border-gray-400' />
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
