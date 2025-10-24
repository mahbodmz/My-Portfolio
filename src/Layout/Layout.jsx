import React from 'react'
import './Layout.css'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout