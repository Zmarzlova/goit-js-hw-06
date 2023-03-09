const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')
const elements = ingredients.map(option => {
  const liRef = document.createElement('li')
  liRef.classList.add('item')
  liRef.textContent = option
  return liRef
})
console.log(elements)
ingredientsRef.append(...elements)
