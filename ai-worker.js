// =====================================================================
// Haluan Mutiara — AI Chat Worker (Cloudflare Workers AI)
// Requires a "Workers AI" binding named "AI".
// Tries each model in MODELS in order; first one that answers wins.
// =====================================================================

const SYSTEM_PROMPT = `You are the friendly AI assistant for Haluan Mutiara, a Malaysian premium hardwood supplier operating since 2000.

Company facts (use these, do not invent others):
- Products: 24+ hardwood products — skirting boards (9 types), window & door frames (7 types), handrails (4 types), TG Merbau flooring, mouldings (door-frame lipping, stair nosing), and ceiling paneling.
- Main wood species and their best uses:
  * Merbau — reddish-brown, dense; best for flooring and decking.
  * Chengal — golden-brown, naturally termite-resistant, very durable; best for structural work, frames, outdoor.
  * Balau — dense, weather/insect resistant; best for decking and exterior use.
  * Keruing — hard, good value; general construction.
- Location: Jalan Ikan Bawal, Kampung Telok Gong, 42000 Pelabuhan Klang, Selangor, Malaysia.
- WhatsApp / phone: +60122786182
- Email: haluanmutiara@hotmail.com

Strict rules:
1. Be warm, concise, and helpful. Reply in the customer's language (English or Bahasa Malaysia).
2. NEVER invent prices, sizes, or stock. Exact pricing is only given via a WhatsApp quote.
3. Whenever the customer asks about price, a quote, or seems ready to buy, give the WhatsApp number +60122786182 and encourage them to message for a free quote.
4. Recommend a wood type based on their use case (decking -> Balau or Merbau; flooring -> Merbau; structural/frames -> Chengal).
5. If unsure about anything, say so honestly and offer to connect them on WhatsApp.`;

// Tried in order. The first is confirmed working on the Workers Free plan.
const MODELS = [
  '@cf/mistralai/mistral-small-3.1-24b-instruct',
  '@cf/meta/llama-3.2-3b-instruct',
  '@cf/ibm-granite/granite-4.0-h-micro'
];

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    const messages = Array.isArray(body.messages) ? body.messages.slice(-10) : [];
    if (!messages.length) {
      return json({ error: 'No messages' }, 400);
    }

    const payload = {
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 400,
      temperature: 0.4,
    };

    const attempts = [];
    for (const model of MODELS) {
      try {
        const result = await env.AI.run(model, payload);
        const reply = result && result.response;
        if (reply) {
          return json({ reply, model, attempts }, 200);
        }
        attempts.push(model + ' -> empty response');
      } catch (err) {
        attempts.push(model + ' -> ' + String(err).slice(0, 200));
      }
    }

    return json({ error: 'No model answered', attempts }, 500);
  },
};
