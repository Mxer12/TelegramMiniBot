const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => {
    const button = Markup.button.webApp(
        "✨ Открыть мини-приложение",
        "https://myusername.github.io/tg-mini-app/"
    );
    ctx.reply(
        "Нажмите кнопку, чтобы открыть мини-приложение:",
        Markup.inlineKeyboard([button])
    );
});

bot.launch();