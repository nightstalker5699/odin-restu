import  "./style.css"
import "./button.css"
import "./menu-item.css"
import {home,toggle} from "./home.js"
import {contact} from "./contact"
import {Menu} from "./Menu"
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
<a data-but = "menu" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Menu
</a>
<a data-but = "contact" class="button" href="#" style="--color: gray;">
<span></span>
<span></span>
<span></span>
<span></span>
Contact US`
body.append(btnGroup,second)

content.append(header,body,footer)
contact();
home();
Menu();

document.querySelectorAll(".button").forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        switchTab(event.target.dataset.but)
    })
})

function switchTab(tab){
    const contact = document.querySelector(".contact")
    const home = document.querySelector(".home")
    const menu = document.querySelector(".menu")
    for(const block of [contact,home,menu]) {
        if (block.classList.contains(tab)){
        block.classList.remove("hidden")
        }
       
       else {
        block.classList.add("hidden")
       }
    }
}