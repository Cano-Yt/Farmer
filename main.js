const discord = require("discord.js-selfbot")
const client = new discord.Client()

// Alttakinleri ayarlamazsanız bot çalışmaz.

const prefix = "?" // prefixi değiştirmesenizde olur.
const author = "komutları kullanacak kişi Id'si"// komutları kullanacak kişi.
const bildirim = "Kapanmaya yakın mesaj atıcak kişi Id'si" // Kapanmaya yakın mesaj atıcak kişi
const kanal = "Mesajları atıcak kanal Id'si" // Mesajları atıcak kanal.

client.login(" User Token ") // Hesap tokeni girmelisiniz.

// Ayarlar son

client.on("ready", () => {
console.log(`Client "${client.user.username}"" Adıyla aktif oldu.`)
console.log(" ");console.log(" ");console.log(" ");
console.log(`${prefix}başlat @bot \nVeya\n${prefix}başlat hepsi\n\nYazarsanız client kasmaya başlar`)
})



// owo botu captcha atarsa client'i kapatma.
client.on("message", async message => {
	if(message.author.id === "408785106942164992" && message.content.includes("Please complete your captcha to verify that you are human!") && message.channel.id === kanal) {
console.log("Owo botundan doğrulama geldiği için bot kapatılıyor.")
client.users.cache.get(bildirim).send("Owo Botundan doğrulama geldi\n\n"+ message.content).catch(err => process.exit())
setTimeout(() => process.exit(), 2000)
}
})
// Idle miner captcha atarsa client'i kapatma.
client.on("message", async message => {
	if(message.author.id === "518759221098053634" && message.content.includes("I've sent you a DM with a verification code, reply to my DM before continuing.") && message.channel.id === kanal) {
console.log("Idle miner botundan doğrulama geldiği için bot kapatılıyor.")
client.users.cache.get(bildirim).send("Idle miner Botundan doğrulama geldi\n\n"+ message.content).catch(err => process.exit())
setTimeout(() => process.exit(), 2000)
}
})
// Miner botunda kazma kırılırsa tamir ettirme
client.on("message", message => {
if(message.author.id === "520282851925688321" && message.content.includes("Kazman kırıldı!") && message.channel.id === kanal) {
message.channel.send("m!repair")
}
})
// Başlatma komutları
client.on("message", message => {
if(message.author.id !== author || !message.content.toLowerCase().startsWith(prefix + "başlat")) return;
let args = message.content.split(" ").slice(1);
let etiket = message.mentions.members.first()
const mesajkanal = message.guild.channels.cache.get(kanal)
if(!args[0]) return message.channel.send("Kasmak istediğiniz botu etiketleyiniz veya 'hepsi' olarak belirtiniz.")
if(args[0].toLowerCase() === "hepsi") {
  	message.channel.send("Bütün botlarda kasma işlemi başladı.\nOwo | Cortex | Mining Simulator | Idle Miner")
  	setInterval(() => mesajkanal.send(";sell"), 5000)
  	setInterval(() => mesajkanal.send("m!mine"), 5000)
    setInterval(() => mesajkanal.send("m!sell all"), 7000)
    setInterval(() => mesajkanal.send("!!bahis 50000"), 3000)
    setInterval(() => mesajkanal.send("!!rainbow"), 3000)
    setInterval(() => mesajkanal.send(`owo hunt`), 21000)
    setInterval(() => mesajkanal.send(`owo battle`), 16000)
    return;
  }
   if(!etiket) return message.channel.send("Kasmak istediğiniz botu etiketleyiniz veya 'hepsi' olarak belirtiniz.")
   if(etiket.id === "408785106942164992") {
	message.channel.send("Owo Botunda kasma işemi başladı.")
	setInterval(() => mesajkanal.send(`owo hunt`), 21000)
    setInterval(() => mesajkanal.send(`owo battle`), 16000)
  }else if(etiket.id === "602585371489861634") {
   message.channel.send("Cortex Botunda kasma işemi başladı.")
   setInterval(() => mesajkanal.send("!!bahis 50000"), 3000)
   setInterval(() => mesajkanal.send("!!rainbow"), 3000)
  }else if(etiket.id === "520282851925688321") {
   message.channel.send("Mining Simulator Botunda kasma işlemi başladı.")
   setInterval(() => mesajkanal.send("m!mine"), 5000)
   setInterval(() => mesajkanal.send("m!sell all"), 7000)
  }else if(etiket.id === "518759221098053634") {
  	message.channel.send("Idle Miner Botunda kasma işlemi başladı")
    setInterval(() => mesajkanal.send(";sell"), 5000)
  }
})
