module.exports = {
  name:"ban",
  code:`
  $suppressErrors[Banlayamadım Çünkü Rolüm Kişinin Altındadır !]
  $ban[$mentioned[1]]
  $useChannel[$getServerVar[banlog]]
  $color[RANDOM]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Sunucudan Birisi Yasaklandı !
  
  Yasaklanan Kişi = $username[$mentioned[1]]#$discriminator[$mentioned[1]] | $mentioned[1]
  Yasaklanma Sebebi = $noMentionMessage
  
  Yasaklayan Kişi = $username#$discriminator | $authorID
  ]
  $footer[$username#$discriminator;$authorAvatar]
  $addTimestamp
  $channelSendMessage[$channelID;$username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisi Sunucudan Yasaklanmıştır.]
  $onlyForRoles[$getServerVar[banrol];Bunun İçin \`\`$getServerVar[banrol]\`\` Rolün Olmalıdır !]
  $onlyIf[$message!=;Banlamam İçin Birini Etiketle !]
  $onlyIf[$getServerVar[banlog]!=;Ban-log Ayarlı Değil]
  $onlyIf[$getServerVar[banrol]!=;Ban-Rol Ayarlı Değil]
  `
}