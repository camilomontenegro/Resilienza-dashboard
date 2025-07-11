import React from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, Star, Calendar, Home } from 'lucide-react';

import StatCard from '../StatCard';
import { revenueData, satisfactionData, kpiData } from '../../data/mockData';

const OverviewTab = () => {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`€${kpiData.totalRevenue.toLocaleString()}`}
          subtitle="2024 YTD"
          icon={DollarSign}
          trend={`+${kpiData.revenueGrowth}% vs last year`}
        />
        <StatCard
          title="Occupancy Rate"
          value={`${kpiData.occupancyRate}%`}
          subtitle="Current month"
          icon={Home}
          trend={`+${kpiData.occupancyGrowth}% vs last month`}
        />
        <StatCard
          title="Guest Satisfaction"
          value={`${kpiData.guestSatisfaction}/5.0`}
          subtitle="Average rating"
          icon={Star}
          trend={`+${kpiData.satisfactionGrowth} vs last year`}
        />
        <StatCard
          title="Total Bookings"
          value={kpiData.totalBookings}
          subtitle="2024 YTD"
          icon={Calendar}
          trend={`+${kpiData.bookingsGrowth}% vs last year`}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`€${value}`, 'Revenue']} />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#C65D47" 
                fill="#C65D47" 
                fillOpacity={0.1} 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Guest Satisfaction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Satisfaction</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[4.0, 5.0]} />
              <Tooltip formatter={(value) => [`${value}/5.0`, 'Rating']} />
              <Line 
                type="monotone" 
                dataKey="satisfaction" 
                stroke="#C65D47" 
                strokeWidth={3}
                dot={{ fill: '#C65D47', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-3">Peak Season Performance</h4>
          <p className="text-gray-600 text-sm mb-2">July recorded the highest revenue of €42,100 with 26 bookings.</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Occupancy Rate</span>
            <span className="font-medium" style={{ color: '#C65D47' }}>85%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-3">Guest Feedback</h4>
          <p className="text-gray-600 text-sm mb-2">Consistent 4.5+ rating throughout the year with excellent reviews.</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Reviews</span>
            <span className="font-medium" style={{ color: '#C65D47' }}>348</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-900 mb-3">Booking Trends</h4>
          <p className="text-gray-600 text-sm mb-2">Strong growth in repeat customers and advance bookings.</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Repeat Rate</span>
            <span className="font-medium" style={{ color: '#C65D47' }}>32%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;