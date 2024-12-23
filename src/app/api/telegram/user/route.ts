import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Extract chatId from the body of the request
    const { chatId } = await request.json();

    console.log('Received chatId:', chatId); // Debugging log

    // Check if chatId is valid (not empty or undefined)
    if (!chatId) {
      return NextResponse.json({ error: 'chatId is required' }, { status: 400 });
    }

    // Ensure that the Telegram Bot Token is available
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      console.error('Telegram Bot Token is not set');
      return NextResponse.json({ error: 'Telegram Bot Token is not set' }, { status: 500 });
    }

    // Construct the Telegram API URL with the provided chatId
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/getChat?chat_id=${chatId}`;
    console.log('Telegram API URL:', telegramApiUrl); // Debugging log for the API URL

    // Make the request to the Telegram API using Axios
    const response = await axios.get(telegramApiUrl);
    const userData = response.data;

    console.log('Telegram API Response:', userData); // Log the response from Telegram API

    // Check if the response has the expected result and return the data
    if (userData.ok) {
      return NextResponse.json({
        username: userData.result.username,
        isPremium: userData.result.premium || false, // Adjust based on actual response structure
      });
    } else {
      return NextResponse.json({ error: 'Failed to fetch user data from Telegram' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Error in API route:', error);

    // Check if the error has a response (e.g., from the Telegram API)
    if (error.response) {
      console.error('Error Response:', error.response.data);
      return NextResponse.json({ error: error.response.data.description || 'Failed to fetch user data from Telegram' }, { status: error.response.status });
    }

    // If no response, it's likely a network error or unexpected issue
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
