'use client'

import { useState } from 'react'
import { whatsappService } from '@/lib/whatsapp'

export default function TestWhatsAppPage() {
  const [testResult, setTestResult] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const testWhatsAppConfig = async () => {
    setIsLoading(true)
    setTestResult('Testing WhatsApp configuration...')

    try {
      // Test with a sample order
      const testOrder = {
        orderId: 'TEST-123456',
        customerName: 'Test Customer',
        phoneNumber: phoneNumber || '923001234567', // Default test number
        items: [
          { name: 'Test Product', quantity: 1, price: 'Rs.999' }
        ],
        total: 'Rs.999',
        shippingAddress: 'Test Address, Karachi, Pakistan',
        estimatedDelivery: '3-5 business days'
      }

      console.log('🧪 Testing WhatsApp with order:', testOrder)
      
      const result = await whatsappService.sendOrderConfirmation(testOrder)
      
      if (result) {
        setTestResult('✅ WhatsApp message sent successfully! Check your phone.')
      } else {
        setTestResult('❌ WhatsApp message failed. Check console for details.')
      }

    } catch (error) {
      setTestResult(`❌ Error: ${error}`)
      console.error('WhatsApp test error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const checkEnvironmentVariables = () => {
    const apiUrl = process.env.NEXT_PUBLIC_WHATSAPP_API_URL
    const accessToken = process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN
    const phoneNumberId = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER_ID

    let status = '🔍 Environment Variables Check:\n\n'
    
    if (apiUrl) {
      status += `✅ API URL: ${apiUrl}\n`
    } else {
      status += `❌ API URL: Not set\n`
    }

    if (accessToken) {
      status += `✅ Access Token: ${accessToken.substring(0, 10)}...\n`
    } else {
      status += `❌ Access Token: Not set\n`
    }

    if (phoneNumberId) {
      status += `✅ Phone Number ID: ${phoneNumberId}\n`
    } else {
      status += `❌ Phone Number ID: Not set\n`
    }

    if (!apiUrl || !accessToken || !phoneNumberId) {
      status += '\n❌ WhatsApp API is not properly configured!\n'
      status += 'Please check your .env.local file and follow the setup guide.'
    } else {
      status += '\n✅ All environment variables are set!'
    }

    setTestResult(status)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 pt-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🧪 WhatsApp API Test Page
          </h1>
          
          <div className="space-y-6">
            {/* Environment Check */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-blue-800 mb-3">
                Step 1: Check Configuration
              </h2>
              <button
                onClick={checkEnvironmentVariables}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                🔍 Check Environment Variables
              </button>
            </div>

            {/* WhatsApp Test */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-green-800 mb-3">
                Step 2: Test WhatsApp Message
              </h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (with country code):
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="923001234567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Format: 923001234567 (Pakistan: 92 + 3XX + XXXXXXX)
                </p>
              </div>

              <button
                onClick={testWhatsAppConfig}
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400"
              >
                {isLoading ? '🔄 Testing...' : '📱 Send Test WhatsApp Message'}
              </button>
            </div>

            {/* Results */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Test Results
              </h2>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                  {testResult || 'Click the buttons above to test your WhatsApp configuration.'}
                </pre>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-amber-800 mb-3">
                🔧 Troubleshooting Steps
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-amber-700">
                <li>Check if you have a <code className="bg-amber-100 px-1 rounded">.env.local</code> file in your project root</li>
                <li>Verify your WhatsApp Business API credentials are correct</li>
                <li>Make sure your phone number format includes country code (e.g., 923001234567)</li>
                <li>Check the browser console for detailed error messages</li>
                <li>Follow the setup guide in <code className="bg-amber-100 px-1 rounded">WHATSAPP_SETUP.md</code></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
