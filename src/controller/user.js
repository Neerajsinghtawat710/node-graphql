const User = require("../model/user")

/***
 * @params req
 * @params res
 */

// @@ create user
const createUser = async (req, res) => {
    try {

        const { name, email, password } = req.body

        const emailExits = await User.findOne({ email: email });

        console.log(emailExits)

        if (emailExits) {
            return res.status(400).json({
                status: 0,
                err: {
                    err: "MONGODB ERROR",
                    message: "user already exist"
                }
            })
        }

        const user = await User.create({ name: name, email: email, password: password })

        const newUser = await user.save()


        res.status(201).json({
            status: 1,
            data: {
                user: newUser,
                message: "user created sucessfully"
            }
        })



    } catch (err) {
        return res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }


}
// @@ find users
const findAllUsers = async (req, res) => {
    try {






    } catch (err) {
        res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }
}
// @@ find single user
const singleUserFind = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }
}
// @@ update user
const updateUserUser = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }
}
// @@ delete user
const deleteUser = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }
}
// @@ delete all users
const deleteAllUsers = async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({
            status: -1,
            err: {
                err: "",
                message: err.message
            }
        })
    }
}

module.exports = {
    createUser, findAllUsers, singleUserFind, updateUserUser, deleteUser, deleteAllUsers
}