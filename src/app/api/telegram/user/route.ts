import axios from 'axios';
import { NextResponse } from 'next/server';

const TELEGRAM_API_BASE = 'https://api.telegram.org/bot';

export async function POST(req: Request) {
  try {
    const { chatId } = await req.json();

    if (!chatId) {
      return NextResponse.json({ error: 'Chat ID is required' }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    if (!botToken) {
      return NextResponse.json({ error: 'Telegram bot token not set' }, { status: 500 });
    }

    // Get user info
    const response = await axios.get(
      `${TELEGRAM_API_BASE}${botToken}/getChat`,
      { params: { chat_id: chatId } }
    );

    const user = response.data.result;

    return NextResponse.json({
      username: user.username,
      isPremium: user.is_premium || false,
    });
  } catch (error) {
    // Log the error to prevent unused variable issues
    console.error('Error fetching Telegram user:', error);

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
