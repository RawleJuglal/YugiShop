import './style.css'
import {  displayReviews, populateUser, showDetails, getAllReviews, replaceWithStars } from './utils';
import { user, reviews, Cards } from '../data'
import { Review } from './interfaces';
import { TraderLevel } from './enums';

const FooterEl = document.querySelector<HTMLElement>("#footer");
if (!FooterEl) throw new ReferenceError("Footer section not found.");
const CardsContainer = document.querySelector<HTMLElement>('#cards')
const button = document.querySelector<HTMLElement>('button')
const reviewsTotalDisplay = document.querySelector<HTMLElement>("#reviews");
const mainContentEl = document.querySelector<HTMLElement>('#main-content');

let isLoggedIn : boolean;

populateUser(user.isReturning, user.firstName)
displayReviews(reviews.length, reviews[0].name, reviews[0].trader)
isLoggedIn = true;


const cardsCopy = Cards.slice(1,Cards.length)
cardsCopy.map(card => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    const image = document.createElement('img');
    image.setAttribute('src', card.card_images[0].image_local);
    cardDiv.appendChild(image);
    cardDiv.innerHTML += card.name; 
    if (!CardsContainer) throw new ReferenceError("Cards container section not found.");
    CardsContainer.appendChild(cardDiv);
    showDetails(isLoggedIn, cardDiv, parseFloat(card.card_prices[0].amazon_price))
})

let count = 0;
function addReviews(array: Review[]) : void {
    if(!count){
        count++;
        const allReviews = getAllReviews(array);
        allReviews.map(review => {
            let crown = review.trader === TraderLevel.RARE_TRADER ? '👑' : ''
            const card = document.createElement('div');
            card.classList.add('--main-content-review-card');
            const stars = replaceWithStars(review.stars);
            card.innerHTML += `<h2>${stars} from <span class="bold">${review.name}<span></h2><p class="--main-content-review-card-testimonial">"${review.testimonial}"</p><p class="--main-content-review-card-date">member since:${review.dateJoined}${crown}</p>`;
            
            if(!reviewsTotalDisplay) throw new ReferenceError('reviews container not found');
            reviewsTotalDisplay.appendChild(card);
        })
        if(!mainContentEl)throw new ReferenceError('main-content container not found');
        if(!button)throw new ReferenceError('button not found');
        mainContentEl.removeChild(button)
    }
}

if(!button)throw new ReferenceError('button not found');
button.addEventListener('click', ()=> addReviews(reviews))

let currentLocation : [string, string, number, string] = ['Crescent', 'https://openweathermap.org/img/wn/10d.png', 78, '©️2023 Rawle Juglal']
FooterEl.innerHTML = `<div class="--footer-location-container"><span>${currentLocation[0]}</span><img src="${currentLocation[1]}"><span>${currentLocation[2].toString()}°</span></div><p>${currentLocation[3]}</p>`


const mainImageEl = document.querySelector<HTMLElement>('#main-img');
const image = document.createElement('img');
image.setAttribute('src', Cards[0].card_images[0].image_local);
mainImageEl?.appendChild(image);
const mainCard = document.createElement('h2');
mainCard.classList.add('--main-content-title')
if(Cards[0].card_sets === undefined)throw new ReferenceError('no card set available');
mainCard.textContent = `Newly Acquired - ${Cards[0].name} - Rarity:${Cards[0].card_sets[0].set_rarity_code}`;
mainImageEl?.appendChild(mainCard);