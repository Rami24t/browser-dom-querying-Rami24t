"use strict";
// 1:
document.querySelectorAll('html *').forEach(el => el.style.boxSizing = 'border-box');

const body = document.querySelector("body");
body.style.fontFamily = "Arial";
// 2:
document.querySelectorAll("h1").forEach(element => element.style.textAlign = "center");
// 3:
document.querySelectorAll(".category").forEach((element) => {
    element.style.fontStyle = "italic";
    element.style.color = "#222";
    //    element.style.textDecoration = "underline";
    element.style.borderBottom = "2px solid black";
    element.style.fontSize = "2rem";
    element.style.lineHeight = "3rem";
});
// 4:
function colorGenerator() {
    let r = Math.floor(Math.random() * 256).toFixed(0);
    let g = Math.floor(Math.random() * 256).toFixed(0);
    let b = Math.floor(Math.random() * 256).toFixed(0);
    let a = Math.random().toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
}
document.querySelectorAll(".food-category").forEach((element) => {
    element.style.backgroundColor = colorGenerator();
});

const main = document.querySelector('.main')
main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.justifyContent = 'center';
main.style.alignItems = 'center'
main.style.gap = '10vw';
main.style.lineHeight = "2rem";
for (const child of main.children) {
    child.style.height = ' 170px'
    child.style.width = ' 320px'
}

warning = document.getElementById('warning');
warning.style.fontSize = '1.9rem';
warning.style.fontFamily = 'Helvetica';
warning.style.textAlign = 'center';
const randomColor = colorGenerator();
document.querySelectorAll('.allergy-info:nth-of-type(even)').forEach(element => {
    element.style.backgroundColor = randomColor;
});
document.querySelectorAll('.allergy-info').forEach(element => {
    element.style.listStyleType = 'none';
    element.style.maxWidth = '500px';
    element.style.width = '88%';
    element.style.textAlign = 'center'
    element.style.margin = '0 auto';
});

const color2 = colorGenerator()
const footer = document.querySelector('.footer').style;
footer.textAlign = 'center';
footer.display = 'flex';
footer.flexWrap = 'wrap';
footer.justifyItems = 'center';
footer.width = '70%';
footer.margin = '48px auto';

for (const child of document.querySelector('.footer').children) {
    child.style.borderRadius = '50%';
    child.style.border = 'solid 6px ' + color2;
    child.style.width = '10vw';
    child.style.minWidth = '170px';
    child.style.height = '10vw';
    child.style.minHeight = '170px';
    child.style.margin = 'auto';
    child.style.textAlign = 'center';
    child.style.display = 'flex';
    child.style.flexBasis = '170px'
    child.style.justifyContent = 'center';
    child.style.alignItems = 'center';
    child.style.marginBottom = '10px';
}
document.querySelector('.allergies').style.paddingLeft = '0';