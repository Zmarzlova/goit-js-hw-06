
const form = document.querySelector('.login-form')
const input = document.querySelectorAll('input')
console.log(input)
form.addEventListener('submit',onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    
    const formElements = event.currentTarget.elements
    // console.dir(formElements)
    const mail = formElements.email.value
    const password = formElements.password.value
    
    const formData = {
        mail, password
    }
    if (mail === '' || password === '') {
        alert(`Заповніть всі поля`)
    }
    console.log(formData)
   event.currentTarget.reset() 
}