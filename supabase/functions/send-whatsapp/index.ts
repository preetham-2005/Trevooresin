// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { clientName, phone, email, category, budget, neededBy, details, id } = await req.json()

    const token = Deno.env.get('WHATSAPP_CLOUD_API_TOKEN')
    const phoneNumberId = Deno.env.get('WHATSAPP_PHONE_NUMBER_ID')
    const recipientPhone = Deno.env.get('WHATSAPP_RECIPIENT_PHONE') || '918639335031'

    const notificationText = `🌟 *New Custom Resin Enquiry!* (Ref #${id || 'NEW'})\n\n` +
      `👤 *Name:* ${clientName || 'Valued Client'}\n` +
      `📱 *Phone / WA:* ${phone || 'N/A'}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `🎨 *Category:* ${category || 'Custom Commission'}\n` +
      `💰 *Budget:* ${budget || 'Custom Quote'}\n` +
      `📅 *Needed By:* ${neededBy || 'Flexible'}\n` +
      `📝 *Details:* ${details || 'None'}\n\n` +
      `_Submitted silently via Trevooresin Showcase Portal._`

    if (token && phoneNumberId) {
      await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          recipient_type: 'individual',
          to: recipientPhone,
          type: 'text',
          text: {
            preview_url: false,
            body: notificationText
          }
        })
      })
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Delivered silently' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
