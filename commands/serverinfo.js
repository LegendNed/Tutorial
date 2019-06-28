const Discord = require("discord.js")
const moment = require("moment")

module.exports.command = {
    name: "serverinfo",
    aliases: ["si"],
    description: "Shows the current servers information",
    category: "Util",
    usage: "serverinfo"
}

exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Server information")
        .setColor("BLUE")
        .setThumbnail(message.guild.splash)
        .addField("Server name:", message.guild.name, true)
        .addField("Created on:", moment(message.guild.createdAt).format(), true)
        .addField("You joined:", moment(message.member.joinedAt).format(), true)
        .addField("Server region:", message.guild.region, true)
        .addField("Guild owner:", message.guild.owner, true)
        .addField("Total members:", message.guild.memberCount, true)

    return message.channel.send(embed)
}