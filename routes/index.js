const express = require('express');
const { getUser, updateUser,createUser,deleteUser } = require("../controllers");

const router = express.Router();

router.get("/get-user-data/:id", getUser);
router.put("/update-user-address/:id", updateUser);
router.delete('/delete-user/:id', deleteUser);
router.post('/create-user', createUser);
module.exports = {
    router
}