var dbd = require(`dbd.js`)
var fs = require('fs') 
var bot = new dbd.Bot({
  token:process.env.TOKEN,
  prefix: "tm?" 
})

bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    code: command.code
  })
} 

bot.variables({
  küfür:"kapalı",
  link:"kapalı",
  otorol:"",
  otorollog:"",
  sayaç:"",
  sayaçlog:"",
  banrol:"",
  banlog:"",
  saas:"kapalı",
  hgbb:"",
  ototag:""
})
bot.command({
  name:"eval",
  code:`
  $eval[$message]
  $onlyForIDs[662526937251577878;]`
})


//Küfür
bot.command({
    name:"amk",
    code: `
    $deletecommand
    Üzgünüm Küfür Engel Sistemi Açık !
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[küfür]!=kapalı;]
    
    `,
nonPrefixed: true
})
//Daha Fazla Eklemek İçin yukardaki kodu kopyalayarak amk yazısını değiştirin ! Adminlere Etki Etmez.

//Link
bot.command({
    name:"https",
    code: `
    $deletecommand
    Üzgünüm Link Engel Sistemi Açık !
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$getServerVar[link]!=kapalı;]
    
    `,
nonPrefixed: true
})
//Daha Fazla Eklemek İçin yukardaki kodu kopyalayarak https yazısını değiştirin ! Adminlere Etki Etmez.
bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otorol]]
        <@$authorID> Sunucumuza Hoşgeldin ! Otorol Başarıyla Verildi.
        `
})
bot.onJoined()
bot.joinCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
        $username#$discriminator Aramıza Katıldı !
        \`\`$getServerVar[sayaç]\`\` Kişi Olmamıza Son \`\`$sub[$membersCount;$getServerVar[sayaç]]\`\` Kaldı !
        Toplam \`\`$membersCount\`\` Kişiyiz !
        
        `
})
bot.onJoined()
//Sa-as sistemi
bot.command({
  name:"sa",
  code:`
  Aleyküm Selam <@$authorID> Hoşgeldin !
  $onlyIf[$getServerVar[saas]!=kapalı;]
  `,
  nonPrefixed: true
})

//Hoşgeldin
bot.joinCommand({
        channel: "$getServerVar[hgbb]", 
        code: `
        $color[1df509]
        $description[$thumbnail[$authorAvatar]
        $username#$discriminator Aramıza Katılmıştır !
       
        **Hesabın Kuruluş Tarihi**
        \`\`$creationDate[$authorID;time]\`\`
        
        Toplam = \`\`$membersCount\`\` Kişiyiz
        ]
        `
})
bot.onJoined()

//Oto-tag
bot.joinCommand({
        channel: "$channelID", 
        code: `
        $changeNickname[$authorID;$getServerVar[ototag] $username]
        `
})
bot.onJoined()
