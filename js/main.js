console.log('كنوز - موقع الأدوات المجانية');

// تأثير ظهور البطاقات عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tool-card, .category-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = '0.6s ease';
        observer.observe(card);
    });
});