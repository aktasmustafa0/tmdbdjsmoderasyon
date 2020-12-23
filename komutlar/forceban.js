module.exports = {
  name:"forceban",
  code:`
  $suppressErrors[U-ps Böyle Bir ID'li Kullanıcı Bulamadım ?]
  $ban[$message]
  $useChannel[$getServerVar[banlog]]
  $color[RANDOM]
  $description[$thumbnail[$userAvatar[$message]
  Sunucudan Birisi FORCE-ID İLE Yasaklandı !
  
  Yasaklanan Kişi = $username[$message]#$discriminator[$message] | $message
  Yasaklanma Sebebi = $noMentionMessage
  
  Yasaklayan Kişi = $username#$discriminator | $authorID
  ]
  $footer[$username#$discriminator;$authorAvatar]
  $addTimestamp
  $channelSendMessage[$channelID;$username[$message]#$discriminator[$message] Kişisi Sunucudan Yasaklanmıştır.]
  $onlyForRoles[$getServerVar[banrol];Bunun İçin \`\`$getServerVar[banrol]\`\` Rolün Olmalıdır !]
  $onlyIf[$message!=;Banlamam İçin Birini Etiketle !]
  $onlyIf[$getServerVar[banlog]!=;Ban-log Ayarlı Değil]
  $onlyIf[$getServerVar[banrol]!=;Ban-Rol Ayarlı Değil]
  `
}