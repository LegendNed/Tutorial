const Discord = require("discord.js")
const bot = require("../index")
const defaultsettings = require("../util/defaultsettings")

function createserver(guildid, object) {
    bot.guildSettings.ensure(guildid, object)
}

bot.on("guildCreate", (guild) => {
    createserver(guild.id, defaultsettings)
})