const express = require('express')
const router = express.Router()

//Get Route 
router.get('', (req,res) => {

    res.send(new Date().toTimeString().split(" ")[0])
})

module.exports = router
