const { prefix } = require('../config.json');
const discord = require('discord.js');

module.exports = {
    name: 'poggers',
    execute(client, message){
        async function poggers() {
            if(message.content === `${prefix}poggers`){
                message.channel.send(`My friend, ${message.author.tag} is very poggers 👆`);
            }
        }
        poggers()
    }
}