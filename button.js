document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const additionalInfo = card.querySelector('.additional-info');
        const icon = this.querySelector('i');
        
        additionalInfo.classList.toggle('show');
        
        if (additionalInfo.classList.contains('show')) {
            this.textContent = 'Свернуть ';
            icon.className = 'fas fa-chevron-up';
        } else {
            this.textContent = 'Подробнее ';
            icon.className = 'fas fa-chevron-down';
        }
        
        // Вставляем иконку обратно
        this.appendChild(icon);
    });
});
