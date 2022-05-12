const express = require('express')
const router = express.Router()


    const  { Getuser,GetuserById, Updateuser, Adduser, Deleteuser
    } = require('../Controllers/my-controller')


    router.get('/',Getuser)
    router.get('/:id',GetuserById)
    router.put('/:id',Updateuser)
    router.post('/',Adduser)
    router.delete('/:id',Deleteuser)

    module.exports = router