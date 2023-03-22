const cardsTotalDisplay = document.querySelector<HTMLElement>("#cards");
const userNameDisplay = document.querySelector<HTMLElement>('#header-user');


export function displayReviews(reviews: number, name:string, elite: boolean){
    if (!cardsTotalDisplay) throw new ReferenceError("Cards div not found.");
    let crown = elite ? '👑' : ''
    cardsTotalDisplay.innerHTML = `${reviews.toString()} reviews : Most recent review was ${name} ${crown} `
}

export function populateUser(isReturning:boolean, username:string){
    if(!userNameDisplay)throw new ReferenceError('Username display not found');
    isReturning ?  userNameDisplay.textContent = `Welcome back, ${username}!` : userNameDisplay.textContent = `Welcome ${username}!`
}