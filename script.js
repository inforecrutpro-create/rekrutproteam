document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // блокує стандартну відправку для тесту
    alert("Дякуємо! Ваше повідомлення відправлено."); // сповіщення
    this.reset(); // очищає форму
});