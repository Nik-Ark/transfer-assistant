const TelegramApi = require('node-telegram-bot-api');
const app = require('./server-init');

const TOKEN = process.env.TOKEN;

// NGROK:
const url = process.env.APP_URL || '';

async function createBot() {
  const bot = new TelegramApi(TOKEN);

  await bot.setMyCommands([
    { command: '/start', description: 'Начальное приветствие' },
    { command: '/info', description: 'о боте' },
  ]);

  app.post(`/bot${TOKEN}`, async (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });

  await bot.setWebHook(`${url}/bot${TOKEN}`);

  return bot;
}

module.exports = createBot;
