import React, { useEffect } from 'react';
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, [])

    const currentUser = {
        id: 1,
        username: "Kritagya Prasad",
        isSeller: true,
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}
                    {
                        currentUser && (
                            <div className="user" onClick={() => setOpen(!open)}>
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>{currentUser?.username}</span>
                                {open && <div className="options">
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <Link className="link" to="/mygigs">
                                                    Gigs
                                                </Link>
                                                <Link className="link" to="/add">
                                                    Add New Gig
                                                </Link>
                                            </>
                                        )
                                    }
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Messages
                                    </Link>
                                    <Link className="link" to="/">
                                        Logout
                                    </Link>
                                </div>}
                            </div>
                        )
                    }
                </div>
            </div>

            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar;