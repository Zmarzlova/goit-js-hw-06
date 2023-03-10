const counterRef = document.querySelector('#value')
const decrBtn = document.querySelector('#counter').firstElementChild
const incrBtn = document.querySelector('#counter').lastElementChild
let counterValue = 0

decrBtn.addEventListener('click', () => { 
  counterValue -= 1
  counterRef.textContent = counterValue
})
 
incrBtn.addEventListener('click', () => { 
  counterValue += 1
  counterRef.textContent = counterValue
})