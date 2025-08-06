import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="mt-2">Welcome to the admin panel. Here you can view key metrics and manage your orders.</p>
            {/* Additional dashboard components and metrics can be added here */}
        </div>
    );
};

export default Dashboard;