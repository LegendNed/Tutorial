const bot = require("../index.js")
const Discord = require("discord.js")
const fs = require("fs")

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()

module.exports.loadCommands = () => {
    fs.readdir("./commands", (err, files) => {
        if (err) return console.log(err)
        let file = files.filter(f => f.split('.').pop() === "js")

        file.forEach(f => {
            let prop = require(`../commands/${f}`)
            bot.commands.set(prop.command.name, prop)
            if (prop.command.aliases) {
                prop.command.aliases.forEach(a => {
                    bot.aliases.set(a, prop.command.name)
                })
            }
        })
    })
}

module.exports.loadEvents = () => {
    fs.readdir("./events", (err, files) => {
        if (err) return console.log(err)
        let file = files.filter(f => f.split('.').pop() === "js")

        file.forEach(f => {
            let prop = require(`../events/${f}`)
        })
    })
}