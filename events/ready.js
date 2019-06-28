const Discord = require("discord.js")
const bot = require("../index")

bot.on("ready", () => {
    console.log("Bot is online!")
    bot.user.setActivity("Dustie development")
})