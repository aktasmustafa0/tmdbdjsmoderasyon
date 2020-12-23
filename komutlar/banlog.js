module.exports = {
  name:"banlog",
  code:`
Ban Log Ayarlanmıştır.
Ayarlanan Log Kanalı \`\`$channelName[$mentionedChannels[1]]\`\`
$setServerVar[banlog;$mentionedChannels[1]]
$onlyPerms[admin;Bunun İçin Yetkiniz Bulunmamaktadır !]
$suppressErrors[Etiketlenen Bir Kanal Değil !]
$onlyIf[$message!=;Ban-Log Ayarlamam İçin Bir Kanal Etiketlemelisin !]
`
}