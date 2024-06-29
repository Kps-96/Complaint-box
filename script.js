function check(){
    const mail = document.getElementById("email");
    let mailValue = mail.value;
    let emailPattern = /^[0-9._%+-]+@srcas\.ac\.in$/;
    if (!emailPattern.test(mailValue)) {
        alert('Please enter a valid email address ending with @srcas.ac.in');
    }
}