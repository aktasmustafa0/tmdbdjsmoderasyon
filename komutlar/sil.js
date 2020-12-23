module.exports = {
  name:"sil",
  code:`
  \`\`$message\`\` Kadar Mesaj Sildim !
  $clear[$noMentionMessage]
  $suppressErrors[14 Gün Altı Mesajları Silmeme Discord APİ izin Vermemektedir !]
  $onlyIf[$message>0;0'dan Düşük Mesaj Silemem]
  $onlyIf[$message<=100;100'den Fazla Mesaj Silemem]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;Bunun İçin Mesajları Yönet Yetkisi Gerekiyor !]
  `
}