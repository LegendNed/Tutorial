const Discord = require("discord.js")

module.exports.command = {
    name: "setprefix",
    aliases: ["setp"],
    description: "Set the guilds prefix.",
    category: "Owner",
    usage: "setprefix (prefix)"
}

exports.run = async (bot, message, args) => {
    if (message.author.id !== message.guild.owner.id) return message.reply("Only guild owners can perform this command!")

    let prefix = args.join(" ")
    if (!prefix) return message.reply("Please define a prefix!")

    bot.guildSettings.set(message.guild.id, prefix, "prefix")

    return message.channel.send(`New prefix is set to ${prefix}`)
}