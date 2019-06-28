const Discord = require("discord.js")

module.exports.command = {
    name: "userinfo",
    aliases: ["ui"],
    description: "Gives user information of tagged user of you!",
    category: "Util",
    usage: "userinfo @user"
}

exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    let embed = new Discord.RichEmbed()
        .setTitle(`Info about ${user.tag}`)
        .setColor("RANDOM")
        .setThumbnail(user.avatarURL)
        .addField("Nickname", message.guild.member(user).displayName)
        .addField("User's ID", user.id)
        .addField("Current status", user.presence.status)
        .addField("Created on", user.createdAt)
        .addField("Roles", message.guild.member(user).roles.map(r => r).join(" , "))

    return message.channel.send(embed)
}