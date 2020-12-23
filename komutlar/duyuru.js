module.exports = {
  name:"duyuru",
  code:`
  $color[RANDOM]
  $author[$serverName[$guildID] Duyuru]
  $description[$thumbnail[$serverIcon]
  $message]
  $footer[$username#$discriminator Duyurdu !;$authorAvatar]
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $onlyIf[$message!=;Duyuru Atmak İçin Mesaj Gir <@$authorID>]
  `
}