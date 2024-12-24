import { NextResponse } from 'next/server';
import { Bot } from 'grammy';

const botToken = process.env.TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error('TELEGRAM_BOT_TOKEN environment variable is missing');
}

const bot = new Bot(botToken);

// Define the handler for the 'message' event outside the POST handler
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

// Main POST handler to process updates
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received body:', body);  // Log the incoming body for debugging

    await bot.handleUpdate(body);
    return NextResponse.json({ message: 'Webhook received!' });
  } catch (error: unknown) {
    // Narrow the type of `error` to `Error`
    if (error instanceof Error) {
      console.error('Error in POST handler:', error); // Log detailed error message
      return NextResponse.json({ error: 'Error processing the request', details: error.message }, { status: 500 });
    } else {
      // Handle unexpected error types
      console.error('Unknown error in POST handler:', error);
      return NextResponse.json({ error: 'Unknown error occurred', details: 'No error message available' }, { status: 500 });
    }
  }
}
