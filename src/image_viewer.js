import '../styles/image_viewer.css';
import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

const image = document.createElement('img');
const BigImage = document.createElement('img');

image.src = small;
BigImage.src = big;

document.body.appendChild(image);
document.body.appendChild(BigImage);