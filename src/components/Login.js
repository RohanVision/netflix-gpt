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
            <div className="absolute w-full">
                <img className="w-full h-screen object-cover" src={BACK_IMG_URL} alt="background" />
                {/* Add gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
            </div>

            <div className="flex justify-center items-center min-h-screen relative z-10">
                <form
                    className="w-full md:w-1/3 bg-black p-10 text-white bg-opacity-80 rounded-lg shadow-lg"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="flex flex-col">
                        <h2 className="font-bold text-4xl text-center mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>

                        {!isSignInForm && (
                            <input
                                ref={name}
                                type="text"
                                placeholder="Full Name"
                                className="p-4 mb-4 w-full bg-transparent border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        )}

                        <input
                            ref={email}
                            type="text"
                            placeholder="Email Address"
                            className="p-4 mb-4 w-full bg-transparent border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-4 mb-4 w-full bg-transparent border border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        {errorMessage && <p className="text-red-500 font-semibold mb-4 text-center">{errorMessage}</p>}

                        <button
                            onClick={handleButtonClick}
                            className="w-full py-3 mb-4 bg-red-700 hover:bg-red-600 font-bold rounded transition duration-200"
                        >
                            {isSignInForm ? 'Sign In' : 'Sign Up'}
                        </button>

                        <p className="text-center text-sm mt-4 cursor-pointer hover:underline" onClick={toggleSignInForm}>
                            {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In'}
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login
