const inputRef = document.querySelector('#validation-input')
const inputLength = inputRef.dataset.length
inputRef.addEventListener('blur', (event) => {
    if (event.target.value.length === +inputLength) {
        inputRef.classList.add("valid")
        if (inputRef.classList.contains('invalid')) {
        inputRef.classList.remove('invalid')
    }
    } else {
        if (inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid')
        }
        inputRef.classList.add("invalid")
    }

})
// console.log(inputLength)