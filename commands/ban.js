const Discord = require("discord.js")

module.exports.command = {
    name: "ban",
    aliases: [""],
    description: "Ban a user you have mention with a specific reason.",
    category: "Moderation",
    usage: "ban @user Reason"
}

exports.run = async (bot, message, args) => {
    if (!message.member.roles.some(r => ["Moderators"].includes(r.name))) return message.reply("You do not have the moderator role!")

    let member = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!member) return message.reply("This is an invalid user!")
    if (!member.bannable) return message.reply("I cant ban this member as it is higher than me!")
    let reason = args.slice(1).join(" ")

    await member.ban(reason).catch(error => {
        return message.reply("There was an error try agian!")
    })
    return message.channel.send(`${member.user.tag} was banned by ${message.author.tag}! Reason: ${reason}`)
}