

function home() {
    const home = document.createElement("div")
    home.classList.toggle("home")
    home.textContent = "this is papa burger the best burger seller Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt"
    document.querySelector(".secondhalf").appendChild(home)
}


function toggle() {
    document.querySelector(".home").classList.toggle = "hid"
}

export{home,toggle} 