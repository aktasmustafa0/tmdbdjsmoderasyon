module.exports = {
  name:"ototag",
  code:`
  Oto-Tag Ayarlandı
  Artık Sunucuya Girenlere \`\`$message $username\`\` Yapacağım !
  $setServerVar[ototag;$message]
  $onlyIf[$message!=;Oto-Tag Sistemi İçin Bir Sembol Felan Gir !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkin Yok !]
  `
}