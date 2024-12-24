import { NextResponse } from 'next/server';
import { Bot } from 'grammy';

// Ensure the bot token is defined, otherwise throw an error
const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable is missing');
}

const bot = new Bot(botToken);

// Handle the incoming POST request for the webhook
export async function POST(req: Request) {
  const body = await req.json();

  // Handle incoming messages from the Telegram bot
  bot.on('message', (ctx) => {
    const user = ctx.from; // Get user data from the context
    console.log(user); // Log user data for debugging

    // Return the user data in the response
    return NextResponse.json({
      userId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      username: user.username,
      languageCode: user.language_code,
    });
  });

  await bot.handleUpdate(body); // Pass the update data to the bot
  return NextResponse.json({ message: 'Webhook received!' });
}
