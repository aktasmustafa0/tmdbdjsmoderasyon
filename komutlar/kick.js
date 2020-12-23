module.exports = {
  name:"kick",
  code:`
  $suppressErrors[Atamadım Çünkü Rolüm Kişinin Altındadır !]
  $kick[$mentioned[1]]
  $useChannel[$getServerVar[banlog]]
  $color[RANDOM]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Sunucudan Birisi Atıldı !
  
  Atılan Kişi = $username[$mentioned[1]]#$discriminator[$mentioned[1]] | $mentioned[1]
  Atılma Sebebi = $noMentionMessage
  
  Atan Kişi = $username#$discriminator | $authorID
  ]
  $footer[$username#$discriminator;$authorAvatar]
  $addTimestamp
  $channelSendMessage[$channelID;$username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisi Sunucudan Atılmıştır.]
  $onlyForRoles[$getServerVar[banrol];Bunun İçin \`\`$getServerVar[banrol]\`\` Rolün Olmalıdır !]
  $onlyIf[$message!=;Atmam İçin Birini Etiketle !]
  $onlyIf[$getServerVar[banlog]!=;Ban-log Ayarlı Değil]
  $onlyIf[$getServerVar[banrol]!=;Ban-Rol Ayarlı Değil]
  `
}