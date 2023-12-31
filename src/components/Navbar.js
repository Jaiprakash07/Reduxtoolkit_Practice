import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { useSelector } from "react-redux";

function Navbar() {
    const item = useSelector((data) => {
        console.log(data.cart)
        return data.cart;
    })
    return (
        <>
            <div className="Navbar_Head d-flex flex-row justify-content-evenly align-items-center bg-info" style={{height: '5rem'}}>
                <div className="px-4">
                    <h2 className="fs-3 pt-1">Redux_Toolkit</h2>
                </div>
                <ul className="px-4 pt-1 fs-5 align-items-center">
                    <NavLink to='/' className='mx-2' >Home</NavLink>
                    <NavLink to='/cart' className='mx-2'>Cart</NavLink>
                </ul>
                <div className="px-5 fs-3">
                    <span className="mx-2"><MdPersonOutline /></span>
                    <span className="mx-2">
                        <span>{item.length}</span>
                        <NavLink to='/cart' className='bs-emphasis-color'>
                            <AiOutlineShoppingCart />
                        </NavLink>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Navbar;