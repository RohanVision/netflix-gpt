import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSerach)
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid, email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    }, []);

    const handleGptSearchClick = () => {
        // Toggle GPT search 
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute px-6 py-2 z-10 w-full bg-gradient-to-b from-black to-transparent flex flex-col md:flex-row md:justify-between items-center shadow-lg">
            <img className="w-36 md:w-40 mb-2 md:mb-0" src={LOGO} alt="netflix-logo" />

            {user && (
                <div className="flex items-center justify-center flex-wrap md:flex-row space-x-4">
                    {showGptSearch && (
                        <select
                            onChange={handleLanguageChange}
                            className="px-3 md:px-4 py-1 md:py-2 bg-yellow-400 text-black rounded-md outline-none cursor-pointer hover:bg-yellow-500 transition duration-300"
                        >
                            {SUPPORTED_LANG.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        onClick={handleGptSearchClick}
                        className="py-2 px-4 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition duration-300"
                    >
                        {showGptSearch ? "Homepage" : "GPT Search"}
                    </button>

                    <img
                        className="hidden md:block w-8 md:w-10 ml-4 border-2 border-black-500 hover:border-white transition duration-300"
                        src={user?.photoURL}
                        alt="usericon"
                    />

                    <button
                        onClick={handleSignOut}
                        className="md:px-3 py-2 text-white font-medium hover:text-gray-300 transition duration-300"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>

    )
}

export default Header
