import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
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
        <div className='absolute px-6 py-1 z-10 w-full bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between items-center'>
            <img className='w-40' src={LOGO} alt='netflix-logo' />
            {user && <div>
                <div className='flex items-center justify-center flex-wrap  md:flex-row'>
                    <div className='px-4 py-2'>
                        {showGptSearch && (
                            <select onChange={handleLanguageChange} className='px-1 md:px-4 py-2 md:py-1 outline-none bg-yellow-400 text-black rounded cursor-pointer'>
                                {SUPPORTED_LANG.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>

                    <button onClick={handleGptSearchClick} className='py-2 px-4 mr-4 bg-purple-700 text-white rounded'>{showGptSearch ? "Homepage" : "GPT Search"}</button>

                    <img className='hidden md:block w-8 md:w-10 rounded-lg' src={user?.photoURL} alt='usericon' />
                    <button onClick={handleSignOut} className='md:px-2  font-medium text-white'>Sign Out</button>
                </div>
            </div>}
        </div>
    )
}

export default Header
