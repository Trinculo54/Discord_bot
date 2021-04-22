const Discord = require('discord.js');
require('dotenv').config();
const pagination = require('discord.js-pagination');
const client = new Discord.Client({disableEveryone: true},{
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
    if(message.author.bot) return;
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
    if(msg.author.bot) return;
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
    if(msg.author.bot) return;
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

    const page5 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Support')
    .setDescription('If you have any Submit any sugesstions, errors, or questions')
    .addFields(
	    {name: 'Email me at', value: 'jameswporter16@gmail.com'}
    )
    
    const pages = [
        page1,
        page2,
        page3,
        page4,
        page5
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
    if (`${slap}` === "undefined") {
      if(message.author.bot) return;
      message.channel.send(`enter a valid user ${author}!`)
    } else {
    got('https://purrbot.site/api/img/sfw/hug/gif').then(response => {
        let content = JSON.parse(response.body);
        let gif = content.link;
        embed.setDescription(`${author} Hugged ${slap}`)
        embed.setImage(gif)
        embed.setColor('RANDOM')
        embed.setFooter(`Requested by ${message.author.tag}`)
        if(message.author.id === client.user.id) return;
        if(message.author.bot) return;
        message.channel.send(embed);
          })
      }
}});

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
      if(message.author.bot) return;
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
      if(message.author.bot) return;
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
      if(msg.author.bot) return;
      msg.channel.send(embed);
        })
    } else {
      if(message.author.bot) return;
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
      if(message.author.bot) return;
      msg.channel.send(embed);
        })
    } else {
      if(msg.author.bot) return;
    	msg.channel.send("cannot post here, This channel is not NSFW.");
    }
}});

client.on('message', (msg) => {
	if (msg.content === '?fuck') {
    if(msg.author.bot) return;
		msg.channel.send('UwU  Harder Daddy <:Pink_Phallic_Object:828719960724865034><:white_milk:831127005117677589>')
	}
});

client.on('message', (msg) => {
	if (msg.content === '?sad') {
    	if(msg.author.bot) return;
		const embed = new Discord.MessageEmbed()
		embed.setTitle(`Sadness`)
      		embed.setImage(`https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif`)
      		embed.setColor('RANDOM')
      		embed.setFooter(`Requested by ${message.author.tag}`)
      		if(message.author.bot) return;
      		message.channel.send(embed);
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
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Requested by ${message.author.tag}`)
      if(message.author.bot) return;
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
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Requested by ${message.author.tag}`)
      if(message.author.bot) return;
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
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Requested by ${message.author.tag}`)
      if(message.author.bot) return;
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
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Requested by ${message.author.tag}`)
      if(message.author.bot) return;
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
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} | Requested by ${message.author.tag}`)
      if(message.author.bot) return;
      message.channel.send(embed);
        })
    }
});

client.on('message', message => {
if (message.content.includes("?slap")) {
	var slap = message.mentions.members.first();
	var author = message.author.toString()
  const embed = new Discord.MessageEmbed()
  if (`${slap}` === "undefined") {
    if(message.author.bot) return;
    message.channel.send(`enter a valid user ${author}!`)
  } else {
  got('http://ram.gamearoo.top/api/slap').then(response => {
      let content = JSON.parse(response.body);
      let gif = content.url;
      let text = content.text;
      embed.setDescription(`${author} ${text} ${slap}`)
      embed.setImage(gif)
      embed.setColor('RANDOM')
      embed.setFooter(`Requested by ${message.author.tag}`)
      if(message.author.bot) return;
      message.channel.send(embed);
        })
    }
}});

client.on('message', message => {
  if (message.content.includes('?kiss')) {
    var slap = message.mentions.members.first();
    var author = message.author.toString()
    const embed = new Discord.MessageEmbed()
    if (`${slap}` === "undefined") {
      if(message.author.bot) return;
      message.channel.send(`enter a valid user ${author}!`)
    } else {
    got('https://purrbot.site/api/img/sfw/kiss/gif').then(response => {
        let content = JSON.parse(response.body);
        let gif = content.url;
        let text = content.text;
        embed.setDescription(`${author} Kissed ${slap}`)
        embed.setImage(gif)
        embed.setColor('RANDOM')
        embed.setFooter(`Requested by ${message.author.tag}`)
        if(message.author.bot) return;
        message.channel.send(embed);
          })
      }
}});

  client.on('message', message => {
    if (message.content.includes('?fuck --gay')) {
      if (message.channel.nsfw) {
      if(message.author.bot) return;
      var slap = message.mentions.members.first();
      var author = message.author.toString()
      var special_gifs = ["https://discord.trinculo54.online/API/gifs/DE213030-B0CF-4614-A244-238D41D23402.gif", "https://discord.trinculo54.online/API/gifs/BC47C96B-FDBA-45D9-BDEE-9A9D850AAD92.gif", "https://discord.trinculo54.online/API/gifs/95674E67-AB2E-4700-9D37-C441BDE72F8B.gif", "https://discord.trinculo54.online/API/gifs/7BE0E684-E39E-4CE2-8677-F1285B9B2F83.gif", "https://discord.trinculo54.online/API/gifs/31002B99-A096-41DF-897E-E158B8D69813.gif"]
      var randomGIF = special_gifs[Math.floor(Math.random() * special_gifs.length)];
      const embed = new Discord.MessageEmbed()
      if (`${slap}` === "undefined") {
        message.channel.send(`enter a valid user ${author}!`)
      } else {
      got('https://purrbot.site/api/img/nsfw/yaoi/gif').then(response => {
          let content = JSON.parse(response.body);
          let gif = content.link;
          embed.setDescription(`${author} Fucked ${slap}`)
          embed.setImage(randomGIF)
          embed.setColor('RANDOM')
          embed.setFooter(`Requested by ${message.author.tag}`)
          message.channel.send(embed);
            })
        }
  } else {
    if(message.author.bot) return;
    message.channel.send("cannot post here, This channel is not NSFW.");
  }
}});
