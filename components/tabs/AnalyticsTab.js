import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

import { competitorPricing, guestSegments, revenueData } from '../../data/mockData';

const AnalyticsTab = () => {
  return (
    <div className="space-y-8">
      {/* Competitor Analysis */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Position Analysis</h3>
        <p className="text-gray-600 text-sm mb-6">Compare your villa's pricing and occupancy with local competitors</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={competitorPricing} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="property" 
              angle={-45} 
              textAnchor="end" 
              height={100}
              fontSize={12}
            />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip 
              formatter={(value, name) => [
                name === 'avgPrice' ? `€${value}` : `${value}%`,
                name === 'avgPrice' ? 'Average Price' : 'Occupancy Rate'
              ]}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="avgPrice" fill="#C65D47" name="Avg Price (€)" />
            <Bar yAxisId="right" dataKey="occupancy" fill="#E8A87C" name="Occupancy %" />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 p-4 bg-orange-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Key Insights</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Your villa offers competitive pricing at €285/night</li>
            <li>• Highest occupancy rate (78%) among competitors</li>
            <li>• Opportunity to increase pricing by 10-15% based on performance</li>
          </ul>
        </div>
      </div>

      {/* Guest Segments & Booking Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Guest Segments</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={guestSegments}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {guestSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="mt-4 space-y-2">
            {guestSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-3" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{segment.name}</span>
                </div>
                <span className="text-sm font-medium">{segment.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Booking Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#C65D47" />
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Seasonal Trends</h4>
            <p className="text-sm text-gray-600">
              Peak season: June-August (22-26 bookings/month)<br/>
              Low season: November-February (8-13 bookings/month)
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Revenue per Guest</h4>
          <div className="text-3xl font-bold text-resilienza-primary mb-2">€1,518</div>
          <p className="text-sm text-gray-600">Average spend per booking</p>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-resilienza-primary rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Average Stay Duration</h4>
          <div className="text-3xl font-bold text-resilienza-primary mb-2">5.2</div>
          <p className="text-sm text-gray-600">Nights per booking</p>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-resilienza-primary rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Lead Time</h4>
          <div className="text-3xl font-bold text-resilienza-primary mb-2">42</div>
          <p className="text-sm text-gray-600">Days average booking advance</p>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-resilienza-primary rounded-full" style={{ width: '84%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;