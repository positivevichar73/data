const { ValidName, ValidEmail, ValidPassword } = require('../Validation/AllValidation')

exports.ValidUser = (req, res, next) => {
    try {

        const data = req.body
        const { name, email, password } = data;

        if (!name) return res.status(400).send({ status: false, msg: "Please Provide Name" })
        if (!ValidName(name)) return res.status(400).send({ status: false, msg: "Invalid Name!" })

        if (!email) res.status(400).send({ status: false, msg: " Please Provide EMAIL" })
        if (!ValidEmail(email)) return res.status(400).send({ status: false, msg: "Invalid EmailId!" })

        if (!password) res.status(400).send({ status: false, msg: " Bro Please PROvide PASsword" })
        if (!ValidPassword(password)) return res.status(400).send({ status: false, msg: "Invalid Password!" })
        next()

    }
 
    catch (e) {
        res.status(500).send({ status: false, message: e.message })
    }

}