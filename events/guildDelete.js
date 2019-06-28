const Discord = require("discord.js")
const bot = require("../index")

bot.on("guildDelete", (guild) => {
    bot.guildSettings.delete(guild.id)
})