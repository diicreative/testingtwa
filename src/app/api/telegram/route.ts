import { NextResponse } from 'next/server';
import { Bot } from 'grammy';

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable is missing');
}

const bot = new Bot(botToken);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received body:', body);  // Log the incoming body for debugging

    bot.on('message', (ctx) => {
      const user = ctx.from;
      console.log('User data:', user);  // Log user data

      return NextResponse.json({
        userId: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        languageCode: user.language_code,
      });
    });

    await bot.handleUpdate(body);
    return NextResponse.json({ message: 'Webhook received!' });
  } catch (error) {
    console.error('Error in POST handler:', error);
    return NextResponse.json({ error: 'Error processing the request' }, { status: 500 });
  }
}
