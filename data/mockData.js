export const revenueData = [
  { month: 'Jan', revenue: 12500, bookings: 8 },
  { month: 'Feb', revenue: 15200, bookings: 10 },
  { month: 'Mar', revenue: 18900, bookings: 12 },
  { month: 'Apr', revenue: 22300, bookings: 15 },
  { month: 'May', revenue: 28700, bookings: 18 },
  { month: 'Jun', revenue: 35400, bookings: 22 },
  { month: 'Jul', revenue: 42100, bookings: 26 },
  { month: 'Aug', revenue: 38900, bookings: 24 },
  { month: 'Sep', revenue: 31200, bookings: 19 },
  { month: 'Oct', revenue: 24800, bookings: 16 },
  { month: 'Nov', revenue: 19500, bookings: 13 },
  { month: 'Dec', revenue: 16800, bookings: 11 }
];

export const satisfactionData = [
  { month: 'Jan', satisfaction: 4.2, reviews: 15 },
  { month: 'Feb', satisfaction: 4.3, reviews: 18 },
  { month: 'Mar', satisfaction: 4.5, reviews: 22 },
  { month: 'Apr', satisfaction: 4.4, reviews: 28 },
  { month: 'May', satisfaction: 4.6, reviews: 35 },
  { month: 'Jun', satisfaction: 4.7, reviews: 42 },
  { month: 'Jul', satisfaction: 4.8, reviews: 48 },
  { month: 'Aug', satisfaction: 4.6, reviews: 45 },
  { month: 'Sep', satisfaction: 4.5, reviews: 38 },
  { month: 'Oct', satisfaction: 4.4, reviews: 32 },
  { month: 'Nov', satisfaction: 4.3, reviews: 25 },
  { month: 'Dec', satisfaction: 4.2, reviews: 20 }
];

export const competitorPricing = [
  { property: 'Villa Resilienza', avgPrice: 285, occupancy: 78 },
  { property: 'Costa del Sol Villas', avgPrice: 320, occupancy: 65 },
  { property: 'Huelva Luxury Homes', avgPrice: 275, occupancy: 72 },
  { property: 'Andalucía Retreats', avgPrice: 310, occupancy: 68 },
  { property: 'Mediterranean Escapes', avgPrice: 295, occupancy: 70 }
];

export const guestSegments = [
  { name: 'Families', value: 45, color: '#C65D47' },
  { name: 'Couples', value: 35, color: '#E8A87C' },
  { name: 'Business', value: 12, color: '#F4D1AE' },
  { name: 'Groups', value: 8, color: '#D4B886' }
];

export const topCustomers = [
  { 
    name: 'Maria González', 
    bookings: 5, 
    revenue: 14200, 
    lastStay: '2024-08-15', 
    satisfaction: 4.8,
    email: 'maria.gonzalez@email.com',
    phone: '+34 666 123 456'
  },
  { 
    name: 'James Wilson', 
    bookings: 4, 
    revenue: 11800, 
    lastStay: '2024-09-22', 
    satisfaction: 4.9,
    email: 'james.wilson@email.com',
    phone: '+44 20 7123 4567'
  },
  { 
    name: 'Sophie Laurent', 
    bookings: 3, 
    revenue: 9500, 
    lastStay: '2024-07-10', 
    satisfaction: 4.7,
    email: 'sophie.laurent@email.com',
    phone: '+33 1 42 34 56 78'
  },
  { 
    name: 'Carlos Rodriguez', 
    bookings: 3, 
    revenue: 8900, 
    lastStay: '2024-06-28', 
    satisfaction: 4.6,
    email: 'carlos.rodriguez@email.com',
    phone: '+34 91 234 56 78'
  },
  { 
    name: 'Emma Thompson', 
    bookings: 2, 
    revenue: 7400, 
    lastStay: '2024-05-14', 
    satisfaction: 4.8,
    email: 'emma.thompson@email.com',
    phone: '+44 161 234 5678'
  }
];

export const emailCampaigns = [
  {
    name: 'Summer Special Offer',
    recipients: 1247,
    openRate: 32.5,
    clickRate: 8.2,
    status: 'sent',
    sentDate: '2024-06-15'
  },
  {
    name: 'Welcome Back Campaign',
    recipients: 892,
    openRate: 28.1,
    clickRate: 6.7,
    status: 'sent',
    sentDate: '2024-07-02'
  },
  {
    name: 'Autumn Getaway',
    recipients: 1456,
    openRate: 35.2,
    clickRate: 9.4,
    status: 'sent',
    sentDate: '2024-09-01'
  }
];

export const automations = [
  {
    name: 'Welcome Sequence',
    description: 'New guest onboarding',
    status: 'active',
    triggers: 24,
    completionRate: 87
  },
  {
    name: 'Booking Reminders',
    description: 'Pre-arrival communications',
    status: 'active',
    triggers: 156,
    completionRate: 92
  },
  {
    name: 'Review Requests',
    description: 'Post-stay feedback',
    status: 'active',
    triggers: 89,
    completionRate: 76
  },
  {
    name: 'Win-back Campaign',
    description: 'Re-engage past guests',
    status: 'paused',
    triggers: 0,
    completionRate: 0
  }
];

export const kpiData = {
  totalRevenue: 306400,
  occupancyRate: 74.2,
  guestSatisfaction: 4.5,
  totalBookings: 202,
  revenueGrowth: 12.5,
  occupancyGrowth: 8.3,
  satisfactionGrowth: 0.3,
  bookingsGrowth: 15.2
};