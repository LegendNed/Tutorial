const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true })
const config = require("./config.json")
module.exports = bot

const { loadCommands, loadEvents } = require("./util/handler")
loadCommands()
loadEvents()

const Enmap = require('enmap')
bot.guildSettings = new Enmap({ name: "settings" })

bot.login(config.token)