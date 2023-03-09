const inputRef = document.querySelector('#validation-input')
const inputLength = inputRef.dataset.length
inputRef.addEventListener('blur', (event) => {
    if (event.target.value.length === +inputLength) {
        inputRef.classList.add("valid")

    } else {
        inputRef.classList.add("invalid")
    }

})
// console.log(inputLength)