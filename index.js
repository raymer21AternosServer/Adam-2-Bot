const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new  Discord.Client({
  disableMentions: "everyone",
  partials: ["REACTION"]
});
let fs = require('fs');
const { prefix, token } = require('./config.json');

client.on('ready', () => {
  console.log(`Bot tag: ${client.user.tag}`);
  console.log(`Guilds: ${client.guilds.cache.size}`);
  client.user.setActivity(`Selling Poggeo bot to the dark web...`);
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('message', async message => {
  if (message.content.startsWith(`${prefix}`)) {
    let file_name = `${message.content.split(' ')[0].replace(prefix, '')}.js`;
    if(!fs.existsSync('./commands/' + file_name)) return undefined;
    if(fs.existsSync('./commands/' + file_name)) {
      client.commands.get(file_name.replace('.js', '')).execute(client, message);
    }
  }
});

client.on('message', async message => {
const args = message.content.split(' ').slice(1);
const user = message.mentions.users.first();



if(message.content.startsWith('!shutdown')){
  if(message.member.hasPermission('MANAGE_GUILD')){
    client.destroy();
  }
}



if(message.content.startsWith('!sus')){
  message.channel.send(`@${message.author.username}, has now been sus'afied`);
}


if(message.content.startsWith('!kick ')){
  if(!message.member.hasPermission("KICK_MEMBERS")) return;
  if (message.mentions.members.first()) {
        message.mentions.members.first.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked");
        }).catch(() => {
            message.channel.send("I do not have permissions to do this");
        });
      }
}
if (message.content.startsWith("!ban ")) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    if (message.mentions.members.first()) {
        message.mentions.members.first.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " has been successfully banned");
        }).catch(() => {
            message.channel.send("I do not have permissions to do this");
        });
    }
}



});




/*"I just talk really fast because i just know what i am saying --Wade#0001" add me on discord :) */
client.login(token);