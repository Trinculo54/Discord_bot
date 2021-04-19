const Discord = require('discord.js');
require('dotenv').config();
const pagination = require('discord.js-pagination');
const client = new Discord.Client({
 presence: {
  status: 'online',
  activity: {
   name: '?help',
   type: 'PLAYING',
  },
 },
});
const got = require('got');

const prefix = '?';

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.includes("?joke")) {
    const embed = new Discord.MessageEmbed()
    got('https://v2.jokeapi.dev/joke/Miscellaneous,Dark?blacklistFlags=nsfw,sexist&type=single').then(response => {
        let content = JSON.parse(response.body);
        let text = content.joke;
        let joke = content.category;
        embed.setTitle(`This is a ${joke} Joke`)
        embed.setColor('RANDOM')
        embed.setDescription(`${text}`)
        embed.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
          })
      }
  });

client.on('message', (msg) => {
	if (msg.content === '?wench') {
		const WenchEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Silence Wench')
	.setImage('https://media1.tenor.com/images/8df4213b6be62920e1c943ada41dd014/tenor.gif')
	.setFooter(`Requested by ${msg.author.tag}`);
		msg.channel.send(WenchEmbed)
	}
})

client.on('message', (msg) => {
	if (msg.content === '?help') {
	const page1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('General Use')
    .setDescription('These are the commands for general use')
    .addFields(
    	{name: '?joke', value: 'Random Dark or misc Joke'},
    	{name: '?meme', value: 'Get a random meme from the interwebs'},
    	{name: '?wench', value: 'Silence Wench, I wish to be happy'}
    )

    const page2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Cute commands')
    .setDescription('These are the for cute animals')
    .addFields(
    	{name: '?dragon', value: 'Get a cute photo of a Bearded Dragon!'},
    	{name: '?woof', value: 'Get a cute photo of a Doggo!'},
    	{name: '?meow', value: 'Get a cute photo of a Cat!'},
    	{name: '?aww', value: 'get a cute picture of an animal!'}
    )

    const page3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('NSFW Commands')
    .setDescription('these are the commands for NSFW')
    .addFields(
    	{name: '?nsfw', value: 'sends a lewd photo of a woman'},
    	{name: '?nsfw --gay', value: 'sends a lewd photo of a man'},
    	{name: '?fuck', value: 'special command UwU'}
    )

	const page4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Affection Commands')
    .setDescription('these are the commands for affectionate users')
    .addFields(
      {name: '?hug', value: 'Hug a user <@user>'},
      {name: '?kiss', value: 'kiss a specified user <@user>'},
      {name: '?slap', value: 'Slap a specified user <@user>'},
      {name: '?gn', value: 'get a good night from our bot!'},
    	{name: '?gm', value: 'Get a good Morning from our bot!'}
    )

    const pages = [
        page1,
        page2,
        page3,
        page4
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '10000'

    pagination(msg, pages, emoji, timeout)
	}
});

client.on('message', message => {
  if (message.content.includes("?hug")) {
    var slap = message.mentions.members.first();
    var author = message.author.toString()
    const embed = new Discord.MessageEmbed()
    got('https://purrbot.site/api/img/sfw/hug/gif').then(response => {
        let content = JSON.parse(response.body);
        let gif = content.link;
        embed.setDescription(`${author} Hugged ${slap}`)
        embed.setImage(gif)
        embed.setColor('RANDOM')
        embed.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
          })
      }
  });

client.on('message', message => {
if (message.content === "?gn") {
  const embed = new Discord.MessageEmbed()
  got('http://ram.gamearoo.top/api/gn').then(response => {
      let content = JSON.parse(response.body);
      let gif = content.url;
      let text = content.text;
      embed.setTitle(`Good Night ${message.author.tag}`)
      embed.setDescription(text)
      embed.setImage(gif)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
if (message.content === "?gm") {
  const embed = new Discord.MessageEmbed()
  got('http://ram.gamearoo.top/api/gm').then(response => {
      let content = JSON.parse(response.body);
      let gif = content.url;
      let text = content.text;
      embed.setTitle(`Good Morning ${message.author.tag}!`)
      embed.setDescription(text)
      embed.setImage(gif)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});


//Normal M&F Porn
client.on('message', (msg) => {
  if (msg.content === '?nsfw') {
if (msg.channel.nsfw) {
const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/pornpics/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let nsfwImage = content[0].data.children[0].data.url;
      let nsfwTitle = content[0].data.children[0].data.title;
      embed.setTitle(`${nsfwTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(nsfwImage)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${msg.author.tag}`)
      msg.channel.send(embed);
        })
    } else {
    	msg.channel.send("cannot post here, This channel is not NSFW.");
    }
}});

// Gay Porn Code
client.on('message', (msg) => {
  if (msg.content === '?nsfw --gay') {
if (msg.channel.nsfw) {
const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/gayporn/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let nsfwImage = content[0].data.children[0].data.url;
      let nsfwTitle = content[0].data.children[0].data.title;
      embed.setTitle(`${nsfwTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(nsfwImage)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${msg.author.tag}`)
      msg.channel.send(embed);
        })
    } else {
    	msg.channel.send("cannot post here, This channel is not NSFW.");
    }
}});

client.on('message', (msg) => {
	if (msg.content === '?fuck') {
		msg.channel.send('UwU  Harder Daddy <:Pink_Phallic_Object:828719960724865034><:white_milk:831127005117677589>')
	}
});

client.on('message', message => {
if (message.content === "?meme") {
  const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/memes/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
  if (message.content.includes("?woof")) {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/rarepuppers/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`🐶 ${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Requested by ${message.author.tag}`)
      message.channel.send(embed);
          })
      }
  });

client.on('message', message => {
if (message.content === "?meow") {
  const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/cats/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`🐱 ${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
if (message.content === "?dragon") {
  const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/BeardedDragons/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`🐉 ${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
if (message.content === "?aww") {
  const embed = new Discord.MessageEmbed()
  got('https://www.reddit.com/r/aww/random/.json').then(response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`❤️ ${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('RANDOM')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments} Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
if (message.content.includes("?slap")) {
	var slap = message.mentions.members.first();
	var author = message.author.toString()
  const embed = new Discord.MessageEmbed()
  got('http://ram.gamearoo.top/api/slap').then(response => {
      let content = JSON.parse(response.body);
      let gif = content.url;
      let text = content.text;
      embed.setDescription(`${author} ${text} ${slap}`)
      embed.setImage(gif)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${message.author.tag}`)
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
  if (message.content.includes('?kiss')) {
    var slap = message.mentions.members.first();
    var author = message.author.toString()
    const embed = new Discord.MessageEmbed()
    got('http://ram.gamearoo.top/api/kiss').then(response => {
        let content = JSON.parse(response.body);
        let gif = content.url;
        let text = content.text;
        embed.setDescription(`${author} Kissed ${slap}`)
        embed.setImage(gif)
        embed.setColor('RANDOM')
        embed.setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
          })
      }
  });
