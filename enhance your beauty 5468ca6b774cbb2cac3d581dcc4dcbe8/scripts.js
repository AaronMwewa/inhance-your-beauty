let backBtnEl = document.querySelector('#backElm')
let nextBtnEl = document.querySelector('#nextEl')
let numEl = document.querySelector('#numEl').innerHTML = 4
let bigImgEl = document.querySelector('#bigImgEl')
let smallImgEl = document.querySelector('#smallImgEl')

let imgArray = new Array(
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg");

let i = 0

backBtnEl.onclick = function() {
    if (i > 0) {
        bigImgEl.src = imgArray[i - 1]
        smallImgEl.src = imgArray[i - 1]
        numEl
        i--


    }
}
nextBtnEl.onclick = function() {
    if (i < 3) {
        bigImgEl.src = imgArray[i + 1]
        smallImgEl.src = imgArray[i + 1]
        i++
        console.log(i)

    }
}