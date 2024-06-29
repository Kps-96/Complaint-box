function check(){
    const mail = document.getElementById("email");
    let mailValue = mail.value;
    let emailPattern = /^[0-9._%+-]+@srcas\.ac\.in$/;
    let sen = document.getElementById("complaint-area");
    let val = sen.value;
    if (!emailPattern.test(mailValue)) {
        alert('Please enter a valid email address ending with @srcas.ac.in');
    }
    
    if ("" === val) {
        alert("Text area empty ! Please enter your words")
    }
}
