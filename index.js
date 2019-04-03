const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true })
const config = require("./config.json")

bot.on("ready", () =>{
    console.log("Bot is online!")
    bot.user.setActivity("Dustie development")
})

bot.on("message", async (message) => {
    if (message.author.bot) return;
    let prefix = config.prefix
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/)
    let cmd = args.shift().toLowerCase()

    if (cmd === "ping") {
        let botping = new Date() - message.createdAt
        let apiping = bot.ping

        return message.channel.send(`Bot ping: ${botping}ms\nApi ping: ${apiping}ms`)
    }
    else if (cmd === "kick") {
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
    else if (cmd === "ban") {
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
})


bot.login(config.token)