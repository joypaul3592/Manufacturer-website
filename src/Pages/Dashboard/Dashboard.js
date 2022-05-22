import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBare from './DashboardSideBare';

const Dashboard = () => {
    return (
        <DashboardSideBare>
            <Outlet />
        </DashboardSideBare>
    );
};

export default Dashboard;