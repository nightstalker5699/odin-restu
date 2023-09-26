import icon1 from "./assets/phoneicon.png"
import icon2 from "./assets/address.png"
function contact(){
    const phoneIcon = new Image()
    phoneIcon.src = icon1
    phoneIcon.className = "phoneicon"
    const addressIcon = new Image()
    addressIcon.src = icon2
    addressIcon.className = "phoneicon"
    const contactCON = document.createElement("div")
    contactCON.classList.add("contact","hidden")
    const phone = document.createElement("div")
    phone.innerHTML = `<h1>Phone number </h1>
                        <div class = "num">0115-2345-5968 </div>`
    phone.appendChild(phoneIcon)
    const address = document.createElement("div")
    address.innerHTML = `<h1>Address </h1>
                        <div class = "num">644 NE. Lincoln St.Germantown, MD 20874 </div>`
                        address.appendChild(addressIcon)
    contactCON.append(phone,address)
    document.querySelector(".secondhalf").appendChild(contactCON)
}

export {contact}