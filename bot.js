const Discord = require('discord.js')
const bot = new Discord.Client()

function action(pattern,message,response) {
    if(pattern === message.content)
        message.reply(response)

}

bot.on('ready', function () {
    console.log("Je suis connecté !")
})


bot.on('message', message => {
    action("!stormcloud",message,"Voici le lien de StormCloud !\n" +
        "Lien : https://cloud.baptiste-contreras.fr/\n" +
        "\n" +
        "L'équipe de StormCloud")
})

bot.login(process.argv[2])