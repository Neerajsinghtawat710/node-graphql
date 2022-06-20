const express = require("express")
const router = express.Router()
const { createUser, findAllUsers, singleUserFind, updateUserUser, deleteUser, deleteAllUsers } = require("../controller/user")



router.get("/api/v1/user", findAllUsers)
router.get("/api/v1/user/:id", singleUserFind)

router.post("/api/v1/user/", createUser)

router.put("/api/v1/user/:id", updateUserUser)


router.delete("/api/v1/user", deleteAllUsers)
router.delete("/api/v1/user/:id", deleteUser)



module.exports = router