import { TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, subtitle, icon: Icon, trend, trendColor = "green" }) => {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
        <div className="h-12 w-12 bg-orange-50 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-resilienza-primary" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <TrendingUp className={`h-4 w-4 text-${trendColor}-500 mr-1`} />
          <span className={`text-sm text-${trendColor}-600 font-medium`}>{trend}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;