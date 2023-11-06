const { connect, connection } = require('mongoose')
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/Social-Media-API'

connect(connectionStr,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;