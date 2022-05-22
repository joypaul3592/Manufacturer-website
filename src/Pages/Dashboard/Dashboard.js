import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBare from './DashboardSideBare';

const Dashboard = ({ children }) => {
    return (
        <DashboardSideBare>
            <Outlet />
        </DashboardSideBare>
    );
};

export default Dashboard;