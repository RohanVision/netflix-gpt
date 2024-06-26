import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className='absolute px-6 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between items-center'>
            <img className='w-40' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo' />

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
