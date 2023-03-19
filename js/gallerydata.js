let products = {
    data: [
        {
            productName: "Divan1",
            category: "Divan",
            image: "/image/divan1.png"
        },
        {
            productName: "Divan2",
            category: "Divan",
            image: "/image/divan2.svg"
        },
        {
            productName: "Divan3",
            category: "Divan",
            image: "/image/divan3.svg"
        },
        {
            productName: "Divan4",
            category: "Divan",
            image: "/image/divan4.png"
        },
        {
            productName: "Divan5",
            category: "Divan",
            image: "/image/divan5.png"
        },
        {
            productName: "Divan6",
            category: "Divan",
            image: "/image/divan6.png"
        },
        {
            productName: "Stul1",
            category: "Stul",
            image: "/image/stul1.png"
        },
        {
            productName: "Stul2",
            category: "Stul",
            image: "/image/stul2.png"
        },
        {
            productName: "Qapi1",
            category: "Qapı",
            image: "/image/qapi1.png"
        },
        {
            productName: "Divan7",
            category: "Divan",
            image: "/image/divan7.png"
        },
        {
            productName: "Divan8",
            category: "Divan",
            image: "/image/divan8.png"
        },
        {
            productName: "Qapi2",
            category: "Qapı",
            image: "/image/qapi2.svg"
        },
        {
            productName: "Stul3",
            category: "Stul",
            image: "/image/stul3.png"
        },
        {
            productName: "Divan9",
            category: "Divan",
            image: "/image/divan9.png"
        },
        {
            productName: "Stul4",
            category: "Stul",
            image: "/image/stul4.png"
        },
    ]
};

for(let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // let container = document.createElement("div");
    // container.classList.add("container");
    // let name = document.createElement("h5");
    // name.classList.add("product-name");
    // name.innerText = i.productName.toUpperCase();
    // container.appendChild(name);
    // card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

function filterProduct(value){
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach(button => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "hamısı"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}


// document.getElementById("search").addEventListener("click", () => {
//     let searchInput = document.getElementById("search-input").value;
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll(".card");
//     // console.log(searchInput);

//     elements.forEach((element,index) =>{
//         if (element.innerText.includes(searchInput.toUpperCase())) {
//             cards[index].classList.remove("hide");
//         }
//         else{
//             cards[index].classList.add("hide");
//         }
//     })
// })


window.onload = () => {
    filterProduct('hamısı');
}