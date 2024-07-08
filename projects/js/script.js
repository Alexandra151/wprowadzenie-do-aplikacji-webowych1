document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quote');
    const authors = document.querySelectorAll('.author');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.style.display = (i === index) ? 'block' : 'none';
        });
        authors.forEach((author, i) => {
            author.style.display = (i === index) ? 'block' : 'none';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            showQuote(currentIndex);
        });
    });

    
    showQuote(currentIndex);
});
