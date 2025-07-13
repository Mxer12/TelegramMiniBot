from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext

# Токен вашего бота (замените на ваш токен)
TOKEN = "8072440393:AAHJloXf5KWoL5sZXLbcIpwmB2Da_xaEUuU"

def start(update: Update, context: CallbackContext) -> None:
    """Отправляет приветственное сообщение при команде /start."""
    update.message.reply_text('Привет! Отправь мне любое сообщение, и я отвечу.')

def echo(update: Update, context: CallbackContext) -> None:
    """Отвечает тем же текстом, что отправил пользователь."""
    user_message = update.message.text
    update.message.reply_text(f'Вы написали: "{user_message}". Вот мой ответ!')

def main() -> None:
    """Запуск бота."""
    # Создаем Updater и передаем ему токен бота
    updater = Updater(TOKEN)

    # Получаем диспетчер для регистрации обработчиков
    dispatcher = updater.dispatcher

    # Регистрируем обработчики команд и сообщений
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(MessageHandler(Filters.text & ~Filters.command, echo))

    # Запускаем бота
    updater.start_polling()

    # Останавливаем бота при нажатии Ctrl+C
    updater.idle()

if name == 'main':
    main()