const Discord = require("discord.js")

module.exports.command = {
    name: "kick",
    aliases: [""],
    description: "Kick a user you have mentioned",
    category: "Moderation",
    usage: "kick @user Reason"
}

exports.run = async (bot, message, args) => {
    if (!message.member.roles.some(r => ["Moderators"].includes(r.name))) return message.reply("You do not have the moderator role!")

    let member = message.mentions.members.first() || message.guild.members.get(args[0])
    if (!member) return message.reply("This is an invalid user!")
    if (!member.kickable) return message.reply("I cant kick this member as it is higher than me!")
    let reason = args.slice(1).join(" ")

    await member.kick(reason).catch(error => {
        return message.reply("There was an error try agian!")
    })
    return message.channel.send(`${member.user.tag} was kicked by ${message.author.tag}! Reason: ${reason}`)
}