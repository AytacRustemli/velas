let products = {
    data: [
        {
            productName: "Betty stul1",
            category: "Stul",
            image: "/image/catalog1.png"
        },
        {
            productName: "Baixo divan1",
            category: "Divan",
            image: "/image/catalog2.png"
        },
        {
            productName: "Betty stul2",
            category: "Stul",
            image: "/image/catalog3.png"
        },
        {
            productName: "Betty stul3",
            category: "Stul",
            image: "/image/catalog4.png"
        },
        {
            productName: "Betty stul4",
            category: "Stul",
            image: "/image/catalog5.png"
        },
        {
            productName: "Betty stul5",
            category: "Stul",
            image: "/image/catalog6.png"
        },
        {
            productName: "Betty stul6",
            category: "Stul",
            image: "/image/catalog7.png"
        },
        {
            productName: "Baixo divan2",
            category: "Divan",
            image: "/image/catalog8.png"
        },
        {
            productName: "Betty stul7",
            category: "Stul",
            image: "/image/catalog9.png"
        },
        {
            productName: "Betty stul8",
            category: "Stul",
            image: "/image/catalog10.png"
        },
        {
            productName: "Baixo divan3",
            category: "Divan",
            image: "/image/catalog11.png"
        },
        {
            productName: "Baixo divan4",
            category: "Divan",
            image: "/image/catalog12.png"
        },
        {
            productName: "Betty stul9",
            category: "Stul",
            image: "/image/catalog13.png"
        },
        {
            productName: "Baixo divan5",
            category: "Divan",
            image: "/image/catalog14.png"
        },
        {
            productName: "Betty stul10",
            category: "Stul",
            image: "/image/catalog15.png"
        },
        {
            productName: "Baixo divan6",
            category: "Divan",
            image: "/image/catalog16.png"
        },
        {
            productName: "Betty stul11",
            category: "Stul",
            image: "/image/catalog17.png"
        },
        {
            productName: "Betty stul12",
            category: "Stul",
            image: "/image/catalog18.png"
        },
    ]
};

for(let i of products.data){
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);

    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    imgContainer.appendChild(container);
    document.getElementById("products").appendChild(imgContainer);
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".image-container");

    elements.forEach((element,index) =>{
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    })
})