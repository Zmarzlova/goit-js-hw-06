const categoriesListRef = document.querySelector('ul#categories')
// console.log(categoriesListRef)
const liItemsRef = categoriesListRef.querySelectorAll('li.item')
console.log(`Number of categories: ${liItemsRef.length}`)
const itemsRef = document.querySelectorAll('.item')
Array.prototype.forEach.call(itemsRef, (element) => {
let title = element.firstElementChild.textContent
    let itemsLength = element.lastElementChild.children.length 
   console.log(`Category: ${title}`)  
console.log(`Elements: ${itemsLength}`) 
})