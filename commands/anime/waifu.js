const Discord = require('discord.js');
const config = require('../../configs/config.json');
const superagent = require('superagent');


module.exports = {
    config: {
        name: 'waifu',
        description: 'Shows Random Waifu pictures',
        aliases: ["waifu"],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        try {
            superagent
              .get("https://nekos.life/api/v2/img/waifu")
              .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("Here's your Waifu")
                  .setDescription(message.author.toString())
                  .setImage(response.body.url)
                  .setColor(config.embedcolor)
              .setTimestamp()
                  .setFooter('© Spade ')
                message.channel.send(embed);
              })
              .catch(err =>
                message.channel.send({
                  embed: {
                    color: config.embedcolor,
                    description: "Something went wrong... :cry:"
                  }
                })
              );
            }catch(err){
              console.log(err)
            }
    }
}