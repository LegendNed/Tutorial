const Discord = require("discord.js")

module.exports.command = {
    name: "ping",
    aliases: ["p"],
    description: "Shows the current bots ping",
    category: "Util",
    usage: "ping"
}

exports.run = async (bot, message, args) => {
    let botping = new Date() - message.createdAt
    let apiping = bot.ping

    return message.channel.send(`Bot ping: ${botping}ms\nApi ping: ${apiping}ms`)
}