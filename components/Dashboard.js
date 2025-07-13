'use client';

import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, Users, Star, Calendar } from 'lucide-react';

import Sidebar from './Sidebar';
import StatCard from './StatCard';
import OverviewTab from './tabs/OverviewTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import CustomersTab from './tabs/CustomersTab';
import MarketingTab from './tabs/MarketingTab';

import { kpiData } from '../data/mockData';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const getTabTitle = () => {
    switch(activeTab) {
      case 'overview': return 'Dashboard Overview';
      case 'analytics': return 'Business Analytics';
      case 'customers': return 'Customer Insights';
      case 'marketing': return 'Marketing Hub';
      default: return 'Dashboard';
    }
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview': return <OverviewTab />;
      case 'analytics': return <AnalyticsTab />;
      case 'customers': return <CustomersTab />;
      case 'marketing': return <MarketingTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="p-8 md:ml-64">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {getTabTitle()}
            </h2>
            <p className="text-gray-500 mt-1">Monitor your villa performance and grow your business</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-resilienza-primary">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last 3 months</option>
            </select>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;