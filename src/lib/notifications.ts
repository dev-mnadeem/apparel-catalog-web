export interface OrderDetails {
  orderId: string
  customerName: string
  phoneNumber: string
  email: string
  items: Array<{
    name: string
    quantity: number
    price: string
  }>
  total: string
  shippingAddress?: string
  estimatedDelivery?: string
}

export interface NotificationResult {
  whatsappSent: boolean
  emailSent: boolean
  success: boolean
  errors: string[]
}

class NotificationService {
  async sendOrderConfirmation(order: OrderDetails): Promise<NotificationResult> {
    try {
      const response = await fetch('/api/notify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order, email: order.email, phone: order.phoneNumber }),
        signal: AbortSignal.timeout(10000),
      });
      if (!response.ok) return { whatsappSent: false, emailSent: false, success: false, errors: ['Notification service is unavailable.'] };
      const payload = await response.json();
      const delivered = Array.isArray(payload.delivered) ? payload.delivered : [];
      const whatsappSent = delivered.includes('whatsapp');
      const emailSent = delivered.includes('email');
      return { whatsappSent, emailSent, success: whatsappSent || emailSent,
        errors: whatsappSent || emailSent ? [] : ['No notification was delivered.'] };
    } catch {
      return { whatsappSent: false, emailSent: false, success: false, errors: ['Notification service is unavailable.'] };
    }
  }
}
export const notificationService = new NotificationService();
