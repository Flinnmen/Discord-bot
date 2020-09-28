

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'hoi';

client.once('ready', () => {
    console.log('FlinnMen is Cool');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === ''){
        message.channel.send('https://tenor.com/view/lets-party-party-happy-birthday-gif-13408051');
    }
});

client.login(process.env.token);

