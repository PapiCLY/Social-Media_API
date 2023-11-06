const route = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.use((req,res)=>{
    res.status(404).send('error, wrong route')
})

module.exports = router