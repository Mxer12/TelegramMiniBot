const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8072440393:AAHJloXf5KWoL5sZXLbcIpwmB2Da_xaEUuU');

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