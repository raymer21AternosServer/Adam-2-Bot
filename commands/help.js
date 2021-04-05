const discord = require('discord.js');
const prefix = require('../config.json');

module.exports = {
    name: "help",
    execute(client, message) {
        async function help() {
            if(message.content == `${prefix}help`){
                message.channel.send('The commands are ```1: >giveaway 2: >shutdown 3: >sus 4: >poggers```  ');
            }
        }
        help();
    }

}