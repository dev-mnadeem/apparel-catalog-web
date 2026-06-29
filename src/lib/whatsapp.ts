// WhatsApp Business API integration for order confirmations
export interface WhatsAppMessage {
  phoneNumber: string
  message: string
  orderId: string
  customerName: string
}

export interface OrderDetails {
  orderId: string
  customerName: string
  phoneNumber: string
  items: Array<{
    name: string
    quantity: number
    price: string
  }>
  total: string
  shippingAddress?: string
  estimatedDelivery?: string
}

class WhatsAppService {
  private apiUrl: string
  private accessToken: string
  private phoneNumberId: string

  constructor() {
    // These should be environment variables in production
    this.apiUrl = process.env.NEXT_PUBLIC_WHATSAPP_API_URL || 'https://graph.facebook.com/v18.0'
    this.accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN || ''
    this.phoneNumberId = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID || ''
  }

  /**
   * Send order confirmation message via WhatsApp
   */
  async sendOrderConfirmation(orderDetails: OrderDetails): Promise<boolean> {
    try {
      // Check if API credentials are configured
      if (!this.accessToken || !this.phoneNumberId) {
        console.log('WhatsApp API not configured - skipping automatic message')
        return false
      }

      // Format the message
      const message = this.formatOrderConfirmationMessage(orderDetails)
      
      // Send via WhatsApp Business API
      const response = await fetch(`${this.apiUrl}/${this.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: orderDetails.phoneNumber,
          type: 'text',
          text: {
            body: message
          }
        })
      })

      if (!response.ok) {
        console.error(`WhatsApp API error: ${response.status} - ${response.statusText}`)
        return false
      }

      const result = await response.json()
      console.log('WhatsApp message sent successfully:', result)
      return true

    } catch (error) {
      console.error('Error sending WhatsApp message:', error)
      return false
    }
  }

  /**
   * Format order confirmation message
   */
  private formatOrderConfirmationMessage(order: OrderDetails): string {
    const itemsList = order.items
      .map(item => `• ${item.name} (Qty: ${item.quantity}) - ${item.price}`)
      .join('\n')

    const message = `🎉 *Order Confirmed!* 🎉

*Order ID:* ${order.orderId}
*Customer:* ${order.customerName}

*Items Ordered:*
${itemsList}

*Total Amount:* ${order.total}

${order.shippingAddress ? `*Shipping Address:* ${order.shippingAddress}` : ''}
${order.estimatedDelivery ? `*Estimated Delivery:* ${order.estimatedDelivery}` : ''}

Thank you for choosing Trendy Folds! 🛍️

Your order is being processed and will be shipped soon. We'll keep you updated on the delivery status.

For any questions, feel free to contact us:
📧 support@trendyfolds.com
📱 +92-XXX-XXXXXXX

*Trendy Folds - Premium Fashion Store*`

    return message
  }

  /**
   * Send order status update
   */
  async sendOrderStatusUpdate(phoneNumber: string, orderId: string, status: string, additionalInfo?: string): Promise<boolean> {
    try {
      // Check if API credentials are configured
      if (!this.accessToken || !this.phoneNumberId) {
        console.log('WhatsApp API not configured - skipping status update')
        return false
      }

      const message = `📦 *Order Status Update*

*Order ID:* ${orderId}
*Status:* ${status}

${additionalInfo ? `*Additional Info:* ${additionalInfo}` : ''}

Track your order at: https://trendyfolds.com/orders/${orderId}

*Trendy Folds*`

      const response = await fetch(`${this.apiUrl}/${this.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'text',
          text: {
            body: message
          }
        })
      })

      if (!response.ok) {
        console.error(`WhatsApp API error: ${response.status} - ${response.statusText}`)
        return false
      }

      return true

    } catch (error) {
      console.error('Error sending status update:', error)
      return false
    }
  }

  /**
   * Send delivery confirmation
   */
  async sendDeliveryConfirmation(phoneNumber: string, orderId: string, deliveryDate: string): Promise<boolean> {
    try {
      // Check if API credentials are configured
      if (!this.accessToken || !this.phoneNumberId) {
        console.log('WhatsApp API not configured - skipping delivery confirmation')
        return false
      }

      const message = `🎁 *Package Delivered!*

*Order ID:* ${orderId}
*Delivery Date:* ${deliveryDate}

Your order has been successfully delivered! 

We hope you love your new items from Trendy Folds! 

Please share your experience with us and consider leaving a review.

*Trendy Folds - Premium Fashion Store*`

      const response = await fetch(`${this.apiUrl}/${this.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: phoneNumber,
          type: 'text',
          text: {
            body: message
          }
        })
      })

      if (!response.ok) {
        console.error(`WhatsApp API error: ${response.status} - ${response.statusText}`)
        return false
      }

      return true

    } catch (error) {
      console.error('Error sending delivery confirmation:', error)
      return false
    }
  }
}

// Export singleton instance
export const whatsappService = new WhatsAppService()

// Alternative: Direct WhatsApp link for manual messaging (fallback)
export function createWhatsAppLink(phoneNumber: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}
