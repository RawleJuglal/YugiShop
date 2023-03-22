import { TraderLevel } from "./enums";

const reviewsTotalDisplay = document.querySelector<HTMLElement>("#reviews");
const userNameDisplay = document.querySelector<HTMLElement>('#header-user');

export function displayReviews(reviews: number, name:string, trader: TraderLevel): void{
    if (!reviewsTotalDisplay) throw new ReferenceError("Cards div not found.");
    let crown = trader === TraderLevel.RARE_TRADER ? '👑' : ''
    reviewsTotalDisplay.innerHTML = `${reviews.toString()} review${makeMultiple(reviews)} : Most recent review was ${name} ${crown} `
}

export function populateUser(isReturning:boolean, username:string): void{
    if(!userNameDisplay)throw new ReferenceError('Username display not found');
    isReturning ?  userNameDisplay.textContent = `Welcome back, ${username}!` : userNameDisplay.textContent = `Welcome ${username}!`
}

export function showDetails(authorityStatus: boolean, element:HTMLDivElement, price:number){
    if(authorityStatus){
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `$${price.toString()}`;
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export function getAllReviews(reviews : {
    name:string;
    stars:number;
    trader:TraderLevel;
    dateJoined:string;
    testimonial:string;
}[]) : {
    name:string;
    stars:number;
    trader:TraderLevel;
    dateJoined:string;
    testimonial:string;  
}[]{
    const sortedReviews = reviews.sort((a,b) => b.stars - a.stars);
    return sortedReviews;
}