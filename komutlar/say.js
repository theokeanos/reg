const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["802126801169022989"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "802126801140580352"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:802660277853487115>`,
'1': `<a:1_:802660212770340934>`,
'2': `<a:2_:802660277845622784>`,
'3': `<a:3_:802660276804911195>`,
'4': `<a:4_:802660270396014612>`,                       
'5': `<a:5_:802660278252208149>`,
'6': `<a:6_:802660270484357130>`,
'7': `<a:7_:802660254222516224>`,
'8': `<a:8_:802660279078092801>`,
'9': `<a:9_:802660270555660329>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:802660277853487115>`,
'1': `<a:1_:802660212770340934>`,
'2': `<a:2_:802660277845622784>`,
'3': `<a:3_:802660276804911195>`,
'4': `<a:4_:802660270396014612>`,                       
'5': `<a:5_:802660278252208149>`,
'6': `<a:6_:802660270484357130>`,
'7': `<a:7_:802660254222516224>`,
'8': `<a:8_:802660279078092801>`,
'9': `<a:9_:802660270555660329>`}[d];})}
  
  

var taglılar = 0;
let tag = "†";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:802660277853487115>`,
'1': `<a:1_:802660212770340934>`,
'2': `<a:2_:802660277845622784>`,
'3': `<a:3_:802660276804911195>`,
'4': `<a:4_:802660270396014612>`,                       
'5': `<a:5_:802660278252208149>`,
'6': `<a:6_:802660270484357130>`,
'7': `<a:7_:802660254222516224>`,
'8': `<a:8_:802660279078092801>`,
'9': `<a:9_:802660270555660329>`}[d];})}
  
  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:802660277853487115>`,
'1': `<a:1_:802660212770340934>`,
'2': `<a:2_:802660277845622784>`,
'3': `<a:3_:802660276804911195>`,
'4': `<a:4_:802660270396014612>`,                       
'5': `<a:5_:802660278252208149>`,
'6': `<a:6_:802660270484357130>`,
'7': `<a:7_:802660254222516224>`,
'8': `<a:8_:802660279078092801>`,
'9': `<a:9_:802660270555660329>`}[d];})}
  
  
  
  
  
var booster = message.guild.roles.cache.get("802629977240764456").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:0_:802660277853487115>`,
'1': `<a:1_:802660212770340934>`,
'2': `<a:2_:802660277845622784>`,
'3': `<a:3_:802660276804911195>`,
'4': `<a:4_:802660270396014612>`,                       
'5': `<a:5_:802660278252208149>`,
'6': `<a:6_:802660270484357130>`,
'7': `<a:7_:802660254222516224>`,
'8': `<a:8_:802660279078092801>`,
'9': `<a:9_:802660270555660329>`}[d];})}
  
  


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)
.setFooter('Okéanos 💖 Star') //SawN

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}