import telebot

token = '8072440393:AAHJloXf5KWoL5sZXLbcIpwmB2Da_xaEUuU'
bot = telebot.TeleBot(token)

@bot.message_handler(content_types=['text'])
def start(message):
    bot.send_message(message.chat.id, message.text)

bot.infinity_polling()