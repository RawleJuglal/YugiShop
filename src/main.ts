import './style.css'
import {  displayReviews, populateUser } from './utils';
import { user, reviews, Cards } from '../data'

const FooterEl = document.querySelector<HTMLElement>("#footer");
if (!FooterEl) throw new ReferenceError("Footer section not found.");


populateUser(user.isReturning, user.firstName)
displayReviews(reviews.length, reviews[0].name, reviews[0].elite)

let currentLocation : [string, string, string, string] = ['Crescent', 'https://openweathermap.org/img/wn/10d.png', '78', '©️2023 Rawle Juglal']
FooterEl.innerHTML = `<div class="--footer-location-container"><span>${currentLocation[0]}</span><img src="${currentLocation[1]}"><span>${currentLocation[2]}°</span></div><p>${currentLocation[3]}</p>`
