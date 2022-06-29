// DOM display elements
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')

// Event listener buttons
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

function loading() {
    document.querySelector('.loader').style.display = 'block'
    document.querySelector('.quote-container').style.display = 'none'
}

function successful() {
    document.querySelector('.loader').style.display = 'none'
    document.querySelector('.quote-container').style.display = 'block'
}

// Fetching quotes
async function getQuotes() {
    loading()
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        loading()

        const res = await fetch(apiUrl)
        const data = await res.json()
        
        // Random quote
        const random = Math.floor(Math.random() * data.length)

        // Get random quote
        const randomQuote = data[random]

        quoteText.textContent = randomQuote.text
        authorText.textContent = randomQuote.author || 'Author'

        twitterBtn.addEventListener('click', () => {
            window.open(`https://twitter.com/intent/tweet?text=${randomQuote.text} - ${randomQuote.author}`, `_blank`)
        })

        successful()

    } catch (err) {
        console.log(err)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    getQuotes()
    successful()

})

newQuoteBtn.addEventListener('click', () => {
    getQuotes()
})
