// Comprehensive notification service for order confirmations
import { whatsappService } from './whatsapp'

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
  private emailApiKey: string
  private emailServiceUrl: string

  constructor() {
    // Email service configuration (you can use services like SendGrid, Mailgun, etc.)
    // Deliberately empty. The API key used to be read from
    // NEXT_PUBLIC_EMAIL_API_KEY here — which Next.js inlines into the client
    // bundle, publishing it to every visitor. Sending is done by
    // /api/notify, which runs on the server and holds the key there.
    this.emailApiKey = ''
    this.emailServiceUrl = process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL || ''
  }

  /**
   * Send comprehensive order confirmation (WhatsApp + Email)
   */
  async sendOrderConfirmation(orderDetails: OrderDetails): Promise<NotificationResult> {
    const result: NotificationResult = {
      whatsappSent: false,
      emailSent: false,
      success: false,
      errors: []
    }

    try {
      // Send WhatsApp confirmation
      if (orderDetails.phoneNumber) {
        try {
          result.whatsappSent = await whatsappService.sendOrderConfirmation(orderDetails)
          if (result.whatsappSent) {
            console.log('✅ WhatsApp confirmation sent successfully')
          } else {
            result.errors.push('WhatsApp confirmation failed')
          }
        } catch (error) {
          result.errors.push(`WhatsApp error: ${error}`)
        }
      }

      // Send email confirmation
      if (orderDetails.email) {
        try {
          result.emailSent = await this.sendEmailConfirmation(orderDetails)
          if (result.emailSent) {
            console.log('✅ Email confirmation sent successfully')
          } else {
            result.errors.push('Email confirmation failed')
          }
        } catch (error) {
          result.errors.push(`Email error: ${error}`)
        }
      }

      // Consider success if at least one method worked
      result.success = result.whatsappSent || result.emailSent

      if (result.success) {
        console.log('🎉 Order confirmation sent successfully!')
      } else {
        console.log('❌ All notification methods failed')
      }

    } catch (error) {
      result.errors.push(`General error: ${error}`)
      console.error('Error in notification service:', error)
    }

    return result
  }

  /**
   * Send email confirmation
   */
  private async sendEmailConfirmation(orderDetails: OrderDetails): Promise<boolean> {
    // Posts to our own server route, which holds the credentials. The browser
    // never sees them.
    try {
      const response = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order: orderDetails,
          email: orderDetails.email,
          phone: orderDetails.phoneNumber,
        }),
      })
      if (!response.ok) return false
      const result = await response.json()
      return Array.isArray(result.delivered) && result.delivered.length > 0
    } catch (error) {
      console.error('notification request failed:', error)
      return false
    }
  }

  /**
   * Format HTML email confirmation
   */
  private formatEmailConfirmation(order: OrderDetails): string {
    const itemsList = order.items
      .map(item => `<li>${item.name} (Qty: ${item.quantity}) - ${item.price}</li>`)
      .join('')

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmed - Trendy Folds</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .order-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .item { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .item:last-child { border-bottom: none; }
          .total { font-size: 18px; font-weight: bold; color: #f59e0b; margin-top: 20px; }
          .footer { text-align: center; margin-top: 30px; color: #6b7280; }
          .button { display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Order Confirmed!</h1>
            <p>Thank you for choosing Trendy Folds!</p>
          </div>
          
          <div class="content">
            <h2>Order Details</h2>
            <div class="order-details">
              <p><strong>Order ID:</strong> ${order.orderId}</p>
              <p><strong>Customer:</strong> ${order.customerName}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <h3>Items Ordered:</h3>
            <ul style="list-style: none; padding: 0;">
              ${itemsList}
            </ul>

            <div class="total">
              <strong>Total Amount: ${order.total}</strong>
            </div>

            ${order.shippingAddress ? `
              <h3>Shipping Address:</h3>
              <p>${order.shippingAddress}</p>
            ` : ''}

            ${order.estimatedDelivery ? `
              <h3>Estimated Delivery:</h3>
              <p>${order.estimatedDelivery}</p>
            ` : ''}

            <div style="text-align: center; margin: 30px 0;">
              <a href="https://trendyfolds.com" class="button">Continue Shopping</a>
            </div>

            <p><strong>What's Next?</strong></p>
            <ul>
              <li>We'll process your order immediately</li>
              <li>You'll receive shipping updates via WhatsApp</li>
              <li>Track your order status in real-time</li>
              <li>Customer support available 24/7</li>
            </ul>

            <div class="footer">
              <p>For any questions, contact us:</p>
              <p>📧 support@trendyfolds.com</p>
              <p>📱 +92-XXX-XXXXXXX</p>
              <p><strong>Trendy Folds - Premium Fashion Store</strong></p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  }

  /**
   * Format plain text email confirmation
   */
  private formatEmailConfirmationText(order: OrderDetails): string {
    const itemsList = order.items
      .map(item => `• ${item.name} (Qty: ${item.quantity}) - ${item.price}`)
      .join('\n')

    return `
🎉 Order Confirmed!

Order ID: ${order.orderId}
Customer: ${order.customerName}
Date: ${new Date().toLocaleDateString()}

Items Ordered:
${itemsList}

Total Amount: ${order.total}

${order.shippingAddress ? `Shipping Address: ${order.shippingAddress}` : ''}
${order.estimatedDelivery ? `Estimated Delivery: ${order.estimatedDelivery}` : ''}

What's Next?
• We'll process your order immediately
• You'll receive shipping updates via WhatsApp
• Track your order status in real-time
• Customer support available 24/7

For any questions, contact us:
📧 support@trendyfolds.com
📱 +92-XXX-XXXXXXX

Trendy Folds - Premium Fashion Store
    `.trim()
  }

  /**
   * Send order status updates
   */
  async sendOrderStatusUpdate(
    phoneNumber: string, 
    email: string, 
    orderId: string, 
    status: string, 
    additionalInfo?: string
  ): Promise<NotificationResult> {
    const result: NotificationResult = {
      whatsappSent: false,
      emailSent: false,
      success: false,
      errors: []
    }

    try {
      // Send WhatsApp status update
      if (phoneNumber) {
        try {
          result.whatsappSent = await whatsappService.sendOrderStatusUpdate(phoneNumber, orderId, status, additionalInfo)
        } catch (error) {
          result.errors.push(`WhatsApp status update error: ${error}`)
        }
      }

      // Send email status update
      if (email) {
        try {
          result.emailSent = await this.sendEmailStatusUpdate(email, orderId, status, additionalInfo)
        } catch (error) {
          result.errors.push(`Email status update error: ${error}`)
        }
      }

      result.success = result.whatsappSent || result.emailSent
      return result

    } catch (error) {
      result.errors.push(`General status update error: ${error}`)
      return result
    }
  }

  /**
   * Send email status update
   */
  private async sendEmailStatusUpdate(
    email: string, 
    orderId: string, 
    status: string, 
    additionalInfo?: string
  ): Promise<boolean> {
    try {
      if (!this.emailApiKey || !this.emailServiceUrl) {
        return false
      }

      const emailData = {
        to: email,
        subject: `Order Status Update - ${orderId}`,
        html: `
          <h2>📦 Order Status Update</h2>
          <p><strong>Order ID:</strong> ${orderId}</p>
          <p><strong>Status:</strong> ${status}</p>
          ${additionalInfo ? `<p><strong>Additional Info:</strong> ${additionalInfo}</p>` : ''}
          <p>Track your order at: <a href="https://trendyfolds.com/orders/${orderId}">trendyfolds.com/orders/${orderId}</a></p>
        `,
        text: `
Order Status Update

Order ID: ${orderId}
Status: ${status}
${additionalInfo ? `Additional Info: ${additionalInfo}` : ''}

Track your order at: https://trendyfolds.com/orders/${orderId}
        `.trim()
      }

      const response = await fetch(this.emailServiceUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.emailApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      })

      return response.ok

    } catch (error) {
      console.error('Error sending status update email:', error)
      return false
    }
  }
}

// Export singleton instance
export const notificationService = new NotificationService()

// Export types for use in other files
// NotificationResult and OrderDetails are already exported as interfaces above



