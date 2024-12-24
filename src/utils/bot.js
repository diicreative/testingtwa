bot.on("message", async (ctx) => {
  const user = ctx.from; // Extract user details
  console.log("User Details:", user);

  // Reply with user details for testing
  await ctx.reply(`I can see your details:
- First Name: ${user.first_name}
- Last Name: ${user.last_name || "Not provided"}
- Username: ${user.username || "Not provided"}
- Telegram ID: ${user.id}`);
});
