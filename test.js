const{ Wechaty } =require('wechaty')
const qrcodeTerminal = require('qrcode-terminal')
const bot = new Wechaty()

bot
.on('scan',function(qrcode){
console
})
.on('login',function(user){
    console.log('${user.name()} login')
    })
   
            .start()