const Discord = require('discord.js')
const bot = new Discord.Client()

function action(pattern,message,response) {
    if(pattern === message.content)
        message.reply(response)

}

bot.on('ready', function () {
    console.log("Je suis connect� !")
})


bot.on('message', message => {
    action("!cloud",message,"https://cloud.baptiste-contreras.fr")
    action("salut",message,"ca va flo ?")
})

bot.login(process.argv[2])