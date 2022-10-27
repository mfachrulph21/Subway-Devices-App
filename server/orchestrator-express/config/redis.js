const Redis = require('ioredis')

const redis = new Redis({
    port: 4000, // Redis port
    host: "redis-19594.c292.ap-southeast-1-1.ec2.cloud.redislabs.com:19594",
    username: "default", // needs Redis >= 6
    password: "BJnsbmNiDfKzhGFLyklb0TgTLuwl2quP",
    db: 0, // Defaults to 0
    })