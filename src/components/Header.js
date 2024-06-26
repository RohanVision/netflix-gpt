import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
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

    return (
        <div className='absolute px-6 py-2 z-10 w-full bg-gradient-to-b from-black flex justify-between items-center'>
            <img className='w-40' src={LOGO} alt='netflix-logo' />

            {user && <div>
                <div className='flex'>
                    <img className='w-10 rounded-lg' src={user?.photoURL} alt='usericon' />
                    <button onClick={handleSignOut} className='px-2 text-white font-bold'>(Sign Out)</button>
                </div>
            </div>}
        </div>
    )
}

export default Header
