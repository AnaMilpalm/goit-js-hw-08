const categories = document.querySelectorAll('li.item');
const categoriesLength = categories.length;
console.log("Nomber of categories:", categoriesLength);


categories.forEach(element => {
    const catagoryTitle = element.querySelector('h2').textContent;

    const elementsCount = element.querySelectorAll("ul>li").length;
    console.log(`Category: ${catagoryTitle}`);
    console.log(`Elements: ${elementsCount}`);
})

