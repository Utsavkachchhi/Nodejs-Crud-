const express = require('express')
const router = express.Router()


    const  {
        Getuser
    } = require('../Controllers/my-controller')


    router.get('/',Getuser)


    module.exports = router