import axios from 'axios';

export async function POST(req, res) {
  const data = await req.json(); // Example of using `req`
  res.status(200).json({ message: "Button sent successfully", data });

  const BOT_TOKEN = '7586074521:AAGoBQZN0T_7FMAIH7ukJBUvZhcimsaA9dU'; // Replace with your Telegram bot token
  const CHAT_ID = '@prodocks_bot'; // Replace with your chat ID or user ID
  const MINI_APP_URL = 'https://myfirsttwa.vercel.app'; // Replace with your Vercel app URL

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: 'Click the button below to launch the Mini App:',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Open Mini App',
                web_app: { url: MINI_APP_URL },
              },
            ],
          ],
        },
      }
    );
    return new Response(JSON.stringify({ message: 'Button sent!', data: response.data }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.response?.data || error.message }), { status: 500 });
  }
}
