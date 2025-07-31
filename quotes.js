document.addEventListener('DOMContentLoaded', async () => {
    let quoteOfDay = document.getElementById('quoteOfDay');
    let quote = "";
    let author = "";

    async function getAndDisplayQuote() {
        try {
            let id = Math.floor(Math.random() * 1454);
            const response = await fetch(`https://dummyjson.com/quotes/${id}`);
            const data = await response.json();

            if (data && data.quote && data.author) {
                quote = data.quote;
                author = data.author;
            } else {
                quote = "Quote not found";
                author = "Unknown";
            }

            quoteOfDay.innerHTML = `<blockquote>${quote}</blockquote><p>- ${author}</p>`;
        } catch (error) {
            console.error("Error fetching quote:", error);
            quoteOfDay.innerHTML = "<p>Failed to load quote.</p>";
        }
    }

    getAndDisplayQuote();
});