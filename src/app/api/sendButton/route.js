import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;  // Store your bot token in an environment variable
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/`;

export async function POST(request) {
  try {
    const { method, data } = await request.json();

    // Call Telegram API
    const response = await axios.post(`${TELEGRAM_API_URL}${method}`, data);
    
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    )
  }
};