const Discord = require("discord.js")
const moment = require("moment")

module.exports.command = {
    name: "botinfo",
    aliases: [""],
    description: "Shows bots information.",
    category: "Util",
    usage: "botinfo"
}

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Bot information")
        .setColor("RANDOM")
        .setThumbnail(bot.user.avatarURL)
        .addField("Bot name", bot.user.username)
        .addField("Bot creator", "Ned")
        .addField("Created at", moment(bot.user.createdAt).format())
        .addField("Guilds in", bot.guilds.size)
        .addField("Helping", bot.users.size)
        .addField("Websites", "[Dustie](https://dustie.xyz/)")

    return message.channel.send(embed)
}