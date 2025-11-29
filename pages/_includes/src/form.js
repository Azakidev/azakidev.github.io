const form = document.getElementById("form")

const backdrop = document.getElementById("backdrop")
const example = document.getElementById("example")
const defaultImg = document.getElementById("defaultImg")

const contactSelector = document.getElementById("contactSelector")
const contact = document.getElementById("contact")

const selector = document.getElementById("selector")

const charCount = document.getElementById("charCount")
const bgComplexity = document.getElementById("bgComplexity")

const charText = document.getElementById("charText")
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

function handleContactChange() {
    if (contactSelector.value != "") {
        contact.classList.remove("hidden")
        contact.required = true
        contact.tabIndex = 0
        if (contactSelector.value == "Other email") {
            contact.type = "email"
            contact.placeholder = "Your contact email"
        } else {
            contact.type = "text"
            contact.placeholder = "Your " + contactSelector.value + " handle"
        }
    } else {
        contact.classList.add("hidden")
        contact.tabIndex = -1
        contact.value = ""
        contact.required = false
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target)

    if (data.get("contactMethod") == "") {
        data.set("contactMethod", "Email")
        data.set("contact", "Same as Paypal email")
    }

    const contact = {
        email: data.get("email"),
        contact: {
            method: data.get("contactMethod"),
            handle: data.get("contact")
        },
        details: {
            style: data.get("style"),
            characters: data.get("charCount"),
            description: data.get("contentDescription"),
            background: data.get("bgComplexity")
        }
    }

    console.log(contact)
}

form.addEventListener("submit", handleSubmit)

selector.addEventListener("change", () => {
    swapStyle(selector.value)
    updatePrice()
})

contactSelector.addEventListener("change", () => {
    handleContactChange()
})

charCount.addEventListener("change", () => {
    updatePrice()
})

bgComplexity.addEventListener("change", () => {
    complexityLevel.innerText = "+" + bgComplexity.value + "%"
    updatePrice()
})

swapStyle(selector.value)
updatePrice()
handleContactChange()
complexityLevel.innerText = "+" + bgComplexity.value + "%"
