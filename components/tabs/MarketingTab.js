import React from 'react';
import { Mail, Send, Users, TrendingUp, Play, Pause } from 'lucide-react';

import { emailCampaigns, automations } from '../../data/mockData';

const MarketingTab = () => {
  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>;
      case 'paused':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Paused</span>;
      case 'sent':
        return <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Sent</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Draft</span>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Marketing Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Email Subscribers</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2,847</p>
            </div>
            <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-resilienza-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+12.5% this month</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Open Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">31.9%</p>
            </div>
            <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-resilienza-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+2.1% vs industry</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Click Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8.1%</p>
            </div>
            <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Send className="h-6 w-6 text-resilienza-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+1.3% vs industry</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Revenue Generated</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">€48.2K</p>
            </div>
            <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-resilienza-primary" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+18.7% this quarter</span>
          </div>
        </div>
      </div>

      {/* Email Campaigns and Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Email Campaigns</h3>
            <button className="btn-primary">
              Create New Campaign
            </button>
          </div>
          
          <div className="space-y-4">
            {emailCampaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                  <p className="text-sm text-gray-600">Sent to {campaign.recipients.toLocaleString()} customers</p>
                  <p className="text-xs text-gray-500 mt-1">{campaign.sentDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">{campaign.openRate}% Open Rate</p>
                  <p className="text-sm text-gray-600">{campaign.clickRate}% Click Rate</p>
                  {getStatusBadge(campaign.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Automation Status</h3>
            <button className="btn-secondary">
              Configure Workflows
            </button>
          </div>
          
          <div className="space-y-4">
            {automations.map((automation, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center">
                  <div className="mr-4">
                    {automation.status === 'active' ? (
                      <Play className="h-5 w-5 text-green-500" />
                    ) : (
                      <Pause className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{automation.name}</h4>
                    <p className="text-sm text-gray-600">{automation.description}</p>
                    {automation.status === 'active' && (
                      <p className="text-xs text-gray-500 mt-1">
                        {automation.triggers} triggers • {automation.completionRate}% completion
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(automation.status)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Performance */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Campaign Performance Insights</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Best Performing Content</h4>
            <p className="text-sm text-gray-600 mb-3">
              "Summer Special Offer" had the highest engagement with 35.2% open rate and 9.4% click rate.
            </p>
            <div className="text-sm">
              <span className="text-blue-600 font-medium">Key factors:</span>
              <ul className="text-gray-600 text-xs mt-1">
                <li>• Sent on Tuesday at 10 AM</li>
                <li>• Personalized subject line</li>
                <li>• Clear call-to-action</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Audience Insights</h4>
            <p className="text-sm text-gray-600 mb-3">
              Most engaged segment: Previous guests aged 35-55 from UK and Germany.
            </p>
            <div className="text-sm">
              <span className="text-green-600 font-medium">Preferences:</span>
              <ul className="text-gray-600 text-xs mt-1">
                <li>• Exclusive offers and early access</li>
                <li>• Local experiences and recommendations</li>
                <li>• Travel tips and guides</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Optimization Opportunities</h4>
            <p className="text-sm text-gray-600 mb-3">
              Implement A/B testing for subject lines and send times to improve performance by 15-20%.
            </p>
            <div className="text-sm">
              <span className="text-orange-600 font-medium">Next steps:</span>
              <ul className="text-gray-600 text-xs mt-1">
                <li>• Test mobile-optimized templates</li>
                <li>• Segment by booking history</li>
                <li>• Add social proof elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-resilienza-primary hover:bg-orange-50 transition-colors">
            <Mail className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-600">Send Newsletter</div>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-resilienza-primary hover:bg-orange-50 transition-colors">
            <Users className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-600">Import Contacts</div>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-resilienza-primary hover:bg-orange-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-600">View Analytics</div>
          </button>
          
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-resilienza-primary hover:bg-orange-50 transition-colors">
            <Send className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <div className="text-sm font-medium text-gray-600">A/B Test</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingTab;