const categories = document.querySelector("#categories");

const categoryItems = categories.querySelectorAll(".item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach(element => {
    console.log("Category:", element.querySelector("h2").textContent);
    const items = element.querySelector("ul");
    console.log("Elements:", items.querySelectorAll("li").length);
});