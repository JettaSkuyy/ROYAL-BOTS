exports.run = (client) => {
    try {
      const request = require('request');
      console.log(`Logged in as ${client.user.tag}`);
            client.user.setActivity('!help | royalbot.tk | 1/10 Shards', { type: 'WATCHING' });
} catch (e) {
      console.error(e)
  }
}