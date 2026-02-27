//Make header sticky when scrolling past the header
const header = document.querySelector("header");
const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {
    if (window.scrollY >= hero.offsetHeight) {
        header.classList.add("sticky")
        if (window.innerWidth <= 790) {
            header.classList.add("header-mobile")
            nav.classList.add("nav-background")
        }
        else {
            header.classList.remove("header-mobile")
            nav.classList.remove("nav-background")
        }
    }
    else {
        header.classList.remove("sticky")
        header.classList.remove("header-mobile")
        nav.classList.remove("nav-background")
    }

});


//Render menu dynamically
const container = document.getElementById("menu");

fetch("./js/menu.json")
    .then(response => response.json())
    .then(menu => renderMenu(menu))
    .catch(err => console.error("Menu failed to load:", err));

function renderMenu(menu) {
    Object.entries(menu).forEach(([category, items]) => {
        //category div
        const section = document.createElement("div");
        section.classList.add("category");

        //title
        const title = document.createElement("h3");
        title.textContent = formatTitle(category);
        section.appendChild(title);

        //list
        const ul = document.createElement("ul");

        items.forEach(item => {
            const li = document.createElement("li");

            const name = document.createElement("p");
            name.textContent = item.name;

            const price = document.createElement("p");
            price.textContent = item.price;

            li.append(name, price);
            ul.appendChild(li);
        });

        section.appendChild(ul);
        container.appendChild(section);
    });
}

function formatTitle(text) {
    return text
        .replace("_", " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());
}

// Toggle menu display on mobile
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    hamburger.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        hamburger.classList.remove("active");
    });
});

