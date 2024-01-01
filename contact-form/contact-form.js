function printForm(e) {
    e.preventDefault()
    console.log(e.target.firstname.value)
    console.log(e.target.lastname.value)
    console.log(e.target.phone.value)
    console.log(e.target.email.value)
    console.log(e.target.message.value)
}