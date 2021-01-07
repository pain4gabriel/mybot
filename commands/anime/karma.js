const Discord = require('discord.js');
const config = require('../../configs/config.json');
const fetch = require('node-fetch');
const emojis = require('../../configs/emotes.json');



module.exports = {
    config: {
        name: 'Spade',
        description: 'Drops Random Spade Pictures.',
        aliases: ["Spade"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
       
        let res = await fetch('https://api.deltaa.tk/karma')
        let data = await res.json()

    let gifembed = new Discord.MessageEmbed()
        .setTitle("Random Spade Picture or Gif")
        .setColor(config.embedcolor)
        .setDescription(`[Full View](${data.url})`)
        .setFooter(`© Spade`, message.author.avatarURL())
        .setImage(data.url);
    message.channel.send(gifembed);
    }
}

