'use client';

import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ActivityNotification {
  id: number;
  customerName: string;
  productName: string;
  timeAgo: string;
  avatar: string;
}

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState<ActivityNotification[]>([]);
  const [visibleNotifications, setVisibleNotifications] = useState<ActivityNotification[]>([]);

  // Sample customer data
  const sampleCustomers = [
    { name: 'Sarah A.', product: 'Pret Dress', avatar: '👩‍🦰' },
    { name: 'Ayesha K.', product: 'Men Scarf', avatar: '👩‍🦱' },
    { name: 'Hiba M.', product: 'Men Pocket Square', avatar: '👩‍🦳' },
    { name: 'Saad R.', product: 'Women Silk Scarf', avatar: '👨‍🦱' },
    { name: 'Usman A.', product: 'Pret Dress', avatar: '👨‍🦲' },
    { name: 'Fatima S.', product: 'Men Scarf', avatar: '👩‍🦰' },
    { name: 'Ahmed H.', product: 'Men Pocket Square', avatar: '👨‍🦱' },
    { name: 'Zara N.', product: 'Women Silk Scarf', avatar: '👩‍🦳' },
    { name: 'Hassan M.', product: 'Pret Dress', avatar: '👨‍🦰' },
    { name: 'Amina F.', product: 'Men Scarf', avatar: '👩‍🦲' },
    { name: 'Layla B.', product: 'Women Scarf', avatar: '👩‍🦰' },
    { name: 'Noor K.', product: 'Women Pret', avatar: '👩‍🦱' },
    { name: 'Mariam S.', product: 'Women Scarf', avatar: '👩‍🦳' },
    { name: 'Yusuf M.', product: 'Women Pret', avatar: '👨‍🦱' },
    { name: 'Aisha R.', product: 'Women Scarf', avatar: '👩‍🦲' },
  ];

  // Generate random notifications
  const generateNotification = (): ActivityNotification => {
    const customer = sampleCustomers[Math.floor(Math.random() * sampleCustomers.length)];
    const timeOptions = [
      '1 min ago', '2 mins ago', '3 mins ago', 
      '45 secs ago', '30 secs ago', '1 min 30 secs ago',
      '2 mins 15 secs ago', '1 min 45 secs ago', '50 secs ago'
    ];
    const timeAgo = timeOptions[Math.floor(Math.random() * timeOptions.length)];

    return {
      id: Date.now() + Math.random(),
      customerName: customer.name,
      productName: customer.product,
      timeAgo,
      avatar: customer.avatar,
    };
  };

  // Add new notification every few seconds
  useEffect(() => {
    const addNotification = () => {
      const newNotification = generateNotification();
      setNotifications(prev => [...prev, newNotification]);
      
      // Show notification
      setVisibleNotifications(prev => [...prev, newNotification]);
      
      // Remove notification after 8 seconds
      setTimeout(() => {
        setVisibleNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 8000);
    };

    // Add first notification after 2 seconds
    const initialTimer = setTimeout(addNotification, 2000);
    
    // Add subsequent notifications every 6-12 seconds
    const interval = setInterval(addNotification, 6000 + Math.random() * 6000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Remove notification manually
  const removeNotification = (id: number) => {
    setVisibleNotifications(prev => prev.filter(n => n.id !== id));
  };

  if (visibleNotifications.length === 0) return null;

  return (
    <div className="fixed left-4 bottom-4 z-[80] space-y-3">
      {visibleNotifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white border border-amber-200 rounded-lg shadow-lg p-4 max-w-xs animate-slide-in-left"
          style={{
            animation: 'slideInLeft 0.5s ease-out',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{notification.avatar}</span>
              <span className="text-sm font-semibold text-gray-800">
                {notification.customerName}
              </span>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Purchase Message */}
          <div className="text-sm text-gray-600 mb-2">
            Just looking at{' '}
            <span className="font-semibold text-amber-600">
              {notification.productName}
            </span>
          </div>

          {/* Time */}
          <div className="text-xs text-gray-400">
            {notification.timeAgo}
          </div>

          {/* Progress bar */}
          <div className="mt-2 w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-amber-500 h-1 rounded-full transition-all duration-300"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default PurchaseNotifications;
