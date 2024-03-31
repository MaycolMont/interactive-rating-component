export function submitRating() {
    const ratingCard = document.querySelector('.rating');
    const ratingForm = document.querySelector('.rating__form');
    const thankYouCard = document.querySelector('.thank-you');
    ratingForm.addEventListener('submit', event => {
        event.preventDefault();
        const data = Object.fromEntries(
            new FormData(event.target)
        )
        const rating = data.rating;
        if (rating) {
            const infoTag = document.querySelector('.card__info');
            infoTag.textContent = `You selected ${rating} out of 5`;
            ratingCard.style.display = 'none';
            thankYouCard.style.display = 'block';
        }
    })
}