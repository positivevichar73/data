exports.validname = (name) => {
    
    const validnameregex = /^[A-Za-z\s]{2,50}$/;
    return validnameregex.test(name)

}

exports.validmail = (mail) => {

    const validmailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validmailregex.test(mail)

}

exports.validpassword = (password) => {

    const validpassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return validpassword.test(password)

}