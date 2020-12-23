module.exports = {
  name:"sayaç",
  code:`
  Sayaç Güncellendi :
  
  Kanal = \`\`$channelName[$mentionedChannels[1]]\`\` Olarak
  Hedef \`\`$noMentionMessage\`\` Olarak Ayarlanmıştır !
  
  $setServerVar[sayaç;$noMentionMessage]
  $setServerVar[sayaçlog;$mentionedChannels[1]]
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $onlyIf[$isNumber[$message[2]]!=false;Hedef Rakam Bir Numara Değil !]
  $onlyIf[$noMentionMessage>$membersCount;Üzgünüm Sunucudaki Toplam Kişiden Düşük Rakam Giremessin !]
  $onlyIf[$message[2]!=;Kullanım : !sayaç #log rakam]
  `
}