function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images}

const images = importAll(require.context('./assets/menu', false, /\.(png|jpe?g|svg)$/));
    const content = {
        "ham":{
            url:images["hamburger.jpg"],
            name:"hamburger",
            descr: "The original and for many still the best"
        },
        "Turkey":{
            url:images["Turkey_burger.jpg"],
            name:"Turkey burger",
            descr:"Turkey is a delicious, tasty and dry meat that is packed full of flavour, making it a perfect alternative to red meat for a burger patty"
        },
        "Portobello":{
            url:images["mushroom_burger.jpg"],
            name:"Portobello mushroom burger",
            descr:"Substituting the meat patty for a delicious, meaty, umami-packed grilled portobello mushroom will give you a vegan burger that will satisfy even the hungriest carnivore."

        },
        "elk":{
            url:images["elk.jpg"],
            name:"Elk burger",
            descr: "Elk meat, recently rising in popularity because of a certain bow-hunting podcast celebrity,"
        },
        "veggie":{
            url:images["vegie.jpg"],
            name:"Veggie burger",
            descr: "Once the lonely refuge of the only vegetarian in your group, the veggie burger now threatens to knock the beef burger off its perch."
        },
        "salmon":{
            url:images["salmon.jpg"],
            name:"Wild salmon burger",
            descr: "Of all fish, salmon makes probably the best fish patty for a burger. The main thing to consider is the source of your salmon and in general"
        },
    }


function Menu() {
    const menu = document.createElement("div")
    menu.classList.add("menu","hidden")
    document.querySelector(".secondhalf").appendChild(menu)
    
    for(const item in content) {
        const div = document.createElement("div")
        div.className = "card"
        const img = new Image()
        img.src = content[item].url
        const main = document.createElement("h3")
        main.innerHTML= content[item].name
        const sub = document.createElement("div")
        sub.innerHTML = `<p>${content[item].descr}</p>`
        sub.className = "focus-content"
        div.append(img,main,sub)
        menu.appendChild(div)
    }
}

export {Menu}
