const Discord = require("discord.js")

module.exports.command = {
    name: "setdelete",
    aliases: ["setd"],
    description: "Toggle if you want the users message to be deleted",
    category: "Owner",
    usage: "setdelete"
}

exports.run = async (bot, message, args) => {
    if (message.author.id !== message.guild.owner.id) return message.reply("Only guild owners can perform this command!")

    let toggle = bot.guildSettings.get(message.guild.id, "deletemessage")
    toggle = !toggle

    bot.guildSettings.set(message.guild.id, toggle, "deletemessage")

    return message.channel.send(`Delete message has been set to ${toggle}`)
}