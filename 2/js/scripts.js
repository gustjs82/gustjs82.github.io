document.addEventListener('DOMContentLoaded', function() {
    // Slideshow Effect
    let currentArticle = 0;
    const articles = document.querySelectorAll('.recent-articles .article');

    function showArticle() {
        articles.forEach((article, index) => {
            article.style.display = (index === currentArticle) ? 'block' : 'none';
        });
        currentArticle = (currentArticle + 1) % articles.length;
    }

    setInterval(showArticle, 5000);
    showArticle();
});
