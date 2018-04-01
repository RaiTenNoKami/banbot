const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = (".")
bot.login("NDI5OTYyNjgyOTQzMTQzOTQ2.DaJS3g.yo2U0o2x0WapdNstVLro7a8TGHM");

bot.on('ready', function() {
    bot.user.setGame(".help");
    console.log("Connectedç");
});

bot.on('message', function (message) {
    if(message.content === "Qui est Rai ?") {
    message.channel.send('Le fondateur !')
 
}})

bot.on('message', function (message) {
    if(message.content === "Qui est Uchiro ?") {
    message.channel.send('La Co-Fondatrice ou presque :D.')
    
}})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - .help");
    }
})

bot.on('message', message => {

    if(message.content === prefix + "info") {
        

   

}})
