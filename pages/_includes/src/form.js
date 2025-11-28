const backdrop = document.getElementById("backdrop")
const example = document.getElementById("example")
const defaultImg = document.getElementById("defaultImg")

const selector = document.getElementById("selector")
const charCount = document.getElementById("charCount")
const charText = document.getElementById("charText")
const bgComplexity = document.getElementById("bgComplexity")
const complexityLevel = document.getElementById("complexityLevel")

const subtotal = document.getElementById("subtotal")

var basePrice
var finalPrice

function swapStyle(style) {
    basePrice = 0
    Array.from(backdrop.children).forEach(element => {
        
        element.classList.remove("visible");

        if (style == element.id) {
            element.classList.add("visible");
            basePrice = Number(element.alt)
            return
        }
    })
    Array.from(example.children).forEach(element => {
        element.classList.remove("visible");

        if (style == element.id) {
            element.classList.add("visible");
            return
        }
    })
}

selector.addEventListener("change", () => {
    swapStyle(selector.value)
    updatePrice()
})

charCount.addEventListener("change", () => {
    updatePrice()
})

bgComplexity.addEventListener("change", () => {
    complexityLevel.innerText = "+" + bgComplexity.value + "%"
    updatePrice()
})

function updatePrice() {
    var priceSubtotal

    const computedChar = Number(charCount.value) + 1 
    
    if (charCount.value == 1) {
        priceSubtotal = basePrice
    } else if (charCount.value) {
        priceSubtotal = 0
    } else {
        priceSubtotal = (basePrice / 2) * computedChar
    }

    finalPrice = priceSubtotal + (priceSubtotal * (bgComplexity.value/100))

    if (finalPrice == 0) {
        subtotal.textContent = "Cost estimate: - €" 
    } else {
        subtotal.textContent = "Cost estimate: " + finalPrice + "€" 
    }
}

function submitComm() {
    console.log("mmmph...")
}

swapStyle(selector.value)
updatePrice()
complexityLevel.innerText = "+" + bgComplexity.value + "%"
