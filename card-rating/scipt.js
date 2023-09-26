
let rateVal = 0

const rateSpan = document.querySelector(".rate-span")

const greetCard = document.querySelector(".greet-card")
const mainCard = document.querySelector(".rating-card")

const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")

function rate(obj,num){
    switch(num){
        case 1:
            rateVal = 1
            disableColor(two)
            disableColor(three)
            disableColor(four)
            disableColor(five)
            obj.style.backgroundColor = "#F28C28"
            break;
        case 2:
            rateVal = 2
            disableColor(one)
            disableColor(three)
            disableColor(four)
            disableColor(five)
            obj.style.backgroundColor = "#F28C28"
            break;
        case 3:
            rateVal = 3
            disableColor(two)
            disableColor(one)
            disableColor(four)
            disableColor(five)
            obj.style.backgroundColor = "#F28C28"
            break;
        case 4:
            rateVal = 4
            disableColor(two)
            disableColor(three)
            disableColor(one)
            disableColor(five)
            obj.style.backgroundColor = "#F28C28"
            break;
        case 5:
            rateVal = 5
            disableColor(two)
            disableColor(three)
            disableColor(four)
            disableColor(one)
            obj.style.backgroundColor = "#F28C28"
            break;
     }
}

function disableColor(scolor){
    scolor.style.backgroundColor = "#2E2E2E";
}

function submitRating() {
    if(rateVal != 0){
        rateSpan.innerHTML = rateVal;
        mainCard.classList.add("hide")
        greetCard.classList.remove("hide")
    }
}