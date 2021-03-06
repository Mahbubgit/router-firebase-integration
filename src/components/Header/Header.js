import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';

const auth = getAuth(app);
const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/orders"}>Orders</Link>
                <Link to={"/register"}>Register</Link>

                {
                    user && <>
                    <Link to={"/vip"}>VIP</Link>
                    </>
                }
                {
                    user?.uid ?
                        <>
                            <span>{user.displayName && user.displayName}</span>
                            <button onClick={() => signOut(auth)}>Sign Out</button>
                        </>
                        :
                        <Link to={"/login"}>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;