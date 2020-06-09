
window.addEventListener('load', (event) => {
    console.log('load');
});

document.addEventListener('readystatechange', (event) => {
    console.log(`readystate: ${document.readyState}`);
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log(`DOMContentLoaded`);
});