module.exports = {
  name:"hg-bb-ayarla",
  code:`
  Hoşgeldin-Baybay Kanalı Ayarlanmıştır !
  
  Güncel Kanal = \`\`$channelName[$mentionedChannels[1]]\`\`
  $setServerVar[hgbb;$mentionedChannels[1]]
  $suppressErrors[Bir Kanal Etiketlemedin !]
  $onlyIf[$message!=;Bir Kanal Etiketlemelisin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunu Sadece \`\`Yönetici\`\` Yetkisi Olanlar Kullanabilir !]
  `
}