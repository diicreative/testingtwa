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
    // Read raw body before parsing it
    const body = await req.text(); // Use `text()` to get the raw body as a string
    console.log('Received raw body:', body); // Log raw body for debugging

    if (!body) {
      console.error('Empty body received!');
      return NextResponse.json({ error: 'Empty body received' }, { status: 400 });
    }

    // Now parse the body
    const jsonBody = JSON.parse(body); // Parse the raw body to JSON
    console.log('Parsed body:', jsonBody); // Log the parsed body for debugging

    await bot.handleUpdate(jsonBody); // Process the parsed body with bot
    return NextResponse.json({ message: 'Webhook received!' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error in POST handler:', error);
      return NextResponse.json({ error: 'Error processing the request', details: error.message }, { status: 500 });
    } else {
      console.error('Unknown error in POST handler:', error);
      return NextResponse.json({ error: 'Unknown error occurred', details: 'No error message available' }, { status: 500 });
    }
  }
}
