import telebot

token = '8396121129:AAFMmReGECRMvOIbqnxKEif6MeiU0mQG0YU'
bot = telebot.TeleBot(token)

@bot.message_handler(content_types=['text'])
def start(message):
    bot.send_message(message.chat.id, message.text)

bot.infinity_polling()
