module.exports = {
  name: "otorol",
  code: `
  $onlyPerms[admin;Bunun İçin Yetkin Yok]
  $argsCheck[>2;Kullanım !otorol @rol @log]
  $onlyIf[$message!=;Kullanım !otorol @rol @log]
  $setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
  Otorol Kanalı $channelName[$mentionedChannels[1]] Olarak
  Otorol Rolü İse $roleName[$mentionedRoles[1]] Olarak Ayarlanmıştır.
   `
}