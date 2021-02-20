const Discord = require("discord.js");
require("events").EventEmitter.defaultMaxListeners = 30000;
  require("events").defaultMaxListeners = 30000;
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
var Jimp = require('jimp');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};




client.on("ready.js", () => {//d
  client.user.setPresence({
    game: { name: ``, type: "WATCHING" },
    status: "online"
  });
});



// İSİM YAŞ İSİM DEĞİŞTİRME 

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  //
  member.setNickname(`${tag} İsim | Yaş`);
});

// İSİM YAİSİM DEĞİŞTİRME SON






//BOT ROLÜ

client.on(`guildMemberAdd`, async member => {//
  let botrol = ayarlar.botROL;
if(!member.bot) return;
member.roles.add(botrol)
})

// BOT ROLÜ SON




// kayıtsız rolü

client.on(`guildMemberAdd`, async member => {
  let kayıtsızROL = ayarlar.kayıtsızROL;
  let kytszROL = ayarlar.kytszROL;
if(member.bot) return;
member.roles.add(kayıtsızROL)
member.roles.add(kytszROL)
})

/// kayıtsız rolü son
//



//

// BOT OTOROL

client.on('guildMemberAdd', async member => {//d
if(member.user.bot) {
  const botROL = ayarlar.botROL
member.roles.add(botROL)
}
})
// GİRİŞ 
  
  client.on("guildMemberAdd", member => { 
    const moment = require('moment');
  const kanal = ayarlar.giriskanal;
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
    const tarih = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.MessageEmbed()
  let rol = ayarlar.kayıtsızROL
 member.roles.add(rol)//sps  var kontrol;
if (tarih < 1296000000) kontrol = '<a:gul:802863196502228993> **Hesap Durumu: Şüpheli**'
if (tarih > 1296000000) kontrol = '<a:gul:802863196502228993> **Hesap Durumu: Güvenli**'
  moment.locale("tr");
  let kanal1 = client.channels.cache.find(x => x.id === kanal);
  client.channels.cache.find(x => x.id === kanal).send(`<@&${ayarlar.yetkiliROL}>`)

client.channels.cache.find(x => x.id === kanal).send(`
<a:tag4:811725116308062268> **Merhaba ${member} † VİKİNGS AİLESİNE HOŞ GELDİN** <a:tag4:811725116308062268>

Hesabın **${moment(member.user.createdAt).format("YYYY DD MMMM dddd (hh:mm:ss)")}** tarihinde oluşturulmuş.

Sunucu kurallarımız <#802126801572724758> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza işlemlerin kuralları okuduğunu varsayarak gerçekleştirilecek.

Seninle beraber **${member.guild.memberCount}** kişi olduk ! Tagımızı alarak bizlere destek olabilirsin. Kayıt olmak için **† Gates of Hell** odalarına girip teyit vermen gerekiyor yetkililerimiz seninle ilgilenicektir! İyi Eğlenceler <a:gul:802863196502228993>
 
 

`)
    
  });
// GİRİŞ SON
//sex

client.login(process.env.token);

client.on("ready", () => {
  client.channels.cache.get("805107262254743572").join();
})

client.on('message', async message => {
if (message.content === '.fakekatıl') { // . yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".tag") 
    return message.channel.send(`†`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "tag") 
    return message.channel.send(`†`)
}); //sawnss •

client.on("message", msg => {
var dm = client.channels.cache.get("802126801320017943")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Gönderen", msg.author.tag)
.addField("Gönderen ID", msg.author.id)
.addField("Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});