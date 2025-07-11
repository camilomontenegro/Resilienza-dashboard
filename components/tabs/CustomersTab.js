import React from 'react';
import { Star, Mail, Phone } from 'lucide-react';

import { topCustomers } from '../../data/mockData';

const CustomersTab = () => {
  return (
    <div className="space-y-8">
      {/* Top Customers Table */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Top Customers</h3>
          <button className="btn-primary">
            Export Customer Data
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Bookings</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Last Stay</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topCustomers.map((customer, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-resilienza-primary font-semibold">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{customer.name}</div>
                        <div className="text-sm text-gray-500">{customer.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{customer.bookings}</td>
                  <td className="py-4 px-4 text-gray-600">€{customer.revenue.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-600">{customer.lastStay}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-600">{customer.satisfaction}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-resilienza-primary transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-resilienza-primary transition-colors">
                        <Phone className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Customer Loyalty</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">New Customers</span>
              <span className="font-medium">68%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-resilienza-secondary h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Returning Customers</span>
              <span className="font-medium">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-resilienza-primary h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Geographic Distribution</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Spain</span>
              <span className="font-medium">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">UK</span>
              <span className="font-medium">28%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">France</span>
              <span className="font-medium">18%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Germany</span>
              <span className="font-medium">12%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Other</span>
              <span className="font-medium">7%</span>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Booking Behavior</h4>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Average Lead Time</span>
                <span className="font-medium">42 days</span>
              </div>
              <div className="text-xs text-gray-500">+5 days vs last year</div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Average Stay</span>
                <span className="font-medium">5.2 nights</span>
              </div>
              <div className="text-xs text-gray-500">+0.3 nights vs last year</div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Group Size</span>
                <span className="font-medium">4.8 guests</span>
              </div>
              <div className="text-xs text-gray-500">+0.2 guests vs last year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Customer Feedback</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-resilienza-primary font-medium text-sm">MG</span>
                </div>
                <span className="font-medium text-gray-900">Maria González</span>
              </div>
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "Absolutely stunning villa with incredible views. The service was impeccable and the location perfect for exploring Huelva. Will definitely return!"
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-resilienza-primary font-medium text-sm">JW</span>
                </div>
                <span className="font-medium text-gray-900">James Wilson</span>
              </div>
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm italic">
              "Exceeded all expectations. The villa was spotless, well-equipped, and the communication was excellent throughout our stay."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersTab;