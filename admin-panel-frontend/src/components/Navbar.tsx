import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-lg font-bold">Admin Panel</div>
                <div className="space-x-4">
                    <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                    <Link to="/orders" className="text-gray-300 hover:text-white">Orders</Link>
                    <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;