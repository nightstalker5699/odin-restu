import  "./style.css"
import "./button.css"
import {home,toggle} from "./home.js"
import {contact} from "./contact"
import icon from "./assets/burger.png"

const content = document.querySelector(".content")

const header = document.createElement("header")
const MyIcon = new Image()
    MyIcon.src = icon
    MyIcon.classList = "icon"
    header.appendChild(MyIcon)
header.innerHTML += "papa burger"

const body = document.createElement("div")
body.className = "body"

const footer = document.createElement("footer")
footer.textContent = "Made by Night"

const second = document.createElement("div")
second.className = "secondhalf"

const btnGroup = document.createElement("div")
btnGroup.className = "btngroup"
btnGroup.innerHTML = `<a  data-but = "home" class="button" href="#" style="--color:gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Home
</a>
<a data-but = "Menu" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Menu
</a>
<a data-but = "Contact" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Contact US`
body.append(btnGroup,second)

content.append(header,body,footer)
contact();
home()
document.querySelectorAll(".button").forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        switchTab(event.target.dataset.but)
    })
})

function switchTab(tab){
    
}