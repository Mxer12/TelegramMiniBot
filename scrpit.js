document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки "Купить"
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartCount = document.querySelector('.cart-count');
    
    let count = 0;
    
    // Добавляем обработчик для каждой кнопки
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Получаем информацию о товаре
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Увеличиваем счетчик корзины
            count++;
            cartCount.textContent = count;
            
            // Анимация добавления в корзину
            this.textContent = 'Добавлено!';
            this.style.backgroundColor = '#2ecc71';
            
            // Возвращаем исходный вид кнопки через 2 секунды
            setTimeout(() => {
                this.textContent = 'Купить';
                this.style.backgroundColor = '#3498db';
            }, 2000);
            
            // Выводим информацию в консоль (можно заменить на реальное добавление в корзину)
            console.log('Товар добавлен в корзину: ${productName} - ${productPrice}');
        });
    });
    
    // Обработчик для иконки корзины
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', function() {
        if (count > 0) {
            alert('У вас ${count} товаров в корзине!');
        } else {
            alert('Корзина пуста!');
        }
    });
});