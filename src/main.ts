import './style.css'
import Cards from '../data'


const FooterEl = document.querySelector<HTMLElement>("#footer");
    if (!FooterEl) {
        throw new ReferenceError("Footer section not found.");
    }


let currentLocation : [string, string, number] = ['city', 'icon', 17]
FooterEl.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

