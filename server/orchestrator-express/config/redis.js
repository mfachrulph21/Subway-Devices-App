const Redis = require('ioredis')

const redis = new Redis({
    port: 19594, // Redis port
    host: "redis-19594.c292.ap-southeast-1-1.ec2.cloud.redislabs.com",
    username: "default", // needs Redis >= 6
    password: "BJnsbmNiDfKzhGFLyklb0TgTLuwl2quP",
    db: 0, // Defaults to 0
})

module.exports = redis