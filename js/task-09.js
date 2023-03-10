function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonRef = document.querySelector('.change-color')
const spanRef = document.querySelector('span.color')
const bodyRef = document.body

buttonRef.addEventListener('click', () => {
  let colors = getRandomHexColor()
  bodyRef.style.backgroundColor = colors
  spanRef.textContent = `${colors}`
 
})
console.log(spanRef)