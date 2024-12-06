// // // Convert miles to KM (EXAMPLE)
// const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

// const conversionFactorMilesToKm = 1.6;

// function convertMilesToKms() {
//     return distanceWalkedMilesArr.map(function (distanceMiles, index) {
//         return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm} KM`
//     })
// }

// console.log(convertMilesToKms());


import { playlistArr } from './playlist.js';

const playlistHtml = playlistArr.map(function (track) {

    return `
    <section class="card">
        <div class="card-start">
            <img src="./images/${track.albumArt}">
        </div>

            <div class="card-mid"
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>`
}).join('');

document.getElementById('container').innerHTML = playlistHtml;