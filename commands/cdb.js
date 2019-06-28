const Discord = require("discord.js")
const defaultsettings = require("../util/defaultsettings")

module.exports.command = {
    name: "changedb",
    aliases: ["cdb"],
    description: "Update and change the database",
    category: "Developer",
    usage: "changedb"
}

exports.run = async (bot, message, args) => {

    function createserver(guildid, object) {
        bot.guildSettings.ensure(guildid, object)
    }

    if (message.author.id !== "157945195931893761") return message.reply("Only owners can run this command!")

    bot.guildSettings.deleteAll(false)
    bot.guilds.forEach(guild => {
        createserver(guild.id, defaultsettings)
    })
    return message.reply("done")
}