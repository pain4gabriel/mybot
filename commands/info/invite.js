const Discord = require('discord.js');
const config = require('../../configs/config.json');


module.exports = {
    config: {
        name: 'invite',
        description: 'Link to invite me',
        aliases: [""],
        usage: '',
        accessableby: "",
    },
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**Spade Bot Project** \n\n**👋 Hey!\n Do you want Invite me? [Click Here](https://discord.com/api/oauth2/authorize?client_id=796675210073604099&permissions=8&scope=bot) to Invite me!\nThanks for supporting me.** ❤️"
    )
    .addField(
      "Support Link: ",
      `**[Click Here!](https://discord.gg/wNeT7PCreN)**`,
      true
    )
    .addField(
      "Vote Link:",
      `**[Click Here!]**`,
      true
    )
    .setTimestamp()
    .setFooter(
      "© Spade",
    )
    .setColor(config.embedcolor);
    message.channel.send(embed)
    }
}

