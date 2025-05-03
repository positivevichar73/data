exports.ValidName=(name)=>{
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name)

}
exports.ValidEmail=(email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
}
exports.ValidPassword=(password)=>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
    return password.test(password)
}

