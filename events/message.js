const Discord = require("discord.js")
const bot = require("../index")

bot.on("message", async (message) => {
    if (message.author.bot) return;
    let prefix = bot.guildSettings.get(message.guild.id, "prefix")
    if (!message.content.startsWith(prefix)) return;

    if (bot.guildSettings.get(message.guild.id, "deletemessage")) message.delete()

    let args = message.content.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift().toLowerCase()

    let command;
    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd)
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd))
    } else return

    try {
        command.run(bot, message, args)
    } catch (err) {
        console.log(err)
    }
})