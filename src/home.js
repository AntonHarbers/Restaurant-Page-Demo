import Resto1 from './images/resto1.jpg'
import {content} from './index.js';


export default function LoadHome(){

    const headline = document.createElement('div');
    headline.textContent = 'Vegan Tasties';
    headline.classList.add('headline');
    const img = new Image();
    img.src = Resto1;

    const copy = document.createElement('div');
    copy.textContent = 'Welcome to the worlds finest vegan restaurant. We hope you enjoy veggies, tofu and grains as much as we do :)'
    copy.classList.add('copy');

    content.appendChild(headline);
    content.appendChild(img);
    content.append(copy)
}