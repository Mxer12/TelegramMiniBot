import telebot

token = '8252660348:AAH_q2x6ljl2qbSniFXkF3LeYJYmFxwHm2c'
bot = telebot.TeleBot(token)

@bot.message_handler(content_types=['text'])
def start(message):
    bot.send_message(message.chat.id, message.text)

bot.infinity_polling()
